---
id: shipyard-api-download-voyage-logs
title: Shipyard API Template - Download Voyage logs
hide_title: true
sidebar_label: Download Voyage logs
description: Information about Shipyard's low-code Shipyard API Download Voyage logs blueprint. Quickly download the logs of all voyages to a csv file.
keywords:
    - shipyard api
    - blueprint
    - template
---

# Shipyard API - Download Voyage logs

## Overview

> ## **First time using this Blueprint? Make sure you follow our [Blob Storage authorization guide](https://www.shipyardapp.com/docs/blueprint-library/azure-blob-storage/azure-blob-storage-authorization/)**.

Quickly download the voyage logs of a specific organization in Shipyard. The file contents will be downloaded and available as a CSV to use in another vessel.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Shipyard Organization ID | SHIPYARD_ORG_ID | Alphanumeric | :white_check_mark: | - | - | The unique identifier for the organization you wish to access in Shipyard |
| Shipyard API Key | SHIPYARD_API_KEY | Password | :white_check_mark: | - | - | The API key that Shipyard generated for you |
| Shipyard Local Folder Name | SHIPYARD_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the folder where the logs will be downloaded to. If left blank, the file will be downloaded in the root directory |
| Local File Name | SHIPYARD_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the csv file you would like the logs to be saved as |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Shipyard API - Download Voyage logs
  inputs:
    SHIPYARD_ORG_ID: null ## REQUIRED
    SHIPYARD_API_KEY: null ## REQUIRED
    SHIPYARD_FOLDER_NAME: null 
    SHIPYARD_FILE_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
```
