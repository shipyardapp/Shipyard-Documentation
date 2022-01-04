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

Upload one or more CSV files to any table in Snowflake. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Write over the entire contents of table with the contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, otherwise the Vessel will error.

Data is inserted into the table by using multiple INSERT statements. For larger datasets, we recommend building an &#34;Execute Query&#34;

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Username | USERNAME | Alphanumeric | :white_check_mark: |  | - | - |
| Password | PASSWORD | Password | :white_check_mark: | - | - | Password for the provided username |
| Account Name | ACCOUNT | Alphanumeric | :white_check_mark: |  | - | - |
| Warehouse | WAREHOUSE | Alphanumeric | :heavy_minus_sign: | - | - | - |
| Database | DATABASE | Alphanumeric | :white_check_mark: |  | - | - |
| Schema | SCHEMA | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | Folder where the file to upload can be found. Leaving blank will search in the current working directory. |
| File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br><br><br>Regex Match: `regex_match` | Determines if the text in &#34;File Name&#34; will match to one or multiple files. |
| File Name | source_file_name | Alphanumeric | :white_check_mark: |  | - | Name of the file to upload to the specified table |
| Table Name | table_name | Alphanumeric | :white_check_mark: |  | - | Name of the table where you want data inserted |
| Insertion Method | insert_method | Select | :white_check_mark: | `append` | Append Data: `append`<br><br><br>Replace Data: `replace`<br><br><br>Add Data Only if Table is Empty: `fail` | Determines how the data in your file will be added to the table |


