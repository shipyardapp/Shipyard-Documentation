---
id: box-download-files
title: Box Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code Box Download Files blueprint. Easily import one or more files directly into your company&#39;s Box account.
keywords:
    - box
    - blueprint
    - template
---

# Box - Download Files

## Overview

Easily import one or more files directly into your company&#39;s Box account.


For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/box). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/box-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Box Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Box File Name | source_file_name | Alphanumeric | :white_check_mark: |  | - | - |
| Box File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | - |
| Local Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Local File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: |  | - | If left blank, will retain the original file name |
| Service Account Credentials | BOX_APPLICATION_CREDENTIALS | Password | :white_check_mark: |  | - | JSON from a Box Service Account key |


