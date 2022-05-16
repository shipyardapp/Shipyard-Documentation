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

&gt; ## **First time using this Blueprint? Make sure you follow our [SFTP authorization guide](https://www.shipyardapp.com/docs/blueprint-library/sftp/sftp-authorization/)**.

Easily import one or more files directly into an SFTP Server, no matter how big they are. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _write_ permissions in order to upload to the SFTP server. 

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | SFTP_HOST | Alphanumeric | :white_check_mark: | - | - | Domain or IP address of the SFTP server to connect to. |
| Port | SFTP_PORT | Integer | :white_check_mark: | 22 | - | Number for the port to connect to. `22` is used by default. |
| Username | SFTP_USERNAME | Alphanumeric | :heavy_minus_sign: | - | - | Value of the configured username in the SFTP server. |
| Password | SFTP_PASSWORD | Password | :heavy_minus_sign: | - | - | Value of the configured password associated to the username on the SFTP server. |
| Local Folder Name | SFTP_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | SFTP_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | SFTP_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| FTP Folder Name | SFTP_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of the SFTP. |
| FTP File Name | SFTP_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being uploaded to the SFTP. If left blank, defaults to the original file name(s). |


