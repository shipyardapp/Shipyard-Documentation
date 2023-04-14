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
![App Console](../../.gitbook/assets/shipyard_2021_09_20_22_35_27.png)
3. Select **Scoped access**
![Scoped Dropbox Access](../../.gitbook/assets/shipyard_2021_09_20_22_36_50.png)
4. Select **Full Dropbox**
![Full Dropbox Access](../../.gitbook/assets/shipyard_2021_09_20_22_37_27.png)
5. Name your app, click the checkbox that you agree to the terms of service, then click **Create App**.
![](../../.gitbook/assets/shipyard_2021_09_20_22_38_25.png)

### Creating a Dropbox App Service Token
1. Go to [App Console](https://www.dropbox.com/developers/apps) for your Dropbox account.
2. Select your app from the list.  
![](../../.gitbook/assets/shipyard_2021_09_20_23_12_11.png)  
3.Switch to the **Permissions** tab.   
![Permissions Tab](../../.gitbook/assets/shipyard_2021_09_20_22_58_15.png)
4. Scroll down to the Files and Folders section. Check the boxes for **files.content.read** and **files.content.write**
![](../../.gitbook/assets/shipyard_2021_09_20_22_59_32.png)

:::info
If you're accessing files in a Team folder, you'll also need to set the following permissions.

Scroll down to the Team Scopes section. Check the boxes for **team_data.member**, **team_data.team_space** and **files.team_metadata.write**.

![](../../.gitbook/assets/shipyard_2021_09_20_23_02_24.png)
:::
5. Click **Submit** at the bottom of the screen.
6. Scroll back up to the top and change back to the **Settings** tab.
7. Scroll down until you reach the OAuth 2 section.
8. Under Access Token expiration, select **No expiration**.
![Access Token Expiration](../../.gitbook/assets/shipyard_2021_09_20_22_52_38.png)
9. Click **Generate** under Generated Access Token  
![Generate Access Token](../../.gitbook/assets/shipyard_2021_09_20_22_53_25.png)
10. Store this Access token somewhere safe. It will be used for all of the Dropbox Blueprints.
