---
id: databricks-sql-warehouse-upload-file-to-table
title: Databricks SQL Warehouse Template - Upload File to Table
hide_title: true
sidebar_label: Upload File to Table
description: Information about Shipyard's low-code Databricks SQL Warehouse Upload File to Table blueprint. Quickly upload a file from Shipyard to a SQL table in Databricks 
keywords:
    - databricks sql warehouse
    - blueprint
    - template
---

# Databricks SQL Warehouse - Upload File to Table

## Overview
Quickly upload a file from Shipyard to a SQL table in Databricks. 

__Recommended Setup__

This should be used immediately after downloading data from another source. This blueprint cannot upload a file from your local machine.
Although they are not required in order to connect, it is recommended that you provide the `Catalog` and the `Schema` that you will query. By not doing so, the connection will resort to the defaults and the uploaded table will reside there. Additionally the [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

**Note**
This blueprint cannot upload a file from your local machine.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | DATABRICKS_SQL_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token generated in Databricks for programatic access |
| Databricks Server Host | DATABRICKS_SQL_SERVER_HOST  | Alphanumeric |:white_check_mark: | - | - | The URL address of the SQL warehouse |
| Warehouse HTTP Path | DATABRICKS_SQL_HTTP_PATH  | Alphanumeric |:white_check_mark: | - | - | The extended path for the SQL warehouse |
| Catalog | DATABRICKS_SQL_CATALOG  | Alphanumeric |:heavy_minus_sign: | - | - | The optional catalog to connect to. If none is provided, this will default to Hive Metastore |
| Schema | DATABRICKS_SQL_SCHEMA  | Alphanumeric |:heavy_minus_sign: | - | - | The optional schema to connect to. If none is provided, the blueprint will connect to the `default` schema |
| Table Name | DATABRICKS_SQL_TABLE  | Alphanumeric |:white_check_mark: | - | - | The table in Databricks to write to |
| Data Types | DATABRICKS_SQL_DATATYPES  | Alphanumeric |:heavy_minus_sign: | - | - | The optional Spark datatypes to use in Databricks. These should be in JSON format, and if none are provided then the datatypes will be inferred. |
| Insert Method | DATABRICKS_SQL_INSERT_METHOD  | Select |:white_check_mark: | `append` | Append: `append`<br></br><br></br>Create or Replace: `replace`<br></br><br></br> | This decides whether to append to an existing table or overwrite an exiting table. |
| File Type | DATABRICKS_SQL_FILE_TYPE  | Select |:white_check_mark: | `csv` | CSV: `csv`<br></br><br></br>Parquet: `parquet`<br></br><br></br> | The file type to load |
| Shipyard File Match Type | DATABRICKS_SQL_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Shipyard File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard Folder Name | DATABRICKS_SQL_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The optional name of the folder where the file in Shipyard is located |
| Shipyard File Name | DATABRICKS_SQL_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the file in Shipyard to load to Databricks |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Databricks SQL Warehouse - Upload File to Table
    inputs:
        DATABRICKS_SQL_ACCESS_TOKEN: null  ## REQUIRED
        DATABRICKS_SQL_SERVER_HOST: null ## REQUIRED
        DATABRICKS_SQL_HTTP_PATH: null ## REQUIRED
        DATABRICKS_SQL_CATALOG: null
        DATABRICKS_SQL_SCHEMA: null
        DATABRICKS_SQL_TABLE: null ## REQUIRED
        DATABRICKS_SQL_DATATYPES: null
        DATABRICKS_SQL_INSERT_METHOD: append ## REQUIRED
        DATABRICKS_SQL_FILE_TYPE: csv ## REQUIRED
        DATABRICKS_SQL_MATCH_TYPE: exact_match ## REQUIRED
        DATABRICKS_SQL_FOLDER_NAME: null
        DATABRICKS_SQL_FILE_NAME: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   202
    -   203
    -   204
    -   205
    -   206
    -   207
    -   208
    -   209
    -   210
    -   211
    -   249

```
