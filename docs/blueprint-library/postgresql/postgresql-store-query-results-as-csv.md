---
id: postgresql-store-query-results-as-csv
title: PostgreSQL Template - Download Query Results to Shipyard
hide_title: true
sidebar_label: Download Query Results to Shipyard
description: Information about Shipyard's low-code PostgreSQL Download Query Results to Shipyard blueprint. Turn the results of your SQL SELECT statement into a CSV file.
keywords:
  - postgresql
  - blueprint
  - template
---

# PostgreSQL - Download Query Results to Shipyard



## Overview

Turn the results of your SQL SELECT statement into a CSV file. Extract your PostgreSQL data into files for easier delivery to clients and partners.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Host | POSTGRES_HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | POSTGRES_PORT | Integer | :white_check_mark: | `"5432"` | - | Number for the database port to connect to. Defaults to 5432. |
| Username | POSTGRES_USERNAME | Alphanumeric | :white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | POSTGRES_PASSWORD | Password | :heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | POSTGRES_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database in PostgreSQL to connect to. |
| Extra URL Parameters | POSTGRES_URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| Query | POSTGRES_QUERY | Alphanumeric | :white_check_mark: | - | - | A SELECT statement that returns data. Formatting is ignored. |
| Shipyard Folder Name | POSTGRES_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| Shipyard File Name | POSTGRES_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | `output.csv` | - | The file name that you want your generated CSV to have. |
| Include Column Names as Header? | POSTGRES_FILE_HEADER | Boolean | :white_check_mark: | `True` | - | If checked, your CSV file will include a header row with column names. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: PostgreSQL - Download Query Results to Shipyard
  inputs:
    POSTGRES_HOST: null  ## REQUIRED
    POSTGRES_PORT: '5432' ## REQUIRED
    POSTGRES_USERNAME: null ## REQUIRED
    POSTGRES_PASSWORD: null
    POSTGRES_DATABASE: null  ## REQUIRED
    POSTGRES_URL_PARAMETERS: null
    POSTGRES_QUERY: null ## REQUIRED
    POSTGRES_DESTINATION_FOLDER_NAME: null
    POSTGRES_DESTINATION_FILE_NAME: output.csv  ## REQUIRED
    POSTGRES_FILE_HEADER: true ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '220'
    - '221'
    - '222'
    - '249'
 ```


