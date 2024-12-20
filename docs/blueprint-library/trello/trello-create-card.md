---
id: trello-create-card
title: Trello Template - Create Card
hide_title: true
sidebar_label: Create Card
description: Information about Platform's low-code Trello Create Card blueprint. Creates a card on a Trello Board 
keywords:
    - trello
    - blueprint
    - template
---

# Trello - Create Card

## Overview
Use this blueprint if you wish to create a card in Trello

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | TRELLO_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | https://trello.com/power-ups/admin |
| API Key | TRELLO_API_KEY  | Password |:white_check_mark: | - | - | https://trello.com/power-ups/admin |
| Board ID | TRELLO_BOARD_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the board you wish to create the ticket in |
| List Name | TRELLO_LIST_NAME  | Alphanumeric |:white_check_mark: | - | - | The list you wish to add the newly created card to |
| Card Name | TRELLO_CARD_NAME  | Alphanumeric |:white_check_mark: | - | - | The title of the card |
| Description | TRELLO_DESCRIPTION  | Alphanumeric |:heavy_minus_sign: | - | - | The text you want to be displayed in the description section of the card |
| Due Date | TRELLO_DUE_DATE  | Alphanumeric |:heavy_minus_sign: | - | - | The due date you wish to assign to the ticket |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Trello - Create Card
  inputs:
    TRELLO_ACCESS_TOKEN: null  ## REQUIRED
    TRELLO_API_KEY: null ## REQUIRED
    TRELLO_BOARD_ID: null ## REQUIRED
    TRELLO_LIST_NAME: null ## REQUIRED
    TRELLO_CARD_NAME: null ## REQUIRED
    TRELLO_DESCRIPTION: null
    TRELLO_DUE_DATE: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'

```
