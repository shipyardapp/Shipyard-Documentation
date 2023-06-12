---
id: dropbox-authorization
sidebar_position: 1
title: Dropbox Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Dropbox to work with Shipyard's low-code Dropbox templates.
keywords:
- dropbox
- blueprint
- template
- authorization
---

# Dropbox Authorization
To get started with any Dropbox Blueprints, you will need to create have a Dropbox app and a Service Token for that app. This Service Token is a secure way for Shipyard to access Dropbox and will be required for **every** Dropbox Blueprint.

This service token will usually be tied directly to your user account, giving our Dropbox Blueprints access to any file you have access to.

### Creating a Dropbox App

1. Go to [App Console](https://www.dropbox.com/developers/apps) for your Dropbox account.
2. Click **Create App**  

![](https://cdn.sanity.io/images/2xyydva6/production/dd7663267d7d1714ab9747f992cffda97d167672-2024x270.png?w=450)

3. Select **Scoped access**

![](https://cdn.sanity.io/images/2xyydva6/production/3d1629f83264a2736fa957927f08896268179d76-2294x526.png?w=450)

4. Select **Full Dropbox**

![](https://cdn.sanity.io/images/2xyydva6/production/55648afa57e00c4976385794b1c96ff4608e3a5f-2228x496.png?w=450)

5. Name your app, click the checkbox that you agree to the terms of service, then click **Create App**.

![](https://cdn.sanity.io/images/2xyydva6/production/26ad193d2b24cfcf5aabecd807db2c9d4f2cc494-2222x580.png?w=450)


### Creating a Dropbox App Service Token
1. Go to [App Console](https://www.dropbox.com/developers/apps) for your Dropbox account.
2. Select your app from the list.  

![](https://cdn.sanity.io/images/2xyydva6/production/2c1e7b5ba3f03d0fdab6f1653b89dc0f248bfeda-656x532.png?w=450)

3.Switch to the **Permissions** tab.   

![](https://cdn.sanity.io/images/2xyydva6/production/8cf13890d0e0efe43370478a1093b6fe37a4a311-894x226.png?w=450)

4. Scroll down to the Files and Folders section. Check the boxes for **files.content.read** and **files.content.write**

![](https://cdn.sanity.io/images/2xyydva6/production/472c385431fc606e91b017b45331538aba0a8722-1436x494.png?w=450)

:::info
If you're accessing files in a Team folder, you'll also need to set the following permissions.

Scroll down to the Team Scopes section. Check the boxes for **team_data.member**, **team_data.team_space** and **files.team_metadata.write**.

![](https://cdn.sanity.io/images/2xyydva6/production/b7162859452b802d7f864afdad2c2b99a6a14592-1490x492.png?w=450)

:::
5. Click **Submit** at the bottom of the screen.
6. Scroll back up to the top and change back to the **Settings** tab.
7. Scroll down until you reach the OAuth 2 section.
8. Under Access Token expiration, select **No expiration**.

![](https://cdn.sanity.io/images/2xyydva6/production/00f16a87ff63471a1127595f599ae9d981238421-446x288.png?w=450)

9. Click **Generate** under Generated Access Token  

![](https://cdn.sanity.io/images/2xyydva6/production/80c462bee6956ab85f62118aec2a7e3154b1e59d-398x152.png?w=450)

10. Store this Access token somewhere safe. It will be used for all of the Dropbox Blueprints.
