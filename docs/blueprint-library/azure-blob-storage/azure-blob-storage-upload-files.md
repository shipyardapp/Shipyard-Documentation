---
id: azure-blob-storage-upload-files
title: Azure Blob Storage Template - Upload Files from Shipyard
hide_title: true
sidebar_label: Upload Files from Shipyard
description: Information about Shipyard's low-code Azure Blob Storage Upload Files from Shipyard blueprint. Easily import one or more files directly into an Azure Blob Storage container, no matter how big they are.
keywords:
  - azure blob storage
  - blueprint
  - template
---

# Azure Blob Storage - Upload Files from Shipyard

## Overview


Easily import one or more files directly into an an Azure Blob Storage container, no matter how big they are. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Source Folder Name | AZURE_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| File Name Match Type | AZURE_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Shipyard File Name" will look for one file with exact match, or multiple files using regex. |
| Source File Name | AZURE_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| Container Name | AZURE_CONTAINER_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target Azure storage container. |
| Destination Folder Name | AZURE_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded in the Azure Storage container. Leaving blank will place the file in the root directory. |
| Destination File Name | AZURE_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being uploaded to Azure Storage. If left blank, defaults to the original file name(s). |
| Connection String | AZURE_STORAGE_CONNECTION_STRING | Password | :white_check_mark: | - | - | Connection string for programmatic access to upload the file to the specified Azure storage container. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Azure Blob Storage - Upload Files from Shipyard
  inputs:
    AZURE_SOURCE_FOLDER_NAME: null
    AZURE_SOURCE_FILE_NAME_MATCH_TYPE: exact_match  ## REQUIRED
    AZURE_SOURCE_FILE_NAME: null ## REQUIRED
    AZURE_CONTAINER_NAME: null ## REQUIRED
    AZURE_DESTINATION_FOLDER_NAME: null
    AZURE_DESTINATION_FILE_NAME: null
    AZURE_STORAGE_CONNECTION_STRING: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '202'
    - '207'
    - '210'
 ```


