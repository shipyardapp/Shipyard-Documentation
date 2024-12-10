---
id: hex-authorization
sidebar_position: 1
title: Hex Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Hex to work with Platform's low-code Hex templates.
keywords:
  - hex
  - blueprint
  - template
  - authorization
---

#  Authorization

To get started with the Hex Blueprints, you will need the following items from Hex:

- API Token
- Project ID

## Creating a Hex API Token
1. Log into [Hex](https://hex.tech/) and select the **Settings** option in the bottom left hand corner of the sidebar

![](https://cdn.sanity.io/images/2xyydva6/production/9bbe0a2b17adb2508e4edc0871081c5c9a4245b2-1675x759.png?w=450)

2. Select the **API Keys** option

![](https://cdn.sanity.io/images/2xyydva6/production/d2dd6678f12eb1d47ba25ea488439a252b682bba-1322x465.png?w=450)

3. Select **New Token** and then when prompted, opt for a 30 day expiration and provide a description for your token.
4. Select **Generate Token**

![](https://cdn.sanity.io/images/2xyydva6/production/1bfbe82a3873f2f362c40c06e24614f21732a347-637x224.png?w=450)

5. Ensure that you copy the token and save it, you will be unable to access it again.

## Publishing a Hex Project
In order for these Blueprints to function, the Hex project needs to be published. Ensure that the project is properly published by:

1. Selecting the **Publish** button in the top right corner

![](https://cdn.sanity.io/images/2xyydva6/production/30aee84109164431a45fbf3f0ab73ada49da9941-1519x784.png?w=450)

2. Add in details to the **Version Details** section then hit **Publish version**

![](https://cdn.sanity.io/images/2xyydva6/production/a006e2b44fa11a5a66fc389cd11f6af9273565a1-275x466.png?w=450)

## Accessing the Project ID
The safest way to access the Project ID is through the project itself. 
1. Select the desired Project
2. Once open, select the **Variables** option on the left hand panel. The `hex_project_id` will be displayed under the **Hex Built-Ins** section. Click the `hex_project_id` to copy the Project ID to the clipboard. 

![](https://cdn.sanity.io/images/2xyydva6/production/1e9a92403ecf3c87e0d5427b59df713846500197-1778x749.png?w=450)
