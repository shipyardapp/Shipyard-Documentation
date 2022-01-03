---
id: mysql-upload-csv-to-table
title: MySQL Template - Upload CSV to Table
hide_title: true
sidebar_label: Upload CSV to Table
description: Information about Shipyard's low-code MySQL Upload CSV to Table blueprint. Upload a CSV file to any table in MySQL. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.
keywords:
    - mysql
    - blueprint
    - template
---

# MySQL - Upload CSV to Table

## Overview

Upload one or more CSV files to any table in MySQL. With the file data, you can:
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
| Host | HOST | Alphanumeric | :white_check_mark: |  | - | The domain or the IP address of the database you want to connect to. |
| Port | PORT | Integer | :white_check_mark: | 3306 | - | Number for the database port to connect to. Defaults to 3306. |
| Username | USERNAME | Alphanumeric | :white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | PASSWORD | Password | :heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database in MySQL to connect to. |
| Extra URL Parameters | URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the &#34;?&#34;. Must be separated by &#34;&amp;&#34;. |
| Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file to upload can be found. If left blank, will search in the current working directory. |
| File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | Determines if the text in &#34;File Name&#34; will match exactly to a single file, or use regex to match to multiple files. |
| File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | The file name that contains the data you want uploaded. |
| Table Name | table_name | Alphanumeric | :white_check_mark: | - | - | Name of the table where you want data inserted. If the table doesn&#39;t already exist, it will be created. |
| Insertion Method | insert_method | Select | :white_check_mark: | append | `Append Data`, `Replace Data`, `Add Data Only if Table is Empty` | Determines how the data in your file will be added into the target table. |


