---
id: ftp-move-or-rename-files
title: FTP Template - Move or Rename Files
hide_title: true
sidebar_label: Move or Rename Files
description: Information about Shipyard's low-code FTP Move or Rename Files blueprint. Quickly move or rename one or more files from an FTP Server. 
keywords:
    - ftp
    - blueprint
    - template
---

# FTP - Move or Rename Files

## Overview
Quickly move one or more files from an FTP Server. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _read_ permissions in order to download from the FTP server.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | FTP_HOST  | Alphanumeric |:white_check_mark: | `-` | - | The domain or the IP address of the FTP Server you want to connect to. |
| Port | FTP_PORT  | Integer |:white_check_mark: | `"21"` | - | Number for the port to connect to. `21` is used by default. |
| Username | FTP_USERNAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Value of the configured username in the FTP server. |
| Password | FTP_PASSWORD  | Password |:heavy_minus_sign: | `-` | - | Value of the configured password associated to the username on the FTP server. |
| FTP Folder Name | FTP_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the folder where the file is stored in the FTP server. If left blank, will look in the root directory. |
| FTP File Name Match Type | FTP_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "FTP File Name" will look for one file with exact match, or multiple files using regex. |
| FTP File Name | FTP_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the target file in the FTP server. Can be regex if "Match Type" is set accordingly. |
| FTP Destination Folder Name | FTP_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | The name of the folder where the target file will be moved. If blank, will use the root directory |
| FTP New File Name | FTP_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the file for the target file once it is moved. If blank will use the source file name |


