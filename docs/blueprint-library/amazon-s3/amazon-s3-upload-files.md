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

Easily import one or more files directly into an Amazon S3 bucket, no matter how big they are.

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/amazon-s3). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/amazons3-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Bucket Name | S3_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | - |
| Local Folder Name | S3_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | - |
| Local File Name Match Type | S3_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | - |
| Local File Name | S3_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | - |
| S3 Folder Name | S3_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | - |
| S3 File Name | S3_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | - |
| Access Key ID | S3_AWS_ACCESS_KEY_ID | Password | :white_check_mark: | - | - | - |
| Secret Access Key | S3_AWS_SECRET_ACCESS_KEY | Password | :white_check_mark: | - | - | - |
| Region | S3_AWS_DEFAULT_REGION | Select | :white_check_mark: | us-east-2 | `us-east-2`, `us-east-1`, `us-west-1`, `us-west-2`, `af-south-1`, `ap-east-1`, `ap-south-1`, `ap-northeast-3`, `ap-northeast-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-northeast-1`, `ca-central-1`, `cn-north-1`, `cn-northwest-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-south-1`, `eu-west-3`, `eu-north-1`, `sa-east-1`, `me-south-1` | - |
| Extra Variables | S3_EXTRA_ARGS | Alphanumeric | :heavy_minus_sign: | {} | - | - |


