---
id: mode-download-report-as-file
title: Mode Template - Download Report as File to Shipyard
hide_title: true
sidebar_label: Download Report as File to Shipyard
description: Information about Shipyard's low-code Mode Download Report as File to Shipyard blueprint. Download the contents of a Mode report as a JSON, PDF, or CSV. 
keywords:
    - mode
    - blueprint
    - template
---

# Mode - Download Report as File to Shipyard

## Overview
Download a report from Mode as a CSV, PDF, or JSON file. Typically used for pulling live data and sending the output to a messaging service, like Email or Slack.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Token ID | MODE_TOKEN_ID  | Password |:white_check_mark: | - | - | The ID of the Token used to authenticate with Mode. |
| Token Password | MODE_TOKEN_PASSWORD  | Password |:white_check_mark: | - | - | The Token Password associated to the Token ID used to authenticate with Mode. |
| Workspace Name | MODE_WORKSPACE_NAME  | Alphanumeric |:white_check_mark: | - | - | Typically found in the URL structure as https://app.mode.com/ACCOUNT_NAME/ |
| Report ID | MODE_REPORT_ID  | Alphanumeric |:white_check_mark: | - | - | Numeric ID of the report you want to download, typically found at the end of the URL. |
| Run ID | MODE_RUN_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The ID of the Run you want to download. If left blank, the most recent successful run for the report will be used. |
| Download As | MODE_FILE_TYPE  | Select |:white_check_mark: | `csv` | .csv: `csv`<br></br><br></br>.pdf: `pdf`<br></br><br></br>.json: `json`<br></br><br></br> | File format to download the specified report as. |
| File Name | MODE_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | File name that will be created for the card being downloaded. Include the extension. |
| Folder Name | MODE_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file will be created. Leave blank to store in the current working directory |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Mode - Download Report as File
  inputs:
    MODE_TOKEN_ID: null ## REQUIRED
    MODE_TOKEN_PASSWORD: null ## REQUIRED
    MODE_WORKSPACE_NAME: null ## REQUIRED
    MODE_REPORT_ID: null ## REQUIRED
    MODE_RUN_ID: null 
    MODE_FILE_TYPE: csv ## REQUIRED
    MODE_DESTINATION_FILE_NAME: null ## REQUIRED
    MODE_DESTINATION_FOLDER_NAME: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "203"
    - "204"
```
