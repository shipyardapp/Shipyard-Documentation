---
id: sftp-upload-files
title: SFTP Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code SFTP Upload Files blueprint. Easily import one or more files directly into an SFTP Server, no matter how big they are.
keywords:
    - sftp
    - blueprint
    - template
---

# SFTP - Upload Files

## Overview

Easily import one or more files directly into an SFTP Server, no matter how big they are. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

This Blueprint requires _write_ permissions in order to upload to the SFTP server. 



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | HOST | Alphanumeric | :white_check_mark: | - | - | Domain or IP address of the SFTP server to connect to. |
| Port | PORT | Integer | :white_check_mark: | 22 | - | Number for the port to connect to. `22` is used by default. |
| Username | USERNAME | Alphanumeric | :heavy_minus_sign: | - | - | Value of the configured username in the SFTP server. |
| Password | PASSWORD | Password | :heavy_minus_sign: | - | - | Value of the configured password associated to the username on the SFTP server. |
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| FTP Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of the SFTP. |
| FTP File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being uploaded to the SFTP. If left blank, defaults to the original file name(s). |


