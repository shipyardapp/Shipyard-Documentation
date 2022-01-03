---
id: amazon-athena-execute-query
title: Amazon Athena Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code Amazon Athena Execute Query blueprint. Execute any SQL query against Amazon Athena. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.
keywords:
    - amazon athena
    - blueprint
    - template
---

# Amazon Athena - Execute Query

## Overview

Execute any SQL query against Amazon Athena. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/amazon-athena). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/amazonathena-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Database | ATHENA_DATABASE | Alphanumeric | :white_check_mark: | - | - | - |
| Query | ATHENA_QUERY | Alphanumeric | :white_check_mark: | - | - | - |
| S3 Log Bucket Name | ATHENA_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | - |
| S3 Log Folder Name | ATHENA_LOG_FOLDER | Alphanumeric | :heavy_minus_sign: | - | - | - |
| Access Key ID | ATHENA_AWS_ACCESS_KEY_ID | Password | :white_check_mark: | - | - | - |
| Secret Access Key | ATHENA_AWS_SECRET_ACCESS_KEY | Password | :white_check_mark: | - | - | - |
| Region | ATHENA_AWS_DEFAULT_REGION | Select | :white_check_mark: | us-east-2 | `us-east-2`, `us-east-1`, `us-west-1`, `us-west-2`, `af-south-1`, `ap-east-1`, `ap-south-1`, `ap-northeast-3`, `ap-northeast-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-northeast-1`, `ca-central-1`, `cn-north-1`, `cn-northwest-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-south-1`, `eu-west-3`, `eu-north-1`, `sa-east-1`, `me-south-1` | - |


