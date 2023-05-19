---
id: box-upload-files
title: Box Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code Box Upload Files blueprint. Quickly export one or more files from your company's Box account. 
keywords:
    - box
    - blueprint
    - template
---

# Box - Upload Files

## Overview
Quickly export one or more files from your company's Box account. Once the files have downloaded, transfer them to another service or run another Vessel against the data.

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Local Folder Name | BOX_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | BOX_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| Local File Name | BOX_SOURCE_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| Box Folder Name | BOX_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of Box. |
| Box File Name | BOX_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | What to name the file(s) being uploaded to Box. If left blank, defaults to the original file name(s). |
| Service Account Credentials | BOX_APPLICATION_CREDENTIALS  | Password |:white_check_mark: | `-` | - | JSON from a Box Service Account key. |


