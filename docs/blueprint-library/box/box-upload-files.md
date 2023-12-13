---
id: box-upload-files
title: Box Template - Upload Files from Shipyard
hide_title: true
sidebar_label: Upload Files from Shipyard
description: Information about Shipyard's low-code Box Upload Files from Shipyard blueprint. Easily import one or more files from Shipyard directly into your company's Box account. 
keywords:
    - box
    - blueprint
    - template
---

# Box - Upload Files from Shipyard

## Overview
Easily import one or more files from Shipyard directly into your company's Box account.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Shipyard Folder Name | BOX_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Shipyard File Name Match Type | BOX_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Shipyard File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard File Name | BOX_SOURCE_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| Box Folder Name | BOX_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of Box. |
| Box File Name | BOX_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being uploaded to Box. If left blank, defaults to the original file name(s). |
| Service Account Credentials | BOX_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Box Service Account key. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Box - Upload Files from Shipyard
  inputs:
    BOX_SOURCE_FOLDER_NAME: null
    BOX_SOURCE_FILE_NAME_MATCH_TYPE: exact_match  ## REQUIRED
    BOX_SOURCE_FILE_NAME: null
    BOX_DESTINATION_FOLDER_NAME: null
    BOX_DESTINATION_FILE_NAME: null
    BOX_APPLICATION_CREDENTIALS: null  ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
