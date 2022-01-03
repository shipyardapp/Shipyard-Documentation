---
id: amazon-s3-download-files
title: Amazon S3 Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code Amazon S3 Download Files blueprint. Quickly export one or more files from an Amazon S3 bucket. Once the files have downloaded, transfer them to another service or run another Vessel against the data.
keywords:
    - amazon s3
    - blueprint
    - template
---

# Amazon S3 - Download Files

## Overview

Quickly export one or more files from an Amazon S3 bucket. Once the files have downloaded, transfer them to another service or run another Vessel against the data.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Bucket Name | S3_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | - |
| S3 Folder Name | S3_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | - |
| S3 File Name Match Type | S3_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | - |
| S3 File Name | S3_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | - |
| Local Folder Name | S3_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | - |
| Local File Name | S3_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | - |
| Access Key ID | S3_AWS_ACCESS_KEY_ID | Password | :white_check_mark: | - | - | - |
| Secret Access Key | S3_AWS_SECRET_ACCESS_KEY | Password | :white_check_mark: | - | - | - |
| Region | S3_AWS_DEFAULT_REGION | Select | :white_check_mark: | us-east-2 | `us-east-2`, `us-east-1`, `us-west-1`, `us-west-2`, `af-south-1`, `ap-east-1`, `ap-south-1`, `ap-northeast-3`, `ap-northeast-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-northeast-1`, `ca-central-1`, `cn-north-1`, `cn-northwest-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-south-1`, `eu-west-3`, `eu-north-1`, `sa-east-1`, `me-south-1` | - |


