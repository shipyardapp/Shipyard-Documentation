---
id: postgresql
title: PostgreSQL Blueprints
hide_title: true
sidebar_label: PostgreSQL
description: Information about the Blueprint Library connections with PostgreSQL.
keywords:
  - postgres
  - postgresql
  - psql
  - database
  - template
  - blueprint
---

# PostgreSQL Blueprints

## Authorization

### Overview


Connecting PostgreSQL to Shipyard requires you to have:
1. A PostgreSQL user with read/write access to the database and all associated tables/views you wish to access. We recommend setting up an account specifically for Shipyard access, although you can use an existing user.
2. Shipyard [IP Addresses whitelisted](../faqs.md#how-can-shipyard-access-my-secure-database)


### Creating a New User

1. Login to your PostgreSQL server  
2. In the command line, create a user by running `CREATE USER <user name> WITH PASSWORD '<new password>';`  
3. The PostgreSQL server URL, the username, and password are all used in the Blueprints below  


## Execute Query Blueprint

### Overview

Execute any SQL query against a PostgreSQL database, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Host** | ✔️ | The domain or the IP address of the database you want to connect to. |
| **Port** | ✔️ |  Number for the database port to connect to. Defaults to 5432. |
| **Username** | ✔️ |  Name of the user to connect to the database with. |
| **Password** | ➖ | Password associated to the provided username. |
| **Database** | ✔️ |  Name of the database in PostgreSQL to connect to. |
| **Extra URL Parameters** | ➖ | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| **Query** | ✔️ | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |

## Store Query Results as CSV Blueprint

### Overview

Turn the results of your SQL SELECT statement into a CSV file. Extract your PostgreSQL data into files for easier delivery to clients and partners.

### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Host** | ✔️ | The domain or the IP address of the database you want to connect to. |
| **Port** | ✔️ | Number for the database port to connect to. Defaults to 5432. |
| **Username** | ✔️ | Name of the user to connect to the database with. |
| **Password** | ➖ | Password associated to the provided username. |
| **Database** | ✔️ | Name of the database in PostgreSQL to connect to. |
| **Extra URL Parameters** | ➖ | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| **Query** | ✔️ | A SELECT statement that returns data. Formatting is ignored. |
| **Folder Name** | ➖ | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| **File Name** | ✔️ | The file name that you want your generated CSV to have. |
| **Include Column Names as Header?** | ✔️ | If checked, your CSV file will include a header row with column names. |

## Upload CSV to Table Blueprint

### Overview

Upload one or more CSV files to any table in PostgreSQL. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. Column names must not be null or be duplicate values.

If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements.

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Host** | ✔️ | The domain or the IP address of the database you want to connect to. |
| **Port** | ✔️ | Number for the database port to connect to. Defaults to 5432. |
| **Username** | ✔️ | Name of the user to connect to the database with. |
| **Password** | ➖ | Password associated to the provided username. |
| **Database** | ✔️ | Name of the database in PostgreSQL to connect to. |
| **Extra URL Parameters** | ➖ |Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| **Folder Name** | ➖ | Folder where the file to upload can be found. If left blank, will search in the current working directory.| |
| **File Name Match Type** | ✔️ | Determines if the text in "File Name" will match exactly to a single file, or use regex to match to multiple files. |
| **File Name** | ✔️ | The file name that contains the data you want uploaded. |
| **Table Name** | ✔️ | Name of the table where you want data inserted. If the table doesn't already exist, it will be created. |
| **Insertion Method** | ✔️ | Determines how the data in your file will be added into the target table. |

## Helpful Links

[PostgreSQL Documentation](https://www.postgresql.org/docs/12/index.html)  
[SQLAlchemy Documentation](https://docs.sqlalchemy.org/en/13/)  
[Pandas to_sql Method](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html)  
