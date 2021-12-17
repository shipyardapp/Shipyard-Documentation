---
id: dbt-cloud-authorization
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

To get started with any dbt Cloud Blueprints, you will need to create an Service Token. This Service Token is a secure way for Shipyard to access dbt Cloud and will be required for **every** dbt Cloud Blueprint..

## Create a dbt Cloud Service Token
1. Navigate to your organization's instance of [dbt Cloud](https://cloud.getdbt.com)
2. Open the side navigation and select **Account Settings**

![dbt Cloud Account Settings](../../.gitbook/assets/shipyard_2021_06_24_12_15_51.png)

3. Select **Service Tokens** from the menu.
   
![dbt Cloud Service Tokens](../../.gitbook/assets/shipyard_2021_06_24_11_59_13.png)

4. Select the option to create a **New Token**

![dbt Cloud Create New Token](../../.gitbook/assets/shipyard_2021_06_24_11_59_57.png)

5. Name your token something descriptive, like "Shipyard", and give it "Account Admin" privileges. Click **Save** once you're finished.

![dbt Cloud Token Details](../../.gitbook/assets/shipyard_2021_06_24_12_06_03.png)

6. Copy the generated token to a Password Manager service or somewhere safe. This value will be used in every dbt Cloud Blueprint.

![dbt Cloud Successful Token Creation](../../.gitbook/assets/shipyard_2021_06_24_12_07_21.png)