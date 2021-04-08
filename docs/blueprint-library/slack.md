---
id: slack
title: Slack Blueprints
hide_title: true
sidebar_label: Slack
description: Information about the Blueprint Library connections with Slack.
keywords:
  - slack
  - template
  - blueprint
---

# Slack Blueprints

## Authorization and Setup

### Overview
Slack Blueprints rely on users to have the Slack token of a working Slack app that's install to their organization's Workspace with the right permissions. The app must be invited to all channels the user wants to send a message to. Below are the steps of how to accomplish each of these individually.

### Creating a Slack App
1. Visit the [Your Apps](https://api.slack.com/apps) page in Slack.
![Slack Your Apps Page](../.gitbook/assets/shipyard_2021_04_05_11_56_09.png)
2. Click the **Create New App** at the top. You'll be greeted with a modal that asks you for a few details.
3. In the modal, you'll need to give your app a name and need to tie your app to an existing Workspace that you have access to. Once finished, click **Create App**.

![New Slack App Modal](../.gitbook/assets/slack_new_app_modal.png)

### Setting Slack App Permissions
1. On your new app's Basic Information page, select **Bots** to navigate to the App Home page.
![Slack App Basic Information](../.gitbook/assets/slack_app_basic_info.png)
2. On the App Home page, click **Review Scopes to Add**.
![Slack App Home Page](../.gitbook/assets/slack_app_home.png)
3. Scroll down to the Scopes section of the page and click **Add an OAuth Scope** for your Bot token.
4. Search for and add all of the following scopes:
   - channels:join
   - channels:read
   - chat:write
   - chat:write.public
   - groups:read
   - users:read
   - users:read.email
  
![Slack App Scoes](../.gitbook/assets/slack_app_scopes.png)

At a high level, here's what these scopes mean for your application:

**Channels/Groups** - Give your bot the ability to see both public and private channels that exist, with the added ability for users to invite your bot to the channel.

**Chat** - Send messages from the bot to any channels where it is currently a member (or a public channel).

**Users** - Give your bot the ability to look up information about users so it can appropriately `@tag` them.

:::caution
There are two sections for Slack App scopes. You do not need to add OAuth Scopes for User tokens.
:::

### Accessing the Slack Bot Token
1. Once all permissions are set, scroll to the top of the page and click **Install to Worksapce**.
2. On the next screen, click **Allow**.

![Install App to Slack Workspace](../.gitbook/assets/slack_install_to_workspace.png)

3. The next screen will now show you a Bot User Oauth Token. Store this somewhere safe and **DO NOT SHARE IT** with anyone outside of your organization. This token is what you'll enter in the **Slack Token** field on Shipyard.

![Slack Bot Token](../.gitbook/assets/shipyard_2021_04_05_12_58_06.png)

:::note
If you ever add additional scopes to your application, you will have to reinstall it to your workplace.
:::

### Inviting a Slack App to your Channel
In every private channel that you want send messages to, you'll need to invite your application. 

1. Navigate to the channel you want to send messages to.
2. Type `/invite` and select the option that appears to **Add apps to this channel**

![Invite to Slack Channel](../.gitbook/assets/shipyard_2021_04_05_12_24_36.png)

3. Search for the app you want to add to the channel and click **Add**.

![](../.gitbook/assets/shipyard_2021_04_05_12_26_54.png)

:::note
If the channel is public, the bot should be able to find it without being added. If not, try adding the bot to the channel.
:::
## Blueprints
### Send Message

#### Overview
Send a Slack message to any channel or DM, alerting any user in your company. 

A Vessel built with this Blueprint should never fail and will send a message every time it is run.

#### Variables

|Variable Name|Description|
|:--------------|:---------------|
|**Destination Type**| The type of location where you want your message to be sent. <br></br><br></br>If **Channel** is selected, a message can be sent directly to a channel. <br></br><br></br>If **DM** is selected, users can be sent messages directly from your app.
|**Channel Name**| The name of the channel where you want your message to be sent, without the `#` prefix. This field will be ignored if the destination type is DM.|
|**User Lookup Method**|Used to determine what data point to look at to find a User's ID for notification tagging.<br></br><br></br>**Email** - the email address of the user in your Slack workspace. We recommend using this field when possible, as it cannot be changed by a user.<br></br><br></br>**Real Name** - Full Name that a user has set for themselves in Slack. This value may be inconsistent if your organization doesn't enforce naming standards, and it can be changed by a user.<br></br><br></br>**Display Name** - the `@username` that you use to reference someone directly in slack. For more important notifications, it's inadvisable to use this method because users can easily change this name on their own and multiple users can share the same display name.|
|**Users To Notify**|A comma separated list of case insensitive user information, used to look up user IDs. The user information needs to match the selected User Lookup Method. This field is only required if the Destination Type is DM.|
|**Message**|The message that you want sent to a user. You can use all of the same markdown syntax that you would typically use in a Slack message. If you want to create a link in your message, you can use the format of `<www.website.com`&vert;`text to link>`|
|**Slack Token**|The Bot User Oauth Token that is used to programmatically send messages by your specific application.|

### Send Message Conditionally

#### Overview
Send a message to Slack conditionally by determining if a file exists or not. 

Vessels built with this Blueprint should never fail, as the prescence or lack or prescence of the file only indicates whether or not the message should be sent. 

Works primarily when used as part of a Fleet, where a File can be generated or downloaded by an upstream Vessel.

#### Variables
|Variable Name|Description|
|:--------------|:---------------|
|**Destination Type**| The type of location where you want your message to be sent. <br></br><br></br>If **Channel** is selected, a message can be sent directly to a channel. <br></br><br></br>If **DM** is selected, users can be sent messages directly from your app.
|**Channel Name**| The name of the channel where you want your message to be sent, without the `#` prefix. This field will be ignored if the destination type is DM.|
|**User Lookup Method**|Used to determine what data point to look at to find a User's ID for notification tagging.<br></br><br></br>**Email** - the email address of the user in your Slack workspace. We recommend using this field when possible, as it cannot be changed by a user.<br></br><br></br>**Real Name** - Full Name that a user has set for themselves in Slack. This value may be inconsistent if your organization doesn't enforce naming standards, and it can be changed by a user.<br></br><br></br>**Display Name** - the `@username` that you use to reference someone directly in slack. For more important notifications, it's inadvisable to use this method because users can easily change this name on their own and multiple users can share the same display name.|
|**Users To Notify**|A comma separated list of case insensitive user information, used to look up user IDs. The user information needs to match the selected User Lookup Method. This field is only required if the Destination Type is DM.|
|**Message**|The message that you want sent to a user. You can use all of the same markdown syntax that you would typically use in a Slack message. If you want to create a link in your message, you can use the format of `<www.website.com`&vert;`text to link>`|
|**Send Message Only When**|Determines what condition needs to be met for a message to send.<br></br><br></br>**File(s) Exist**  - Send the message only if a file can be found using the provided `folder/filename.ext` combination.<br></br><br></br>**File(s) Don't Exist**  - Send the message only if a file **cannot** found using the provided `folder/filename.ext` combination.|
|**File Name**|The name of the file you want to search for.|
|**Folder Name**|The folder that the file can be found in. Unless specified elsewhere, starts by looking in the current working directory. Can contain leading, trailing, or no slashes (if only looking for the file in a single folder).<br></br><br></br>This field is not required and the folder name can technically be provided as part of the File Name.If left blank, will look for the file in the current working directory.|
|**File Name Match Type**|The way you want the text in the File Name field to be treated.<br></br><br></br>**Exact** - Looks for the exact text that was typed in the File Name field, case sensitive.<br></br><br></br>**Regex** - Treats the text as that was typed in the File Name field as regex. Will look for any files, in all subdirectories of the provided Folder Name, that match the regex.|
|**Upload File to Slack?**|Determines whether or not the file(s) you're looking for to conditionally send the message should get uploaded to Slack. Defaults to no.|
|**Slack Token**|The Bot User Oauth Token that is used to programmatically send messages by your specific application.|

### Send Message with File

#### Overview

Send a Slack message with a message attachment to any channel or DM, alerting any user in your company.
If multiple files are found, the files will be compressed and zipped together.

Works primarily when used as part of a Fleet, where a File can be generated or downloaded by an upstream Vessel.

This Blueprint is similar to **Send Message Conditionally** except that it returns an error if a file cannot be found, since the entire objective is to send the file.

#### Variables
|Variable Name|Description|
|:--------------|:---------------|
|**Destination Type**| The type of location where you want your message to be sent. <br></br><br></br>If **Channel** is selected, a message can be sent directly to a channel. <br></br><br></br>If **DM** is selected, users can be sent messages directly from your app.
|**Channel Name**| The name of the channel where you want your message to be sent, without the `#` prefix. This field will be ignored if the destination type is DM.|
|**User Lookup Method**|Used to determine what data point to look at to find a User's ID for notification tagging.<br></br><br></br>**Email** - the email address of the user in your Slack workspace. We recommend using this field when possible, as it cannot be changed by a user.<br></br><br></br>**Real Name** - Full Name that a user has set for themselves in Slack. This value may be inconsistent if your organization doesn't enforce naming standards, and it can be changed by a user.<br></br><br></br>**Display Name** - the `@username` that you use to reference someone directly in slack. Must be referenced without the `@` symbol. For more important notifications, it's inadvisable to use this method because users can easily change this name on their own and multiple users can share the same display name.|
|**Users To Notify**|A comma separated list of case insensitive user information, used to look up user IDs. The user information needs to match the selected User Lookup Method. This field is only required if the Destination Type is DM.|
|**Message**|The message that you want sent to a user. You can use all of the same markdown syntax that you would typically use in a Slack message. If you want to create a link in your message, you can use the format of `<www.website.com`&vert;`text to link>`|
|**Send Message Only When**|Determines what condition needs to be met for a message to send.<br></br><br></br>**File(s) Exist**  - Send the message only if a file can be found using the provided `folder/filename.ext` combination.<br></br><br></br>**File(s) Don't Exist**  - Send the message only if a file **cannot** found using the provided `folder/filename.ext` combination.|
|**File Name**|The name of the file you want to search for.|
|**Folder Name**|The folder that the file can be found in. Unless specified elsewhere, starts by looking in the current working directory. Can contain leading, trailing, or no slashes (if only looking for the file in a single folder).<br></br><br></br>This field is not required and the folder name can technically be provided as part of the File Name.If left blank, will look for the file in the current working directory.|
|**File Name Match Type**|The way you want the text in the File Name field to be treated.<br></br><br></br>**Exact** - Looks for the exact text that was typed in the File Name field, case sensitive.<br></br><br></br>**Regex** - Treats the text as that was typed in the File Name field as regex. Will look for any files, in all subdirectories of the provided Folder Name, that match the regex.|
|**Upload File to Slack?**|Determines whether or not the file(s) you're looking for to conditionally send the message should get uploaded to Slack. Defaults to no.|
|**Slack Token**|The Bot User Oauth Token that is used to programmatically send messages by your specific application.|


## Troubleshooting
Having problems with the Slack Blueprints? If these don't resolve your issues, reach out to support!

### Channel Not Found

`The server responded with: {'ok': False, 'error': 'channel_not_found'}`

When this error occurs, Slack can't find the channel you're trying to send a message to. There are a few reasons why this error might occur:
1. You have a typo in your channel, as entered into Shipyard.
2. If the Destination Type is set to DM, you may have a typo in your Users to Notify field.
3. You have not invited your app to the channel, so it can't find it.
4. The channel legitimately doesn't exist in your workspace's Slack.

### User Does Not Exist

`The name of "xxxxx" does not exist in Slack.`

When this error occurs, users listed under Users to Notify will show up as `<@>` when sent to Slack. There are a few reasons why this error might occur:
1. You have a typo in your **Users to Notify** field.
2. Your User Lookup Method and Users to Notify fields don't match up. For example:
   1. You have provided an email but are looking up based on a Display name.
   2. You have provided the user's real name but are looking up their `@handle` Display Name.
3. If using Display Name or Real Name as the lookup method, the user may have recently changed these values in their profile.
4. The user you're looking for doesn't actually exist in your workspace's Slack.

### Invalid Authorization

`The server responded with: {'ok': False, 'error': 'invalid_auth'}`

The Slack Token that was provided is incorrect. Follow the steps [above](#accessing-the-slack-bot-token) to resolve.
## Helpful Links

[Slack Python Documentation](https://slack.dev/python-slackclient/)

## Additional Notes
1. The Slack Blueprints have not been tested to work with shared channels or guest user accounts in your Slack workspace.
2. The Slack Blueprints cannot send a message to a group chat of individuals. It can, however, DM multiple individuals simultaneously.

