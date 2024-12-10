---
id: smartsheet-upload-file-from-shipyard-to-smartsheet
title: Smartsheet Template - Upload File from Platform to Smartsheet
hide_title: true
sidebar_label: Upload File from Platform to Smartsheet
description: Information about Platform's low-code Smartsheet Upload File from Platform to Smartsheet blueprint. Quickly upload a CSV or Excel file to a Sheet in Smartsheet 
keywords:
    - smartsheet
    - blueprint
    - template
---

# Smartsheet - Upload File from Platform to Smartsheet

## Overview
Easily import data from a single CSV or Excel file into a single SmartSheet Sheet. If the the Sheet already exists, the data being uploaded will either be appended or will overwrite the existing data based on the `Insert Method`.

##### Insert Method 
- If `Append` or `Replace` is selected, then a `Sheet ID` is also required so the existing sheet can be   modified
- If `Create` is selected, then  a `Sheet Name` is recommended, otherwise the newly created Sheet will be named after the file

Only one file can be uploaded at a time.


**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Platform or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SMARTSHEET_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token for the Smartsheet API |
| Sheet ID | SMARTSHEET_SHEET_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The ID of the sheet to write to. This is only necessary if you are modifying an existing sheet |
| Sheet Name | SMARTSHEET_SHEET_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name of the sheet to be created. Only necessary if creating a new sheet |
| Source Folder Name | SMARTSHEET_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The optional location of the file to be uploaded |
| Source File Name | SMARTSHEET_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the file to upload |
| File Type | SMARTSHEET_FILE_TYPE  | Select |:white_check_mark: | `csv` | CSV: `csv`<br></br><br></br>XLSX: `xlsx`<br></br><br></br> | The file type to upload (either XLSX or CSV) |
| Insert Method | SMARTSHEET_INSERT_METHOD  | Select |:white_check_mark: | `replace` | Append: `append`<br></br><br></br>Replace: `replace`<br></br><br></br>Create: `create`<br></br><br></br> | This determines whether the data being uploaded will append to an existing sheet, overwrite an existing sheet, or create a new one.  |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Smartsheet - Upload File from Shipyard to Smartsheet
  inputs:
    SMARTSHEET_ACCESS_TOKEN: null  ## REQUIRED
    SMARTSHEET_SHEET_ID: null
    SMARTSHEET_SHEET_NAME: null
    SMARTSHEET_SOURCE_FOLDER_NAME: null
    SMARTSHEET_SOURCE_FILE_NAME: null ## REQUIRED
    SMARTSHEET_FILE_TYPE: csv ## REQUIRED
    SMARTSHEET_INSERT_METHOD: replace ## REQUIRED
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
