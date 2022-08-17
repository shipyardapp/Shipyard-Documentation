---
id: snowflake-upload-csv-to-table
title: Snowflake Template - Upload CSV to Table
hide_title: true
sidebar_label: Upload CSV to Table
description: Information about Shipyard's low-code Snowflake Upload CSV to Table blueprint. Upload a CSV file to any table in Snowflake. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.
keywords:
    - snowflake
    - blueprint
    - template
---

# Snowflake - Upload CSV to Table

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [Snowflake authorization guide](https://www.shipyardapp.com/docs/blueprint-library/snowflake/snowflake-authorization/)**.

Upload one or more CSV files to any table in Snowflake. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Drop the existing table and create a new table that contains the entire contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, case insensitive. If a header name doesn&#39;t match, only the data associated with that specific column will not be uploaded.

Column names and table names are automatically made into upper case values, a standard for Snowflake.

Data is inserted into the table by PUTing the file on Snowflake temporary staging for the named table, running a COPY INTO function, then purging the file from Snowflake staging. If there are any errors with this method, we revert to a slow but consistent method that creates INSERT statements for 10,000 rows at a time.

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 




## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Username | SNOWFLAKE_USERNAME | Alphanumeric | :white_check_mark: | - | - | - |
| Password | SNOWFLAKE_PASSWORD | Password | :white_check_mark: | - | - | Password for the provided username |
| Account Name | SNOWFLAKE_ACCOUNT | Alphanumeric | :white_check_mark: | - | - | - |
| Warehouse | SNOWFLAKE_WAREHOUSE | Alphanumeric | :heavy_minus_sign: | - | - | - |
| Database | SNOWFLAKE_DATABASE | Alphanumeric | :white_check_mark: | - | - | - |
| Schema | SNOWFLAKE_SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | - |
| Folder Name | SNOWFLAKE_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file to upload can be found. Leaving blank will search in the current working directory. |
| File Name Match Type | SNOWFLAKE_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;File Name&#34; will match to one or multiple files. |
| File Name | SNOWFLAKE_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the file to upload to the specified table |
| Table Name | SNOWFLAKE_TABLE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the table where you want data inserted |
| Insertion Method | SNOWFLAKE_INSERT_METHOD | Select | :white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `fail` | Determines how the data in your file will be added to the table |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Snowflake - Upload CSV to Table
  inputs:
    Username: null ## REQUIRED
    Password: null ## REQUIRED
    Account Name: null ## REQUIRED
    Warehouse: null 
    Database: null ## REQUIRED
    Schema: null 
    Folder Name: null 
    File Name Match Type: exact_match ## REQUIRED
    File Name: null ## REQUIRED
    Table Name: null ## REQUIRED
    Insertion Method: append ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200-207"
```
