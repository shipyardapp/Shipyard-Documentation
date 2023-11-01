---
id: smartsheet-upload-file-from-shipyard-to-smartsheet
title: Smartsheet Template - Upload File from Shipyard to Smartsheet
hide_title: true
sidebar_label: Upload File from Shipyard to Smartsheet
description: Information about Shipyard's low-code Smartsheet Upload File from Shipyard to Smartsheet blueprint. Quickly upload a CSV or Excel file to a Sheet in Smartsheet 
keywords:
    - smartsheet
    - blueprint
    - template
---

# Smartsheet - Upload File from Shipyard to Smartsheet

## Overview
Easily import data from a single CSV or Excel file into a single SmartSheet Sheet. If the the Sheet already exists, the data being uploaded will either be appended or will overwrite the existing data based on the `Insert Method`.

Only one CSV file can be uploaded at a time.


**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SMARTSHEET_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token for the Smartsheet API |
| Sheet ID | SMARTSHEET_SHEET_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The ID of the sheet to write to. This is only necessary if you are modifying an existing sheet |
| Sheet Name | SMARTSHEET_SHEET_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name of the sheet to be created. Only necessary if creating a new sheet |
| Source Folder Name | SMARTSHEET_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The optional location of the file to be uploaded |
| Source File Name | SMARTSHEET_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the file to upload |
| File Type | SMARTSHEET_FILE_TYPE  | Select |:heavy_minus_sign: | `csv` | CSV: `csv`<br></br><br></br>XLSX: `xlsx`<br></br><br></br> | The file type to upload (either XLSX or CSV) |
| Insert Method | SMARTSHEET_INSERT_METHOD  | Select |:heavy_minus_sign: | `replace` | Append: `append`<br></br><br></br>Replace: `replace`<br></br><br></br> | This determines whether the data being uploaded will append to an existing sheet, overwrite an existing sheet, or create a new one.  |


