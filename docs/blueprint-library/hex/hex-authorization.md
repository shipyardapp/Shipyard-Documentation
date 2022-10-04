---
id: hex-authorization
title: Hex Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Hex to work with Shipyard's low-code Hex templates.
keywords:
  - Hex
  - blueprint
  - template
  - authorization
---

# Hex Authorization
To get started with the Hex Blueprints, you will need the following items from Hex:

- API Token
- Project ID

## Creating a Hex API Token
1. Log into [Hex](https://hex.tech/) and select the **Settings** option in the bottom left hand corner of the sidebar

![Hex Settings](../../.gitbook/assets/shipyard_2022_10_04_09_22_33.png)

2. Select the **API Keys** option
![Hex API Key](../../.gitbook/assets/shipyard_2022_10_04_09_24_24.png)
3. Select **New Token** and then when prompted, opt for a 30 day expiration and provide a description for your token.
4. Select **Generate Token**
![Generate Token](../../.gitbook/assets/shipyard_2022_10_04_09_26_24.png)
5. Ensure that you copy the token and save it, you will be unable to access it again.

## Publishing a Hex Project
In order for these Blueprints to function, the Hex project needs to be published. Ensure that the project is properly published by:

1. Selecting the **Publish** button in the top right corner
![Publish Project](../../.gitbook/assets/shipyard_2022_10_04_09_32_00.png)
2. Add in details to the **Version Details** section then hit **Publish version**
![Publish Hex Project](../../.gitbook/assets/shipyard_2022_10_04_09_33_33.png)
## Accessing the Project ID
The safest way to access the Project ID is through the project itself. 
1. Select the desired Project
2. Once open, select the **Variables** option on the left hand panel. The `hex_project_id` will be displayed under the **Hex Built-Ins** section. Click the `hex_project_id` to copy the Project ID to the clipboard. 

![Project Id](../../.gitbook/assets/shipyard_2022_10_04_09_36_11.png)
