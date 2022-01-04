---
id: box-upload-files
title: Box Template - Upload Files
hide_title: true
sidebar_label: Upload Files
description: Information about Shipyard's low-code Box Upload Files blueprint. Quickly export one or more files from your company&#39;s Box account. Once the files have downloaded, transfer them to another service or run another Vessel against the data.
keywords:
    - box
    - blueprint
    - template
---

# Box - Upload Files

## Overview

Quickly export one or more files from your company&#39;s Box account. Once the files have downloaded, transfer them to another service or run another Vessel against the data.

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/box). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/box-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Local File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | - |
| Local File Name | source_file_name | Alphanumeric | :heavy_minus_sign: |  | - | If left blank, will retain the original file name |
| Box Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Box File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: |  | - | If left blank, will use the original file name |
| Service Account Credentials | BOX_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Box Service Account key |


