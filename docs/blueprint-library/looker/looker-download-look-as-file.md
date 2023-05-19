---
id: looker-download-look-as-file
title: Looker Template - Download Look as File
hide_title: true
sidebar_label: Download Look as File
description: Information about Shipyard's low-code Looker Download Look as File blueprint. Quickly download a Look as a variety of file types.  
keywords:
    - looker
    - blueprint
    - template
---

# Looker - Download Look as File

## Overview
Quickly download a Look from Looker as a variety of file types.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Looker Url | LOOKER_URL  | Alphanumeric |:white_check_mark: | `-` | - | The base URL of your organization's looker instance. Include https:// |
| Looker Client ID | LOOKER_CLIENT_ID  | Password |:white_check_mark: | `-` | - | The Client ID generated from Looker for API access |
| Looker Client Secret | LOOKER_CLIENT_SECRET  | Password |:white_check_mark: | `-` | - | The secret key generated from Looker for API access |
| Looker Look ID | LOOKER_LOOK_ID  | Alphanumeric |:white_check_mark: | `-` | - | The identifier for the specific Look you are intending to download |
| File Type | LOOKER_FILE_TYPE  | Select |:white_check_mark: | `png` | JSON (.json): `json`<br></br><br></br>Text (.txt): `txt`<br></br><br></br>CSV (.csv): `csv`<br></br><br></br>JSON Detail (.json): `json_detail`<br></br><br></br>Markdown (.md): `md`<br></br><br></br>Excel (.xlsx): `xlsx`<br></br><br></br>SQL (.sql): `sql`<br></br><br></br>PNG (.png): `png`<br></br><br></br>JPG (.jpg): `jpg`<br></br><br></br> | The type of file that will be generated from the Look. |
| Folder Name | LOOKER_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder where the file will be created. Leave blank to store in the current working directory |
| File Name | LOOKER_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | File name that will be created for the Look being downloaded. Include the extension and ensure that it matches the selected File Type. |


