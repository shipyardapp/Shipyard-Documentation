---
id: sftp-download-files
title: SFTP Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code SFTP Download Files blueprint. Quickly export one or more files from an SFTP Server. Once the files have downloaded, transfer them to another service or run another Vessel against the data.
keywords:
    - sftp
    - blueprint
    - template
---

# SFTP - Download Files

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [SFTP authorization guide](https://www.shipyardapp.com/docs/blueprint-library/sftp/sftp-authorization/)**.

Quickly export one or more files from an SFTP Server. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _read_ permissions in order to download from the SFTP server.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | SFTP_HOST | Alphanumeric | :white_check_mark: | - | - | Domain or IP address of the SFTP server to connect to. |
| Port | SFTP_PORT | Integer | :white_check_mark: | 22 | - | Number for the port to connect to. `22` is used by default. |
| Username | SFTP_USERNAME | Alphanumeric | :heavy_minus_sign: | - | - | Value of the configured username in the SFTP server. |
| Password | SFTP_PASSWORD | Password | :heavy_minus_sign: | - | - | Value of the configured password associated to the username on the SFTP server. |
| RSA Key File | SFTP_RSA_KEY_FILE | Alphanumeric | :heavy_minus_sign: | - | - | The file name of an RSA key you would like to use for authentication. Typically downloaded to Shipyard in a previous step. |
| SFTP Folder Name | SFTP_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in the SFTP server. |
| SFTP File Name Match Type | SFTP_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in `SFTP File Name` will look for one file with exact match, or multiple files using regex. |
| SFTP File Name | SFTP_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file in the SFTP server. Can be regex if `Match Type` is set accordingly. |
| Local Folder Name | SFTP_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Local File Name | SFTP_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: SFTP - Download Files
  inputs:
    Host: null ## REQUIRED
    Port: 22 ## REQUIRED
    Username: null 
    Password: null 
    RSA Key File: null 
    SFTP Folder Name: null 
    SFTP File Name Match Type: exact_match ## REQUIRED
    SFTP File Name: null ## REQUIRED
    Local Folder Name: null 
    Local File Name: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  
```
