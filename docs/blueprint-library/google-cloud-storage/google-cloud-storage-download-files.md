---
id: google-cloud-storage-download-files
title: Google Cloud Storage Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code Google Cloud Storage Download Files blueprint. Quickly export one or more files a Google Cloud Storage (GCS) bucket. Once the files have downloaded, transfer them to another service or run another Vessel against the data.
keywords:
    - google cloud storage
    - blueprint
    - template
---

# Google Cloud Storage - Download Files

## Overview

Quickly export one or more files from a Google Cloud Storage (GCS) bucket. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Bucket Name | bucket_name | Alphanumeric | :white_check_mark: | - | - | Name of the GCS bucket to fetch the file from. |
| GCS Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in the GCS Bucket. If left blank, looks in the root directory.  |
| GCS File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | Determines if the text in &#34;GCS File Name&#34; will look for one file with exact match, or multiple files using regex. |
| GCS File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file in the GCS bucket. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Local Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Local File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Service Account | service_account | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


