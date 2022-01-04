---
id: slack-send-message-with-file
title: Slack Template - Send Message with File
hide_title: true
sidebar_label: Send Message with File
description: Information about Shipyard's low-code Slack Send Message with File blueprint. Send a Slack message with a message attachment to any channel or DM, alerting any user in your company.
keywords:
    - slack
    - blueprint
    - template
---

# Slack - Send Message with File

## Overview

Send a Slack message with a message attachment to any channel or DM, alerting any user in your company.

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/slack). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/slack-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Destination Type | destination_type | Select | :white_check_mark: | `channel` | Channel: `channel`<br><br><br>DM: `dm` | - |
| Channel Name | channel_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| User Lookup Method | user_lookup_method | Select | :white_check_mark: | `email` | Display Name: `display_name`<br><br><br>Real Name: `real_name`<br><br><br>Email: `email` | - |
| Users to Notify | users_to_notify | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Message | message | Alphanumeric | :white_check_mark: |  | - | - |
| File Name | source_file_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Regex: `regex_match`<br><br><br>Exact: `exact_match` | - |
| Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Slack Token | slack_token | Password | :white_check_mark: | - | - | - |


