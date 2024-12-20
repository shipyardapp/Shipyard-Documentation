---
id: thoughtspot-export-answer-report
title: Thoughtspot Template - Export Answer Report
hide_title: true
sidebar_label: Export Answer Report
description: Information about Platform's low-code Thoughtspot Export Answer Report blueprint. Quickly export a Thoughtspot answer into a variety of formats ranging from CSV, PNG, PDF, and XLSX 
keywords:
    - thoughtspot
    - blueprint
    - template
---

# Thoughtspot - Export Answer Report

## Overview
Quickly export a Thoughtspot  answer into a variety of formats ranging from CSV, PNG, PDF, and XLSX

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Token | THOUGHTSPOT_TOKEN  | Password |:white_check_mark: | - | - | The API token generated by Thoughtspot |
| Answer ID | THOUGHTSPOT_ANSWER_ID  | Alphanumeric |:white_check_mark: | - | - | The GUID of the desired Answer report |
| File Format | THOUGHTSPOT_FILE_FORMAT  | Select |:white_check_mark: | `csv` | CSV: `csv`<br></br><br></br>PDF: `pdf`<br></br><br></br>PNG: `png`<br></br><br></br>XSLX: `xlsx`<br></br><br></br> | The file type of the downloaded file to have |
| Runtime Filter | THOUGHTSPOT_RUNTIME_FILTER  | Alphanumeric |:heavy_minus_sign: | - | - | The optional column filter to filter the data before export |
| Runtime Sort | THOUGHTSPOT_RUNTIME_SORT  | Alphanumeric |:heavy_minus_sign: | - | - | The optional column sort to arrange the data before export |
| File Name | THOUGHTSPOT_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `answer` | - | The name that the downloaded answer report should be saved to |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Thoughtspot - Export Answer Report
  inputs:
    THOUGHTSPOT_TOKEN: null  ## REQUIRED
    THOUGHTSPOT_ANSWER_ID: null ## REQUIRED
    THOUGHTSPOT_FILE_FORMAT: csv ## REQUIRED
    THOUGHTSPOT_RUNTIME_FILTER: null
    THOUGHTSPOT_RUNTIME_SORT: null
    THOUGHTSPOT_FILE_NAME: answer
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '201'
    - '202'
    - '203'
    - '204'

```
