---
id: Airbyte-authorization
sidebar_position: 1
title: Airbyte Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Airbyte to work with Shipyard's low-code Airbyte templates.
keywords:
  - Airbyte
  - blueprint
  - template
  - authorization
---

# Airbyte Authorization
In order to get started with the Airbyte Blueprints, you will need an API token to get programmatic access. Additionally, dependning on the blueprint, you will need a Connection ID or Job ID for the syncs you wish to trigger or verify respectively.

## Generating an Airbyte API Token
1. Login to the [Airbyte Developer Portal](https://portal.airbyte.com)
2. Navigate to the **API Keys** section
![](../../.gitbook/assets/shipyard_2023_04_18_16_37_28.png)
3. Select **New Api Key**
![](../../.gitbook/assets/shipyard_2023_04_18_16_38_56.png)
4. Name your API key and click Generate. 
5. Make sure to either copy the key or download it
![](../../.gitbook/assets/shipyard_2023_04_18_16_40_38.png)

## Getting Connection ID's
1. Log in to your [Airbyte Cloud instance](https://airbyte.com/)
2. CLick on the connection you would like to sync
![](../../.gitbook/assets/shipyard_2023_04_18_17_00_21.png)
3. The Connection ID can be acquired from the URL:
![](../../.gitbook/assets/shipyard_2023_04_18_17_02_33.png)

## Getting Job ID's 
1. The job ID will be returned after triggering a sync via the API. The response will look something like this:
```json
{
  "jobId": 1234,
  "status": "running",
  "jobType": "sync"
}
```
