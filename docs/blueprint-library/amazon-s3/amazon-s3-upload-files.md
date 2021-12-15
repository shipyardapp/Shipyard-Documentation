---
id: amazon-s3-upload-files
title: Amazon S3 Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code Amazon S3 Upload Files blueprint.
keywords:
    - amazon s3
    - blueprint
    - template
---

# Amazon S3 - Upload Files

## Overview

The **Amazon S3 - Upload Files** Blueprint allows users to send files Shipyard into S3.

## Variables

| Variable Name | Description |
|:---|:---|
| **Bucket Name** | [REQUIRED] The target S3 bucket the target file will be stored in |
| **Local Folder Name** | The optional subdirectory path the file is stored under in Shipyard |
| **Local File Name Match Type** | [REQUIRED] The method by which Shipyard should look for the file name in Shipyard |
| **Local File Name** | [REQUIRED] The name for the target file stored in Shipyard |
| **S3 Folder Name** | Where Shipyard should store the uploaded file in S3 |
| **S3 File Name** | [REQUIRED] What the uploaded file should be named in S3 |
| **Access Key ID** | [REQUIRED] The access key ID for programmatic IAM user used to upload the file - see [**Authorization**](#authorization) above for more information |
| **Secret Access Key** | [REQUIRED] The secret access key for programmatic IAM user used to upload the file - see [**Authorization**](#authorization) above for more information |
| **Region** | [REQUIRED] The AWS region for the S3 bucket and IAM user |
| **Extra Variables** | Extra arguments that may be passed to the S3 operation |
