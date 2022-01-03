---
id: azure-blob-storage-upload-files
title: Azure Blob Storage Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code Azure Blob Storage Upload Files blueprint. Easily import one or more files directly into an Azure Blob Storage container, no matter how big they are.
keywords:
    - azure blob storage
    - blueprint
    - template
---

# Azure Blob Storage - Upload Files

## Overview

Easily import one or more files directly into an an Azure Blob Storage container, no matter how big they are. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Container Name | container_name | Alphanumeric | :white_check_mark: | - | - | Name of the target Azure storage container. |
| Azure Storage Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded in the Azure Storage container. Leaving blank will place the file in the root directory. |
| Azure Storage File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being uploaded to Azure Storage. If left blank, defaults to the original file name(s). |
| Connection String | AZURE_STORAGE_CONNECTION_STRING | Password | :white_check_mark: | - | - | Connection string for programmatic access to upload the file to the specified Azure storage container. |


