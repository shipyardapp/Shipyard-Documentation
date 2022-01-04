---
id: google-cloud-storage-upload-files
title: Google Cloud Storage Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code Google Cloud Storage Upload Files blueprint. Easily import one or more files directly into a Google Cloud Storage (GCS) bucket, no matter how big they are.
keywords:
    - google cloud storage
    - blueprint
    - template
---

# Google Cloud Storage - Upload Files

## Overview

Import one or more files directly into a Google Cloud Storage (GCS) bucket. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

If the folder name provided is new, a new folder will automatically be created.

All files uploaded will inherit the default settings for the GCS bucket.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br><br><br>Regex Match: `regex_match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| GCS Bucket Name | bucket_name | Alphanumeric | :white_check_mark: | - | - | Name of the GCS bucket to upload the file(s) to. |
| GCS Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder in the GCS bucket to upload the file(s) to. If left blank, will upload to the root directory. |
| GCS File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Service Account | service_account | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


