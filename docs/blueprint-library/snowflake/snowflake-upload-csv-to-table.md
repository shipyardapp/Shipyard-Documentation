---
id: snowflake-upload-csv-to-table
title: Snowflake Template - Upload File to Table from Platform
hide_title: true
sidebar_label: Upload File to Table from Platform
description: Information about Platform's low-code Snowflake Upload File to Table from Platform blueprint. Upload a CSV file to any table in Snowflake.
keywords:
  - snowflake
  - blueprint
  - template
---

# Snowflake - Upload File to Table from Platform

## Overview

Upload one or more CSV files to any table in Snowflake. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Drop the existing table and create a new table that contains the entire contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, case insensitive. If a header name doesn't match, only the data associated with that specific column will not be uploaded.

Column names and table names are automatically made into upper case values, a standard for Snowflake.

Data is inserted into the table by PUTing the file on Snowflake temporary staging for the named table, running a COPY INTO function, then purging the file from Snowflake staging. 

In all instances, if the table name does not already exist, a new table will be created with datatypes provided, otherwise they are inferred from the CSV contents.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Platform or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Username | SNOWFLAKE_USERNAME | Alphanumeric | :white_check_mark: | - | - | The Snowflake Username that has access to the table, schema, and warehouse that you want to use. |
| Password | SNOWFLAKE_PASSWORD | Password | :heavy_minus_sign: | - | - | Password for the provided username |
| Account Name | SNOWFLAKE_ACCOUNT | Alphanumeric | :white_check_mark: | - | - | Typically found in the URL you use to access Snowflake, before `.snowflakecomputing.com`. |
| Warehouse | SNOWFLAKE_WAREHOUSE | Alphanumeric | :heavy_minus_sign: | - | - |  |
| Database | SNOWFLAKE_DATABASE | Alphanumeric | :white_check_mark: | - | - |  |
| Schema | SNOWFLAKE_SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - |  |
| Shipyard Folder Name | SNOWFLAKE_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file to upload can be found. Leaving blank will search in the current working directory. |
| Shipyard File Name Match Type | SNOWFLAKE_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "File Name" will match to one or multiple files. |
| Shipyard File Name | SNOWFLAKE_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the file to upload to the specified table |
| Table Name | SNOWFLAKE_TABLE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the table where you want data inserted |
| Insertion Method | SNOWFLAKE_INSERT_METHOD | Select | :white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `add`<br></br><br></br> | Determines how the data in your file will be added to the table |
| Snowflake Data Types | SNOWFLAKE_DATA_TYPES | Alphanumeric | :heavy_minus_sign: | - | - | The option to declare the Snowflake datatypes. The input needs to be similar to a list of lists, which will be used to form a CREATE OR REPLACE TABLE statement. For more information on Snowflake data types, visit https://docs.snowflake.com/en/sql-reference/intro-summary-data-types.html |
| User Role | SNOWFLAKE_USER_ROLE | Alphanumeric | :heavy_minus_sign: | - | - | The optional role for the database user |
| Private Key | SNOWFLAKE_PRIVATE_KEY | Alphanumeric | :heavy_minus_sign: | - | - | The optional private key to use for authentication |
| Private Key Passphrase | SNOWFLAKE_PRIVATE_KEY_PASSPHRASE | Password | :heavy_minus_sign: | - | - | The passphrase for the private key file. Is required only if authenticating with a private key |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Snowflake - Upload File to Table from Shipyard
  inputs:
    SNOWFLAKE_USERNAME: null  ## REQUIRED
    SNOWFLAKE_PASSWORD: null
    SNOWFLAKE_ACCOUNT: null  ## REQUIRED
    SNOWFLAKE_WAREHOUSE: null
    SNOWFLAKE_DATABASE: null  ## REQUIRED
    SNOWFLAKE_SCHEMA: null
    SNOWFLAKE_SOURCE_FOLDER_NAME: null
    SNOWFLAKE_SOURCE_FILE_NAME_MATCH_TYPE: exact_match  ## REQUIRED
    SNOWFLAKE_SOURCE_FILE_NAME: null ## REQUIRED
    SNOWFLAKE_TABLE_NAME: null ## REQUIRED
    SNOWFLAKE_INSERT_METHOD: append ## REQUIRED
    SNOWFLAKE_DATA_TYPES: null
    SNOWFLAKE_USER_ROLE: null
    SNOWFLAKE_PRIVATE_KEY: null
    SNOWFLAKE_PRIVATE_KEY_PASSPHRASE: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '104'
    - '105'
    - '106'
    - '107'
    - '108'
    - '200'
    - '201'
    - '202'
    - '203'
    - '204'
    - '205'
    - '206'
    - '207'
    - '208'
    - '209'
    - '249'
 ```


