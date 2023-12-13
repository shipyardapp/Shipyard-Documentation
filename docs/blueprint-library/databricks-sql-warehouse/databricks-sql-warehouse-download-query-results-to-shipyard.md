---
id: databricks-sql-warehouse-download-query-results-to-shipyard
title: Databricks SQL Warehouse Template - Download Query Results to Shipyard
hide_title: true
sidebar_label: Download Query Results to Shipyard
description: Information about Shipyard's low-code Databricks SQL Warehouse Download Query Results to Shipyard blueprint. Quickly download the results of Databricks SQL query to Shipyard 
keywords:
    - databricks sql warehouse
    - blueprint
    - template
---

# Databricks SQL Warehouse - Download Query Results to Shipyard

## Overview
Quickly download the results of Databricks SQL query to Shipyard. You can choose to output the results as a CSV or a Parquet file. 

__Recommended Setup__
Although they are not required in order to connect, it is recommended that you provide the `Catalog` and the `Schema` that you will query. By not doing so, the connection will resort to the defaults and it is possible that the query will fail if the tables don't reside in the default schema and catalog.

**NOTE**
This will not download the file to your local computer, but to the home directory within Shipyard

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | DATABRICKS_SQL_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token generated in Databricks for programatic access |
| Databricks Server Host | DATABRICKS_SQL_SERVER_HOST  | Alphanumeric |:white_check_mark: | - | - | The URL address of the SQL warehouse |
| Warehouse HTTP Path | DATABRICKS_SQL_HTTP_PATH  | Alphanumeric |:white_check_mark: | - | - | The extended path for the SQL warehouse |
| Catalog | DATABRICKS_SQL_CATALOG  | Alphanumeric |:heavy_minus_sign: | - | - | The optional catalog to connect to. If none is provided, this will default to Hive Metastore |
| Schema | DATABRICKS_SQL_SCHEMA  | Alphanumeric |:heavy_minus_sign: | - | - | The optional schema to connect to. If none is provided, the blueprint will connect to the `default` schema |
| Query | DATABRICKS_SQL_QUERY  | Alphanumeric |:white_check_mark: | - | - | The query to send to Databricks |
| Shipyard Folder Name | DATABRICKS_SQL_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The optional name of the folder where the file in Shipyard is located |
| Shipyard File Name | DATABRICKS_SQL_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the outputted file |
| File Type | DATABRICKS_SQL_FILE_TYPE  | Select |:white_check_mark: | `csv` | CSV: `csv`<br></br><br></br>Parquet: `parquet`<br></br><br></br> | The file type to load |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Databricks SQL Warehouse - Download Query Results to Shipyard
  inputs:
    DATABRICKS_SQL_ACCESS_TOKEN: null  ## REQUIRED
    DATABRICKS_SQL_SERVER_HOST: null ## REQUIRED
    DATABRICKS_SQL_HTTP_PATH: null ## REQUIRED
    DATABRICKS_SQL_CATALOG: null
    DATABRICKS_SQL_SCHEMA: null
    DATABRICKS_SQL_QUERY: null ## REQUIRED
    DATABRICKS_SQL_FOLDER_NAME: null
    DATABRICKS_SQL_FILE_NAME: null ## REQUIRED
    DATABRICKS_SQL_FILE_TYPE: csv ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '202'
    - '203'
    - '204'
    - '205'
    - '206'
    - '207'
    - '208'
    - '209'
    - '210'
    - '211'
    - '249'

```
