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

Easily import one or more files directly into a Google Drive account. The [match type](../../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.




## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Local File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Local File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Shared Drive Name | drive | Alphanumeric | :heavy_minus_sign: | - | - | Name of the Shared Drive the file exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Google Drive Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of Google Drive which will be inaccessible in the UI. |
| Google Drive File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


