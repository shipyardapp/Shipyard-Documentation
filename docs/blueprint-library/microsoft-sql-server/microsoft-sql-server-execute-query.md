---
id: microsoft-sql-server-execute-query
title: Microsoft SQL Server Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code Microsoft SQL Server Execute Query blueprint. Execute any SQL query against a Microsoft SQL Server database. 
keywords:
    - microsoft sql server
    - blueprint
    - template
---

# Microsoft SQL Server - Execute Query

## Overview
Execute any SQL query against a Microsoft SQL Server database, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | MSSQL_HOST  | Alphanumeric |:white_check_mark: | `-` | - | The domain or the IP address of the database you want to connect to. |
| Port | MSSQL_PORT  | Integer |:white_check_mark: | `"1433"` | - | Number for the database port to connect to. Defaults to 1433. |
| Username | MSSQL_USERNAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the user to connect to the database with. |
| Password | MSSQL_PASSWORD  | Password |:heavy_minus_sign: | `-` | - | Password associated to the provided username. |
| Database | MSSQL_DATABASE  | Alphanumeric |:white_check_mark: | `-` | - | Name of the database in the Microsoft SQL Server to connect to.  |
| Extra URL Parameters | MSSQL_URL_PARAMETERS  | Alphanumeric |:heavy_minus_sign: | `-` | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&" |
| Query | MSSQL_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |


