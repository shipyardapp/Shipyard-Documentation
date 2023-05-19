---
id: looker-download-dashboard-as-file
title: Looker Template - Download Dashboard as File
hide_title: true
sidebar_label: Download Dashboard as File
description: Information about Shipyard's low-code Looker Download Dashboard as File blueprint. Quickly download a Looker Dashboard as a  PDF, PNG, or JPG.  
keywords:
    - looker
    - blueprint
    - template
---

# Looker - Download Dashboard as File

## Overview
Quickly download a Looker Dashboard as a  PDF, PNG, or JPG.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Looker Url | LOOKER_URL  | Alphanumeric |:white_check_mark: | `-` | - | The base URL of your organization's looker instance. Include https:// |
| Looker Client ID | LOOKER_CLIENT_ID  | Password |:white_check_mark: | `-` | - | The Client ID generated from Looker for API access |
| Looker Client Secret | LOOKER_CLIENT_SECRET  | Password |:white_check_mark: | `-` | - | The secret key generated from Looker for API access |
| Looker Dashboard ID | LOOKER_DASHBOARD_ID  | Alphanumeric |:white_check_mark: | `-` | - | The identifier for the specific Dashboard you are intending to download |
| File Type | LOOKER_FILE_TYPE  | Select |:white_check_mark: | `png` | PDF (.pdf): `pdf`<br></br><br></br>PNG (.png): `png`<br></br><br></br>JPG (.jpg): `jpg`<br></br><br></br> | The type of file that will be generated from the Dashboard. |
| Folder Name | LOOKER_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Folder where the file will be created. Leave blank to store in the current working directory |
| File Name | LOOKER_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | File name that will be created for the Look being downloaded. Include the extension and ensure that it matches the selected File Type. |
| Output Height | LOOKER_OUTPUT_HEIGHT  | Integer |:white_check_mark: | `"800"` | - | The size (in pixels) for the height of the downloaded dashboard |
| Output Width | LOOKER_OUTPUT_WIDTH  | Integer |:white_check_mark: | `"800"` | - | The size (in pixels) for the width of the downloaded dashboard |


