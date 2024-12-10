---
id: mysql-store-query-results-as-csv
title: MySQL Template - Download Query Results to Platform
hide_title: true
sidebar_label: Download Query Results to Platform
description: Information about Platform's low-code MySQL Download Query Results to Platform blueprint. Turn the results of your SQL SELECT statement into a CSV file. 
keywords:
    - mysql
    - blueprint
    - template
---

# MySQL - Download Query Results to Platform

## Overview
Turn the results of your SQL SELECT statement into a CSV file. Extract your MySQL data into files for easier delivery to clients and partners.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | MYSQL_HOST  | Alphanumeric |:white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | MYSQL_PORT  | Integer |:white_check_mark: | `"3306"` | - | Number for the database port to connect to. Defaults to 3306. |
| Username | MYSQL_USERNAME  | Alphanumeric |:white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | MYSQL_PASSWORD  | Password |:heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | MYSQL_DATABASE  | Alphanumeric |:white_check_mark: | - | - | Name of the database in MySQL to connect to. |
| Extra URL Parameters | MYSQL_URL_PARAMETERS  | Alphanumeric |:heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| Query | MYSQL_QUERY  | Alphanumeric |:white_check_mark: | - | - | A SELECT statement that returns data. Formatting is ignored. |
| Shipyard Folder Name | MYSQL_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| Shipyard File Name | MYSQL_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `output.csv` | - | The file name that you want your generated CSV to have. |
| Include Column Names as Header? | MYSQL_FILE_HEADER  | Boolean |:white_check_mark: | `True` | - | If checked, your CSV file will include a header row with column names. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: MySQL - Download Query Results to Shipyard
  inputs:
    MYSQL_HOST: null  ## REQUIRED
    MYSQL_PORT: '3306' ## REQUIRED
    MYSQL_USERNAME: null ## REQUIRED
    MYSQL_PASSWORD: null
    MYSQL_DATABASE: null  ## REQUIRED
    MYSQL_URL_PARAMETERS: null
    MYSQL_QUERY: null ## REQUIRED
    MYSQL_DESTINATION_FOLDER_NAME: null
    MYSQL_DESTINATION_FILE_NAME: output.csv  ## REQUIRED
    MYSQL_FILE_HEADER: true ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
