---
id: amazon-s3-upload-files
title: Amazon S3 Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code Amazon S3 Upload Files blueprint. Easily import one or more files directly into an Amazon S3 bucket, no matter how big they are.
keywords:
    - amazon s3
    - blueprint
    - template
---

# Amazon S3 - Upload Files

## Overview

> ## **First time using this Blueprint? Make sure you follow our [S3 authorization guide](https://www.shipyardapp.com/docs/blueprint-library/amazon-s3/amazon-s3-authorization/)**.

Easily import one or more files directly into an Amazon S3 bucket, no matter how big they are.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 




## Variables

| Name                       | Reference                      | Type         | Required           | Default       | Options                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                      |
|:---------------------------|:-------------------------------|:-------------|:-------------------|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| Bucket Name                | S3_BUCKET_NAME                 | Alphanumeric | :white_check_mark: | -             | -                                                                                                                                                                                                                                                                                                                                                   | Name of the S3 bucket to upload the file(s) to.                                                                                  |
| Local Folder Name          | S3_SOURCE_FOLDER_NAME          | Alphanumeric | :heavy_minus_sign: | -             | -                                                                                                                                                                                                                                                                                                                                                   | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory.             |
| Local File Name Match Type | S3_SOURCE_FILE_NAME_MATCH_TYPE | Select       | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`                                                                                                                                                                                                                                                                              | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex.              |
| Local File Name            | S3_SOURCE_FILE_NAME            | Alphanumeric | :white_check_mark: | -             | -                                                                                                                                                                                                                                                                                                                                                   | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly                                             |
| S3 Folder Name             | S3_DESTINATION_FOLDER_NAME     | Alphanumeric | :heavy_minus_sign: | -             | -                                                                                                                                                                                                                                                                                                                                                   | Folder in the S3 bucket to upload the file(s) to. If left blank, will upload to the root directory.                              |
| S3 File Name               | S3_DESTINATION_FILE_NAME       | Alphanumeric | :heavy_minus_sign: | -             | -                                                                                                                                                                                                                                                                                                                                                   | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s).                                   |
| Access Key ID              | AWS_ACCESS_KEY_ID              | Password     | :white_check_mark: | -             | -                                                                                                                                                                                                                                                                                                                                                   | The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information.     |
| Secret Access Key          | AWS_SECRET_ACCESS_KEY          | Password     | :white_check_mark: | -             | -                                                                                                                                                                                                                                                                                                                                                   | The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Region                     | AWS_DEFAULT_REGION             | Select       | :white_check_mark: | `us-east-2`   | `us-east-2`, `us-east-1`, `us-west-1`, `us-west-2`, `af-south-1`, `ap-east-1`, `ap-south-1`, `ap-northeast-3`, `ap-northeast-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-northeast-1`, `ca-central-1`, `cn-north-1`, `cn-northwest-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-south-1`, `eu-west-3`, `eu-north-1`, `sa-east-1`, `me-south-1` | The AWS region for the S3 bucket and IAM user.                                                                                   |
| Extra Variables            | S3_EXTRA_ARGS                  | Alphanumeric | :heavy_minus_sign: | {}            | -                                                                                                                                                                                                                                                                                                                                                   | Extra arguments that may be passed to the S3 operation.                                                                          |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Amazon S3 - Upload Files
  inputs:
    S3_BUCKET_NAME: null ## REQUIRED
    S3_SOURCE_FOLDER_NAME: null 
    S3_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    S3_SOURCE_FILE_NAME: null ## REQUIRED
    S3_DESTINATION_FOLDER_NAME: null 
    S3_DESTINATION_FILE_NAME: null 
    AWS_ACCESS_KEY_ID: null ## REQUIRED
    AWS_SECRET_ACCESS_KEY: null ## REQUIRED
    AWS_DEFAULT_REGION: us-east-2 ## REQUIRED
    S3_EXTRA_ARGS: {} 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
