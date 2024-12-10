---
id: hightouch-authorization
sidebar_position: 1
title: Hightouch Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Hightouch to work with Platform's low-code Hightouch templates.
keywords:
- hightouch
- blueprint
- template
- authorization
---

# Hightouch Authorization
To get started with any Hightouch Blueprints, you will need to create an API Key. This API Key is a secure way for Platform to access Hightouch and will be required for **every** Hightouch Blueprint. Additionally, you'll need a Sync ID.

## Creating a Hightouch API Key
1. Log into [Hightouch](https://app.hightouch.com/).
2. Select **Settings** on the sidebar and then click **API Keys** on the top navigation.

![](https://cdn.sanity.io/images/2xyydva6/production/b4ec58539d64e80982f5e100eba6dd365ef1589a-1322x518.png?w=450)

3. Click the button that says **Add API Key**.
4. Enter a descriptive name like "Platform"
5. Copy the API Key and store it somewhere safe. This value will be used for every Hightouch Blueprint.
6. Click **Create**.

![](https://cdn.sanity.io/images/2xyydva6/production/7f5f9f29d40a0f5bb835dbec114ec233e3a4cf90-511x416.png?w=450)

## Finding the Sync ID
Select any Sync from Hightouch. The Sync ID can be found at the end of the URL.

For example, if your sync URL is `https://app.hightouch.com/shipyard/syncs/90210` then your sync ID would be `90210`.
