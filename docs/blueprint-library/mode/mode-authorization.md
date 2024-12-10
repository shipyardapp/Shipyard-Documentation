---
id: mode-authorization
sidebar_position: 1
title: Mode Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Mode to work with Platform's low-code Mode templates.
keywords:
- mode
- blueprint
- template
- authorization
---

# Mode Authorization
To get started with any Mode Blueprints, you will need to create an API Access Token. This API Access Token is a secure way for Platform to access Mode and will be required for **every** Mode Blueprint. Additionally, you'll need to find your Workspace Name and your Report ID.

## Creating a Mode Access Token
1. Log into [Mode](https://app.mode.com/).
2. At the top, click your Name/Workspace then click **My Account Settings**.

![](https://cdn.sanity.io/images/2xyydva6/production/3f233930200506b63f33b8852778d134b871dd61-287x329.png?w=450)

3. Click **API Tokens** on the sidebar.

![](https://cdn.sanity.io/images/2xyydva6/production/b58e449da1c44c117e4bd3a88de627af49aac399-285x241.png?w=450)

4. Provide a descriptive New token name like "Platform".
5. Click **Create Token**.
6. Copy both the Token and Token Password and store them somewhere safe. These values will be used for every Mode Blueprint.

![](https://cdn.sanity.io/images/2xyydva6/production/052f573fd8d4726013a06f5c5043663d79981da2-731x346.png?w=450)

## Finding your Workspace Name
On any page of Mode, the workspace name can be found in the URL.

For example, if you're on the main dashboard and the URL is `https://app.mode.com/my-workspace/spaces/90210abcdef` then your workspace name would be `my-workspace`.

## Finding your Report ID
When viewing a report in Mode, the Report ID can be found at the end of the URL.

For example, if you're on a report and the URL is `https://app.mode.com/my-org/reports/90210abcdef` then your report ID would be `90210abcdef`.
