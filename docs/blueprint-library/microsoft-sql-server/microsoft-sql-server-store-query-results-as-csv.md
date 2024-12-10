---
id: microsoft-sql-server-store-query-results-as-csv
title: Microsoft SQL Server Template - Download Query Results to Platform
hide_title: true
sidebar_label: Download Query Results to Platform
description: Information about Platform's low-code Microsoft SQL Server Download Query Results to Platform blueprint. Turn the results of your SQL SELECT statement into a CSV file.
keywords:
  - microsoft sql server
  - blueprint
  - template
---

# Microsoft SQL Server - Download Query Results to Platform



## Overview

Turn the results of your SQL SELECT statement into a CSV file. Extract your Microsoft SQL Server data into files for easier delivery to clients and partners.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Host | MSSQL_HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | MSSQL_PORT | Integer | :white_check_mark: | `"1433"` | - | Number for the database port to connect to. Defaults to 1433. |
| Username | MSSQL_USERNAME | Alphanumeric | :white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | MSSQL_PASSWORD | Password | :heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | MSSQL_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database in the Microsoft SQL Server to connect to. |
| Extra URL Parameters | MSSQL_URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&" |
| Query | MSSQL_QUERY | Alphanumeric | :white_check_mark: | - | - | A SELECT statement that returns data. Formatting is ignored. |
| Shipyard Folder Name | MSSQL_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| Shipyard File Name | MSSQL_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | `output.csv` | - | The file name that you want your generated CSV to have. |
| Include Column Names as Header? | MSSQL_FILE_HEADER | Boolean | :white_check_mark: | `TRUE` | - | If checked, your CSV file will include a header row with column names. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Microsoft SQL Server - Download Query Results to Shipyard
  inputs:
    MSSQL_HOST: null  ## REQUIRED
    MSSQL_PORT: '1433' ## REQUIRED
    MSSQL_USERNAME: null ## REQUIRED
    MSSQL_PASSWORD: null
    MSSQL_DATABASE: null  ## REQUIRED
    MSSQL_URL_PARAMETERS: null
    MSSQL_QUERY: null ## REQUIRED
    MSSQL_DESTINATION_FOLDER_NAME: null
    MSSQL_DESTINATION_FILE_NAME: output.csv  ## REQUIRED
    MSSQL_FILE_HEADER: 'TRUE' ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '200'
    - '205'
    - '249'
 ```


