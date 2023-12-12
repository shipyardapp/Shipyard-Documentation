---
id: trello-edit-card
title: Trello Template - Edit Card
hide_title: true
sidebar_label: Edit Card
description: Information about Shipyard's low-code Trello Edit Card blueprint. Updates an existing card 
keywords:
    - trello
    - blueprint
    - template
---

# Trello - Edit Card

## Overview
Use this blueprint to update information on an existing card

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | TRELLO_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | https://trello.com/power-ups/admin |
| API Key | TRELLO_API_KEY  | Password |:white_check_mark: | - | - | https://trello.com/power-ups/admin |
| Card ID | TRELLO_CARD_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the card you wish to edit |
| Board ID | TRELLO_BOARD_ID  | Alphanumeric |:heavy_minus_sign: | - | - | The ID of the board you wish to move the card to |
| List Name | TRELLO_LIST_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The ID of the list you wish to move the card to |
| Card Name | TRELLO_CARD_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The main title of the card |
| Description | TRELLO_DESCRIPTION  | Alphanumeric |:heavy_minus_sign: | - | - | This text will be displayed in the description section of the card |
| Due Date | TRELLO_DUE_DATE  | Alphanumeric |:heavy_minus_sign: | - | - | The due date you wish to assign to the card |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Trello - Edit Card
    inputs:
        TRELLO_ACCESS_TOKEN: null  ## REQUIRED
        TRELLO_API_KEY: null ## REQUIRED
        TRELLO_CARD_ID: null ## REQUIRED
        TRELLO_BOARD_ID: null
        TRELLO_LIST_NAME: null
        TRELLO_CARD_NAME: null
        TRELLO_DESCRIPTION: null
        TRELLO_DUE_DATE: null
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200

```
