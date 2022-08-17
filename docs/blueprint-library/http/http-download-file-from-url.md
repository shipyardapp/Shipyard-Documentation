---
id: http-download-file-from-url
title: HTTP Template - Download File from URL
hide_title: true
sidebar_label: Download File from URL
description: Information about Shipyard's low-code HTTP Download File from URL blueprint. Download any publicly available file from the web given a specific URL.
keywords:
    - http
    - blueprint
    - template
---

# HTTP - Download File from URL

## Overview

This Blueprint lets you build a Vessel that downloads any file from the web given a URL. The file must be publicly accessible. 

The file will be downloaded directly to the specified folder using the File Name provided.
- If not folder is specified, the file will be downloaded to the current working directory.
- If no file name is specified, the file name will be interpreted from the URL.

**Running this as a single Vessel will appear to do nothing, as the file is being downloaded to Shipyard and then promptly deleted once the Vessel finishes, per our security measures.** We recommend using this Blueprint when building a Vessel as part of a Fleet, so that the data can shared for processing and storage elsewhere. 



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| File URL | HTTP_FILE_URL | Alphanumeric | :white_check_mark: | - | - | URL to run a download request against. |
| Custom Headers | HTTP_CUSTOM_HEADERS | Alphanumeric | :heavy_minus_sign: | - | - | A dictionary of additional headers that you want sent to the URL where the download request is being made. |
| File Name | HTTP_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | If left blank, will try to interpret the file name from the URL. |
| Folder Name | HTTP_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | If left blank, the file will be created in the current working directory. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: HTTP - Download File from URL
  inputs:
    File URL: null ## REQUIRED
    Custom Headers: null 
    File Name: null 
    Folder Name: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
```
