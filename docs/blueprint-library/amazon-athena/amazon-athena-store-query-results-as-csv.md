---
id: amazon-athena-store-query-results-as-csv
title: Amazon Athena Template - Download Query Results to Platform
hide_title: true
sidebar_label: Download Query Results to Platform
description: Information about Platform's low-code Amazon Athena Download Query Results to Platform blueprint. Turn the results of your SQL SELECT statement into a CSV file.
keywords:
  - amazon athena
  - blueprint
  - template
---

# Amazon Athena - Download Query Results to Platform



## Overview

Turn the results of your SQL SELECT statement into a CSV file. Extract your Amazon Athena data into files for easier delivery to clients and partners.


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Database | ATHENA_DATABASE | Alphanumeric | :white_check_mark: | - | - | The name of the Athena database the run the query against. |
| Query | ATHENA_QUERY | Alphanumeric | :white_check_mark: | - | - | The SQL-style query to run against the Athena database. |
| S3 Log Bucket Name | ATHENA_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | The S3 bucket to output the query logs into. |
| S3 Log Folder Name | ATHENA_LOG_FOLDER | Alphanumeric | :heavy_minus_sign: | - | - | The optional subdirectory within the S3 bucket to store query logs. |
| Shipyard File Name | ATHENA_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | `output.csv` | - | The file name that you want your generated CSV to have. |
| Shipyard Folder Name | ATHENA_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| Access Key ID | AWS_ACCESS_KEY_ID | Password | :white_check_mark: | - | - | The access key ID for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Secret Access Key | AWS_SECRET_ACCESS_KEY | Password | :white_check_mark: | - | - | The secret access key for programmatic IAM user used to download the file. See Authorization documentation for more information. |
| Region | AWS_DEFAULT_REGION | Select | :white_check_mark: | `us-east-2` | `us-east-2`,`us-east-1`,`us-west-1`,`us-west-2`,`af-south-1`,`ap-east-1`,`ap-south-1`,`ap-northeast-3`,`ap-northeast-2`,`ap-southeast-1`,`ap-southeast-2`,`ap-northeast-1`,`ca-central-1`,`cn-north-1`,`cn-northwest-1`,`eu-central-1`,`eu-west-1`,`eu-west-2`,`eu-south-1`,`eu-west-3`,`eu-north-1`,`sa-east-1`,`me-south-1`, | The AWS region for the S3 bucket and IAM user. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Amazon Athena - Download Query Results to Shipyard
  inputs:
    ATHENA_DATABASE: null  ## REQUIRED
    ATHENA_QUERY: null ## REQUIRED
    ATHENA_BUCKET_NAME: null ## REQUIRED
    ATHENA_LOG_FOLDER: null
    ATHENA_DESTINATION_FILE_NAME: output.csv ## REQUIRED
    ATHENA_DESTINATION_FOLDER_NAME: null
    AWS_ACCESS_KEY_ID: null ## REQUIRED
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
    - '200'
    - '249'
 ```


