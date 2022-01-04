---
id: ftp-upload-files
title: FTP Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code FTP Upload Files blueprint. Easily import one or more files directly into an FTP Server, no matter how big they are.
keywords:
    - ftp
    - blueprint
    - template
---

# FTP - Upload Files

## Overview

Easily import one or more files directly into an FTP Server, no matter how big they are. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _write_ permissions in order to upload to the FTP server. 



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | HOST | Alphanumeric | :white_check_mark: | - | - | Domain or IP address of the FTP server to connect to.  |
| Port | PORT | Integer | :white_check_mark: | 21 | - | Number for the port to connect to. `21` is used by default. |
| Username | USERNAME | Alphanumeric | :heavy_minus_sign: | - | - | Value of the configured username in the FTP server. |
| Password | PASSWORD | Password | :heavy_minus_sign: | - | - | Value of the configured password associated to the username on the FTP server. |
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| FTP Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of the FTP. |
| FTP File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |


