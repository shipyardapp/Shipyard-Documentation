---
id: dropbox-download-files
title: Dropbox Template - Download Files to Shipyard
hide_title: true
sidebar_label: Download Files to Shipyard
description: Information about Shipyard's low-code Dropbox Download Files to Shipyard blueprint. Quickly export one or more files from your Dropbox account. 
keywords:
    - dropbox
    - blueprint
    - template
---

# Dropbox - Download Files to Shipyard

## Overview
Quickly export one or more files from Dropbox. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Dropbox Folder Name | DROPBOX_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder where the file is stored in Dropbox. Leaving blank will look for the file in the root directory of Dropbox. |
| Dropbox File Name Match Type | DROPBOX_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Dropbox File Name" will look for one file with exact match, or multiple files using regex. |
| Dropbox File Name | DROPBOX_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file in Dropbox. Can be regex if "Match Type" is set accordingly. |
| Shipyard Folder Name | DROPBOX_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Shipyard File Name | DROPBOX_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Access Token | DROPBOX_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | Access token, with no expiration, to access your Dropbox files. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Dropbox - Download Files to Shipyard
  inputs:
    DROPBOX_SOURCE_FOLDER_NAME: null
    DROPBOX_SOURCE_FILE_NAME_MATCH_TYPE: exact_match  ## REQUIRED
    DROPBOX_SOURCE_FILE_NAME: null ## REQUIRED
    DROPBOX_DESTINATION_FOLDER_NAME: null
    DROPBOX_DESTINATION_FILE_NAME: null
    DROPBOX_ACCESS_TOKEN: null  ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
