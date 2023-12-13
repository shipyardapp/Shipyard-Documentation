---
id: google-sheets-upload-csv-to-sheet
title: Google Sheets Template - Upload File to Sheet from Shipyard
hide_title: true
sidebar_label: Upload File to Sheet from Shipyard
description: Information about Shipyard's low-code Google Sheets Upload File to Sheet from Shipyard blueprint. Easily import your data into a Google Sheet so your teams can collaboratively edit it. Create or update worksheets at scale. 
keywords:
    - google sheets
    - blueprint
    - template
---

# Google Sheets - Upload File to Sheet from Shipyard

## Overview
Easily import data from a single CSV into a single Google Sheet tab. The Google Sheet must already exist for the data to be uploaded.

Only one CSV file can be uploaded at a time, since the upload process requires a static starting cell to determine where to place the data. If you leave the starting cell blank, data will be inserted starting at cell A1 and expanding in width and depth as needed.

If you leave the tab name blank, the data will be uploaded into the first tab. If you specify a Tab Name that doesn't exist, it will be created.

This Blueprint is still subject to [Google's limitations](https://support.google.com/drive/answer/37603) which restrict the number of cells, number of columns, and number of characters per cell in a spreadsheet.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Google Spreadsheet Name or ID | SHEETS_SPREADSHEET_ID  | Alphanumeric |:white_check_mark: | - | - | Name or ID of the sheet to put data into. |
| Tab Name | SHEETS_TAB_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the tab in the sheet to upload data to. This field is case sensitive. If left blank, data will be put into the first tab. |
| Shared Drive Name | SHEETS_SHARED_DRIVE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Shipyard File Name | SHEETS_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target CSV file on Shipyard to be uploaded to the sheet.  |
| Shipyard Folder Name | SHEETS_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Starting Cell | SHEETS_STARTING_CELL  | Alphanumeric |:heavy_minus_sign: | - | - | Cell to start at when uploading data. If left blank, will start at cell A1. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Google Sheets - Upload File to Sheet from Shipyard
  inputs:
    SHEETS_SPREADSHEET_ID: null  ## REQUIRED
    SHEETS_TAB_NAME: null
    SHEETS_SHARED_DRIVE_NAME: null
    SHEETS_SOURCE_FILE_NAME: null  ## REQUIRED
    SHEETS_SOURCE_FOLDER_NAME: null
    SHEETS_STARTING_CELL: null
    GOOGLE_APPLICATION_CREDENTIALS: null  ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
