---
id: domo-download-card
title: Domo Template - Download Card to Shipyard
hide_title: true
sidebar_label: Download Card to Shipyard
description: Information about Shipyard's low-code Domo Download Card to Shipyard blueprint. Download the contents of a Domo card as a PPT, CSV, or XLSX file. 
keywords:
    - domo
    - blueprint
    - template
---

# Domo - Download Card to Shipyard

## Overview
Download a card from Domo as a CSV, XLSX, or PPT file. Typically used for pulling live data and sending the output to a messaging service, like Email or Slack.

Authentication can be provided with either an access token or a combination of username and password. If both are provided, access token will be preferred.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | DOMO_ACCESS_TOKEN  | Password |:heavy_minus_sign: | - | - | Access token to authenticate with Domo. Used in place of username/password. |
| Email | DOMO_EMAIL  | Alphanumeric |:heavy_minus_sign: | - | - | Email that you use to log into Domo. Used with the password for authentication as an alternative method to providing an access token. |
| Password | DOMO_PASSWORD  | Password |:heavy_minus_sign: | - | - | Password associated to the email used to sign into Domo. Used with the email for authentication as an alternative method to providing an access token. |
| Domo Instance | DOMO_INSTANCE  | Alphanumeric |:white_check_mark: | - | - | Typically found in the URL structure as https://DOMOINSTANCE.domo.com |
| Card ID | DOMO_CARD_ID  | Alphanumeric |:white_check_mark: | - | - | Numeric ID of the card you want to download, typically found at the end of the URL. |
| Download As | DOMO_FILE_TYPE  | Select |:white_check_mark: | `csv` | .csv: `csv`<br></br><br></br>.xlsx: `excel`<br></br><br></br>.ppt: `ppt`<br></br><br></br> | File format to download the specified card as. |
| File Name | DOMO_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | File name that will be created for the card being downloaded. Include the extension. |
| Folder Name | DOMO_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file will be created. Leave blank to store in the current working directory |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Domo - Download Card to Shipyard
  inputs:
    DOMO_ACCESS_TOKEN: null
    DOMO_EMAIL: null
    DOMO_PASSWORD: null
    DOMO_INSTANCE: null  ## REQUIRED
    DOMO_CARD_ID: null ## REQUIRED
    DOMO_FILE_TYPE: csv ## REQUIRED
    DOMO_DESTINATION_FILE_NAME: null ## REQUIRED
    DOMO_DESTINATION_FOLDER_NAME: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '201'
    - '203'
    - '204'
    - '205'
    - '210'
    - '211'
    - '207'

```
