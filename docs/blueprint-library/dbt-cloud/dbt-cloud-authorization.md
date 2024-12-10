---
id: dbt-cloud-authorization
sidebar_position: 1
title: dbt Cloud Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize dbt Cloud to work with Platform's low-code dbt Cloud templates.
keywords:
  - dbt cloud
  - blueprint
  - template
  - authorization
---

#  Authorization

# dbt Cloud Authorization

To get started with any dbt Cloud Blueprints, you will need to create an Service Token. This Service Token is a secure way for Platform to access dbt Cloud and will be required for **every** dbt Cloud Blueprint.

## Create a dbt Cloud Service Token
1. Navigate to your organization's instance of [dbt Cloud](https://cloud.getdbt.com)
2. Open the side navigation and select **Account Settings** in the top right corner

![dbt settings](https://cdn.sanity.io/images/2xyydva6/production/cb12091072ea0f9b20bc9062ec8dde0ec75252f8-406x143.png?w=450)

3. Select **Service Tokens** from the menu.
   
![dbt service tokens](https://cdn.sanity.io/images/2xyydva6/production/af46e09c47c778b9f147d677154788b069c61dd2-256x414.png?w=450)

4. Select the option to **Create service token**

![create token](https://cdn.sanity.io/images/2xyydva6/production/b32eb62dd2f8b452a45d37fb81f4ed9346537aa0-1617x284.png?w=450)

5. Name your token something descriptive, like "PlatformToken", and give it "Account Admin" privileges. Click **Save** once you're finished.

![](https://cdn.sanity.io/images/2xyydva6/production/1b83e0b7447d58206f7777f2c037b08d31fb33a3-662x433.png?w=450)

6. Copy the generated token to a Password Manager service or somewhere safe. This value will be used in every dbt Cloud Blueprint.

![dbt Cloud Successful Token Creation](https://cdn.sanity.io/images/2xyydva6/production/cd00e8f0992b84129754fbd468c1364f1fea14fd-613x138.png?w=450)
