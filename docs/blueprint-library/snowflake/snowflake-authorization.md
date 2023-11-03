---
id: snowflake-authorization
sidebar_position: 1
title: Snowflake Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Snowflake to work with Shipyard's low-code Snowflake templates.
keywords:
- snowflake
- blueprint
- template
- authorization
---

# Snowflake Authorization
Connecting Snowflake to Shipyard requires you to have:
1. A Snowflake account with read/write access to the database and all associated tables/views you wish to access. We recommend setting up an account specifically for Shipyard access.
2. A warehouse that the account has access to. We recommend setting up a warehouse specifically for Shipyard queries.
3. Shipyard [IP Addresses whitelisted](https://www.shipyardapp.com/docs/faqs/security/ip-whitelist/)

## Creating a Snowflake Role and User for Shipyard
This guide will walk you through the process required to create a unique role and user account for Shipyard to access your Snowflake Database.

**_CAUTION:_** You can always use your own credentials, but this gives you less control over security logging and data access.


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

## Giving the Shipyard Role Warehouse Access
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


**_CAUTION:_** Using an existing Warehouse may result in Shipyard processes contendending for resources.

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

## Giving Snowflake Database Access to Shipyard User
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

**_NOTE:_** You can adjust this script as needed if you want Shipyard to have stricter access to your database.


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
3. Paste the following script in the worksheet, updating `{policy_name}` with the correct value.

```sql
ALTER NETWORK POLICY {policy_name}
SET ALLOWED_IP_LIST = ('54.190.66.63', '52.42.73.100', '44.231.239.186', '44.225.245.149');
```
4. Click Run

</TabItem>
</Tabs>


### Authenticating with a Private Key
1. To generate a private key file, run the following in the terminal
```bash
openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8
```
**_NOTE:_** You will need to generate a passphrase to open the private key file. Be sure to save this passphrase as you will need to pass it as an input in Shipyard

2. Once the private key file is generated, created a corresponding public key by running the following in the terminal

```bash
openssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub
```
3. Assign the public key to appropriate user by running an `ALTER` statement

```sql
ALTER USER jsmith SET RSA_PUBLIC_KEY='MIIBIjANBgkqh...';
```
**_NOTE:_** Only security administrators (i.e. users with the SECURITYADMIN role) or higher can alter a user. Aslo be sure to exclude the public key delimiters in the SQL statement.

4. Verify the User's Public Key Fingerprint by running a DESCRIBE command
 ```sql 
 DESC USER jsmith;
 ```
 The fields `RSA_PUBLIC_KEY` and `RSA_PUBLIC_KEY_FP` should both be populated.


For more information, visit the [Snowflake Documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth)
