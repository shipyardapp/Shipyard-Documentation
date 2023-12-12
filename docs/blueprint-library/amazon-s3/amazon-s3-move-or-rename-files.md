---
id: amazon-s3-move-or-rename-files
title: Amazon S3 Template - Move or Rename Files
hide_title: true
sidebar_label: Move or Rename Files
description: Information about Shipyard's low-code Amazon S3 Move or Rename Files blueprint. Quickly and seamlessly move a file within an S3 bucket to another bucket or folder, or rename a file within an S3 bucket. 
keywords:
    - amazon s3
    - blueprint
    - template
---

# Amazon S3 - Move or Rename Files

## Overview
Quickly and seamlessly move a file within an S3 bucket to another bucket or folder, or rename a file within an S3 bucket.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| S3 Source Bucket Name | S3_SOURCE_BUCKET_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the S3 bucket where the file is located |
| S3 Source Folder Name | S3_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder within the bucket where the source file is located. If left blank, the file will be scanned for in the root directory |
| S3 Original File Name Match Type | S3_FILE_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "S3 Original File Name" will look for one file with exact match, or multiple files using regex. |
| S3 Original File Name | S3_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the file desired to move. If regex match is selected, then it is the pattern to match files |
| S3 Destination Bucket Name | S3_DESTINATION_BUCKET_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the destination S3 Bucket |
| S3 Destination Folder Name | S3_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The folder in S3 in which you would like to move the file. If left blank, the file will be moved to the root directory |
| S3 New File Name | S3_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name of the file once it is moved |
| Default Region | AWS_DEFAULT_REGION  | Select |:white_check_mark: | `us-east-2` | `us-east-2`,`us-east-1`,`us-west-1`,`us-west-2`,`af-south-1`,`ap-east-1`,`ap-south-1`,`ap-northeast-3`,`ap-northeast-2`,`ap-northeast-1`,`ap-southeast-1`,`ap-southeast-2`,`ca-central-1`,`cn-north-1`,`cn-northwest-1`,`eu-central-1`,`eu-west-1`,`eu-west-2`,`eu-west-3`,`eu-south-1`,`eu-north-1`,`sa-east-1`,`me-south-1`, | The AWS region for the S3 bucket and IAM user. |
| Access Key ID | AWS_ACCESS_KEY_ID  | Password |:white_check_mark: | - | - | The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Secret Access Key | AWS_SECRET_ACCESS_KEY  | Password |:white_check_mark: | - | - | The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Amazon S3 - Move or Rename Files
    inputs:
        S3_SOURCE_BUCKET_NAME: null  ## REQUIRED
        S3_SOURCE_FOLDER_NAME: null
        S3_FILE_MATCH_TYPE: exact_match  ## REQUIRED
        S3_SOURCE_FILE_NAME: null ## REQUIRED
        S3_DESTINATION_BUCKET_NAME: null ## REQUIRED
        S3_DESTINATION_FOLDER_NAME: null
        S3_DESTINATION_FILE_NAME: null
        AWS_DEFAULT_REGION: us-east-2  ## REQUIRED
        AWS_ACCESS_KEY_ID: null ## REQUIRED
        AWS_SECRET_ACCESS_KEY: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   201
    -   203

```
