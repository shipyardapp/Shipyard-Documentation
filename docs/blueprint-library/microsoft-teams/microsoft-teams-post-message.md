---
id: microsoft-teams-post-message
title: Microsoft Teams Template - Post Message
hide_title: true
sidebar_label: Post Message
description: Information about Platform's low-code Microsoft Teams Post Message blueprint. Sends a message to Microsoft Teams 
keywords:
    - microsoft teams
    - blueprint
    - template
---

# Microsoft Teams - Post Message

## Overview
Use this blueprint to post messages to Microsoft Team

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Webhook Url | MICROSOFT_TEAMS_WEBHOOK_URL  | Alphanumeric |:white_check_mark: | - | - | The webhook url specific to the channel you wish to post a message to |
| Message Content | MICROSOFT_TEAMS_MESSAGE_CONTENT  | Alphanumeric |:white_check_mark: | - | - | The message you wish to post |
| Message Title | MICROSOFT_TEAMS_MESSAGE_TITLE  | Alphanumeric |:heavy_minus_sign: | - | - | Gives your message a title. This is bold text above your message |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Microsoft Teams - Post Message
  inputs:
    MICROSOFT_TEAMS_WEBHOOK_URL: null  ## REQUIRED
    MICROSOFT_TEAMS_MESSAGE_CONTENT: null ## REQUIRED
    MICROSOFT_TEAMS_MESSAGE_TITLE: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 0h15m0s
  exclude_exit_code_ranges:
    - '0'

```
