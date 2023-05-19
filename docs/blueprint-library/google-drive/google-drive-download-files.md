---
id: google-drive-download-files
title: Google Drive Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code Google Drive Download Files blueprint. Quickly export one or more files from your Google Drive account. 
keywords:
    - google drive
    - blueprint
    - template
---

# Google Drive - Download Files

## Overview
Quickly export one or more files from your Google Drive account. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Google Drive Folder Name | DRIVE_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the folder where the file is stored in Google Drive. Leaving blank will place the file in the root directory of Google Drive which is inaccessible from the UI. |
| Google Drive File Name Match Type | DRIVE_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Google Drive File Name" will look for one file with exact match, or multiple files using regex. |
| Google Drive File Name | DRIVE_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the target file in Google Drive. Can be regex if "Match Type" is set accordingly. |
| Local Folder Name | DRIVE_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Local File Name | DRIVE_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Shared Drive Name | DRIVE_SHARED_DRIVE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | `-` | - | JSON from a Google Cloud Service account key. |


