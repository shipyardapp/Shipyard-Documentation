---
id: databricks-sql-warehouse-execute-query
title: Databricks SQL Warehouse Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code Databricks SQL Warehouse Execute Query blueprint. Quickly execute a SQL within a Databricks SQL Warehouse
keywords:
  - databricks sql warehouse
  - blueprint
  - template
---

# Databricks SQL Warehouse - Execute Query

## Overview

Quickly execute a SQL within a Databricks SQL Warehouse

**NOTE**
This vessel will not return any files, so if you are looking to fetch data from Databricks, use the `Databricks SQL Warehouse - Download Query Results to Shipyard` Blueprint. Intended use of this blueprint is for queries with no return values (i.e. ALTER TABLE, DELETE TABLE, etc.)

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Access Token | DATABRICKS_SQL_ACCESS_TOKEN | Password | :white_check_mark: | - | - | The access token generated in Databricks for programatic access |
| Databricks Server Host | DATABRICKS_SQL_SERVER_HOST | Alphanumeric | :white_check_mark: | - | - | The URL address of the SQL warehouse |
| Warehouse HTTP Path | DATABRICKS_SQL_HTTP_PATH | Alphanumeric | :white_check_mark: | - | - | The extended path for the SQL warehouse |
| Catalog | DATABRICKS_SQL_CATALOG | Alphanumeric | :heavy_minus_sign: | - | - | The optional catalog to connect to. If none is provided, this will default to Hive Metastore |
| Schema | DATABRICKS_SQL_SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | The optional schema to connect to. If none is provided, the blueprint will connect to the `default` schema |
| Query | DATABRICKS_SQL_QUERY | Alphanumeric | :white_check_mark: | - | - | The query to send to Databricks |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Databricks SQL Warehouse - Execute Query
  inputs:
    DATABRICKS_SQL_ACCESS_TOKEN: null  ## REQUIRED
    DATABRICKS_SQL_SERVER_HOST: null ## REQUIRED
    DATABRICKS_SQL_HTTP_PATH: null ## REQUIRED
    DATABRICKS_SQL_CATALOG: null
    DATABRICKS_SQL_SCHEMA: null
    DATABRICKS_SQL_QUERY: null ## REQUIRED
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


