---
id: airbyte-authorization
sidebar_position: 1
title: Airbyte Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Airbyte to work with Platform's low-code Airbyte templates.
keywords:
- airbyte
- blueprint
- template
- authorization
---

# Airbyte Authorization
In order to get started with the Airbyte Blueprints, you will need an API token to get programmatic access. Additionally, dependning on the blueprint, you will need a Connection ID or Job ID for the syncs you wish to trigger or verify respectively.

## Generating an Airbyte API Token
1. Login to the [Airbyte Developer Portal](https://portal.airbyte.com)
2. Navigate to the **API Keys** section

![](https://cdn.sanity.io/images/2xyydva6/production/e5e26d0075d9797912ae9e02e84b3a5756e4acd8-1495x427.png?w=450)

3. Select **New Api Key**

![](https://cdn.sanity.io/images/2xyydva6/production/08bd82fdfc9a4a737c225c763b26d96c9d449763-1271x281.png?w=450)

4. Name your API key and click Generate. 
5. Make sure to either copy the key or download it

![](https://cdn.sanity.io/images/2xyydva6/production/03240d91e7505ce373f09a2e62515349f70f585e-585x510.png?w=450)

## Getting Connection IDs
1. Log in to your [Airbyte Cloud instance](https://airbyte.com/)
2. Click on the connection you would like to sync

![](https://cdn.sanity.io/images/2xyydva6/production/d8c7c958d0e972e55479f6e72a952587d194b3a3-1395x213.png?w=450)

3. The Connection ID can be acquired from the URL:

![](https://cdn.sanity.io/images/2xyydva6/production/7406e09d36b1620340f78447d1442b474490da85-1016x38.png?w=450)

## Getting Job IDs 
1. The job ID will be returned after triggering a sync via the API. The response will look something like this:
```json
{
  "jobId": 1234,
  "status": "running",
  "jobType": "sync"
}
```

