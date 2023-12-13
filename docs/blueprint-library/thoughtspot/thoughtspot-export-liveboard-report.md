---
id: thoughtspot-export-liveboard-report
title: Thoughtspot Template - Export Liveboard Report
hide_title: true
sidebar_label: Export Liveboard Report
description: Information about Shipyard's low-code Thoughtspot Export Liveboard Report blueprint. Quickly export a Thoughtspot liveboard report into a variety of formats ranging from CSV, PNG, and PDF 
keywords:
    - thoughtspot
    - blueprint
    - template
---

# Thoughtspot - Export Liveboard Report

## Overview
Quickly export a Thoughtspot liveboard report into a variety of formats ranging from CSV, PNG and PDF

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Token | THOUGHTSPOT_TOKEN  | Password |:white_check_mark: | - | - | The API token generated in Thoughtspot |
| Metadata Identifier | THOUGHTSPOT_METADATA_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the associated liveboard  |
| Visualization Identifiers | THOUGHTSPOT_VISUALIZATION_IDS  | Alphanumeric |:heavy_minus_sign: | - | - | The optional list of specific visualizations to include in the export. If omitted then all will be included |
| File Format | THOUGHTSPOT_FILE_FORMAT  | Select |:white_check_mark: | `csv` | CSV: `csv`<br></br><br></br>PDF: `pdf`<br></br><br></br>PNG: `png`<br></br><br></br> | The desired file format for the export to have |
| Runtime Filter | THOUGHTSPOT_RUNTIME_FILTER  | Alphanumeric |:heavy_minus_sign: | - | - | A column condition to filter the exported data |
| Runtime Sort | THOUGHTSPOT_RUNTIME_SORT  | Alphanumeric |:heavy_minus_sign: | - | - | A column sort to sort the output data |
| File Name | THOUGHTSPOT_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `liveboard` | - | The name of the download file to have |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Thoughtspot - Export Liveboard Report
  inputs:
    THOUGHTSPOT_TOKEN: null  ## REQUIRED
    THOUGHTSPOT_METADATA_ID: null ## REQUIRED
    THOUGHTSPOT_VISUALIZATION_IDS: null
    THOUGHTSPOT_FILE_FORMAT: csv  ## REQUIRED
    THOUGHTSPOT_RUNTIME_FILTER: null
    THOUGHTSPOT_RUNTIME_SORT: null
    THOUGHTSPOT_FILE_NAME: liveboard
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

```
