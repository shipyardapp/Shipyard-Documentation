---
id: slack-send-message
title: Slack Template - Send Message
hide_title: true
sidebar_label: Send Message
description: Information about Shipyard's low-code Slack Send Message blueprint. Send a Slack message to any channel or DM, alerting any user in your company.
keywords:
  - slack
  - blueprint
  - template
---

# Slack - Send Message

## Overview

Send a Slack message to any channel or DM, alerting any user in your company.

To have Shipyard dynamically parse and output the contents of a file, you can include the filename in this format: `{{text:file.txt}}`

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Destination Type | SLACK_DESTINATION_TYPE | Select | :white_check_mark: | `channel` | Channel: `channel`<br></br><br></br>DM: `dm`<br></br><br></br> | The type of location where you want your message to be sent.  If Channel is selected, a message can be sent directly to a channel.  If DM is selected, users can be sent messages directly from your app. |
| Channel Name | SLACK_CHANNEL_NAME | Alphanumeric | :heavy_minus_sign: | - | - | The name of the channel where you want your message to be sent, without the # prefix. This field will be ignored if the destination type is DM. |
| User Lookup Method | SLACK_USER_LOOKUP_METHOD | Select | :white_check_mark: | `email` | Display Name: `display_name`<br></br><br></br>Real Name: `real_name`<br></br><br></br>Email: `email`<br></br><br></br> | Used to determine what data point to look at to find a User's ID for notification tagging.  Email - the email address of the user in your Slack workspace. We recommend using this field when possible, as it cannot be changed by a user.  Real Name - Full Name that a user has set for themselves in Slack. This value may be inconsistent if your organization doesn't enforce naming standards, and it can be changed by a user.  Display Name - the @username that you use to reference someone directly in slack. For more important notifications, it's inadvisable to use this method because users can easily change this name on their own and multiple users can share the same display name. |
| Users to Notify | SLACK_USERS_TO_NOTIFY | Alphanumeric | :heavy_minus_sign: | - | - | A comma separated list of case insensitive user information, used to look up user IDs. The user information needs to match the selected User Lookup Method. This field is only required if the Destination Type is DM. |
| Message | SLACK_MESSAGE | Alphanumeric | :white_check_mark: | - | - | The message that you want sent to a user. You can use all of the same markdown syntax that you would typically use in a Slack message. If you want to create a link in your message, you can use the format of <www.website.com|text to link> |
| Slack Token | SLACK_TOKEN | Password | :white_check_mark: | - | - | The Bot User Oauth Token that is used to programmatically send messages by your specific application. See Authorization documentation for more information. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Slack - Send Message
  inputs:
    SLACK_DESTINATION_TYPE: channel  ## REQUIRED
    SLACK_CHANNEL_NAME: null
    SLACK_USER_LOOKUP_METHOD: email ## REQUIRED
    SLACK_USERS_TO_NOTIFY: null
    SLACK_MESSAGE: null ## REQUIRED
    SLACK_TOKEN: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '200'
    - '203'
 ```


