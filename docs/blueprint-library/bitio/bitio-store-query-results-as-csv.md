---
id: bitio-store-query-results-as-csv
title: bit.io Template - Download Query Results to Shipyard
hide_title: true
sidebar_label: Download Query Results to Shipyard
description: Information about Shipyard's low-code bit.io Download Query Results to Shipyard blueprint. Turn the results of your SQL SELECT statement into a CSV file. 
keywords:
    - bit.io
    - blueprint
    - template
---

# bit.io - Download Query Results to Shipyard

## Overview
Turn the results of your SQL SELECT statement into a CSV file. Extract your bit.io data into files for easier delivery to clients and partners.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Password | BITIO_PASSWORD  | Password |:white_check_mark: | - | - | Password associated to your bit.io account. For more information, see the Authorization documentation. |
| Database | BITIO_DATABASE  | Alphanumeric |:white_check_mark: | - | - | Name of the database to connect to. This is the same as your current repository name, which has the structure user_name/repo_name. |
| Query | BITIO_QUERY  | Alphanumeric |:white_check_mark: | - | - | A SELECT statement that returns data. Formatting is ignored. |
| Shipyard Folder Name | BITIO_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The folder structure that you want your file to be created in. If left blank, the file will be created in the home directory. |
| Shipyard File Name | BITIO_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `output.csv` | - | The file name that you want your generated file to have. |
| Include Column Names as Header? | BITIO_FILE_HEADER  | Boolean |:white_check_mark: | `True` | - | If checked, your file will include a header row with column names. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: bit.io - Download Query Results to Shipyard
    inputs:
        BITIO_PASSWORD: null  ## REQUIRED
        BITIO_DATABASE: null ## REQUIRED
        BITIO_QUERY: null ## REQUIRED
        BITIO_DESTINATION_FOLDER_NAME: null
        BITIO_DESTINATION_FILE_NAME: output.csv  ## REQUIRED
        BITIO_FILE_HEADER: true ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
