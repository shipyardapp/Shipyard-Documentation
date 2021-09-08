---
id: microsoft-sql-server
title: Microsoft SQL Server Blueprints
hide_title: true
sidebar_label: Microsoft SQL Server
description: Information about the Blueprint Library connections with Microsoft SQL Server.
keywords:
  - sql server
  - mssql
  - database
  - template
  - blueprint
---

# Microsoft SQL Server Blueprints

## Authorization

### Overview

In order to get started with the Microsoft SQL Server Blueprints, a database user is required.

### Steps

1. Login to your Microsoft SQL Server    
2. If using the command line, create a login by running `CREATE LOGIN <login value> WITH PASSWORD = '<new password>';`  
3. If using the command line, create a user by running `CREATE USER <user name> FOR LOGIN '<login value>';`  
3. The server URL, the username, and password are all used in the Blueprints below  

## Execute Query Blueprint

### Overview

The **Microsoft SQL Server - Execute Query** Blueprint allows users to execute any SQL query against a Microsoft SQL Server database.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP for the database |
| **Port** | [REQUIRED] Number for the database port to connect to |
| **Username** | [REQUIRED] Name of the user to connect to the database with |
| **Password** | Password assigned to the connecting user |
| **Database** | [REQUIRED] Name of the database in the Microsoft SQL Server to connect to |
| **Extra URL Parameters** | Extra parameters that will be placed at the end of the connection string |
| **Query** | [REQUIRED] Statement to run against the database |

## Store Query Results as CSV Blueprint

### Overview

The **Microsoft SQL Server - Store Query Results as CSV** Blueprint allows users to turn the results of your SQL SELECT statement into a CSV file.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP for the database |
| **Port** | [REQUIRED] Number for the database port to connect to |
| **Username** | [REQUIRED] Name of the user to connect to the database with |
| **Password** | Password assigned to the connecting user |
| **Database** | [REQUIRED] Name of the database in the Microsoft SQL Server to connect to |
| **Extra URL Parameters** | Extra parameters that will be placed at the end of the connection string |
| **Query** | [REQUIRED] Statement to run against the database |
| **Folder Name** | Local folder in the Shipyard Vessel to store the CSV file |
| **File Name** | [REQUIRED] Local file name for the CSV stored in the Shipyard Vessel |
| **Include Column Names as Header?** | [REQUIRED] Toggle whether to include database column names in the output CSV file first line |

## Upload CSV to Table Blueprint

### Overview

The **Microsoft SQL Server - Upload CSV to Table** Blueprint allows users to upload a CSV file to any table in Microsoft SQL Server.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP for the database |
| **Port** | [REQUIRED] Number for the database port to connect to |
| **Username** | [REQUIRED] Name of the user to connect to the database with |
| **Password** | Password assigned to the connecting user |
| **Database** | [REQUIRED] Name of the database in the Microsoft SQL Server to connect to |
| **Extra URL Parameters** | Extra parameters that will be placed at the end of the connection string |
| **Query** | [REQUIRED] Statement to run against the database |
| **Folder Name** | Local folder in the Shipyard Vessel to store the CSV file |
| **File Name Match Type** | [REQUIRED] Dropdown selection for the method by which Shipyard should look for the local file in the Vessel |
| **File Name** | [REQUIRED] Local file name for the CSV stored in the Shipyard Vessel |
| **Table Name** | [REQUIRED] Name for the table to insert the data into |
| **Insertion Method** | [REQUIRED] Dropdown to select how data is added into the target table |

## Helpful Links

[Microsoft SQL Server Documentation](https://docs.microsoft.com/en-us/sql/sql-server/)  
[SQLAlchemy Documentation](https://docs.sqlalchemy.org/en/13/)  
[Pandas to_sql Method](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html)  