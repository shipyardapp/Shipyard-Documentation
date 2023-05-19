---
id: snowflake-upload-csv-to-table
title: Snowflake Template - Upload CSV to Table
hide_title: true
sidebar_label: Upload CSV to Table
description: Information about Shipyard's low-code Snowflake Upload CSV to Table blueprint. Upload a CSV file to any table in Snowflake. 
keywords:
    - snowflake
    - blueprint
    - template
---

# Snowflake - Upload CSV to Table

## Overview
Upload one or more CSV files to any table in Snowflake. With the file data, you can:
- **Append Data** - Add the contents of your file to the end of the table.
- **Replace Data** - Drop the existing table and create a new table that contains the entire contents of your file.
- **Add Data Only if Table is Empty** - Add data to the table if no data exists.

Column names are inferred from the header row of your CSV file. If the table already exists, the header values are matched to the table column names. The header names must match the existing column names in your table, case insensitive. If a header name doesn't match, only the data associated with that specific column will not be uploaded.

Column names and table names are automatically made into upper case values, a standard for Snowflake.

Data is inserted into the table by PUTing the file on Snowflake temporary staging for the named table, running a COPY INTO function, then purging the file from Snowflake staging. If there are any errors with this method, we revert to a slow but consistent method that creates INSERT statements for 10,000 rows at a time.

In all instances, if the table name does not already exist, a new table will be created with datatypes inferred from the CSV contents.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Username | SNOWFLAKE_USERNAME  | Alphanumeric |:white_check_mark: | `-` | - |  |
| Password | SNOWFLAKE_PASSWORD  | Password |:white_check_mark: | `-` | - | Password for the provided username |
| Account Name | SNOWFLAKE_ACCOUNT  | Alphanumeric |:white_check_mark: | `-` | - |  |
| Warehouse | SNOWFLAKE_WAREHOUSE  | Alphanumeric |:heavy_minus_sign: | `-` | - |  |
| Database | SNOWFLAKE_DATABASE  | Alphanumeric |:white_check_mark: | `-` | - |  |
| Schema | SNOWFLAKE_SCHEMA  | Alphanumeric |:heavy_minus_sign: | `-` | - |  |
| Folder Name | SNOWFLAKE_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder where the file to upload can be found. Leaving blank will search in the current working directory. |
| File Name Match Type | SNOWFLAKE_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "File Name" will match to one or multiple files. |
| File Name | SNOWFLAKE_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the file to upload to the specified table |
| Table Name | SNOWFLAKE_TABLE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the table where you want data inserted |
| Insertion Method | SNOWFLAKE_INSERT_METHOD  | Select |:white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `fail`<br></br><br></br> | Determines how the data in your file will be added to the table |
| Snowflake Data Types | SNOWFLAKE_DATA_TYPES  | Alphanumeric |:heavy_minus_sign: | `-` | - | The option to declare the Snowflake datatypes. The input needs to be similar to a list of lists, which will be used to form a CREATE OR REPLACE TABLE statement. For more information on Snowflake data types, visit https://docs.snowflake.com/en/sql-reference/intro-summary-data-types.html |


