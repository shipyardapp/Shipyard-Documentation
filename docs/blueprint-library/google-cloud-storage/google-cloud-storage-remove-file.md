---
id: google-cloud-storage-remove-file
title: Google Cloud Storage Template - Remove File
hide_title: true
sidebar_label: Remove File
description: Information about Shipyard's low-code Google Cloud Storage Remove File blueprint. Quickly remove one or more files from a Google Cloud Storage (GCS) bucket or folder
keywords:
    - google cloud storage
    - blueprint
    - template
---

# Google Cloud Storage - Remove File

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Cloud Storage authorization guide](https://www.shipyardapp.com/docs/blueprint-library/google-cloud-storage/google-cloud-storage-authorization/)**.

Quickly remove one or more files from a Google Cloud Storage (GCS) bucket. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| GCS Bucket Name | GCS_SOURCE_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the bucket where the target file resides |
| GCS Folder Name | GCS_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the folder where the target file resides. If left blank, the root directory will be scanned |
| GCS File Name Match Type | GCS_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in "GCS File Name" will look for one file with exact match, or multiple files using regex. |
| GCS File Name | GCS_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file in the GCS bucket. Can be regex if "Match Type" is set accordingly. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


## YAML

<<<<<<< HEAD
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
=======
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).
>>>>>>> docs-blueprint-libaray-update-20221114.349751248

```yaml
source:
  blueprint: Google Cloud Storage - Remove File
  inputs:
    GCS_SOURCE_BUCKET_NAME: null ## REQUIRED
    GCS_SOURCE_FOLDER_NAME: null 
    GCS_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    GCS_SOURCE_FILE_NAME: null ## REQUIRED
    GOOGLE_APPLICATION_CREDENTIALS: null ## REQUIRED
  type: BLUEPRINT
guardrails:
<<<<<<< HEAD
  retry_count: 0
=======
  retry_count: 1
>>>>>>> docs-blueprint-libaray-update-20221114.349751248
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "201"
    - "205"
```
