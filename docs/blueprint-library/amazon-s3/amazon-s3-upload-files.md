---
id: amazon-s3-upload-files
title: Amazon S3 Template - Upload Files from Shipyard
hide_title: true
sidebar_label: Upload Files from Shipyard
description: Information about Shipyard's low-code Amazon S3 Upload Files from Shipyard blueprint. Easily import one or more files directly into an Amazon S3 bucket, no matter how big they are. 
keywords:
    - amazon s3
    - blueprint
    - template
---

# Amazon S3 - Upload Files from Shipyard

## Overview
Easily import one or more files directly into an Amazon S3 bucket, no matter how big they are.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Bucket Name | S3_BUCKET_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the S3 bucket to upload the file(s) to. |
| Shipyard Folder Name | S3_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Shipyard File Name Match Type | S3_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Shipyard File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard File Name | S3_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly |
| S3 Folder Name | S3_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder in the S3 bucket to upload the file(s) to. If left blank, will upload to the root directory. |
| S3 File Name | S3_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |
| Access Key ID | S3_AWS_ACCESS_KEY_ID  | Password |:white_check_mark: | - | - | The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Secret Access Key | S3_AWS_SECRET_ACCESS_KEY  | Password |:white_check_mark: | - | - | The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Region | S3_AWS_DEFAULT_REGION  | Select |:white_check_mark: | `us-east-2` | `us-east-2`,`us-east-1`,`us-west-1`,`us-west-2`,`af-south-1`,`ap-east-1`,`ap-south-1`,`ap-northeast-3`,`ap-northeast-2`,`ap-southeast-1`,`ap-southeast-2`,`ap-northeast-1`,`ca-central-1`,`cn-north-1`,`cn-northwest-1`,`eu-central-1`,`eu-west-1`,`eu-west-2`,`eu-south-1`,`eu-west-3`,`eu-north-1`,`sa-east-1`,`me-south-1`, | The AWS region for the S3 bucket and IAM user. |
| Extra Variables | S3_EXTRA_ARGS  | Alphanumeric |:heavy_minus_sign: | `{}` | - | Extra arguments that may be passed to the S3 operation. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  type: BLUEPRINT
  blueprint: 'Amazon S3 - Upload Files'
  inputs: 
      ## S3_BUCKET_NAME: Name of the S3 bucket to upload the file(s) to.
      ## S3_SOURCE_FOLDER_NAME: Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory.
      ## S3_SOURCE_FILE_NAME_MATCH_TYPE: Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex.
      ## S3_SOURCE_FILE_NAME: Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly
      ## S3_DESTINATION_FOLDER_NAME: Folder in the S3 bucket to upload the file(s) to. If left blank, will upload to the root directory.
      ## S3_DESTINATION_FILE_NAME: What to name the file(s) being uploaded. If left blank, defaults to the original file name(s).
      ## AWS_ACCESS_KEY_ID: The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information.
      ## AWS_SECRET_ACCESS_KEY: The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information.
      ## AWS_DEFAULT_REGION: The AWS region for the S3 bucket and IAM user.
      ## S3_EXTRA_ARGS: Extra arguments that may be passed to the S3 operation.
      ## For more detailed setup information, visit https://www.shipyardapp.com/docs/blueprint-library/amazon-s3#upload-files-blueprint
      'S3_BUCKET_NAME': ## REQUIRED ## ie. example-bucket
      'S3_SOURCE_FOLDER_NAME': ## ie. folder/structure/
      'S3_SOURCE_FILE_NAME_MATCH_TYPE': 'exact_match' ## REQUIRED
      'S3_SOURCE_FILE_NAME': ## REQUIRED ## ie. input_file.csv
      'S3_DESTINATION_FOLDER_NAME': ## ie. folder/structure/
      'S3_DESTINATION_FILE_NAME': ## ie. output_file.csv
      'AWS_ACCESS_KEY_ID': ## REQUIRED ## ie. AKIAIOSFODNN7EXAMPLE
      'AWS_SECRET_ACCESS_KEY': ## REQUIRED ## ie.  wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
      'AWS_DEFAULT_REGION': 'us-east-2' ## REQUIRED
      'S3_EXTRA_ARGS': '{}'
guardrails:
## Set how your Vessel should handle errors and retries.
  retry_count: 0
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges: ## Exit code values(s) that will not be retried if encountered during a Voyage.
      # - 0-255
```
