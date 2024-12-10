---
id: slack-authorization
sidebar_position: 1
title: Slack Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Slack to work with Platform's low-code Slack templates.
keywords:
  - slack
  - blueprint
  - template
  - authorization
---

#  Authorization

Slack Blueprints rely on users to have the Slack token of a working Slack app that's install to their organization's Workspace with the right permissions. The app must be invited to all channels the user wants to send a message to. Below are the steps of how to accomplish each of these individually.

## Creating a Slack App
1. Visit the [Your Apps](https://api.slack.com/apps) page in Slack.

![](https://cdn.sanity.io/images/2xyydva6/production/4a4339ff32114ae573b8643888ba68a99fd2f43e-982x756.png?w=450)

2. Click the **Create New App** at the top. You'll be greeted with a modal that asks you for a few details.
3. In the modal, you'll need to give your app a name and need to tie your app to an existing Workspace that you have access to. Once finished, click **Create App**.

![](https://cdn.sanity.io/images/2xyydva6/production/61748ddba6d404fb1f5688e67d9668a3f35b025d-583x478.png?w=450)

## Setting Slack App Permissions
1. On your new app's Basic Information page, select **Bots** to navigate to the App Home page.

![](https://cdn.sanity.io/images/2xyydva6/production/560f31b0993f66932d0884a2468900ee9f5253fd-982x720.png?w=450)

2. On the App Home page, click **Review Scopes to Add**.

![](https://cdn.sanity.io/images/2xyydva6/production/24067d34e42702c138aa7a5f0bb2d65006eafaa3-969x655.png?w=450)

3. Scroll down to the Scopes section of the page and click **Add an OAuth Scope** for your Bot token.
4. Search for and add all of the following scopes:
   - channels:join
   - channels:read
   - chat:write
   - chat:write.public
   - groups:read
   - users:read
   - users:read.email
   - files:write
  
![](https://cdn.sanity.io/images/2xyydva6/production/3ce7b954e013f671104be84c5fd590b32a1f280f-668x585.png?w=450)

At a high level, here's what these scopes mean for your application:

**Channels/Groups** - Give your bot the ability to see both public and private channels that exist, with the added ability for users to invite your bot to the channel.

**Chat** - Send messages from the bot to any channels where it is currently a member (or a public channel).

**Users** - Give your bot the ability to look up information about users so it can appropriately `@tag` them.

**_CAUTION:_** There are two sections for Slack App scopes. You do not need to add OAuth Scopes for User tokens.


### Accessing the Slack Bot Token
1. Once all permissions are set, scroll to the top of the page and click **Install to Worksapce**.
2. On the next screen, click **Allow**.

![](https://cdn.sanity.io/images/2xyydva6/production/3d24e9adb601f63046caa7bb58ed8a96936a6d93-633x607.png?w=450)

3. The next screen will now show you a Bot User Oauth Token. Store this somewhere safe and **DO NOT SHARE IT** with anyone outside of your organization. This token is what you'll enter in the **Slack Token** field on Platform.

![](https://cdn.sanity.io/images/2xyydva6/production/24fc255ab0a98a5f95979fd7b34247666c0deac7-711x484.png?w=450)

**_NOTE:_** If you ever add additional scopes to your application, you will have to reinstall it to your workplace.


## Inviting a Slack App to your Channel
In every private channel that you want send messages to, you'll need to invite your application. 

1. Navigate to the channel you want to send messages to.
2. Type `/invite` and select the option that appears to **Add apps to this channel**

![](https://cdn.sanity.io/images/2xyydva6/production/85927d2f717f40dd24d45c6087c673d59f7caaa9-702x313.png?w=450)

3. Search for the app you want to add to the channel and click **Add**.

![](https://cdn.sanity.io/images/2xyydva6/production/d641a358d31ea5fcc6c433063e3df01b98e2a9df-658x306.png?w=450)

**_NOTE:_** If the channel is public, the bot should be able to find it without being added. If not, try adding the bot to the channel.
