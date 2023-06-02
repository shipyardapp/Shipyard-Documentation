---
id: shipyard-api-authorization
sidebar_position: 1
title: Shipyard API Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize the Shipyard API to work with Shipyard's low code blueprints
keywords:
  - shipyard
  - blueprint
  - template
  - authorization
---
## Authorization

In order to interact with the API, an **API key** is required.

1. Navigate to your user's [**Settings**](https://app.shipyardapp.com/user/settings) page

![Settings page API keys](../../.gitbook/assets/settings-page-api-keys.png)

2. On the right side of the page, enter a name in the **API key name** text field
3. Click the **Create API Key** button

![API keys add new key](../../.gitbook/assets/api-keys-add-new-key.png)

4. Copy the generated API key value - _this is the **only time** the value will be available_

![API keys generated API key value](../../.gitbook/assets/shipyard_2022_11_14_21_38_45.png)

:::caution

Treat all API keys like passwords and do not commit them to code or share them with unauthorized parties

:::

Access for an API key can be revoked by clicking the **Delete** button next to its name in the list.