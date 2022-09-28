---
id: bitio-upload-csv-to-table
title: bit.io Template - Upload CSV to Table
hide_title: true
sidebar_label: Upload CSV to Table
description: Information about Shipyard's low-code bit.io Upload CSV to Table blueprint. Upload a CSV file to any table in bit.io. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.
keywords:
    - bit.io
    - blueprint
    - template
---

# bit.io - Upload CSV to Table

## Overview

Upload one or more CSV files to any table in bit.io. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. Column names must not be null or be duplicate values.

If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements.

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| API Key | BITIO_API_KEY | Password | :white_check_mark: | - | - | API Key associated to your bit.io account. For more information, see the Authorization documentation. |
| Folder Name | BITIO_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file to upload can be found. If left blank, will search in the current working directory. |
| File Name Match Type | BITIO_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in `File Name` will match exactly to a single file, or use regex to match to multiple files. |
| File Name | BITIO_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The file name that contains the data you want uploaded. |
| Schema | BITIO_SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | Schema where the table you&#39;re creating or uploading to exists. |
| Table Name | BITIO_TABLE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the table where you want data inserted. If the table doesn&#39;t already exist, it will be created. |
| Insertion Method | BITIO_INSERT_METHOD | Select | :white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `fail` | Determines how the data in your file will be added into the target table. |


