---
id: snowflake-store-query-results-as-csv
title: Snowflake Template - Store Query Results as CSV
hide_title: true
sidebar_label: Store Query Results as CSV
description: Information about Shipyard's low-code Snowflake Store Query Results as CSV blueprint. Turn the results of your SQL SELECT statement into a CSV file. Extract your Snowflake data into files for easier delivery to clients and partners.
keywords:
    - snowflake
    - blueprint
    - template
---

# Snowflake - Store Query Results as CSV

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Snowflake authorization guide](https://www.shipyardapp.com/docs/blueprint-library/snowflake/snowflake-authorization/)**.

Turn the results of your SQL SELECT statement into a CSV file. Extract your Snowflake data into files for easier delivery to clients and partners.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Username | SNOWFLAKE_USERNAME | Alphanumeric | :white_check_mark: | - | - | The Snowflake Username that has access to the table/schema/warehouse that you want to execute a query against. |
| Password | SNOWFLAKE_PASSWORD | Password | :white_check_mark: | - | - | The password associated with your Username. |
| Account Name | SNOWFLAKE_ACCOUNT | Alphanumeric | :white_check_mark: | - | - | Typically found in the URL you use to access Snowflake, before `.snowflakecomputing.com`. |
| Warehouse | SNOWFLAKE_WAREHOUSE | Alphanumeric | :heavy_minus_sign: | - | - | The name of the Warehouse you want your query to run in. If left blank, will use the default Warehouse associated with the Username. |
| Database | SNOWFLAKE_DATABASE | Alphanumeric | :white_check_mark: | - | - | The name of the Database that you want to run a query against. |
| Schema | SNOWFLAKE_SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | The name of the Schema you want to run a query against. If left blank, it's expected that your query will include the schema in it. |
| Query | SNOWFLAKE_QUERY | Alphanumeric | :white_check_mark: | - | - | A SQL query with a SELECT statement that returns data. |
| Local File Name | SNOWFLAKE_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The file name that you want your generated CSV to have. |
| Local Folder Name | SNOWFLAKE_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| Include Column Names as Header? | SNOWFLAKE_FILE_HEADER | Boolean | :white_check_mark: | true | - | If checked, your CSV file will include a header row with column names. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: Snowflake - Store Query Results as CSV
  inputs:
    SNOWFLAKE_USERNAME: null ## REQUIRED
    SNOWFLAKE_PASSWORD: null ## REQUIRED
    SNOWFLAKE_ACCOUNT: null ## REQUIRED
    SNOWFLAKE_WAREHOUSE: null 
    SNOWFLAKE_DATABASE: null ## REQUIRED
    SNOWFLAKE_SCHEMA: null 
    SNOWFLAKE_QUERY: null ## REQUIRED
    SNOWFLAKE_DESTINATION_FILE_NAME: null ## REQUIRED
    SNOWFLAKE_DESTINATION_FOLDER_NAME: null 
    SNOWFLAKE_FILE_HEADER: true ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200-206"
```
