---
id: notion-authorization
sidebar_position: 1
title: Notion Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Notion to work with Shipyard's low-code Notion templates.
keywords:
- notion
- blueprint
- template
- authorization
---

# Notion Authorization
In order to connect Shipyard to Notion, you will need:

1. A Notion Access Token
2. A Notion Database ID
3. A Notion Page ID

## Access Token

In order to obtain an access token, you must create an integration within Notion. 

1. Go to the [Notion Integrations Portal](https://www.notion.so/my-integrations)

2. Select "New Integration"
![](https://cdn.sanity.io/images/2xyydva6/dev/64ee17cf9a3d076dca8941fc0260e2e3f5fe303c-1896x750.png?w=450)
3. Provide a Name for your Integration
![](https://cdn.sanity.io/images/2xyydva6/dev/513f275e7444ed731ffebfe8fb86302befdcbc90-805x428.png?w=450)
4. Copy the Integration Secret Value to use as the `Notion Access Token` input
![](https://cdn.sanity.io/images/2xyydva6/dev/9f94086bea34f71a12a1f7c7b880824b50ac852e-936x293.png?w=450)

## Connecting the Integration
In order to make API calls to Notion with the access token created in the previous steps, you must create a parent page where the database will reside and establish a connection with your Integration
1. Navigate to a page where your database either currently resides or will reside
2. In the top right hand corner, select the settings (`...`) icon and toward the bottom select the `Add Connections` option
![](https://cdn.sanity.io/images/2xyydva6/production/0e8b665da073d76ced9430118a10f81f1347d7bf-474x960.png?w=450)
3. Search for your integration and select `confirm` to establish a connection
![](https://cdn.sanity.io/images/2xyydva6/production/66d131cc4c34d732a4460464bdcc8de83780b479-470x237.png?w=450)

## Database ID
To obtain the Database ID, you need to simply access a database within the Notion UI and copy the trailing portion of the URL

![](https://cdn.sanity.io/images/2xyydva6/production/b39ea4b0eeefcac4219b562c04a016f1f8449f61-719x199.png?w=450)
## Page ID

To obtain the Page ID:
1. Select a Page in Notion
![](https://cdn.sanity.io/images/2xyydva6/dev/5c7778360579e61570b90b718479d5a4b313e8ef-214x496.png?w=450)
2. With the page selected, navigate to the right hand side and select the `Share` option
![](https://cdn.sanity.io/images/2xyydva6/dev/32bb3decb8d78dc183eb8732dabd28ec0a196cc8-526x234.png?w=450)
3. Copy the Link and paste in the browser. The string after the `notion.so/PAGE_NAME`
![](https://cdn.sanity.io/images/2xyydva6/dev/c916ebf06fc871a2ea55800d31b38de29d7e631f-610x31.png?w=450)
