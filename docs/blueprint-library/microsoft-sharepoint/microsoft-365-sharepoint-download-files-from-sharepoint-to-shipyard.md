---
id: microsoft-365-sharepoint-download-files-from-sharepoint-to-shipyard
title: Microsoft 365 SharePoint Template - Download Files from SharePoint to Shipyard
hide_title: true
sidebar_label: Download Files from SharePoint to Shipyard
description: Information about Shipyard's low-code Microsoft 365 SharePoint Download Files from SharePoint to Shipyard blueprint. Quickly download one or multiple files from Microsoft SharePoint to Shipyard
keywords:
  - microsoft 365 sharepoint
  - blueprint
  - template
---

# Microsoft 365 SharePoint - Download Files from SharePoint to Shipyard



## Overview

This blueprint can be used to download one or multiple files from SharePoint to Shipyard. 

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Client ID | SHAREPOINT_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID of the app created in Azure |
| Client Secret | SHAREPOINT_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret value of the app created in Azure |
| Tenant | SHAREPOINT_TENANT | Alphanumeric | :white_check_mark: | - | - | The ID of the tenant associated with the app |
| Site Name | SHAREPOINT_SITE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the SharePoint Site |
| Shipyard File Match Type | SHAREPOINT_FILE_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | The match type used to identify files to load |
| SharePoint File Name | SHAREPOINT_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the file to download from SharePoint |
| SharePoint Folder Name | SHAREPOINT_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The optional name of the folder where the target file is located. If omitted, the file will be searched in the root directory |
| Shipyard Folder Name | SHAREPOINT_LOCAL_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The optional name of the folder where the downloaded data should reside |
| Shipyard File Name | SHAREPOINT_LOCAL_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the file to save to Shipyard. If omitted, the original name will be used |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Microsoft 365 SharePoint - Download Files from SharePoint to Shipyard
  inputs:
    SHAREPOINT_CLIENT_ID: null  ## REQUIRED
    SHAREPOINT_CLIENT_SECRET: null ## REQUIRED
    SHAREPOINT_TENANT: null ## REQUIRED
    SHAREPOINT_SITE_NAME: null ## REQUIRED
    SHAREPOINT_FILE_MATCH_TYPE: exact_match ## REQUIRED
    SHAREPOINT_FILE_NAME: null ## REQUIRED
    SHAREPOINT_FOLDER_NAME: null
    SHAREPOINT_LOCAL_FOLDER_NAME: null
    SHAREPOINT_LOCAL_FILE_NAME: null
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


