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
Send a message to anyone in the world using email.

To have Shipyard dynamically parse and output the contents of a file, you can include the filename in this format: `{{text:file.txt}}`


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Send Method | EMAIL_SEND_METHOD  | Select |:white_check_mark: | `tls` | SSL: `ssl`<br></br><br></br>TLS: `tls`<br></br><br></br> | Determines how you want to send the email. We generally suggest using TLS when possible. |
| SMTP Host | EMAIL_SMTP_HOST  | Alphanumeric |:white_check_mark: | - | - | The server where your email will be sent from. Usually formatted as smtp.domain.com |
| SMTP Port | EMAIL_SMTP_PORT  | Alphanumeric |:white_check_mark: | - | - | The port from which your email will be sent. Commonly used ports are 25, 465, and 587. We generally suggest using 587 with TLS. |
| Username | EMAIL_USERNAME  | Alphanumeric |:white_check_mark: | - | - | The username that your email provider uses to identify your access to send email. |
| Password | EMAIL_PASSWORD  | Password |:white_check_mark: | `hlgyecgskabctidf` | - | The password associated with your username. |
| Sender Address | EMAIL_SENDER_ADDRESS  | Alphanumeric |:white_check_mark: | - | - | The email address you want recipients to see when you send an email. We generally suggest keeping the sender address as your own email to ensure that you can appropriately receive replies. |
| Sender Name | EMAIL_SENDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name you want users to see that the email is from. If left blank, the Sender Address will be used. |
| To | EMAIL_TO  | Alphanumeric |:heavy_minus_sign: | - | - | The email(s) that you want to send a message to. Can be comma-separated to include multiple email addresses. |
| CC | EMAIL_CC  | Alphanumeric |:heavy_minus_sign: | - | - | The email(s) that you want your message to be carbon copied (CCed) to. Can be comma-separated to include multiple email addresses. |
| BCC | EMAIL_BCC  | Alphanumeric |:heavy_minus_sign: | - | - | The email(s) that you want to be blind carbon copied (BCCed) to. Can be comma-separated to include multiple email addresses. Emails in this field will receive the email, but will not have their email exposed to all other recipients. |
| Subject | EMAIL_SUBJECT  | Alphanumeric |:heavy_minus_sign: | - | - | The subject of the email that you want to send. |
| Message | EMAIL_MESSAGE  | Alphanumeric |:white_check_mark: | - | - | The body of the email, containing your main message. This field supports plain text as well as HTML. To have Shipyard dynamically parse and output the contents of a file, you can include the filename in this format: {{text:file.txt}} |
| Include Shipyard Footer? | EMAIL_INCLUDE_SHIPYARD_FOOTER  | Boolean |:white_check_mark: | `True` | - | Determines if a footer should be sent with the email that links back to the originating Vessel or Fleet. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Email - Send Message
  inputs:
    EMAIL_SEND_METHOD: tls  ## REQUIRED
    EMAIL_SMTP_HOST: null ## REQUIRED
    EMAIL_SMTP_PORT: null ## REQUIRED
    EMAIL_USERNAME: null ## REQUIRED
    EMAIL_PASSWORD: hlgyecgskabctidf ## REQUIRED
    EMAIL_SENDER_ADDRESS: null ## REQUIRED
    EMAIL_SENDER_NAME: null
    EMAIL_TO: null
    EMAIL_CC: null
    EMAIL_BCC: null
    EMAIL_SUBJECT: null
    EMAIL_MESSAGE: null  ## REQUIRED
    EMAIL_INCLUDE_SHIPYARD_FOOTER: true ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
