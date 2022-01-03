---
id: email-send-message
title: Email Template - Send Message
hide_title: true
sidebar_label: Send Message
description: Information about Shipyard's low-code Email Send Message blueprint. Send a message to anyone in the world using email.
keywords:
    - email
    - blueprint
    - template
---

# Email - Send Message

## Overview

Send a message to anyone in the world using email, attaching one or more files.

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/email). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/email-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Send Method | send_method | Select | :white_check_mark: | tls | `SSL`, `TLS` | - |
| SMTP Host | smtp_host | Alphanumeric | :white_check_mark: |  | - | - |
| SMTP Port | smtp_port | Alphanumeric | :white_check_mark: |  | - | - |
| Username | username | Alphanumeric | :white_check_mark: | - | - | - |
| Password | password | Password | :white_check_mark: | hlgyecgskabctidf | - | - |
| Sender Address | sender_address | Alphanumeric | :white_check_mark: |  | - | - |
| Sender Name | sender_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| TO | to | Alphanumeric | :heavy_minus_sign: |  | - | - |
| CC | cc | Alphanumeric | :heavy_minus_sign: |  | - | - |
| BCC | bcc | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Subject | subject | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Message | message | Alphanumeric | :white_check_mark: |  | - | - |
| Include Shipyard Footer? | INCLUDE_SHIPYARD_FOOTER | Boolean | :white_check_mark: | true | - | - |


