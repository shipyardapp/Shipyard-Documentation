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

&gt; ## **First time using this Blueprint? Make sure you follow our [Email authorization guide](https://www.shipyardapp.com/docs/blueprint-library/email/email-authorization/)**.

Send a message to anyone in the world using email, attaching one or more files.

To upload multiple files, use [Regex Match Type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/).

Due to email file size constraints, when the the total file size &gt;10MB, Shipyard will automatically zip the files under the name &#34;Archive.zip&#34;.

**Note:** This Vessel cannot be used to access a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 




## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Send Method | EMAIL_SEND_METHOD | Select | :white_check_mark: | `tls` | SSL: `ssl`<br></br><br></br>TLS: `tls` | Determines how you want to send the email. Options are TLS and SSL. We generally suggest using TLS when possible. |
| SMTP Host | EMAIL_SMTP_HOST | Alphanumeric | :white_check_mark: | - | - | The server where your email will be sent from. Usually formatted as smtp.domain.com |
| SMTP Port | EMAIL_SMTP_PORT | Alphanumeric | :white_check_mark: | - | - | The port from which your email will be sent. Commonly used ports are 25, 465, and 587. We generally suggest using 587 with TLS. |
| Username | EMAIL_USERNAME | Alphanumeric | :white_check_mark: | - | - | The username that your email provider uses to identify your access to send email. |
| Password | EMAIL_PASSWORD | Password | :white_check_mark: | - | - | The password associated with your username. |
| Sender Address | EMAIL_SENDER_ADDRESS | Alphanumeric | :white_check_mark: | - | - | The email address you want recipients to see when you send an email. We generally suggest keeping the sender address as your own email to ensure that you can appropriately receive replies. |
| Sender Name | EMAIL_SENDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name you want users to see that the email is from. If left blank, the Sender Address will be used. |
| TO | EMAIL_TO | Alphanumeric | :heavy_minus_sign: | - | - | The email(s) that you want to send a message to. Can be comma-separated to include multiple email addresses. |
| CC | EMAIL_CC | Alphanumeric | :heavy_minus_sign: | - | - | The email(s) that you want your message to be carbon copied (CCed) to. Can be comma-separated to include multiple email addresses. |
| BCC | EMAIL_BCC | Alphanumeric | :heavy_minus_sign: | - | - | The email(s) that you want to be blind carbon copied (BCCed) to. Can be comma-separated to include multiple email addresses. Emails in this field will receive the email, but will not have their email exposed to all other recipients. |
| Subject | EMAIL_SUBJECT | Alphanumeric | :heavy_minus_sign: | - | - | The subject of the email that you want to send. |
| Message | EMAIL_MESSAGE | Alphanumeric | :white_check_mark: | - | - | The body of the email, containing your main message. This field supports plain text as well as HTML. |
| Send Messages Only When | EMAIL_CONDITIONAL_SEND | Select | :white_check_mark: | `file_exists` | File(s) Exist: `file_exists`<br></br><br></br>File(s) Don't Exist: `file_dne` | Determines what condition needs to be met for a message to send.  File(s) Exist - Send the message only if a file can be found using the provided folder/filename.ext combination.  File(s) Don&#39;t Exist - Send the message only if a file cannot found using the provided folder/filename.ext combination. |
| File Name Match Type | EMAIL_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Regex: `regex_match`<br></br><br></br>Exact: `exact_match` | Determines if the text in &#34;File Name&#34; will look for one file with exact match, or multiple files using regex. |
| File Name | EMAIL_SOURCE_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly |
| Folder Name | EMAIL_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Include Shipyard Footer? | EMAIL_INCLUDE_SHIPYARD_FOOTER | Boolean | :white_check_mark: | true | - | Determines if a footer should be sent with the email that links back to the originating Vessel or Fleet. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Email - Send Message Conditionally
  inputs:
    Send Method: tls ## REQUIRED
    SMTP Host: null ## REQUIRED
    SMTP Port: null ## REQUIRED
    Username: null ## REQUIRED
    Password: null ## REQUIRED
    Sender Address: null ## REQUIRED
    Sender Name: null 
    TO: null 
    CC: null 
    BCC: null 
    Subject: null 
    Message: null ## REQUIRED
    Send Messages Only When: file_exists ## REQUIRED
    File Name Match Type: exact_match ## REQUIRED
    File Name: null 
    Folder Name: null 
    Include Shipyard Footer?: true ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
