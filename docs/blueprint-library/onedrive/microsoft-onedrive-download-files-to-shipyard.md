---
id: microsoft-onedrive-download-files-to-shipyard
title: OneDrive Template - Download Files to Shipyard
hide_title: true
sidebar_label: Download Files to Shipyard
description: Information about Shipyard's low-code OneDrive Download Files to Shipyard blueprint. Quickly download one or multiple files from Microsoft OneDrive to Shipyard
keywords:
  - onedrive
  - blueprint
  - template
---

# Microsoft OneDrive - Download Files to Shipyard



## Overview

This blueprint can be used to download one or multiple files from OneDrive to Shipyard. 

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Client ID | ONEDRIVE_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID of the app created in Azure |
| Client Secret | ONEDRIVE_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret value of the app created in Azure |
| Tenant | ONEDRIVE_TENANT | Alphanumeric | :white_check_mark: | - | - | The ID of the tenant associated with the app |
| User Email | ONEDRIVE_USER_EMAIL | Alphanumeric | :white_check_mark: | - | - | The email of the user to impersonate. The user must be a member of the organization/tenant |
| File Match Type | ONEDRIVE_FILE_MATCH_TYPE | Select | :heavy_minus_sign: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | The match type used to identify files to load |
| OneDrive File Name | ONEDRIVE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the file(s) to download from OneDrive |
| OneDrive Folder Name | ONEDRIVE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The folder name within OneDrive where the files reside. If omitted, the blueprint will search within the root directory |
| Shipyard Folder Name | ONEDRIVE_LOCAL_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The optional name of the folder where the data should be downloaded to in Shipyard |
| Shipyard File Name | ONEDRIVE_LOCAL_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the file(s) once downloaded from OneDrive. If omitted, the original file name will be used |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Microsoft OneDrive - Download Files to Shipyard
  inputs:
    ONEDRIVE_CLIENT_ID: null  ## REQUIRED
    ONEDRIVE_CLIENT_SECRET: null ## REQUIRED
    ONEDRIVE_TENANT: null ## REQUIRED
    ONEDRIVE_USER_EMAIL: null ## REQUIRED
    ONEDRIVE_FILE_MATCH_TYPE: exact_match
    ONEDRIVE_FILE_NAME: null ## REQUIRED
    ONEDRIVE_FOLDER_NAME: null
    ONEDRIVE_LOCAL_FOLDER_NAME: null
    ONEDRIVE_LOCAL_FILE_NAME: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '180'
    - '181'
    - '182'
    - '183'
    - '184'
    - '200'
    - '202'
    - '203'
    - '204'
    - '205'
    - '206'
    - '207'
    - '208'
    - '209'
    - '210'
    - '249'
 ```


