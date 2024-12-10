---
id: smartsheet-download-sheet-to-shipyard
title: Smartsheet Template - Download Sheet to Platform
hide_title: true
sidebar_label: Download Sheet to Platform
description: Information about Platform's low-code Smartsheet Download Sheet to Platform blueprint. Quickly download a Sheet from Smartsheet to an Excel or CSV file 
keywords:
    - smartsheet
    - blueprint
    - template
---

# Smartsheet - Download Sheet to Platform

## Overview
Allows for quick and seamless download of a Smartsheet Sheet to Platform. Results can either be downloaded to an Excel or CSV file. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SMARTSHEET_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token for the Smartsheet API |
| Sheet ID | SMARTSHEET_SHEET_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the sheet to download |
| Destination Folder Name | SMARTSHEET_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The optional folder to store the downloaded file in |
| Destination File Name | SMARTSHEET_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the downloaded file |
| File Type | SMARTSHEET_FILE_TYPE  | Select |:white_check_mark: | `csv` | CSV: `csv`<br></br><br></br>XLSX: `xlsx`<br></br><br></br> | The file type to download. This can be either a CSV or an Excel file |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Smartsheet - Download Sheet to Shipyard
  inputs:
    SMARTSHEET_ACCESS_TOKEN: null  ## REQUIRED
    SMARTSHEET_SHEET_ID: null ## REQUIRED
    SMARTSHEET_DESTINATION_FOLDER_NAME: null
    SMARTSHEET_DESTINATION_FILE_NAME: null ## REQUIRED
    SMARTSHEET_FILE_TYPE: csv ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '201'
    - '202'
    - '203'
    - '204'
    - '205'
    - '206'
    - '220'
    - '249'

```
