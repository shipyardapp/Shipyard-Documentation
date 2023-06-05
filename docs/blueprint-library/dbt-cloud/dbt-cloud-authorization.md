---
id: dbt-cloud-authorization
sidebar_position: 1
title: dbt Cloud Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize dbt Cloud to work with Shipyard's low-code dbt Cloud templates.
keywords:
- dbt cloud
- blueprint
- template
- authorization
---

# dbt Cloud Authorization
# dbt Cloud Authorization

To get started with any dbt Cloud Blueprints, you will need to create an Service Token. This Service Token is a secure way for Shipyard to access dbt Cloud and will be required for **every** dbt Cloud Blueprint.

## Create a dbt Cloud Service Token
1. Navigate to your organization's instance of [dbt Cloud](https://cloud.getdbt.com)
2. Open the side navigation and select **Account Settings**

![dbt Cloud Account Settings](https://cdn.sanity.io/images/2xyydva6/production/e00dcb56fef3936ebfd79ba39812d8ae7a33e15c-309x369.png?w=450)

3. Select **Service Tokens** from the menu.

![dbt Cloud Service Tokens](https://cdn.sanity.io/images/2xyydva6/production/2e1c91b6c1d42204d5f8fc204f7154717f9d3914-178x317.png?w=450)

4. Select the option to create a **New Token**

![dbt Cloud Create New Token](https://cdn.sanity.io/images/2xyydva6/production/9f993e1318d3af8966b60525a6914ea6c40f12e5-1371x219.png?w=450)

5. Name your token something descriptive, like "Shipyard", and give it "Account Admin" privileges. Click **Save** once you're finished.

![dbt Cloud Token Details](https://cdn.sanity.io/images/2xyydva6/production/07cbbaa5d5a349d2c2d0581a80847afe42c1d6bd-1379x280.png?w=450)

6. Copy the generated token to a Password Manager service or somewhere safe. This value will be used in every dbt Cloud Blueprint.

![dbt Cloud Successful Token Creation](https://cdn.sanity.io/images/2xyydva6/production/cd00e8f0992b84129754fbd468c1364f1fea14fd-613x138.png?w=450)
