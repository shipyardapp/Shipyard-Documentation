---
id: census-authorization
sidebar_position: 1
title: Census Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Census to work with Platform's low-code Census templates.
keywords:
- census
- blueprint
- template
- authorization
---

# Census Authorization
To get started with any Census Blueprints, you will need to create an API Key. This API Key is a secure way for Platform to access Census and will be required for **every** Census Blueprint. Additionally, you'll need a Sync ID.

## Creating a Census API Key

1. Log in to [Census](https://app.getcensus.com/)
2. Select **Settings** on the sidebar and then click API on the top navigation.

![Census Settings](https://cdn.sanity.io/images/2xyydva6/production/9eefa77304eb6f4b1f1a999c86c04c3e9899d853-1339x447.png?w=450)

3. Click the button that either says **Generate Key** or **Regenerate Key**.
4. Click the button that says "**Click to Show**"
5. Copy the API Key and store it somewhere safe. This value will be used for every Census Blueprint.

## Finding the Sync ID
Select any Sync from Census. The Sync ID can be found in the URL.

For example, if your sync URL is `https://app.getcensus.com/syncs/5432/overview` then your sync ID would be `5432`.
