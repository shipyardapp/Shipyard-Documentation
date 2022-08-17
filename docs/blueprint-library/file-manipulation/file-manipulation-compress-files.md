---
id: file-manipulation-compress-files
title: File Manipulation Template - Compress Files
hide_title: true
sidebar_label: Compress Files
description: Information about Shipyard's low-code File Manipulation Compress Files blueprint. Compress one or multiples files into a single archive using ZIP, TAR, TAR.GZIP, or TAR.BZ2 compression methods.
keywords:
    - file manipulation
    - blueprint
    - template
---

# File Manipulation - Compress Files

## Overview

Compress one or multiples files into a single archive using ZIP, TAR, TAR.GZIP, or TAR.BZ2 compression methods.

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Compression Type | MANIPULATION_COMPRESSION_TYPE | Select | :white_check_mark: | `zip` | .zip: `zip`<br></br><br></br>.tar: `tar`<br></br><br></br>.tar.bz2: `tar.bz2`<br></br><br></br>.tar.gz: `tar.gz` | Type of compression to use on the provided files. |
| Local Folder Name | MANIPULATION_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |
| Local File Name Match Type | MANIPULATION_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | MANIPULATION_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| New Folder Name | MANIPULATION_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the newly compressed file should be created on Shipyard. Leaving blank will place the file in the home directory. If the folder does not already exist, it will be created. |
| New File Name | MANIPULATION_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | Archive.zip | - | What to name the newly compressed file on Shipyard. It is recommended to end this name with the same extension as the compression type chosen. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: File Manipulation - Compress Files
  inputs:
    Compression Type: zip ## REQUIRED
    Local Folder Name: null 
    Local File Name Match Type: exact_match ## REQUIRED
    Local File Name: null ## REQUIRED
    New Folder Name: null 
    New File Name: Archive.zip ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
