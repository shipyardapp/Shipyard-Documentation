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
Easily wipe data from a single tab on Google Sheet. Typically used to start fresh before inserting new data.

If you leave the cell range blank, data will be wiped from the entire tab.

If you leave the tab name blank, the data will be cleared from the first tab.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Google Sheet Name or ID | SHEETS_SPREADSHEET_ID  | Alphanumeric |:white_check_mark: | `-` | - | Name or ID of the sheet to clear data from. |
| Tab Name | SHEETS_TAB_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the tab in the sheet to clear data from. This field is case sensitive. If left blank, data will be put into the first tab. |
| Shared Drive Name | SHEETS_SHARED_DRIVE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Cell Range | SHEETS_CELL_RANGE  | Alphanumeric |:heavy_minus_sign: | `-` | - | Range to clear data from in the sheet formatted as `A1:B10`. If left blank the entire tab will be cleared. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | `-` | - | JSON from a Google Cloud Service account key. |


