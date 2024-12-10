---
id: sftp-download-files
title: SFTP Template - Download Files to Platform
hide_title: true
sidebar_label: Download Files to Platform
description: Information about Platform's low-code SFTP Download Files to Platform blueprint. Quickly export one or more files from an SFTP Server.
keywords:
  - sftp
  - blueprint
  - template
---

# SFTP - Download Files to Platform

## Overview

Quickly export one or more files from an SFTP Server. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _read_ permissions in order to download from the SFTP server.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Host | SFTP_HOST | Alphanumeric | :white_check_mark: | - | - | Domain or IP address of the SFTP server to connect to. |
| Port | SFTP_PORT | Integer | :white_check_mark: | `"22"` | - | Number for the port to connect to. `22` is used by default. |
| Username | SFTP_USERNAME | Alphanumeric | :heavy_minus_sign: | - | - | Value of the configured username in the SFTP server. |
| Password | SFTP_PASSWORD | Password | :heavy_minus_sign: | - | - | Value of the configured password associated to the username on the SFTP server. |
| RSA Key File | SFTP_RSA_KEY_FILE | Alphanumeric | :heavy_minus_sign: | - | - | The file name of an RSA key you would like to use for authentication. Typically downloaded to Platform in a previous step. |
| SFTP File Name Match Type | SFTP_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "SFTP File Name" will look for one file with exact match, or multiple files using regex. |
| SFTP Folder Name | SFTP_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in the SFTP server.  Leaving blank will default to the root directory. |
| SFTP File Name | SFTP_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file in the SFTP server. Can be regex if "Match Type" is set accordingly. |
| Shipyard Folder Name | SFTP_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Name of the folder where the file is stored in the SFTP server. Leaving blank will default to the root directory. |
| Shipyard File Name | SFTP_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: SFTP - Download Files to Shipyard
  inputs:
    SFTP_HOST: null  ## REQUIRED
    SFTP_PORT: '22' ## REQUIRED
    SFTP_USERNAME: null
    SFTP_PASSWORD: null
    SFTP_RSA_KEY_FILE: null
    SFTP_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    SFTP_SOURCE_FOLDER_NAME: null
    SFTP_SOURCE_FILE_NAME: null ## REQUIRED
    SFTP_DESTINATION_FOLDER_NAME: null
    SFTP_DESTINATION_FILE_NAME: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '202'
    - '206'
    - '207'
    - '210'
 ```


