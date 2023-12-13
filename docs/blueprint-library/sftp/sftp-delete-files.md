---
id: sftp-delete-files
title: SFTP Template - Delete Files
hide_title: true
sidebar_label: Delete Files
description: Information about Shipyard's low-code SFTP Delete Files blueprint. Quickly delete one or more files from an SFTP Server. Once the vessel has run successfully, the results cannot be undone. 
keywords:
    - sftp
    - blueprint
    - template
---

# SFTP - Delete Files

## Overview
Quickly delete one or more files from an SFTP Server. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _write_ permissions in order to remove objects from the SFTP server.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | SFTP_HOST  | Alphanumeric |:white_check_mark: | - | - | The domain or the IP address of the FTP Server you want to connect to. |
| Port | SFTP_PORT  | Integer |:white_check_mark: | `"21"` | - | Number for the port to connect to. `21` is used by default. |
| Username | SFTP_USERNAME  | Alphanumeric |:heavy_minus_sign: | - | - | Value of the configured username in the FTP server. Can be left blank if the RSA Key is provided |
| Password | SFTP_PASSWORD  | Password |:heavy_minus_sign: | - | - | Value of the configured password associated to the username on the FTP server. Can be left blank if the RSA Key file is provided |
| RSA Key File | SFTP_RSK_KEY  | Alphanumeric |:heavy_minus_sign: | - | - | The private key file used to authenticate via ssh into the SFTP server. Can be used in place of the Username and Password. |
| SFTP Folder Name | SFTP_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder where the file is stored in the SFTP server. |
| SFTP File Name Match Type | SFTP_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "FTP File Name" will look for one file with exact match, or multiple files using regex. |
| SFTP File Name | SFTP_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file in the FTP server. Can be regex if "Match Type" is set accordingly. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: SFTP - Delete Files
  inputs:
    SFTP_HOST: null  ## REQUIRED
    SFTP_PORT: '21' ## REQUIRED
    SFTP_USERNAME: null
    SFTP_PASSWORD: null
    SFTP_RSK_KEY: null
    SFTP_SOURCE_FOLDER_NAME: null
    SFTP_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    SFTP_SOURCE_FILE_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '3'
    - '200'
    - '201'

```
