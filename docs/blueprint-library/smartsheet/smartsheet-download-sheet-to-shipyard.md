---
id: smartsheet-download-sheet-to-shipyard
title: Smartsheet Template - Download Sheet to Shipyard
hide_title: true
sidebar_label: Download Sheet to Shipyard
description: Information about Shipyard's low-code Smartsheet Download Sheet to Shipyard blueprint. Quickly download a Sheet from Smartsheet to an Excel or CSV file 
keywords:
    - smartsheet
    - blueprint
    - template
---

# Smartsheet - Download Sheet to Shipyard

## Overview
Allows for quick and seamless download of a Smartsheet Sheet to Shipyard. Results can either be downloaded to an Excel or CSV file. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SMARTSHEET_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token for the Smartsheet API |
| Sheet ID | SMARTSHEET_SHEET_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The ID of the sheet to download |
| Destination Folder Name | SMARTSHEET_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The optional folder to store the downloaded file in |
| Destination File Name | SMARTSHEET_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the downloaded file |
| File Type | SMARTSHEET_FILE_TYPE  | Select |:heavy_minus_sign: | - | CSV: `csv`<br></br><br></br>XLSX: `xlsx`<br></br><br></br> | The file type to download. This can be either a CSV or an Excel file |


