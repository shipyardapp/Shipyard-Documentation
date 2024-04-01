---
id: ftp-upload-files
title: FTP Template - Upload Files from Shipyard
hide_title: true
sidebar_label: Upload Files from Shipyard
description: Information about Shipyard's low-code FTP Upload Files from Shipyard blueprint. Easily import one or more files directly into an FTP Server, no matter how big they are.
keywords:
  - ftp
  - blueprint
  - template
---

# FTP - Upload Files from Shipyard

## Overview

Easily import one or more files directly into an FTP Server, no matter how big they are. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint requires _write_ permissions in order to upload to the FTP server. 

**Note:** This Vessel cannot be used to upload a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Host | FTP_HOST | Alphanumeric | :white_check_mark: | - | - | Domain or IP address of the FTP server to connect to.  |
| Port | FTP_PORT | Integer | :white_check_mark: | `"21"` | - | Number for the port to connect to. `21` is used by default. |
| Username | FTP_USERNAME | Alphanumeric | :heavy_minus_sign: | - | - | Value of the configured username in the FTP server. |
| Password | FTP_PASSWORD | Password | :heavy_minus_sign: | - | - | Value of the configured password associated to the username on the FTP server. |
| Shipyard Folder Name | FTP_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Shipyard File Name Match Type | FTP_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Shipyard File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard File Name | FTP_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| FTP Folder Name | FTP_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of the FTP. |
| FTP File Name | FTP_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: FTP - Upload Files from Shipyard
  inputs:
    FTP_HOST: null  ## REQUIRED
    FTP_PORT: '21' ## REQUIRED
    FTP_USERNAME: null
    FTP_PASSWORD: null
    FTP_SOURCE_FOLDER_NAME: null
    FTP_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    FTP_SOURCE_FILE_NAME: null ## REQUIRED
    FTP_DESTINATION_FOLDER_NAME: null
    FTP_DESTINATION_FILE_NAME: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '202'
    - '205'
    - '210'
 ```


