---
id: google-sheets-download-sheet-to-csv
title: Google Sheets Template - Download Sheet to Shipyard
hide_title: true
sidebar_label: Download Sheet to Shipyard
description: Information about Shipyard's low-code Google Sheets Download Sheet to Shipyard blueprint. Quickly export your data from a Google Sheet. 
keywords:
    - google sheets
    - blueprint
    - template
---

# Google Sheets - Download Sheet to Shipyard

## Overview
Quickly export data from a single tab on a Google Sheet to a CSV. 

Only one tab of data can be downloaded at a time, since CSVs are flat files. If you leave the tab name blank, the first tab of data will be pulled.

Content of the downloaded file can be refined by providing a cell range. Otherwise, the entire contents of the tab will be downloaded.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Google Spreadsheet Name or ID | SHEETS_SPREADSHEET_ID  | Alphanumeric |:white_check_mark: | - | - | Name or ID of the sheet to fetch data from. |
| Tab Name | SHEETS_TAB_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the tab in the sheet to fetch data from. This field is case sensitive. If left blank, data will be pulled from the first tab. |
| Shared Drive Name | SHEETS_SHARED_DRIVE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Shipyard File Name | SHEETS_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of file to be generated with the results. Should be `.csv` extension. |
| Shipyard Folder Name | SHEETS_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file should be downloaded. Leaving blank will place the file in the home directory. |
| Cell Range | SHEETS_CELL_RANGE  | Alphanumeric |:heavy_minus_sign: | - | - | Range to fetch data from in the sheet formatted as `A1:B10`. If left blank the entire contents of the tab will be fetched. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Google Sheets - Download Sheet to Shipyard
    inputs:
        SHEETS_SPREADSHEET_ID: null  ## REQUIRED
        SHEETS_TAB_NAME: null
        SHEETS_SHARED_DRIVE_NAME: null
        SHEETS_DESTINATION_FILE_NAME: null  ## REQUIRED
        SHEETS_DESTINATION_FOLDER_NAME: null
        SHEETS_CELL_RANGE: null
        GOOGLE_APPLICATION_CREDENTIALS: null  ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
