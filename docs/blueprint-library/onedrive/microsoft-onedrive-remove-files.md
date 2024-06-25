---
id: microsoft-onedrive-remove-files
title: OneDrive Template - Remove Files
hide_title: true
sidebar_label: Remove Files
description: Information about Shipyard's low-code OneDrive Remove Files blueprint. Quickly remove multiple files within Microsoft OneDrive
keywords:
  - onedrive
  - blueprint
  - template
---

# Microsoft OneDrive - Remove Files



## Overview

This blueprint can be used to remove one or multiple files in OneDrive. 

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Client ID | ONEDRIVE_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID of the app created in Azure |
| Client Secret | ONEDRIVE_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret value of the app created in Azure |
| Tenant | ONEDRIVE_TENANT | Alphanumeric | :white_check_mark: | - | - | The ID of the tenant associated with the app |
| User Email | ONEDRIVE_USER_EMAIL | Alphanumeric | :white_check_mark: | - | - | The email of the user to impersonate. The user must belong to the organization/tenant |
| File Match Type | ONEDRIVE_FILE_MATCH_TYPE | Select | :heavy_minus_sign: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | The match type used to identify files to load |
| OneDrive Folder Name | ONEDRIVE_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the folder name where the source files reside. If omitted, the blueprint will look in the root directory |
| OneDrive File Name | ONEDRIVE_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the file(s) to move/rename in OneDrive |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Microsoft OneDrive - Remove Files
  inputs:
    ONEDRIVE_CLIENT_ID: null  ## REQUIRED
    ONEDRIVE_CLIENT_SECRET: null ## REQUIRED
    ONEDRIVE_TENANT: null ## REQUIRED
    ONEDRIVE_USER_EMAIL: null ## REQUIRED
    ONEDRIVE_FILE_MATCH_TYPE: exact_match
    ONEDRIVE_SOURCE_FOLDER_NAME: null
    ONEDRIVE_SOURCE_FILE_NAME: null ## REQUIRED
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


