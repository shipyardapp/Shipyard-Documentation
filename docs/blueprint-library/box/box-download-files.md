---
id: box-download-files
title: Box Template - Download Files to Shipyard
hide_title: true
sidebar_label: Download Files to Shipyard
description: Information about Shipyard's low-code Box Download Files to Shipyard blueprint. Quickly export one or more files from your company's Box account into Shipyard. 
keywords:
    - box
    - blueprint
    - template
---

# Box - Download Files to Shipyard

## Overview
Quickly export one or more files from your company's Box account. Once the files have downloaded, transfer them to another service or run another Vessel against the data.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Box Folder Name | BOX_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder where the file is stored in Box. Leaving blank will look for the file in the root directory of Box. |
| Box File Name | BOX_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file in Box. Can be regex if "Match Type" is set accordingly. |
| Box File Name Match Type | BOX_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Box File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard Folder Name | BOX_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Shipyard File Name | BOX_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Service Account Credentials | BOX_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Box Service Account key |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Box - Download Files to Shipyard
    inputs:
        BOX_SOURCE_FOLDER_NAME: null
        BOX_SOURCE_FILE_NAME: null  ## REQUIRED
        BOX_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
        BOX_DESTINATION_FOLDER_NAME: null
        BOX_DESTINATION_FILE_NAME: null
        BOX_APPLICATION_CREDENTIALS: null  ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
