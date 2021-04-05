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

:::caution
This section is a work in progress and may be missing key details. If you need help using Slack Blueprints, reach out to support@shipyardapp.com
:::

## Authorization

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

## Download Files Blueprint

### Overview

### Variables

### Screenshots

## Upload Files Blueprint

### Overview

### Variables

### Screenshots

## Helpful Links

[Slack Python Documentation](https://slack.dev/python-slackclient/)

## Troubleshooting
Having problems with the Slack Blueprints? If these don't resolve your issues, reach out to support!

### Channel Not Found

`The server responded with: {'ok': False, 'error': 'channel_not_found'}`

When this error occurs, Shipyard can't find the channel you're trying to send a message to. There are a few reasons why this error might occur:
1. You have a typo in your channel, as entered into Shipyard.
2. You have not invited your app to the channel, so it can't find it.
3. The channel legitimately doesn't exist in your workspace's Slack.

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

## Additional Notes
1. The Slack Blueprints have not been tested to work with shared channels or guest user accounts in your Slack workspace.
2. The Slack Blueprints cannot send a message to a group chat of individuals. It can, however, DM multiple individuals simultaneously.

