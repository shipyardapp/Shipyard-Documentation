---
id: notion-download-database-to-shipyard
title: Notion Template - Download Database to Shipyard
hide_title: true
sidebar_label: Download Database to Shipyard
description: Information about Shipyard's low-code Notion Download Database to Shipyard blueprint. Quickly download a Notion database to a CSV or JSON file 
keywords:
    - notion
    - blueprint
    - template
---

# Notion - Download Database to Shipyard

## Overview
Allows for quick and seamless download of a Notion Database to Shipyard. Results can either be downloaded to a JSON or CSV file. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | NOTION_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The access token assigned to the integration created |
| Database ID | NOTION_DATABASE_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the notion database found in the URL |
| Destination File Name | NOTION_DEST_FILE  | Alphanumeric |:white_check_mark: | - | - | The name of the file to save the downloaded data |
| Destination Folder Name | NOTION_DEST_FOLDER  | Alphanumeric |:heavy_minus_sign: | - | - | The optional folder to store the downloaded data |
| File Type | NOTION_FILE_TYPE  | Select |:heavy_minus_sign: | `csv` | CSV: `csv`<br></br><br></br>JSON: `json`<br></br><br></br> | The file type to store results |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Notion - Download Database to Shipyard
    inputs:
        NOTION_ACCESS_TOKEN: null  ## REQUIRED
        NOTION_DATABASE_ID: null ## REQUIRED
        NOTION_DEST_FILE: null ## REQUIRED
        NOTION_DEST_FOLDER: null
        NOTION_FILE_TYPE: csv
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   201
    -   202
    -   203
    -   204
    -   205
    -   206
    -   249

```
