---
id: amazon-s3-remove-files
title: Amazon S3 Template - Remove Files
hide_title: true
sidebar_label: Remove Files
description: Information about Shipyard's low-code Amazon S3 Remove Files blueprint. Quickly remove files within an S3 bucket. Once the action is completed, it cannot be undone.
keywords:
    - amazon s3
    - blueprint
    - template
---

# Amazon S3 - Remove Files

## Overview


> ## **First time using this Blueprint? Make sure you follow our [S3 authorization guide](https://www.shipyardapp.com/docs/blueprint-library/amazon-s3/amazon-s3-authorization/)**.

Quickly delete a file or multiple files within an Amazon S3 bucket. Once successfully deleted, the action cannot be undone.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| S3 Bucket Name | AWS_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | The target S3 bucket the target file is in |
| S3 Folder Name | AWS_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder within the bucket where the source file is located. If left blank, the file will be scanned for in the root directory |
| S3 File Name Match Type | AWS_FILE_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| S3 File Name | AWS_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the file desired to delete. If regex match is selected, then it is the pattern to match files |
| Access Key ID | AWS_ACCESS_KEY_ID | Password | :heavy_minus_sign: | - | - | The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Secret Access Key | AWS_SECRET_ACCESS_KEY | Password | :heavy_minus_sign: | - | - | The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Default Region | AWS_DEFAULT_REGION | Select | :white_check_mark: | `us-east-2` | `us-east-2`, `us-east-1`, `us-west-1`, `us-west-2`, `af-south-1`, `ap-east-1`, `ap-south-1`, `ap-northeast-3`, `ap-northeast-2`, `ap-northeast-1`, `ap-southeast-1`, `ap-southeast-2`, `ca-central-1`, `cn-north-1`, `cn-northwest-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `eu-south-1`, `eu-north-1`, `sa-east-1`, `me-south-1` | The AWS region for the S3 bucket and IAM user. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Amazon S3 - Remove Files
  inputs:
    AWS_BUCKET_NAME: null ## REQUIRED
    AWS_SOURCE_FOLDER_NAME: null 
    AWS_FILE_MATCH_TYPE: exact_match ## REQUIRED
    AWS_SOURCE_FILE_NAME: null ## REQUIRED
    AWS_ACCESS_KEY_ID: null 
    AWS_SECRET_ACCESS_KEY: null 
    AWS_DEFAULT_REGION: us-east-2 ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "201-203"
```
