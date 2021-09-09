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

In order to get started with the PostgreSQL Blueprints, a database user is required. You can use an existing user with their credentials or create a new user using the steps below.

### Steps

1. Login to your PostgreSQL server  
2. If using the command line, create a user by running `CREATE USER <user name> WITH PASSWORD '<new password>';`  
3. The PostgreSQL server URL, the username, and password are all used in the Blueprints below  

## Execute Query Blueprint

### Overview

The **PostgreSQL - Execute Query** Blueprint allows users to execute any SQL query against a PostgreSQL database.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP for the database |
| **Port** | [REQUIRED] Number for the database port to connect to |
| **Username** | [REQUIRED] Name of the user to connect to the database with |
| **Password** | Password assigned to the connecting user |
| **Database** | [REQUIRED] Name of the database in the PostgreSQL server to connect to |
| **Extra URL Parameters** | Extra parameters that will be placed at the end of the connection string |
| **Query** | [REQUIRED] Statement to run against the database |

## Store Query Results as CSV Blueprint

### Overview

The **PostgreSQL - Store Query Results as CSV** Blueprint allows users to turn the results of your SQL SELECT statement into a CSV file.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP for the database |
| **Port** | [REQUIRED] Number for the database port to connect to |
| **Username** | [REQUIRED] Name of the user to connect to the database with |
| **Password** | Password assigned to the connecting user |
| **Database** | [REQUIRED] Name of the database in the PostgreSQL server to connect to |
| **Extra URL Parameters** | Extra parameters that will be placed at the end of the connection string |
| **Query** | [REQUIRED] Statement to run against the database |
| **Folder Name** | Local folder in the Shipyard Vessel to store the CSV file |
| **File Name** | [REQUIRED] Local file name for the CSV stored in the Shipyard Vessel |
| **Include Column Names as Header?** | [REQUIRED] Toggle whether to include database column names in the output CSV file first line |

## Upload CSV to Table Blueprint

### Overview

The **PostgreSQL - Upload CSV to Table** Blueprint allows users to upload a CSV file to any table in PostgreSQL.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP for the database |
| **Port** | [REQUIRED] Number for the database port to connect to |
| **Username** | [REQUIRED] Name of the user to connect to the database with |
| **Password** | Password assigned to the connecting user |
| **Database** | [REQUIRED] Name of the database in the PostgreSQL server to connect to |
| **Extra URL Parameters** | Extra parameters that will be placed at the end of the connection string |
| **Query** | [REQUIRED] Statement to run against the database |
| **Folder Name** | Local folder in the Shipyard Vessel to store the CSV file |
| **File Name Match Type** | [REQUIRED] Dropdown selection for the method by which Shipyard should look for the local file in the Vessel |
| **File Name** | [REQUIRED] Local file name for the CSV stored in the Shipyard Vessel |
| **Table Name** | [REQUIRED] Name for the table to insert the data into |
| **Insertion Method** | [REQUIRED] Dropdown to select how data is added into the target table |

### Screenshots

## Helpful Links

[PostgreSQL Documentation](https://www.postgresql.org/docs/12/index.html)  
[SQLAlchemy Documentation](https://docs.sqlalchemy.org/en/13/)  
[Pandas to_sql Method](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html)  
