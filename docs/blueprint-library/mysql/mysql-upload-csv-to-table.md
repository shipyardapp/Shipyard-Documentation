---
id: mysql-upload-csv-to-table
title: MySQL Template - Upload File to Table from Platform
hide_title: true
sidebar_label: Upload File to Table from Platform
description: Information about Platform's low-code MySQL Upload File to Table from Platform blueprint. Upload a CSV file to any table in MySQL. 
keywords:
    - mysql
    - blueprint
    - template
---

# MySQL - Upload File to Table from Platform

## Overview
Upload one or more CSV files to any table in MySQL. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. Column names must not be null or be duplicate values.

If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements.

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Platform or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | MYSQL_HOST  | Alphanumeric |:white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | MYSQL_PORT  | Integer |:white_check_mark: | `"3306"` | - | Number for the database port to connect to. Defaults to 3306. |
| Username | MYSQL_USERNAME  | Alphanumeric |:white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | MYSQL_PASSWORD  | Password |:heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | MYSQL_DATABASE  | Alphanumeric |:white_check_mark: | - | - | Name of the database in MySQL to connect to. |
| Extra URL Parameters | MYSQL_URL_PARAMETERS  | Alphanumeric |:heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| Shipyard Folder Name | MYSQL_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file to upload can be found. If left blank, will search in the current working directory. |
| Shipyard File Name Match Type | MYSQL_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "File Name" will match exactly to a single file, or use regex to match to multiple files. |
| Shipyard File Name | MYSQL_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The file name that contains the data you want uploaded. |
| Table Name | MYSQL_TABLE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the table where you want data inserted. If the table doesn't already exist, it will be created. |
| Insertion Method | MYSQL_INSERT_METHOD  | Select |:white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `fail`<br></br><br></br> | Determines how the data in your file will be added into the target table. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: MySQL - Upload File to Table from Shipyard
  inputs:
    MYSQL_HOST: null  ## REQUIRED
    MYSQL_PORT: '3306' ## REQUIRED
    MYSQL_USERNAME: null ## REQUIRED
    MYSQL_PASSWORD: null
    MYSQL_DATABASE: null  ## REQUIRED
    MYSQL_URL_PARAMETERS: null
    MYSQL_SOURCE_FOLDER_NAME: null
    MYSQL_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    MYSQL_SOURCE_FILE_NAME: null ## REQUIRED
    MYSQL_TABLE_NAME: null ## REQUIRED
    MYSQL_INSERT_METHOD: append ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
