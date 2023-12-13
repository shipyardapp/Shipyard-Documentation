---
id: google-drive-upload-files
title: Google Drive Template - Upload Files from Shipyard
hide_title: true
sidebar_label: Upload Files from Shipyard
description: Information about Shipyard's low-code Google Drive Upload Files from Shipyard blueprint. Easily import one or more files directly into your Google Drive account. 
keywords:
    - google drive
    - blueprint
    - template
---

# Google Drive - Upload Files from Shipyard

## Overview
Easily import one or more files directly into a Google Drive account. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 
2. This blueprint supports providing either the name of the Folder/Shared Drive or the ID itself. The ID is the recommended approach because it is unique and can be copied from the URL, see the [authorization guide](https://www.shipyardapp.com/docs/blueprint-library/google-drive/google-drive-authorization/) for details.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Shipyard File Name | DRIVE_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| Shipyard File Name Match Type | DRIVE_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Shipyard File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard Folder Name | DRIVE_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Shared Drive Name | DRIVE_SHARED_DRIVE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the Shared Drive the file exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Google Drive Folder Name | DRIVE_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of Google Drive which will be inaccessible in the UI. |
| Google Drive File Name | DRIVE_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Google Drive - Upload Files from Shipyard
  inputs:
    DRIVE_SOURCE_FILE_NAME: null  ## REQUIRED
    DRIVE_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    DRIVE_SOURCE_FOLDER_NAME: null
    DRIVE_SHARED_DRIVE_NAME: null
    DRIVE_DESTINATION_FOLDER_NAME: null
    DRIVE_DESTINATION_FILE_NAME: null
    GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '202'
    - '203'
    - '204'
    - '205'
    - '206'
    - '207'
    - '208'
    - '209'
    - '210'
    - '249'

```
