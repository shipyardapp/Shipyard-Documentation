---
id: shipyard-api-export-logs
title: Platform Template - Export Logs
hide_title: true
sidebar_label: Export Logs
description: Information about Platform's low-code Platform Export Logs blueprint. Quickly download all the Fleet and Vessel logs in your organization to a CSV file.
keywords:
  - shipyard
  - blueprint
  - template
---

# Platform API - Export Logs



## Overview

Quickly download the logs of your Platform Organization. The file contents will be downloaded and available as a CSV to use in another vessel.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Shipyard API Key | SHIPYARD_API_KEY | Password | :white_check_mark: | - | - | The API key that Platform generated for you |
| File Name | SHIPYARD_FILE_NAME | Alphanumeric | :white_check_mark: | `shipyard_logs.csv` | - | The name of the csv file you would like the logs to be saved as. |
| Folder Name | SHIPYARD_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the folder where the logs will be downloaded to. If left blank, the file will be downloaded in the root directory |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Shipyard API - Export Logs
  inputs:
    SHIPYARD_API_KEY: null  ## REQUIRED
    SHIPYARD_FILE_NAME: shipyard_logs.csv ## REQUIRED
    SHIPYARD_FOLDER_NAME: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '104'
    - '105'
    - '106'
    - '249'
 ```


