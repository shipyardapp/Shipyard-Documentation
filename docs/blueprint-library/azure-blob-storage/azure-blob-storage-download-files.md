---
id: azure-blob-storage-download-files
title: Azure Blob Storage Template - Download Files to Shipyard
hide_title: true
sidebar_label: Download Files to Shipyard
description: Information about Shipyard's low-code Azure Blob Storage Download Files to Shipyard blueprint. Quickly export one or more files from an Azure Blob Storage container. 
keywords:
    - azure blob storage
    - blueprint
    - template
---

# Azure Blob Storage - Download Files to Shipyard

## Overview
Quickly export one or more files directly into an an Azure Blob Storage container, no matter how big they are. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Container Name | AZURE_CONTAINER_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target Azure storage container. |
| Azure Storage Folder Name | AZURE_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder where the file is stored in the Azure storage container. |
| Azure Storage File Name Match Type | AZURE_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Azure Storage File Name" will look for one file with exact match, or multiple files using regex. |
| Azure Storage File Name | AZURE_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file(s) in the Azure storage storage container. Can be regex if "Match Type" is set accordingly. |
| Shipyard Folder Name | AZURE_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Shipyard File Name | AZURE_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Connection String | AZURE_STORAGE_CONNECTION_STRING  | Password |:white_check_mark: | - | - | Connection string for programmatic access to download the file from the specified Azure storage container. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Azure Blob Storage - Download Files
  inputs:
    AZURE_CONTAINER_NAME: null ## REQUIRED
    AZURE_SOURCE_FOLDER_NAME: null 
    AZURE_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    AZURE_SOURCE_FILE_NAME: null ## REQUIRED
    AZURE_DESTINATION_FOLDER_NAME: null 
    AZURE_DESTINATION_FILE_NAME: null 
    AZURE_STORAGE_CONNECTION_STRING: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "0"
```
