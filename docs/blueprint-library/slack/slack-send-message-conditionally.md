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

To have Shipyard dynamically parse and output the contents of a file, you can include the filename in this format: `{{text:file.txt}}`

Vessels built with this Blueprint should never fail, as the presence or lack or presence of the file only indicates whether or not the message should be sent.

Works primarily when used as part of a Fleet, where a File can be generated or downloaded by an upstream Vessel.

**Note:** This Vessel cannot be used to access a local file from your computer.

**Recommended Setup:**

1. A Vessel built with this Blueprint should typically run after a Vessel that either downloads a file to Shipyard or generates a file with code. 

## Variables

| Name | Reference | Type | Required | Default | Options | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|:-----|:----------|:-----|:---------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Destination Type | SLACK_DESTINATION_TYPE  | Select |:white_check_mark: | `channel` | Channel: `channel`<br></br><br></br>DM: `dm`<br></br><br></br> | The type of location where you want your message to be sent.  If Channel is selected, a message can be sent directly to a channel.  If DM is selected, users can be sent messages directly from your app.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Channel Name | SLACK_CHANNEL_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The name of the channel where you want your message to be sent, without the # prefix. This field will be ignored if the destination type is DM.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| User Lookup Method | SLACK_USER_LOOKUP_METHOD  | Select |:white_check_mark: | `display_name` | Display Name: `display_name`<br></br><br></br>Real Name: `real_name`<br></br><br></br>Email: `email`<br></br><br></br> | Used to determine what data point to look at to find a User's ID for notification tagging.  Email - the email address of the user in your Slack workspace. We recommend using this field when possible, as it cannot be changed by a user.  Real Name - Full Name that a user has set for themselves in Slack. This value may be inconsistent if your organization doesn't enforce naming standards, and it can be changed by a user.  Display Name - the @username that you use to reference someone directly in slack. For more important notifications, it's inadvisable to use this method because users can easily change this name on their own and multiple users can share the same display name. |
| Users to Notify | SLACK_USERS_TO_NOTIFY  | Alphanumeric |:heavy_minus_sign: | - | - | A comma separated list of case insensitive user information, used to look up user IDs. The user information needs to match the selected User Lookup Method. This field is only required if the Destination Type is DM.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Message | SLACK_MESSAGE  | Alphanumeric |:white_check_mark: | - | - | The message that you want sent to a user. You can use all of the same markdown syntax that you would typically use in a Slack message. If you want to create a link in your message, you can use the format of <www.website.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |text to link>. To have Shipyard dynamically parse and output the contents of a file, you can include the filename in this format: `{{text:file.txt}}` |
| Send Message Only When | SLACK_CONDITIONAL_SEND  | Select |:white_check_mark: | `file_exists` | File(s) Exist: `file_exists`<br></br><br></br>File(s) Don't Exist: `file_dne`<br></br><br></br> | Determines what condition needs to be met for a message to send.  File(s) Exist - Send the message only if a file can be found using the provided folder/filename.ext combination.  File(s) Don't Exist - Send the message only if a file cannot found using the provided folder/filename.ext combination.                                                                                                                                                                                                                                                                                                                                                                                                |
| File Name Match Type | SLACK_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Regex: `regex_match`<br></br><br></br>Exact: `exact_match`<br></br><br></br> | Determines if the text in "File Name" will look for one file with exact match, or multiple files using regex.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| File Name | SLACK_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the file you want to search for.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Folder Name | SLACK_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The folder that the file can be found in. Unless specified elsewhere, starts by looking in the current working directory. Can contain leading, trailing, or no slashes (if only looking for the file in a single folder).  This field is not required and the folder name can technically be provided as part of the File Name.If left blank, will look for the file in the current working directory.                                                                                                                                                                                                                                                                                                    |
| Upload File to Slack? | SLACK_UPLOAD_FILE  | Select |:white_check_mark: | `no` | Yes: `yes`<br></br><br></br>No: `no`<br></br><br></br> | Determines whether or not the file(s) you're looking for to conditionally send the message should get uploaded to Slack. Defaults to no.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Slack Token | SLACK_TOKEN  | Password |:white_check_mark: | - | - | The Bot User Oauth Token that is used to programmatically send messages by your specific application. See Authorization documentation for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Include File In Thread | SLACK_INCLUDE_FILE_IN_THREAD  | Select |:heavy_minus_sign: | `yes` | Yes: `yes`<br></br><br></br>No: `no`<br></br><br></br> | Determines whether the file will be included in the main message or as a reply in the thread. Default setting is a reply in the thread.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Slack - Send Message Conditionally
    inputs:
        SLACK_DESTINATION_TYPE: channel  ## REQUIRED
        SLACK_CHANNEL_NAME: null
        SLACK_USER_LOOKUP_METHOD: display_name ## REQUIRED
        SLACK_USERS_TO_NOTIFY: null
        SLACK_MESSAGE: null ## REQUIRED
        SLACK_CONDITIONAL_SEND: file_exists ## REQUIRED
        SLACK_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
        SLACK_SOURCE_FILE_NAME: null ## REQUIRED
        SLACK_SOURCE_FOLDER_NAME: null
        SLACK_UPLOAD_FILE: no ## REQUIRED
        SLACK_TOKEN: null ## REQUIRED
        SLACK_INCLUDE_FILE_IN_THREAD: yes
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   '0'

```
