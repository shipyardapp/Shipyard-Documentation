---
id: bitio-upload-csv-to-table
title: bit.io Template - Upload File to Table from Shipyard
hide_title: true
sidebar_label: Upload File to Table from Shipyard
description: Information about Shipyard's low-code bit.io Upload File to Table from Shipyard blueprint. Upload a CSV file to any table in bit.io. 
keywords:
    - bit.io
    - blueprint
    - template
---

# bit.io - Upload File to Table from Shipyard

## Overview
Upload one or more CSV files to any table in bit.io. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. Column names must not be null or be duplicate values.

If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements.

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Password | BITIO_PASSWORD  | Password |:white_check_mark: | - | - | Password associated to your bit.io account. For more information, see the Authorization documentation. |
| Database | BITIO_DATABASE  | Alphanumeric |:white_check_mark: | - | - | Name of the database to connect to. This is the same as your current repository name, which has the structure user_name/repo_name. |
| Shipyard Folder Name | BITIO_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file to upload can be found. If left blank, will search in the current working directory. |
| Shipyard File Name Match Type | BITIO_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "File Name" will match exactly to a single file, or use regex to match to multiple files. |
| Shipyard File Name | BITIO_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The file name that contains the data you want uploaded. |
| Schema | BITIO_SCHEMA  | Alphanumeric |:heavy_minus_sign: | - | - | Schema where the table you're creating or uploading to exists. |
| Table Name | BITIO_TABLE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the table where you want data inserted. If the table doesn't already exist, it will be created. |
| Insertion Method | BITIO_INSERT_METHOD  | Select |:white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `fail`<br></br><br></br> | Determines how the data in your file will be added into the target table. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: bit.io - Upload CSV to Table
  inputs:
    BITIO_PASSWORD: null ## REQUIRED
    BITIO_DATABASE: null ## REQUIRED
    BITIO_SOURCE_FOLDER_NAME: null 
    BITIO_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    BITIO_SOURCE_FILE_NAME: null ## REQUIRED
    BITIO_SCHEMA: null 
    BITIO_TABLE_NAME: null ## REQUIRED
    BITIO_INSERT_METHOD: append ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
```
