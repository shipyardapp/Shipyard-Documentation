---
id: file-manipulation-decompress-files
title: File Manipulation Template - Decompress Files
hide_title: true
sidebar_label: Decompress Files
description: Information about Shipyard's low-code File Manipulation Decompress Files blueprint. Decompress a single archive using ZIP, TAR, TAR.GZIP, or TAR.BZ2 into a single folder containing all compressed files.
keywords:
    - file manipulation
    - blueprint
    - template
---

# File Manipulation - Decompress Files

## Overview

Decompress a single archive using ZIP, TAR, TAR.GZIP, or TAR.BZ2 into a single folder containing all compressed files.

Be sure you know what type of compression was used on the file originally! There are many instances where a file might end in `.zip` but be compressed using `.gzip` (or other methods). 

If the archive contains only a single file, the `New File Name` field can be used to rename it. Otherwise, if the archive contains multiple files, it is recommended to leave this field blank to retain the original file and folder names.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Compression Type | MANIPULATION_COMPRESSION_TYPE | Select | :white_check_mark: | `zip` | .zip: `zip`<br></br><br></br>.tar: `tar`<br></br><br></br>.tar.bz2: `tar.bz2`<br></br><br></br>.tar.gz: `tar.gz` | Type of compression used to decompress the archive. |
| Local File Name | MANIPULATION_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | Archive.zip | - | Name of the target compressed archive on Shipyard. |
| Local Folder Name | MANIPULATION_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard where the target compressed file lives. If left blank, will look in the home directory. |
| New File Name | MANIPULATION_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the newly decompressed file on Shipyard. Only takes effect if a single file is being decompressed. |
| New Folder Name | MANIPULATION_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the newly decompressed file(s) should be created on Shipyard. Leaving blank will place the archive&#39;s contents in the home directory. If the folder does not already exist, it will be created. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: File Manipulation - Decompress Files
  inputs:
    Compression Type: zip ## REQUIRED
    Local File Name: Archive.zip ## REQUIRED
    Local Folder Name: null 
    New File Name: null 
    New Folder Name: null 
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
