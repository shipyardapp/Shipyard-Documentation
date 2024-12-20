---
id: google-cloud-storage-download-files
title: Google Cloud Storage Template - Download Files to Platform
hide_title: true
sidebar_label: Download Files to Platform
description: Information about Platform's low-code Google Cloud Storage Download Files to Platform blueprint. Quickly export one or more files a Google Cloud Storage (GCS) bucket.
keywords:
  - google cloud storage
  - blueprint
  - template
---

# Google Cloud Storage - Download Files to Platform



## Overview

Quickly export one or more files from a Google Cloud Storage (GCS) bucket. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Bucket Name | GCS_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the GCS bucket to fetch the file from. |
| GCS Folder Name | GCS_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in the GCS Bucket. If left blank, looks in the root directory.  |
| GCS File Name Match Type | GCS_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "GCS File Name" will look for one file with exact match, or multiple files using regex. |
| GCS File Name | GCS_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file in the GCS bucket. Can be regex if "Match Type" is set accordingly. |
| Shipyard Folder Name | GCS_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Shipyard File Name | GCS_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Google Cloud Storage - Download Files to Shipyard
  inputs:
    GCS_BUCKET_NAME: null  ## REQUIRED
    GCS_SOURCE_FOLDER_NAME: null
    GCS_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    GCS_SOURCE_FILE_NAME: null ## REQUIRED
    GCS_DESTINATION_FOLDER_NAME: null
    GCS_DESTINATION_FILE_NAME: null
    GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '202'
    - '207'
 ```


