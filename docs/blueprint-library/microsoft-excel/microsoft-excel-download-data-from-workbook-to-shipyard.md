---
id: microsoft-excel-download-data-from-workbook-to-shipyard
title: Microsoft Excel Template - Download Data from Workbook to Shipyard
hide_title: true
sidebar_label: Download Data from Workbook to Shipyard
description: Information about Shipyard's low-code Microsoft Excel Download Data from Workbook to Shipyard blueprint. Quickly download data from Excel to Shipyard
keywords:
  - microsoft excel
  - blueprint
  - template
---

# Microsoft Excel (365) - Download Data from Workbook to Shipyard



## Overview

This blueprint can be used to download data from an Excel Sheet to Shipyard. The `Sheet Name` must be specified, otherwise it will default to `Sheet1`. The downloaded file will be a CSV.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Client ID | EXCEL_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID of the app created in Azure |
| Client Secret | EXCEL_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret value of the app created in Azure |
| Tenant | EXCEL_TENANT | Password | :white_check_mark: | - | - | The ID of the tenant associated with the app |
| User Email | EXCEL_USER_EMAIL | Alphanumeric | :white_check_mark: | - | - | The email address of the user to impersonate |
| OneDrive Folder | EXCEL_ONEDRIVE_FOLDER | Alphanumeric | :heavy_minus_sign: | - | - | The optional folder name of where to save the Excel workbook in OneDrive. If omitted, the file will be saved in the root |
| OneDrive File Name | EXCEL_ONEDRIVE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the file once loaded to OneDrive. If omitted, the original file name will be used |
| Sheet Name | EXCEL_SHEET_NAME | Alphanumeric | :heavy_minus_sign: | `Sheet1` | - | The name of the sheet containing the data |
| Shipyard Folder Name | EXCEL_LOCAL_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The optional directory in Shipyard where the file resides |
| Shipyard File Name | EXCEL_SRC_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the file to load to Excel (must be either a csv or xlsx file) |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Microsoft Excel (365) - Download Data from Workbook to Shipyard
  inputs:
    EXCEL_CLIENT_ID: null  ## REQUIRED
    EXCEL_CLIENT_SECRET: null ## REQUIRED
    EXCEL_TENANT: null ## REQUIRED
    EXCEL_USER_EMAIL: null ## REQUIRED
    EXCEL_ONEDRIVE_FOLDER: null
    EXCEL_ONEDRIVE_FILE_NAME: null ## REQUIRED
    EXCEL_SHEET_NAME: Sheet1
    EXCEL_LOCAL_FOLDER_NAME: null
    EXCEL_SRC_FILE_NAME: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '180'
    - '181'
    - '182'
    - '183'
    - '184'
    - '200'
    - '202'
    - '203'
    - '249'
 ```


