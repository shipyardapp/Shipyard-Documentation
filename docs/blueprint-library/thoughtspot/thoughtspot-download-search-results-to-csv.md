---
id: thoughtspot-download-search-results-to-csv
title: Thoughtspot Template - Download Search Results to Platform
hide_title: true
sidebar_label: Download Search Results to Platform
description: Information about Platform's low-code Thoughtspot Download Search Results to Platform blueprint. Quickly download a natural language Thoughtspot query to a csv 
keywords:
    - thoughtspot
    - blueprint
    - template
---

# Thoughtspot - Download Search Results to Platform

## Overview
Quickly download a natural language Thoughtspot query to a csv

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Token | THOUGHTSPOT_TOKEN  | Password |:white_check_mark: | - | - | The API token generated from Thoughtspot |
| Query | THOUGHTSPOT_QUERY  | Alphanumeric |:white_check_mark: | - | - | The query you want to download the results for |
| Table ID | THOUGHTSPOT_TABLE_ID  | Alphanumeric |:white_check_mark: | - | - | The GUID for the table to query |
| Rows | THOUGHTSPOT_ROWS  | Alphanumeric |:heavy_minus_sign: | - | - | The number of rows to be returned. If omitted, then all will be returned |
| File Name | THOUGHTSPOT_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `search_data.csv` | - | The name of the file to be downloaded. Will default to search_data.csv |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Thoughtspot - Download Search Results to Shipyard
  inputs:
    THOUGHTSPOT_TOKEN: null  ## REQUIRED
    THOUGHTSPOT_QUERY: null ## REQUIRED
    THOUGHTSPOT_TABLE_ID: null ## REQUIRED
    THOUGHTSPOT_ROWS: null
    THOUGHTSPOT_FILE_NAME: search_data.csv
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '202'

```
