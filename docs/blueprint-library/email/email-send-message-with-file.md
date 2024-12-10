---
id: email-send-message-with-file
title: Email Template - Send Message with File
hide_title: true
sidebar_label: Send Message with File
description: Information about Platform's low-code Email Send Message with File blueprint. Send a message to anyone in the world using email, attaching one or more files.
keywords:
  - email
  - blueprint
  - template
---

# Email - Send Message with File

## Overview

Send a message to anyone in the world using email, attaching one or more files.

To have Platform dynamically parse and output the contents of a file, you can include the filename in this format: `{{text:file.txt}}`

To upload multiple files, use [Regex Match Type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/).

Due to email file size constraints, when the the total file size >10MB, Platform will automatically zip the files under the name "Archive.zip".

**Note:** This Vessel cannot be used to access a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Platform or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Send Method | EMAIL_SEND_METHOD | Select | :white_check_mark: | `tls` | SSL: `ssl`<br></br><br></br>TLS: `tls`<br></br><br></br> | Determines how you want to send the email. We generally suggest using TLS when possible. |
| SMTP Host | EMAIL_SMTP_HOST | Alphanumeric | :white_check_mark: | - | - | The server where your email will be sent from. Usually formatted as smtp.domain.com |
| SMTP Port | EMAIL_SMTP_PORT | Alphanumeric | :white_check_mark: | - | - | The port from which your email will be sent. Commonly used ports are 25, 465, and 587. We generally suggest using 587 with TLS. |
| Username | EMAIL_USERNAME | Alphanumeric | :white_check_mark: | `shipyardapptest@gmail.com` | - | The username that your email provider uses to identify your access to send email. |
| Password | EMAIL_PASSWORD | Password | :white_check_mark: | `hlgyecgskabctidf` | - | The password associated with your username. |
| Sender Address | EMAIL_SENDER_ADDRESS | Alphanumeric | :heavy_minus_sign: | - | - | The email address you want recipients to see when you send an email. We generally suggest keeping the sender address as your own email to ensure that you can appropriately receive replies. |
| Sender Name | EMAIL_SENDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name you want users to see that the email is from. If left blank, the Sender Address will be used. |
| To | EMAIL_TO | Alphanumeric | :heavy_minus_sign: | - | - | The email(s) that you want to send a message to. Can be comma-separated to include multiple email addresses. |
| CC | EMAIL_CC | Alphanumeric | :heavy_minus_sign: | - | - | The email(s) that you want your message to be carbon copied (CCed) to. Can be comma-separated to include multiple email addresses. |
| BCC | EMAIL_BCC | Alphanumeric | :heavy_minus_sign: | - | - | The email(s) that you want to be blind carbon copied (BCCed) to. Can be comma-separated to include multiple email addresses. Emails in this field will receive the email, but will not have their email exposed to all other recipients. |
| Subject | EMAIL_SUBJECT | Alphanumeric | :heavy_minus_sign: | - | - | The subject of the email that you want to send. |
| Message | EMAIL_MESSAGE | Alphanumeric | :white_check_mark: | - | - | The body of the email, containing your main message. This field supports plain text as well as HTML. The body of the email, containing your main message. This field supports plain text as well as HTML. To have Platform dynamically parse and output the contents of a file, you can include the filename in this format: {{text:file.txt}} |
| File Name Match Type | EMAIL_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Regex: `regex_match`<br></br><br></br>Exact: `exact_match`<br></br><br></br> | Determines if the text in "File Name" will look for one file with exact match, or multiple files using regex. |
| File Name | EMAIL_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Platform. Can be regex if "Match Type" is set accordingly |
| Folder Name | EMAIL_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Platform to upload the target file from. If left blank, will look in the home directory. |
| Include Shipyard Footer? | EMAIL_INCLUDE_SHIPYARD_FOOTER | Boolean | :white_check_mark: | `True` | - | Determines if a footer should be sent with the email that links back to the originating Vessel or Fleet. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Email - Send Message with File
  inputs:
    EMAIL_SEND_METHOD: tls  ## REQUIRED
    EMAIL_SMTP_HOST: null ## REQUIRED
    EMAIL_SMTP_PORT: null ## REQUIRED
    EMAIL_USERNAME: shipyardapptest@gmail.com ## REQUIRED
    EMAIL_PASSWORD: hlgyecgskabctidf ## REQUIRED
    EMAIL_SENDER_ADDRESS: null
    EMAIL_SENDER_NAME: null
    EMAIL_TO: null
    EMAIL_CC: null
    EMAIL_BCC: null
    EMAIL_SUBJECT: null
    EMAIL_MESSAGE: null  ## REQUIRED
    EMAIL_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    EMAIL_SOURCE_FILE_NAME: null ## REQUIRED
    EMAIL_SOURCE_FOLDER_NAME: null
    EMAIL_INCLUDE_SHIPYARD_FOOTER: true  ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '102'
    - '104'
    - '200'
    - '201'
    - '203'
 ```


