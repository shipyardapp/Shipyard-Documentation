---
id: databricks-authorization
sidebar_position: 1
title: Databricks Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Databricks to work with Shipyard's low-code Databricks templates.
keywords:
- databricks
- blueprint
- template
- authorization
---

# Databricks Authorization
To get started with any Databricks Blueprints, you will need to create an Access Token and know your Instance URL. These pieces of information form a secure way for Shipyard to access Databricks and will be required for **every** Databricks Blueprint.

## Create a Databricks Access Token

1. Navigate to your [Databricks Workspaces](https://accounts.cloud.databricks.com/workspaces). Open whichever one you want to get an access token for.

![Databricks Workspace Selection](https://cdn.sanity.io/images/2xyydva6/production/46c66077234d36529a81786db5268d9e0c5dc6cb-1304x380.png?w=450)
2. On the sidebar, select the **Settings** icon and then **User Settings**.

![Selecting User Settings](https://cdn.sanity.io/images/2xyydva6/production/6537c26e3401f8615c587a05c44277b27c4ddf64-404x263.png?w=450)

3. Select the **Access tokens** tab at the top.

![](https://cdn.sanity.io/images/2xyydva6/production/1e1cda213bb7bf884ce8f4a4a3cfc0973941418d-1103x253.png?w=450)

4. Click **Generate new token**.
5. Provide a descriptive name under **Comment** (like "Shipyard")
6. Remove the value under **Lifetime (days)** so that it's blank.

**_CAUTION:_**
While best practice is typically to have expiring API tokens that rotate, we recommend letting Shipyard tokens run indefinitely to prevent interruption to your Fleets.


7. Click **Generate**.

![](https://cdn.sanity.io/images/2xyydva6/production/6ed9caf708de720434ded58d4b523fa92209c570-523x299.png?w=450)

8. Copy the newly created token and store it in a safe location. This is the access token value you will use for every Databricks Blueprint.

![](https://cdn.sanity.io/images/2xyydva6/production/2a6de8d12695d9b7ea940a57988f7fb92dfcb275-520x252.png?w=450)

9. Click **Done**.

## Finding the Instance URL
The Instance URL is a part of every URL on Databricks. For example, if the full URL was `https://random-id-242.cloud.databricks.com/`, your Instance URL would be `random-id-242.cloud.databricks.com`.

## Helpful Links
[Managing Personal Access Tokens](https://docs.databricks.com/administration-guide/access-control/tokens.html)
