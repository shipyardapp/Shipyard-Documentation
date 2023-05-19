---
id: google-drive-upload-files
title: Google Drive Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code Google Drive Upload Files blueprint. Easily import one or more files directly into your Google Drive account. 
keywords:
    - google drive
    - blueprint
    - template
---

# Google Drive - Upload Files

## Overview
Easily import one or more files directly into a Google Drive account. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Local File Name | DRIVE_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| Local File Name Match Type | DRIVE_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| Local Folder Name | DRIVE_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Shared Drive Name | DRIVE_SHARED_DRIVE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the Shared Drive the file exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Google Drive Folder Name | DRIVE_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of Google Drive which will be inaccessible in the UI. |
| Google Drive File Name | DRIVE_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | `-` | - | JSON from a Google Cloud Service account key. |


