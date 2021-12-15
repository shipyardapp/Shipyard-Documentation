---
id: amazon-s3-download-files
title: Amazon S3 Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code Amazon S3 Download Files blueprint.
keywords:
    - amazon s3
    - blueprint
    - template
---

# Amazon S3 - Download Files

## Overview

The **Amazon S3 - Download Files** Blueprint allows users to fetch files from S3 into Shipyard.

## Variables

| Variable Name | Description |
|:---|:---|
| **Bucket Name** | [REQUIRED] The target S3 bucket the target file is stored in |
| **S3 Folder Name** | The optional subdirectory path the file is stored under in S3 |
| **S3 File Name Match Type** | [REQUIRED] The method by which Shipyard should look for the file name in S3 |
| **S3 File Name** | [REQUIRED] The name for the target file stored in S3 |
| **Local Folder Name** | Where Shipyard should store the downloaded file |
| **Local File Name** | [REQUIRED] What the downloaded file should be named in Shipyard |
| **Access Key ID** | [REQUIRED] The access key ID for programmatic IAM user used to download the file - see [**Authorization**](#authorization) above for more information |
| **Secret Access Key** | [REQUIRED] The secret access key for programmatic IAM user used to download the file - see [**Authorization**](#authorization) above for more information |
| **Region** | [REQUIRED] The AWS region for the S3 bucket and IAM user |
