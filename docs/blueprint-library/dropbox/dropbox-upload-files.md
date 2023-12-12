---
id: dropbox-upload-files
title: Dropbox Template - Upload Files from Shipyard
hide_title: true
sidebar_label: Upload Files from Shipyard
description: Information about Shipyard's low-code Dropbox Upload Files from Shipyard blueprint. Easily import one or more files directly into your Dropbox account. 
keywords:
    - dropbox
    - blueprint
    - template
---

# Dropbox - Upload Files from Shipyard

## Overview
Easily import one or more files directly into Dropbox. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

If the folder name provided doesn't already exist, it will be created.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Shipyard Folder Name | DROPBOX_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Shipyard File Name Match Type | DROPBOX_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Shipyard File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard File Name | DROPBOX_SOURCE_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| Dropbox Folder Name | DROPBOX_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of Dropbox. |
| Dropox File Name | DROPBOX_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | What to name the file(s) being uploaded to Dropbox. If left blank, defaults to the original file name(s).  |
| Access Token | DROPBOX_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | Access token, with no expiration, to access your Dropbox files. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Dropbox - Upload Files from Shipyard
    inputs:
        DROPBOX_SOURCE_FOLDER_NAME: null
        DROPBOX_SOURCE_FILE_NAME_MATCH_TYPE: exact_match  ## REQUIRED
        DROPBOX_SOURCE_FILE_NAME: null
        DROPBOX_DESTINATION_FOLDER_NAME: null
        DROPBOX_DESTINATION_FILE_NAME: null  ## REQUIRED
        DROPBOX_ACCESS_TOKEN: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
