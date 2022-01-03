---
id: azure-blob-storage-download-files
title: Azure Blob Storage Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code Azure Blob Storage Download Files blueprint. Quickly export one or more files from an Azure Blob Storage container. Once the files have downloaded, transfer them to another service or run another Vessel against the data.
keywords:
    - azure blob storage
    - blueprint
    - template
---

# Azure Blob Storage - Download Files

## Overview

Quickly export one or more files directly into an an Azure Blob Storage container, no matter how big they are. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Container Name | container_name | Alphanumeric | :white_check_mark: | - | - | Name of the target Azure storage container. |
| Azure Storage Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in the Azure storage container. |
| Azure Storage File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | Determines if the text in &#34;Azure Storage File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Azure Storage File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file(s) in the Azure storage storage container. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Local Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Local File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Connection String | AZURE_STORAGE_CONNECTION_STRING | Password | :white_check_mark: | - | - | Connection string for programmatic access to download the file from the specified Azure storage container. |


