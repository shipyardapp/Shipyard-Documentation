---
id: snowflake
title: Snowflake Blueprints
hide_title: true
sidebar_label: Snowflake
description: Information about the Blueprint Library connections with Snowflake.
keywords:
  - snowflake
  - database
  - template
  - blueprint
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Snowflake Blueprints

## Authorization

### Overview
Connecting Snowflake to Shipyard requires you to have:
1. A Snowflake account with read/write access to the database and all associated tables/views you wish to access. We recommend setting up an account specifically for Shipyard access.
2. A warehouse that the account has access to. We recommend setting up a warehouse specifically for Shipyard queries.
3. Shipyard IP Addresses whitelisted


### Creating a Snowflake Role and User for Shipyard
This guide will walk you through the process required to create a unique role and user account for Shipyard to access your Snowflake Database.

:::caution
You can always use your own credentials, but this gives you less control over security logging and data access.
:::

1. Log into your Snowflake Account.
2. Open a new worksheet. Select the checkbox to run "All Queries".
3. Paste the following script in the worksheet, changing the variables at the top as needed.

```sql
BEGIN;
 
   -- create variables for role, user, and password (values must be in ALL_CAPS)
   SET ROLE_NAME = 'SHIPYARD_ROLE';
   SET USER_NAME = 'SHIPYARD_USER';
   SET USER_PASSWORD = 'randompassword789';

   -- change role to securityadmin for set role and user
   USE ROLE securityadmin;
 
   -- create role for shipyard
   CREATE ROLE IF NOT EXISTS identifier($role_name);
   GRANT ROLE identifier($role_name) TO ROLE SYSADMIN;
 
   -- create a user for shipyard
   CREATE USER IF NOT EXISTS identifier($user_name)
   PASSWORD = $user_password
   DEFAULT_ROLE = $role_name;
   
   GRANT ROLE identifier($role_name) TO USER identifier($user_name);
 
 COMMIT;
```

### Giving the Shipyard Role Warehouse Access
This guide will walk you through the process required to either create a unique warehouse for Shipyard to run queries against your Snowflake Database, or give the newly created Shipyard Role access to an existing warehouse.

<Tabs
defaultValue="new"
values={[
{label: 'Creating a New Warehouse', value: 'new'},
{label: 'Giving Access to an Existing Warehouse', value: 'existing'},
]}>
<TabItem value="new">


1. Log into your Snowflake Account.
2. Open a new worksheet. Select the checkbox to run "All Queries".
3. Paste the following script in the worksheet, changing the variables at the top as needed.
```sql
begin;

 -- create variables for user / password / role / warehouse / database (needs to be uppercase for objects)
   set role_name = 'SHIPYARD_ROLE';
   set user_name = 'SHIPYARD_USER';
   set warehouse_name = 'SHIPYARD_WAREHOUSE';

 -- change role to sysadmin for warehouse steps
   use role sysadmin;

-- create a warehouse for shipyard. Remove this if you would like to use an existing warehouse
   create warehouse if not exists identifier($warehouse_name)
   warehouse_size = xsmall
   warehouse_type = standard
   auto_suspend = 60
   auto_resume = true
   initially_suspended = true;

-- grant shipyard role access to warehouse
   grant USAGE
   on warehouse identifier($warehouse_name)
   to role identifier($role_name);

 -- change role to securityadmin for user updates
   use role securityadmin;
   
-- set default warehouse for shipyard user
   ALTER USER IF EXISTS identifier($user_name)
   SET DEFAULT_WAREHOUSE = $warehouse_name;

commit;
```
4. Click Run.

</TabItem>
<TabItem value="existing">

:::caution
Using an existing Warehouse may result in Shipyard processes contendending for resources.
:::
1. Log into your Snowflake Account.
2. Open a new worksheet. Select the checkbox to run "All Queries".
3. Paste the following script in the worksheet, changing the variables at the top as needed.
```sql
begin;

 -- create variables for role, user, and warehouse (values must be in ALL_CAPS)
   set role_name = 'SHIPYARD_ROLE';
   set user_name = 'SHIPYARD_USER';
   set warehouse_name = 'SHIPYARD_WAREHOUSE';

 -- change role to sysadmin for warehouse steps
   use role sysadmin;

-- grant shipyard role access to warehouse
   grant USAGE
   on warehouse identifier($warehouse_name)
   to role identifier($role_name);

 -- change role to securityadmin for user updates
   use role securityadmin;
   
-- set default warehouse for shipyard user
   ALTER USER IF EXISTS identifier($user_name)
   SET DEFAULT_WAREHOUSE = $warehouse_name;

commit;
```

4. Click Run.


</TabItem>
</Tabs>

### Giving Snowflake Database Access to Shipyard User
This guide will walk you through the process required to give database access to a Shipyard account so you can run queries against it.

1. Log into your Snowflake Account.
2. Open a new worksheet.
3. Paste the following script in the worksheet, changing the variables at the top as needed. This script will grant all privledges to all the current and future tables/views that exist within the specified database. 

```sql
begin;

 -- create variables for role and database (values must be in ALL_CAPS)
   set role_name = 'SHIPYARD_ROLE';
   set database_name = 'DEMO_DB';

-- grant shipyard access to database
   grant ALL
   on database identifier($database_name)
   to role identifier($role_name);

   grant all
   on all tables
   in database identifier($database_name)
   to role identifier($role_name);
   
   grant all
   on all views
   in database identifier($database_name)
   to role identifier($role_name);
   
   grant all
   on future tables
   in database identifier($database_name)
   to role identifier($role_name);
   
   grant all
   on future views
   in database identifier($database_name)
   to role identifier($role_name);
   
commit;
```

