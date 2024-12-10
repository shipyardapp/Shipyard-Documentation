---
id: looker-download-sql-query-as-file
title: Looker Template - Download SQL Query as File to Platform
hide_title: true
sidebar_label: Download SQL Query as File to Platform
description: Information about Platform's low-code Looker Download SQL Query as File to Platform blueprint. Quickly run a SQL query against a Looker view or model and download the result as a variety of file types. 
keywords:
  - looker
  - blueprint
  - template
---

# Looker - Download SQL Query as File to Platform

## Overview

Quickly download a Look from Looker as a variety of file types.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Looker URL | LOOKER_URL | Alphanumeric | :white_check_mark: | - | - | The base URL of your organization's looker instance. Include https:// |
| Looker Client ID | LOOKER_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID generated from Looker for API access |
| Looker Client Secret | LOOKER_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret key generated from Looker for API access |
| Looker Slug | LOOKER_SLUG | Alphanumeric | :heavy_minus_sign: | - | - | The slug value associated with the query to run. The value should be left blank if this is a downstream vessel of the Create SQL Runner Query blueprint. |
| File Type | LOOKER_FILE_TYPE | Select | :white_check_mark: | `csv` | JSON (.json): `json`<br></br><br></br>Text (.txt): `txt`<br></br><br></br>CSV (.csv): `csv`<br></br><br></br>JSON Detail (.json): `json_detail`<br></br><br></br>Markdown (.md): `md`<br></br><br></br>Excel (.xlsx): `xlsx`<br></br><br></br>SQL (.sql): `sql`<br></br><br></br>PNG (.png): `png`<br></br><br></br>JPG (.jpg): `jpg`<br></br><br></br> | The type of file that will be generated from the SQL Query. |
| Folder Name | LOOKER_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file will be created. Leave blank to store in the current working directory |
| File Name | LOOKER_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | File name that will be created for the Look being downloaded. Include the extension and ensure that it matches the selected File Type. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Looker - Download SQL Query as File to Shipyard
  inputs:
    LOOKER_URL: null  ## REQUIRED
    LOOKER_CLIENT_ID: null ## REQUIRED
    LOOKER_CLIENT_SECRET: null ## REQUIRED
    LOOKER_SLUG: null
    LOOKER_FILE_TYPE: csv  ## REQUIRED
    LOOKER_DESTINATION_FOLDER_NAME: null
    LOOKER_DESTINATION_FILE_NAME: null  ## REQUIRED
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


