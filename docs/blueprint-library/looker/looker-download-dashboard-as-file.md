---
id: looker-download-dashboard-as-file
title: Looker Template - Download Dashboard as File to Platform
hide_title: true
sidebar_label: Download Dashboard as File to Platform
description: Information about Platform's low-code Looker Download Dashboard as File to Platform blueprint. Quickly download a Looker Dashboard as a  PDF, PNG, or JPG. 
keywords:
  - looker
  - blueprint
  - template
---

# Looker - Download Dashboard as File to Platform

## Overview

Quickly download a Looker Dashboard as a  PDF, PNG, or JPG.


## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Looker URL | LOOKER_URL | Alphanumeric | :white_check_mark: | - | - | The base URL of your organization's looker instance. Include https:// |
| Looker Client ID | LOOKER_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID generated from Looker for API access |
| Looker Client Secret | LOOKER_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret key generated from Looker for API access |
| Looker Dashboard ID | LOOKER_DASHBOARD_ID | Alphanumeric | :white_check_mark: | - | - | The identifier for the specific Dashboard you are intending to download |
| File Type | LOOKER_FILE_TYPE | Select | :white_check_mark: | `png` | PDF (.pdf): `pdf`<br></br><br></br>PNG (.png): `png`<br></br><br></br>JPG (.jpg): `jpg`<br></br><br></br> | The type of file that will be generated from the Dashboard. |
| Folder Name | LOOKER_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file will be created. Leave blank to store in the current working directory |
| File Name | LOOKER_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | File name that will be created for the Look being downloaded. Include the extension and ensure that it matches the selected File Type. |
| Output Height | LOOKER_OUTPUT_HEIGHT | Integer | :white_check_mark: | `"800"` | - | The size (in pixels) for the height of the downloaded dashboard |
| Output Width | LOOKER_OUTPUT_WIDTH | Integer | :white_check_mark: | `"800"` | - | The size (in pixels) for the width of the downloaded dashboard |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Looker - Download Dashboard as File to Shipyard
  inputs:
    LOOKER_URL: null  ## REQUIRED
    LOOKER_CLIENT_ID: null ## REQUIRED
    LOOKER_CLIENT_SECRET: null ## REQUIRED
    LOOKER_DASHBOARD_ID: null ## REQUIRED
    LOOKER_FILE_TYPE: png ## REQUIRED
    LOOKER_DESTINATION_FOLDER_NAME: null
    LOOKER_DESTINATION_FILE_NAME: null  ## REQUIRED
    LOOKER_OUTPUT_HEIGHT: '800' ## REQUIRED
    LOOKER_OUTPUT_WIDTH: '800' ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '203'
    - '204'
    - '205'
    - '206'
    - '207'
    - '208'
    - '209'
 ```


