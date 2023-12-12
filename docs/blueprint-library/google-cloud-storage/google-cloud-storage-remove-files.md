---
id: google-cloud-storage-remove-files
title: Google Cloud Storage Template - Delete Files
hide_title: true
sidebar_label: Delete Files
description: Information about Shipyard's low-code Google Cloud Storage Delete Files blueprint. Quickly remove one or more files from a Google Cloud Storage (GCS) bucket or folder 
keywords:
    - google cloud storage
    - blueprint
    - template
---

# Google Cloud Storage - Delete Files

## Overview
Quickly remove one or more files from a Google Cloud Storage (GCS) bucket. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| GCS Bucket Name | GCS_SOURCE_BUCKET_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the bucket where the target file resides |
| GCS Folder Name | GCS_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name of the folder where the target file resides. If left blank, the root directory will be scanned |
| GCS File Name Match Type | GCS_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "GCS File Name" will look for one file with exact match, or multiple files using regex. |
| GCS File Name | GCS_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file in the GCS bucket. Can be regex if "Match Type" is set accordingly. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Google Cloud Storage - Delete Files
    inputs:
        GCS_SOURCE_BUCKET_NAME: null  ## REQUIRED
        GCS_SOURCE_FOLDER_NAME: null
        GCS_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
        GCS_SOURCE_FILE_NAME: null ## REQUIRED
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
