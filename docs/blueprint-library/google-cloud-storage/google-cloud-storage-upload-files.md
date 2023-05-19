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

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Local Folder Name | GCS_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | GCS_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| Local File Name | GCS_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| GCS Bucket Name | GCS_BUCKET_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the GCS bucket to upload the file(s) to. |
| GCS Folder Name | GCS_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder in the GCS bucket to upload the file(s) to. If left blank, will upload to the root directory. |
| GCS File Name | GCS_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | `-` | - | JSON from a Google Cloud Service account key. |


