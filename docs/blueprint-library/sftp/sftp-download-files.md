---
id: sftp-download-files
title: SFTP Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code SFTP Download Files blueprint. Quickly export one or more files from an SFTP Server. 
keywords:
    - sftp
    - blueprint
    - template
---

# SFTP - Download Files

## Overview
Quickly export one or more files from an SFTP Server. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _read_ permissions in order to download from the SFTP server.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | SFTP_HOST  | Alphanumeric |:white_check_mark: | `-` | - | Domain or IP address of the SFTP server to connect to. |
| Port | SFTP_PORT  | Integer |:white_check_mark: | `"22"` | - | Number for the port to connect to. `22` is used by default. |
| Username | SFTP_USERNAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Value of the configured username in the SFTP server. |
| Password | SFTP_PASSWORD  | Password |:heavy_minus_sign: | `-` | - | Value of the configured password associated to the username on the SFTP server. |
| RSA Key File | SFTP_RSA_KEY_FILE  | Alphanumeric |:heavy_minus_sign: | `-` | - | The file name of an RSA key you would like to use for authentication. Typically downloaded to Shipyard in a previous step. |
| SFTP Folder Name | SFTP_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the folder where the file is stored in the SFTP server. |
| SFTP File Name Match Type | SFTP_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "SFTP File Name" will look for one file with exact match, or multiple files using regex. |
| SFTP File Name | SFTP_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the target file in the SFTP server. Can be regex if "Match Type" is set accordingly. |
| Local Folder Name | SFTP_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Local File Name | SFTP_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |


