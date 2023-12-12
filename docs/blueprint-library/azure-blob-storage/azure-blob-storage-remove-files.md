---
id: azure-blob-storage-remove-files
title: Azure Blob Storage Template - Delete Files
hide_title: true
sidebar_label: Delete Files
description: Information about Shipyard's low-code Azure Blob Storage Delete Files blueprint. Quickly delete one or more files from an Azure Blob Storage container 
keywords:
    - azure blob storage
    - blueprint
    - template
---

# Azure Blob Storage - Delete Files

## Overview
Quickly remove one or more files in an Azure Blob container. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Container Name | AZURE_CONTAINER_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target Azure storage container. |
| Blob Storage Folder Name | AZURE_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder where the target file is stored in the Azure storage container. If left blank, the root directory will be used |
| Blob Storage File Name Match Type | AZURE_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Blob Storage File Name" will look for one file with exact match, or multiple files using regex. |
| Blob Storage File Name | AZURE_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file(s) in the Azure storage storage container. Can be regex if "Match Type" is set accordingly. |
| Connection String | AZURE_STORAGE_CONNECTION_STRING  | Password |:white_check_mark: | - | - | Connection string for programmatic access to download the file from the specified Azure storage container. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Azure Blob Storage - Delete Files
    inputs:
        AZURE_CONTAINER_NAME: null  ## REQUIRED
        AZURE_SOURCE_FOLDER_NAME: null
        AZURE_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
        AZURE_SOURCE_FILE_NAME: null ## REQUIRED
        AZURE_STORAGE_CONNECTION_STRING: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   3
    -   200
    -   201
    -   202

```