:::note
You can adjust this script as needed if you want Shipyard to have stricter access to your database.
:::

### Whitelisting Shipyard IP Addresses


<Tabs
defaultValue="new"
values={[
{label: 'Creating a New Network Policy', value: 'new'},
{label: 'Updating an Existing Network Policy', value: 'existing'},
]}>
<TabItem value="new">

1. Log into your Snowflake Account.
2. Open a new worksheet.
3. Paste the following script in the worksheet

```sql
CREATE NETWORK POLICY SHIPYARD_ACCESS
ALLOWED_IP_LIST = ('54.190.66.63', '52.42.73.100', '44.231.239.186', '44.225.245.149');
```
4. Click Run

</TabItem>

<TabItem value="existing">

1. Log into your Snowflake Account.
2. Open a new worksheet.
3. Paste the following script in the worksheet, updating <code>{policy_name}</code> with the correct value.

```sql
ALTER NETWORK POLICY {policy_name}
SET ALLOWED_IP_LIST = ('54.190.66.63', '52.42.73.100', '44.231.239.186', '44.225.245.149');
```
4. Click Run

</TabItem>
</Tabs>

## Execute Query Blueprint

### Overview

Execute a query against Snowflake, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like  multi-step SQL jobs, or DML statements.

This Blueprint is limited to executing a single query. You cannot run multiple queries separated by `;` (this is prohibited by the Snowflake Python connector). Instead, you'll have to set up multiple Vessels with this Blueprint to run one after the other.


### Variables
| Variable Name     | Description                                                                                                                                                        |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Username**    | The Snowflake Username that has access to the table/schema/warehouse that you want to execute a query against.                     |
| **Password**        | The password associated with your Username.|
| **Account Name** | Typically found in the URL you use to access Snowflake, before `.snowflakecomputing.com`. If your URL was `xy12345.snowflakecomputing.com` your Account Name would be `xy12345`. For more information, read the (Snowflake Documentation)[https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-account-name-in-your-org]               |
| **Warehouse** |The name of the Warehouse you want your query to run in. If left blank, will use the default Warehouse associated with the Username.|
|**Database**|The name of the Database that you want to run a query against.|
|**Schema**|The name of the Schema you want to run a query against. If left blank, it's expected that your query will include the schema in it.|
|**Query**|The contents of the SQL query that you want to run. Does not support running multiple queries separated by `;`|

## Store Query Results as CSV Blueprint

Turn the results of your SQL SELECT statement into a CSV file. Extract your Snowflake data into files for easier delivery to clients and partners.

### Overview

### Variables

| Variable Name     | Description                                                                                                                                                        |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Username**    | The Snowflake Username that has access to the table/schema/warehouse that you want to execute a query against.                     |
| **Password**        | The password associated with your Username.|
| **Account Name** | Typically found in the URL you use to access Snowflake, before `.snowflakecomputing.com`. If your URL was `xy12345.snowflakecomputing.com` your Account Name would be `xy12345`. For more information, read the (Snowflake Documentation)[https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-account-name-in-your-org]               |
| **Warehouse** |The name of the Warehouse you want your query to run in. If left blank, will use the default Warehouse associated with the Username.|
|**Database**|The name of the Database that you want to run a query against.|
|**Schema**|The name of the Schema you want to run a query against. If left blank, it's expected that your query will include the schema in it.|
|**Query**|A SQL query with a SELECT statement that returns data. |
|**Local File Name**|The file name that you want your generated CSV to have.|
|**Local Folder Name**|The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory.|
|**Include Column Names as Header?**|If checked, your CSV file will include a header row with column names.|

## Upload CSV to Table Blueprint

### Overview
Upload one or more CSV files to any table in Snowflake. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements. For larger datasets, we recommend building an "Execute Query"

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.

### Variables

| Variable Name     | Description                                                                                                                                                        |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Username**    | The Snowflake Username that has access to the table/schema/warehouse that you want to execute a query against.                     |
| **Password**        | The password associated with your Username.|
| **Account Name** | Typically found in the URL you use to access Snowflake, before `.snowflakecomputing.com`. If your URL was `xy12345.snowflakecomputing.com` your Account Name would be `xy12345`. For more information, read the (Snowflake Documentation)[https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-account-name-in-your-org]               |
| **Warehouse** |The name of the Warehouse you want your data upload to run in. If left blank, will use the default Warehouse associated with the Username.|
|**Database**|The name of the Database that you want to upload your data to.|
|**Schema**|The name of the Schema you want to upload data to. If left blank, it's expected that your table name will include the schema in it.|
|**Folder Name**|The folder structure where your CSV file lives. If left blank, it will look for a file in the home directory.|
|**File Name Match Type**|Determines if the text in "File Name" will match exactly to a single file, or use regex to match to multiple files.|
|**File Name**|The file name that contains the data you want uploaded.|
|**Table Name**|Name of the table where you want data inserted. If the table doesn't already exist, it will be created.|
|**Insertion Method**|Determines how the data in your file will be added to the table.|

## Troubleshooting and Debugging

### Multiple SQL Statements
`snowflake.connector.errors.ProgrammingError: 000006 (0A000): Multiple SQL statements in a single API call are not supported; use one API call per statement instead.`

If your Vessel runs into this issue, you were likely trying to run a SQL query with multiple statements separated by `;`. This is not supported by the Snowflake Python connector that our Blueprint uses.

To solve this issue, split out the queries you're trying to run into multiple Vessels.

## Helpful Links

[Snowflake Python Connector Documentation](https://docs.snowflake.com/en/user-guide/python-connector.html) [SQLAlchemy Documentation](https://docs.sqlalchemy.org/en/13/) [Pandas to_sql Method](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html)
