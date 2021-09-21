---
id: dropbox
title: Dropbox Blueprints
hide_title: true
sidebar_label: Dropbox
description: Information about the Blueprint Library connections with Dropbox.
keywords:
  - dropbox
  - storage
  - template
  - blueprint
---

# Dropbox Blueprints

## Authorization

### Overview

To get started with any Dropbox Blueprints, you will need to create have a Dropbox app and a Service Token for that app. This Service Token is a secure way for Shipyard to access Dropbox and will be required for **every** Dropbox Blueprint.

It should be noted that this service token will usually be tied directly to your user account, giving our Dropbox Blueprints access to any file you have access to.

### Creating a Dropbox App

1. Go to [App Console](https://www.dropbox.com/developers/apps) for your Dropbox account.
2. Click **Create App**  
![App Console](../.gitbook/assets/shipyard_2021_09_20_22_35_27.png)
3. Select **Scoped access**
![Scoped Dropbox Access](../.gitbook/assets/shipyard_2021_09_20_22_36_50.png)
4. Select **Full Dropbox**
![Full Dropbox Access](../.gitbook/assets/shipyard_2021_09_20_22_37_27.png)
5. Name your app, click the checkbox that you agree to the terms of service, then click **Create App**.
![](../.gitbook/assets/shipyard_2021_09_20_22_38_25.png)

### Creating a Dropbox App Service Token
1. Go to [App Console](https://www.dropbox.com/developers/apps) for your Dropbox account.
2. Select your app from the list.  
![](../.gitbook/assets/shipyard_2021_09_20_23_12_11.png)  
3.Switch to the **Permissions** tab.   
![Permissions Tab](../.gitbook/assets/shipyard_2021_09_20_22_58_15.png)
4. Scroll down to the Files and Folders section. Check the boxes for **files.content.read** and **files.content.write**
![](../.gitbook/assets/shipyard_2021_09_20_22_59_32.png)

:::info
If you're accessing files in a Team folder, you'll also need to set the following permissions.

Scroll down to the Team Scopes section. Check the boxes for **team_data.member**, **team_data.team_space** and **files.team_metadata.write**.

![](../.gitbook/assets/shipyard_2021_09_20_23_02_24.png)
:::
5. Click **Submit** at the bottom of the screen.
6. Scroll back up to the top and change back to the **Settings** tab.
7. Scroll down until you reach the OAuth 2 section.
8. Under Access Token expiration, select **No expiration**.
![Access Token Expiration](../.gitbook/assets/shipyard_2021_09_20_22_52_38.png)
9. Click **Generate** under Generated Access Token  
![Generate Access Token](../.gitbook/assets/shipyard_2021_09_20_22_53_25.png)
10. Store this Access token somewhere safe. It will be used for all of the Dropbox Blueprints.

## Download Files Blueprint

### Overview

Quickly export one or more files from Dropbox. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

### Variables

| Variable Name |Required?| Description |
|:---|:---|:--|
| **Dropbox Folder Name** |➖ | Name of the folder where the file is stored in Dropbox. Leaving blank will look for the file in the root directory of Dropbox. |
| **Dropbox File Name Match Type** | ✔️ | Determines if the text in "Dropbox File Name" will look for one file with exact match, or multiple files using regex. |
| **Dropbox File Name** | ✔️ | Name of the target file in Dropbox. Can be regex if "Match Type" is set accordingly. |
| **Local Folder Name** | ➖ | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| **Local File Name** |➖ | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| **Access Token** | ✔️ | Access token, with no expiration, to access your Dropbox files. |

## Upload Files Blueprint

### Overview

Easily import one or more files directly into Dropbox. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

If the folder name provided doesn't already exist, it will be created.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Local Folder Name** | ➖ |Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| **Local File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **Local File Name** | ✔️ | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| **Dropbox Folder Name** | ➖ |Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of Dropbox. |
| **Dropbox File Name** | ➖ | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |
| **Access Token** | ✔️ | Access token, with no expiration, to access your Dropbox files. |

## Helpful Links

[Dropbox Python SDK Documentation](https://github.com/dropbox/dropbox-sdk-python)
