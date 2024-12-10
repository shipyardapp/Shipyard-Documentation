---
id: microsoft-365-sharepoint-move-or-rename-files-in-sharepoint
title: Microsoft 365 SharePoint Template - Move or Rename Files in SharePoint
hide_title: true
sidebar_label: Move or Rename Files in SharePoint
description: Information about Platform's low-code Microsoft 365 SharePoint Move or Rename Files in SharePoint blueprint. Quickly move or rename one or multiple files in Microsoft SharePoint
keywords:
  - microsoft 365 sharepoint
  - blueprint
  - template
---

# Microsoft 365 SharePoint - Move or Rename Files in SharePoint



## Overview

This blueprint can be used to move or rename one or multiple files in Microsoft SharePoint.

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Client ID | SHAREPOINT_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID of the app created in Azure |
| Client Secret | SHAREPOINT_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret value of the app created in Azure |
| Tenant | SHAREPOINT_TENANT | Alphanumeric | :white_check_mark: | - | - | The ID of the tenant associated with the app |
| Site Name | SHAREPOINT_SITE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the SharePoint Site |
| Shipyard File Match Type | SHAREPOINT_FILE_MATCH_TYPE | Select | :heavy_minus_sign: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | The match type used to identify files to load |
| Source File | SHAREPOINT_SRC_FILE | Alphanumeric | :heavy_minus_sign: | - | - | The name of the source file in SharePoint |
| Source Folder Name | SHAREPOINT_SRC_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The optional folder of where the source file is located. If omitted, the files will be loaded to the root directory |
| Target Folder Name | SHAREPOINT_TARGET_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the folder to move the source file to |
| Target File Name | SHAREPOINT_TARGET_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the new file once moved/renamed. If omitted, the original name will be retained |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Microsoft 365 SharePoint - Move or Rename Files in SharePoint
  inputs:
    SHAREPOINT_CLIENT_ID: null  ## REQUIRED
    SHAREPOINT_CLIENT_SECRET: null ## REQUIRED
    SHAREPOINT_TENANT: null ## REQUIRED
    SHAREPOINT_SITE_NAME: null ## REQUIRED
    SHAREPOINT_FILE_MATCH_TYPE: exact_match
    SHAREPOINT_SRC_FILE: null
    SHAREPOINT_SRC_FOLDER_NAME: null
    SHAREPOINT_TARGET_FOLDER_NAME: null
    SHAREPOINT_TARGET_FILE_NAME: null
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


