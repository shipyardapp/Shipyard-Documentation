---
id: domo-download-card
title: Domo Template - Download Card
hide_title: true
sidebar_label: Download Card
description: Information about Shipyard's low-code Domo Download Card blueprint. Download the contents of a Domo card as a PPT, CSV, or XLSX file.
keywords:
    - domo
    - blueprint
    - template
---

# Domo - Download Card

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [Domo authorization guide](https://www.shipyardapp.com/docs/blueprint-library/domo/domo-authorization/)**.

Download a card from Domo as a CSV, XLSX, or PPT file. Typically used for pulling live data and sending the output to a messaging service, like Email or Slack.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Email | DOMO_EMAIL | Alphanumeric | :white_check_mark: | - | - | Email that you use to log into Domo. |
| Password | DOMO_PASSWORD | Password | :white_check_mark: | - | - | Password associated to the email used to sign into Domo. |
| Domo Instance | DOMO_INSTANCE | Alphanumeric | :white_check_mark: | - | - | Typically found in the URL structure as https://DOMOINSTANCE.domo.com |
| Card ID | DOMO_CARD_ID | Alphanumeric | :white_check_mark: | - | - | Numeric ID of the card you want to download, typically found at the end of the URL. |
| Download As | DOMO_FILE_TYPE | Select | :white_check_mark: | `csv` | .csv: `csv`<br></br><br></br>.xlsx: `excel`<br></br><br></br>.ppt: `ppt` | File format to download the specified card as. |
| File Name | DOMO_DESTINATION_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | File name that will be created for the card being downloaded. Include the extension. |
| Folder Name | DOMO_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file will be created. Leave blank to store in the current working directory |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Domo - Download Card
  inputs:
    Email: null ## REQUIRED
    Password: null ## REQUIRED
    Domo Instance: null ## REQUIRED
    Card ID: null ## REQUIRED
    Download As: csv ## REQUIRED
    File Name: null ## REQUIRED
    Folder Name: null 
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "201"
    - "203"
    - "204"
    - "205"
    - "210"
    - "211"
```
