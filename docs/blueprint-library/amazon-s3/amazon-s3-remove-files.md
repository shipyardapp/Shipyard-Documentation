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
Quickly delete a file or multiple files within an Amazon S3 bucket. Once successfully deleted, the action cannot be undone.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| S3 Bucket Name | S3_BUCKET_NAME  | Alphanumeric |:white_check_mark: | `-` | - | The target S3 bucket the target file is in |
| S3 Folder Name | S3_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the folder within the bucket where the source file is located. If left blank, the file will be scanned for in the root directory |
| S3 File Name Match Type | S3_FILE_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| S3 File Name | S3_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | The name of the file desired to delete. If regex match is selected, then it is the pattern to match files |
| Access Key ID | AWS_ACCESS_KEY_ID  | Password |:heavy_minus_sign: | `-` | - | The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Secret Access Key | AWS_SECRET_ACCESS_KEY  | Password |:heavy_minus_sign: | `-` | - | The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Default Region | AWS_DEFAULT_REGION  | Select |:white_check_mark: | `us-east-2` | `us-east-2`,`us-east-1`,`us-west-1`,`us-west-2`,`af-south-1`,`ap-east-1`,`ap-south-1`,`ap-northeast-3`,`ap-northeast-2`,`ap-northeast-1`,`ap-southeast-1`,`ap-southeast-2`,`ca-central-1`,`cn-north-1`,`cn-northwest-1`,`eu-central-1`,`eu-west-1`,`eu-west-2`,`eu-west-3`,`eu-south-1`,`eu-north-1`,`sa-east-1`,`me-south-1`, | The AWS region for the S3 bucket and IAM user. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  type: BLUEPRINT
  blueprint: 'Amazon S3 - Remove Files'
  inputs: 
      ## S3_BUCKET_NAME: The target S3 bucket the target file is in
      ## S3_SOURCE_FOLDER_NAME: Name of the folder within the bucket where the source file is located. If left blank, the file will be scanned for in the root directory
      ## S3_FILE_MATCH_TYPE: Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex.
      ## S3_SOURCE_FILE_NAME: The name of the file desired to delete. If regex match is selected, then it is the pattern to match files
      ## AWS_ACCESS_KEY_ID: The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information.
      ## AWS_SECRET_ACCESS_KEY: The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information.
      ## AWS_DEFAULT_REGION: The AWS region for the S3 bucket and IAM user.
      ## For more detailed setup information, visit https://www.shipyardapp.com/docs/blueprint-library/amazon-s3#remove-files-blueprint
      'S3_BUCKET_NAME': ## REQUIRED ## ie. example-bucket
      'S3_SOURCE_FOLDER_NAME': ## ie. folder/structure
      'S3_FILE_MATCH_TYPE': 'exact_match' ## REQUIRED
      'S3_SOURCE_FILE_NAME': ## REQUIRED ## ie. Name of the file or the regex pattern
      'AWS_ACCESS_KEY_ID': ## ie. Your access key id
      'AWS_SECRET_ACCESS_KEY': ## ie.  wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
      'AWS_DEFAULT_REGION': 'us-east-2' ## REQUIRED
guardrails:
## Set how your Vessel should handle errors and retries.
  retry_count: 0
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges: ## Exit code values(s) that will not be retried if encountered during a Voyage.
      # - 0-255
```
