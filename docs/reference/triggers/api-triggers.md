---
id: api-triggers
title: API Triggers
hide_title: true
description: Information about api triggers that can be executed through external systems.
keywords:
  - api
  - webhook
  - http
  - post
  - trigger
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhook Triggers

## Definition

Every Fleet can be triggered by our [API](../api.md#trigger-fleet-runs). API triggers enable you to programmatically execute a Fleet in Shipyard by running a POST request from any service. When you run the POST request, your Fleet will be scheduled to run immediately.

Additionally, API triggers can be used to dynamically pass environment variable overrides to your Vessels at runtime. This allows you to build out Fleets that act as a "shell" for your Vessels, with the ability to pass in different variables to change their behavior every time they run.

API triggers differ from Webhook triggers in the following ways:
- API triggers require authentication with an API key.
- While webhooks accept ANY data, API triggers require a specific JSON payload.
- Data received by the API endpoint is automatically parsed and passed to your Vessels as environment variables, so it can be used for Blueprint Library inputs.

## Status Codes

No matter which language or service you use to run the POST request, you will see the following status codes returned.

### 201 - Created Successfully

When your POST request returns a status code of 201, your entity has been successfully scheduled.

```javascript
{
   "request" : {
      "id" : "955939cc-2b90-4b8e-bf23-7375cd87822b"
   },
   "data" : {
      "fleet_id" : "cc3737df-06ee-431a-8f87-1e79f1eed6d6",
      "project_id" : "d1680f76-3b3c-420e-bbf3-9d62c6a2b450",
      "org_id" : "2d52c575-989e-4642-bc63-c63408ee3fd8",
      "fleet_run_id" : "ad4d4655-91fd-4499-9a1a-06d6e8a433d4"
   }
}
```

With this status code, you'll receive back IDs for the element you ran, alongside a unique request ID.

### 400 - Bad Requests

When your POST request returns a status code of 400, your request has failed. This is usually due to an API endpoint that is malformed or no longer exists. You'll see the following JSON response returned alongside this status code.

```javascript
{
   "request" : {
      "id" : "1af80dfc-e1b7-459f-9921-e5cb9e08b684"
   },
   "data" : null
}
```

## Additional Notes

1. Fleets may not run instantaneously, as there is still time associated with entering a job queue, spinning up servers, and installing any [external package dependencies](../packages/external-package-dependencies.md).

## Learn More
- [Using Custom Parameters to Send Data from Snowflake to Email](https://www.shipyardapp.com/blog/run-now-with-custom-parameters/)