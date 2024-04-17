---
id: motherduck-download-query-results-to-file
title: MotherDuck Template - Download Query Results to Shipyard
hide_title: true
sidebar_label: Download Query Results to Shipyard
description: Information about Shipyard's low-code MotherDuck Download Query Results to Shipyard blueprint. Quickly download the results of a DuckDB query to Shipyard
keywords:
  - motherduck
  - blueprint
  - template
---

# MotherDuck - Download Query Results to Shipyard

## Overview

Quickly download the results of a DuckDB query to Shipyard. The target file can either be a CSV or Parquet file.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Access Token | MOTHERDUCK_TOKEN | Password | :white_check_mark: | - | - | The API token for programmatic access to MotherDuck |
| Query | MOTHERDUCK_QUERY | Alphanumeric | :white_check_mark: | - | - | The SQL query to fetch results for |
| Database | MOTHERDUCK_DATABASE | Alphanumeric | :heavy_minus_sign: | - | - | The optional database to connect to |
| File Type | MOTHERDUCK_FILE_TYPE | Select | :white_check_mark: | `csv` | CSV: `csv`<br></br><br></br>Parquet: `parquet`<br></br><br></br> | The file type of the target file |
| Shipyard File Name | MOTHERDUCK_FILE | Alphanumeric | :white_check_mark: | - | - | The name of the file with the query results |
| Shipyard Folder Name | MOTHERDUCK_FOLDER | Alphanumeric | :heavy_minus_sign: | - | - | The optional directory to be used to download the query results to |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: MotherDuck - Download Query Results to Shipyard
  inputs:
    MOTHERDUCK_TOKEN: null  ## REQUIRED
    MOTHERDUCK_QUERY: null ## REQUIRED
    MOTHERDUCK_DATABASE: null
    MOTHERDUCK_FILE_TYPE: csv  ## REQUIRED
    MOTHERDUCK_FILE: null ## REQUIRED
    MOTHERDUCK_FOLDER: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '222'
    - '249'
 ```


