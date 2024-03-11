---
id: amazon-s3-download-files
title: Amazon S3 Template - Download Files to Shipyard
hide_title: true
sidebar_label: Download Files to Shipyard
description: Information about Shipyard's low-code Amazon S3 Download Files to Shipyard blueprint. Quickly export one or more files from an Amazon S3 bucket.
keywords:
  - amazon s3
  - blueprint
  - template
---

# Amazon S3 - Download Files to Shipyard

## Overview

Quickly export one or more files from an Amazon S3 bucket. Once the files have downloaded, transfer them to another service or run another Vessel against the data.


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Bucket Name | S3_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | The target S3 bucket the target file is stored in. |
| S3 Folder Name | S3_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in the S3 Bucket. If left blank, looks in the root directory. |
| S3 File Name Match Type | S3_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "S3 File Name" will look for one file with exact match, or multiple files using regex. |
| S3 File Name | S3_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file in the S3 bucket. Can be regex if "Match Type" is set accordingly. |
| Shipyard Folder Name | S3_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded on Shipyard. Leaving blank will place the file in the home directory. |
| Shipyard File Name | S3_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded on Shipyard. If left blank, defaults to the original file name(s). |
| Access Key ID | AWS_ACCESS_KEY_ID | Password | :white_check_mark: | - | - | The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Secret Access Key | AWS_SECRET_ACCESS_KEY | Password | :white_check_mark: | - | - | The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Region | AWS_DEFAULT_REGION | Select | :white_check_mark: | `us-east-2` | `us-east-2`,`us-east-1`,`us-west-1`,`us-west-2`,`af-south-1`,`ap-east-1`,`ap-south-1`,`ap-northeast-3`,`ap-northeast-2`,`ap-southeast-1`,`ap-southeast-2`,`ap-northeast-1`,`ca-central-1`,`cn-north-1`,`cn-northwest-1`,`eu-central-1`,`eu-west-1`,`eu-west-2`,`eu-south-1`,`eu-west-3`,`eu-north-1`,`sa-east-1`,`me-south-1`, | The AWS region for the S3 bucket and IAM user. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Amazon S3 - Download Files to Shipyard
  inputs:
    S3_BUCKET_NAME: null  ## REQUIRED
    S3_SOURCE_FOLDER_NAME: null
    S3_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    S3_SOURCE_FILE_NAME: null ## REQUIRED
    S3_DESTINATION_FOLDER_NAME: null
    S3_DESTINATION_FILE_NAME: null
    AWS_ACCESS_KEY_ID: null  ## REQUIRED
    AWS_SECRET_ACCESS_KEY: null ## REQUIRED
    AWS_DEFAULT_REGION: us-east-2 ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '104'
    - '105'
    - '106'
    - '107'
    - '249'
 ```


