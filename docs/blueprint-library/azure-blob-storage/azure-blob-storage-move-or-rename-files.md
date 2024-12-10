---
id: azure-blob-storage-move-or-rename-files
title: Azure Blob Storage Template - Move or Rename Files
hide_title: true
sidebar_label: Move or Rename Files
description: Information about Platform's low-code Azure Blob Storage Move or Rename Files blueprint. Quickly move or rename one or more files from an Azure Blob Storage container.
keywords:
  - azure blob storage
  - blueprint
  - template
---

# Azure Blob Storage - Move or Rename Files

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Blob Storage authorization guide](https://www.shipyardapp.com/docs/blueprint-library/azure-blob-storage/azure-blob-storage-authorization/)**.

Quickly move or rename one or more files stored in Azure Blob Storage. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

---
For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/azure-blob-storage). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/azurestorage-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Container Name | AZURE_CONTAINER_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target Azure storage container. |
| Source Folder Name | AZURE_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the target file is stored in the Azure storage container. If left blank, the root directory will be used |
| File Name Match Type | AZURE_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Original File Name" will look for one file with exact match, or multiple files using regex. |
| Original File Name | AZURE_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file(s) in the Azure storage storage container. Can be regex if "Match Type" is set accordingly. |
| Destination Folder Name | AZURE_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The folder to where the target file will be moved to. If left blank then the root directory will be used |
| New File Name | AZURE_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the file (if it is going to change) once it is moved, if left blank then it will retain the same name |
| Connection String | AZURE_STORAGE_CONNECTION_STRING | Password | :white_check_mark: | - | - | Connection string for programmatic access to download the file from the specified Azure storage container. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Azure Blob Storage - Move or Rename Files
  inputs:
    AZURE_CONTAINER_NAME: null  ## REQUIRED
    AZURE_SOURCE_FOLDER_NAME: null
    AZURE_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    AZURE_SOURCE_FILE_NAME: null ## REQUIRED
    AZURE_DESTINATION_FOLDER_NAME: null
    AZURE_DESTINATION_FILE_NAME: null
    AZURE_STORAGE_CONNECTION_STRING: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '100'
    - '200'
    - '201'
    - '202'
    - '207'
    - '210'
 ```


