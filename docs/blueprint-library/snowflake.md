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

# Snowflake Blueprints

:::caution
This section is a work in progress and may be missing key details. If you need help using Snowflake Blueprints, reach out to support@shipyardapp.com
:::

## Authorization

### Overview
Connecting Snowflake to Shipyard requires you to have:
1. A Snowflake account with read/write access to the data you wish to access. We recommend setting up an account specifically for Shipyard access.
2. A warehouse to . We recommend setting up a warehouse specifically for Shipyard queries.
3. Shipyard IP Addresses whitelisted
4. 

### Creating a Snowflake Account for Shipyard
This guide will walk you through the process required to create a unique account for Shipyard to access your Snowflake Database.

:::note
You can always use your own credentials, but this gives you less control over security logging and data access.
:::

1. Log into your Snowflake Account.
2. Open a new worksheet. Select the checkbox to run "All Queries".
3. Paste the following script in the worksheet, changing the variables at the top as needed.

```
begin;
 
   -- create variables for user / password / role / warehouse / database (needs to be uppercase for objects)
   set role_name = 'SHIPYARD_ROLE';
   set user_name = 'SHIPYARD_USER';
   set user_password = 'randompassword789';
   set warehouse_name = 'SHIPYARD_WAREHOUSE';
   set database_name = 'SHIPYARD_DATABASE';

   -- change role to securityadmin for user / role steps
   use role securityadmin;
 
   -- create role for shipyard
   create role if not exists identifier($role_name);
   grant role identifier($role_name) to role SYSADMIN;
 
   -- create a user for shipyard
   create user if not exists identifier($user_name)
   password = $user_password
   default_role = $role_name
 
   grant role identifier($role_name) to user identifier($user_name);
 
   -- change role to sysadmin for database steps
   use role sysadmin;
 
   -- grant shipyard access to database
   grant ALL
   on database identifier($database_name)
   to role identifier($role_name);
 
 commit; 
```

### Creating a Snowflake Warehouse for Shipyard
This guide will walk you through the process required to create a unique warehouse for Shipyard to run queries against your Snowflake Database.

:::note
You can always use an existing warehouse, but this may result in Shipyard contendending for resources.
:::
1. Log into your Snowflake Account.
2. Open a new worksheet.
3. Paste the following script in the worksheet, changing the variables at the top as needed.
```
begin;

 -- create variables for user / password / role / warehouse / database (needs to be uppercase for objects)
   set role_name = 'SHIPYARD_ROLE';
   set user_name = 'SHIPYARD_USER';
   set user_password = 'randompassword789';
   set warehouse_name = 'SHIPYARD_WAREHOUSE';
   set database_name = 'SHIPYARD_DATABASE';

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

-- set default warehouse for shipyard user
   ALTER USER IF EXISTS identifier($user_name)
   default_warehouse = $warehouse_name;


## Execute Query Blueprint

### Overview

### Variables

### Screenshots

## Store Query Results as CSV Blueprint

### Overview

### Variables

### Screenshots

## Upload CSV to Table Blueprint

### Overview

### Variables

### Screenshots

## Helpful Links

[Snowflake Python Connector Documentation](https://docs.snowflake.com/en/user-guide/python-connector.html) [SQLAlchemy Documentation](https://docs.sqlalchemy.org/en/13/) [Pandas to_sql Method](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html)
