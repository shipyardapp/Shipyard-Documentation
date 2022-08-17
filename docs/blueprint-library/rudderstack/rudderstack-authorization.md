---
id: rudderstack-authorization
title: RudderStack Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize RudderStack to work with Shipyard's low-code RudderStack templates.
keywords:
  - rudderstack
  - blueprint
  - template
  - authorization
---

# RudderStack Authorization
To get started with any RudderStack Blueprints, you will need to create an Access Token. This Access Token is a secure way for Shipyard to access RudderStack and will be required for **every** RudderStack Blueprint. Additionally, you will need to know where to find your Source IDs.

## Create a RudderStack Access Token
1. Sign in to [RudderStack](https://app.rudderstack.com/)
2. On the sidebar, click **Settings**.

![Click Rudderstack Settings](../../.gitbook/assets/shipyard_2022_08_14_21_12_54.png)

3. Scroll to the bottom until you see **Personal Access Tokens**.
4. Click **Generate new token**
![Generate New Rudderstack Token](../../.gitbook/assets/shipyard_2022_08_14_21_13_38.png)
5. Provide a descriptive Token name like "**Shipyard**". 
6. Select the "**Read-Write**" Role.
7. Click **Generate**.

![Generate Rudderstack Access Token](../../.gitbook/assets/shipyard_2022_08_14_21_15_15.png)

8. Copy the personal access token and store it in a safe place. You'll need this for every RudderStack Blueprint.

![Copy the RudderStack Access Token](../../.gitbook/assets/shipyard_2022_08_14_21_16_16.png)

## Getting your Source ID

There are 3 places you can find your Source ID.

### Main Dashboard
On the main dashboard, the Source ID is found underneath every source card.
![Rudderstack Source ID - Dashboard](../../.gitbook/assets/shipyard_2022_08_14_21_19_27.png)
### Source Overview
When the source is selected, the Source ID is available both in the URL and under the Write key section.
![Rudderstack Source ID - Source](../../.gitbook/assets/shipyard_2022_08_14_21_21_58.png)
### Source Settings
When you're on the source settings page, the Source ID is visible.
![Source ID Settings](../../.gitbook/assets/shipyard_2022_08_14_21_22_47.png)

# Helpful Links
[Rudderstack Personal Access Tokens](https://www.rudderstack.com/docs/dashboard-guides/personal-access-token/)