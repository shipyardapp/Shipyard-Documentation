---
id: dropbox-upload-files
title: Dropbox Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code Dropbox Upload Files blueprint. Easily import one or more files directly into your Dropbox account.
keywords:
    - dropbox
    - blueprint
    - template
---

# Dropbox - Upload Files

## Overview

Easily import one or more files directly into Dropbox. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

If the folder name provided doesn&#39;t already exist, it will be created.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Local Folder Name | DROPBOX_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | DROPBOX_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | DROPBOX_SOURCE_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Dropbox Folder Name | DROPBOX_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of Dropbox. |
| Dropox File Name | DROPBOX_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | What to name the file(s) being uploaded to Dropbox. If left blank, defaults to the original file name(s).  |
| Access Token | DROPBOX_ACCESS_TOKEN | Password | :white_check_mark: | - | - | Access token, with no expiration, to access your Dropbox files. |


