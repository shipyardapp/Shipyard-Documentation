---
id: postgresql-upload-csv-to-table
title: PostgreSQL Template - Upload CSV to Table
hide_title: true
sidebar_label: Upload CSV to Table
description: Information about Shipyard's low-code PostgreSQL Upload CSV to Table blueprint. Upload a CSV file to any table in PostgreSQL. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.
keywords:
    - postgresql
    - blueprint
    - template
---

# PostgreSQL - Upload CSV to Table

## Overview

Upload one or more CSV files to any table in PostgreSQL. With the file data, you can:
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
| Host | POSTGRES_HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | POSTGRES_PORT | Integer | :white_check_mark: | 5432 | - | Number for the database port to connect to. Defaults to 5432. |
| Username | POSTGRES_USERNAME | Alphanumeric | :white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | POSTGRES_PASSWORD | Password | :heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | POSTGRES_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database in PostgreSQL to connect to. |
| Extra URL Parameters | POSTGRES_URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the &#34;?&#34;. Must be separated by &#34;&amp;&#34;. |
| Folder Name | POSTGRES_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file to upload can be found. If left blank, will search in the current working directory. |
| File Name Match Type | POSTGRES_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;File Name&#34; will match exactly to a single file, or use regex to match to multiple files. |
| File Name | POSTGRES_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The file name that contains the data you want uploaded. |
| Schema | POSTGRES_SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | Schema where the table you&#39;re creating or uploading to exists. |
| Table Name | POSTGRES_TABLE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the table where you want data inserted. If the table doesn&#39;t already exist, it will be created. |
| Insertion Method | POSTGRES_INSERT_METHOD | Select | :white_check_mark: | `append` | Append Data: `append`<br></br><br></br>Replace Data: `replace`<br></br><br></br>Add Data Only if Table is Empty: `fail` | Determines how the data in your file will be added into the target table. |


