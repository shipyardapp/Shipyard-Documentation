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

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/http). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/httprequest-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| File URL | FILE_URL | Alphanumeric | :white_check_mark: | - | - | - |
| File Name | FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | If left blank, will try to interpret the file name from the URL. |
| Folder Name | FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | If left blank, the file will be created in the current working directory. |


