---
id: microsoft-excel-upload-data-to-workbook
title: Microsoft Excel Template - Upload Data to Workbook from Shipyard
hide_title: true
sidebar_label: Upload Data to Workbook from Shipyard
description: Information about Shipyard's low-code Microsoft Excel Upload Data to Workbook from Shipyard blueprint. Quickly upload data to an Excel workbook
keywords:
  - microsoft excel
  - blueprint
  - template
---

# Microsoft Excel (365) - Upload Data to Workbook from Shipyard



## Overview

This blueprint is used to upload data from Shipyard to a new or exisitng file. Once the data is loaded to the Excel workbook, it will reside in a single sheet called `Sheet1`. 

**Note**: Any existing files with the same name will be overwritten. 

The file type must be either a CSV or an XLSX.

Additionally, this blueprint cannot be used to upload an excel sheet on your local machine. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Client ID | EXCEL_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID of the app created in Azure |
| Client Secret | EXCEL_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret value of the app created in Azure |
| Tenant | EXCEL_TENANT | Password | :white_check_mark: | - | - | The ID of the tenant associated with the app |
| User Email | EXCEL_USER_EMAIL | Alphanumeric | :white_check_mark: | - | - | The email address of the user to impersonate |
| Shipyard Folder Name | EXCEL_LOCAL_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The optional directory in Shipyard where the file resides |
| Shipyard File Name | EXCEL_SRC_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the file to load to Excel (must be either a csv or xlsx file) |
| OneDrive File Name | EXCEL_ONEDRIVE_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the file once loaded to OneDrive. If omitted, the original file name will be used |
| OneDrive Folder | EXCEL_ONEDRIVE_FOLDER | Alphanumeric | :heavy_minus_sign: | - | - | The optional folder name of where to save the Excel workbook in OneDrive. If omitted, the file will be saved in the root |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Microsoft Excel (365) - Upload Data to Workbook from Shipyard
  inputs:
    EXCEL_CLIENT_ID: null  ## REQUIRED
    EXCEL_CLIENT_SECRET: null ## REQUIRED
    EXCEL_TENANT: null ## REQUIRED
    EXCEL_USER_EMAIL: null ## REQUIRED
    EXCEL_LOCAL_FOLDER_NAME: null
    EXCEL_SRC_FILE_NAME: null ## REQUIRED
    EXCEL_ONEDRIVE_FILE_NAME: null
    EXCEL_ONEDRIVE_FOLDER: null
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


