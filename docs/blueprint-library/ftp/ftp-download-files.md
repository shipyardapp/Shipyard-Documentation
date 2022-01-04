---
id: ftp-download-files
title: FTP Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code FTP Download Files blueprint. Quickly export one or more files from an FTP Server. Once the files have downloaded, transfer them to another service or run another Vessel against the data.
keywords:
    - ftp
    - blueprint
    - template
---

# FTP - Download Files

## Overview

Quickly export one or more files from an FTP Server. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _read_ permissions in order to download from the FTP server.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the FTP Server you want to connect to. |
| Port | PORT | Integer | :white_check_mark: | 21 | - | Number for the port to connect to. `21` is used by default. |
| Username | USERNAME | Alphanumeric | :heavy_minus_sign: | - | - | Value of the configured username in the FTP server. |
| Password | PASSWORD | Password | :heavy_minus_sign: | - | - | Value of the configured password associated to the username on the FTP server. |
| FTP Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in the FTP server. |
| FTP File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br><br><br>Regex Match: `regex_match` | Determines if the text in &#34;FTP File Name&#34; will look for one file with exact match, or multiple files using regex. |
| FTP File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file in the FTP server. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Local Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Local File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |


