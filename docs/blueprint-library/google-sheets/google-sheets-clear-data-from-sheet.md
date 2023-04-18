---
id: google-sheets-clear-data-from-sheet
title: Google Sheets Template - Clear Data from Sheet
hide_title: true
sidebar_label: Clear Data from Sheet
description: Information about Shipyard's low-code Google Sheets Clear Data from Sheet blueprint. Easily wipe data from a Google Sheet so you can start fresh before inserting data.
keywords:
    - google sheets
    - blueprint
    - template
---

# Google Sheets - Clear Data from Sheet

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Google Sheets authorization guide](https://www.shipyardapp.com/docs/blueprint-library/google-sheets/google-sheets-authorization/)**.

Easily wipe data from a single tab on Google Sheet. Typically used to start fresh before inserting new data.

If you leave the cell range blank, data will be wiped from the entire tab.

If you leave the tab name blank, the data will be cleared from the first tab.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Google Sheet Name or ID | SHEETS_SPREADSHEET_ID | Alphanumeric | :white_check_mark: | - | - | Name or ID of the sheet to clear data from. |
| Tab Name | SHEETS_TAB_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the tab in the sheet to clear data from. This field is case sensitive. If left blank, data will be put into the first tab. |
| Shared Drive Name | SHEETS_SHARED_DRIVE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Cell Range | SHEETS_CELL_RANGE | Alphanumeric | :heavy_minus_sign: | - | - | Range to clear data from in the sheet formatted as `A1:B10`. If left blank the entire tab will be cleared. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: Google Sheets - Clear Data from Sheet
  inputs:
    SHEETS_SPREADSHEET_ID: null ## REQUIRED
    SHEETS_TAB_NAME: null 
    SHEETS_SHARED_DRIVE_NAME: null 
    SHEETS_CELL_RANGE: null 
    GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
