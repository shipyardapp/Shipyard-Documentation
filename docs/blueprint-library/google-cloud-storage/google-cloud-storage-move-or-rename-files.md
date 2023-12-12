---
id: google-cloud-storage-move-or-rename-files
title: Google Cloud Storage Template - Move or Rename Files
hide_title: true
sidebar_label: Move or Rename Files
description: Information about Shipyard's low-code Google Cloud Storage Move or Rename Files blueprint. Quickly move one or more files from a Google Cloud Storage (GCS) bucket or folder. 
keywords:
    - google cloud storage
    - blueprint
    - template
---

# Google Cloud Storage - Move or Rename Files

## Overview
Quickly move and rename one or more files from a Google Cloud Storage (GCS) bucket. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| GCS Source Bucket Name | GCS_SOURCE_BUCKET_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the bucket where the target file resides |
| GCS Source Folder Name | GCS_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name of the folder where the target file resides. If blank, will be placed in the root directory |
| GCS File Name Match Type | GCS_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "GCS Original File Name" will look for one file with exact match, or multiple files using regex. |
| GCS Original File Name | GCS_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file in the GCS bucket. Can be regex if "Match Type" is set accordingly. |
| GCS Destination Bucket Name | GCS_DESTINATION_BUCKET_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the bucket where the target file will be moved to |
| GCS Destination Folder Name | GCS_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name of the folder where the target file is going to be moved to. If blank, will be placed in the root directory |
| GCS New File Name | GCS_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name of the file once it is moved to a new bucket or folder. If left blank, the original file will be used |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Google Cloud Storage - Move or Rename Files
    inputs:
        GCS_SOURCE_BUCKET_NAME: null  ## REQUIRED
        GCS_SOURCE_FOLDER_NAME: null
        GCS_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
        GCS_SOURCE_FILE_NAME: null ## REQUIRED
        GCS_DESTINATION_BUCKET_NAME: null ## REQUIRED
        GCS_DESTINATION_FOLDER_NAME: null
        GCS_DESTINATION_FILE_NAME: null
        GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   201
    -   205

```
