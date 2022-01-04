---
id: dropbox-download-files
title: Dropbox Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code Dropbox Download Files blueprint. Quickly export one or more files from your Dropbox account. Once the files have downloaded, transfer them to another service or run another Vessel against the data.
keywords:
    - dropbox
    - blueprint
    - template
---

# Dropbox - Download Files

## Overview

Quickly export one or more files from Dropbox. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Dropbox Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in Dropbox. Leaving blank will look for the file in the root directory of Dropbox. |
| Dropbox File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br><br><br>Regex Match: `regex_match` | Determines if the text in &#34;Dropbox File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Box File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file in Dropbox. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Local Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Local File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Access Token | ACCESS_TOKEN | Password | :white_check_mark: | - | - | Access token, with no expiration, to access your Dropbox files. |


