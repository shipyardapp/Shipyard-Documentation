---
id: email-send-message-conditionally
title: Email Template - Send Message Conditionally
hide_title: true
sidebar_label: Send Message Conditionally
description: Information about Shipyard's low-code Email Send Message Conditionally blueprint. Send a message to anyone in the world using email, attaching one or more files.
keywords:
    - email
    - blueprint
    - template
---

# Email - Send Message Conditionally

## Overview

Send a message to anyone in the world using email, attaching one or more files.

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/email). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/email-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Send Method | send_method | Select | :white_check_mark: | `tls` | SSL: `ssl`<br><br><br>TLS: `tls` | - |
| SMTP Host | smtp_host | Alphanumeric | :white_check_mark: |  | - | - |
| SMTP Port | smtp_port | Alphanumeric | :white_check_mark: |  | - | - |
| Username | username | Alphanumeric | :white_check_mark: | - | - | - |
| Password | password | Password | :white_check_mark: | - | - | - |
| Sender Address | sender_address | Alphanumeric | :white_check_mark: |  | - | - |
| Sender Name | sender_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| TO | to | Alphanumeric | :heavy_minus_sign: |  | - | - |
| CC | cc | Alphanumeric | :heavy_minus_sign: |  | - | - |
| BCC | bcc | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Subject | subject | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Message | message | Alphanumeric | :white_check_mark: |  | - | - |
| Send Messages Only When | conditional_send | Select | :white_check_mark: | `file_exists` | File(s) Exist: `file_exists`<br><br><br>File(s) Don't Exist: `file_dne` | - |
| File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | `exact_match` | Regex: `regex_match`<br><br><br>Exact: `exact_match` | - |
| File Name | source_file_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Include Shipyard Footer? | INCLUDE_SHIPYARD_FOOTER | Boolean | :white_check_mark: | true | - | - |


