---
id: trello-add-comment
title: Trello Template - Add Comment to Card
hide_title: true
sidebar_label: Add Comment to Card
description: Information about Shipyard's low-code Trello Add Comment to Card blueprint. Add a comment to a Trello card 
keywords:
    - trello
    - blueprint
    - template
---

# Trello - Add Comment to Card

## Overview
Use this blueprint to add a comment to an existing Trello card

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | TRELLO_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | https://trello.com/power-ups/admin |
| API Key | TRELLO_API_KEY  | Password |:white_check_mark: | - | - | API Key for Trello API |
| Card ID | TRELLO_CARD_ID  | Alphanumeric |:white_check_mark: | - | - | ID of the Trello card |
| Comment | TRELLO_COMMENT  | Alphanumeric |:white_check_mark: | - | - | Comment to add to the card |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Trello - Add Comment to Card
    inputs:
        TRELLO_ACCESS_TOKEN: null  ## REQUIRED
        TRELLO_API_KEY: null ## REQUIRED
        TRELLO_CARD_ID: null ## REQUIRED
        TRELLO_COMMENT: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200

```
