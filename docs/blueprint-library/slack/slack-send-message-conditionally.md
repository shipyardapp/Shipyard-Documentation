---
id: slack-send-message-conditionally
title: Slack Template - Send Message Conditionally
hide_title: true
sidebar_label: Send Message Conditionally
description: Information about Shipyard's low-code Slack Send Message Conditionally blueprint. Send a message to Slack conditionally by determining if a file exists or not.
keywords:
    - slack
    - blueprint
    - template
---

# Slack - Send Message Conditionally

## Overview

Send a message to Slack conditionally by determining if a file exists or not.

Vessels built with this Blueprint should never fail, as the presence or lack or presence of the file only indicates whether or not the message should be sent.

Works primarily when used as part of a Fleet, where a File can be generated or downloaded by an upstream Vessel.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Destination Type | destination_type | Select | :white_check_mark: | channel | `Channel`, `DM` | - |
| Channel Name | channel_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| User Lookup Method | user_lookup_method | Select | :white_check_mark: | display_name | `Display Name`, `Real Name`, `Email` | - |
| Users to Notify | users_to_notify | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Message | message | Alphanumeric | :white_check_mark: |  | - | - |
| Send Message Only When | conditional_send | Select | :white_check_mark: | file_exists | `File(s) Exist`, `File(s) Don&#39;t Exist` | - |
| File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | exact_match | `Regex`, `Exact` | - |
| File Name | source_file_name | Alphanumeric | :white_check_mark: |  | - | - |
| Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Upload File to Slack? | UPLOAD_FILE | Select | :white_check_mark: | no | `Yes`, `No` | - |
| Slack Token | slack_token | Password | :white_check_mark: | - | - | - |


