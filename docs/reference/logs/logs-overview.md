---
id: logs-overview
title: Logs Overview
hide_title: true
description: Information about how logs are created and stored on Shipyard.
keywords:
  - logs
  - logging
  - monitoring
  - troubleshooting
  - output
---

# Logs

## Definition

Logs include historical records of how a Vessel or Fleet ran in Shipyard at a specific point in time and upcoming scheduled runs. They can be referenced by their UUIDv4 and contain metadata pertaining to one individual voyage or run.

A log is created under the following conditions:
-  When the **Run Now** button is clicked, resulting in an [On-Demand Trigger](../triggers/on-demand-triggers.md)
-  When the [scheduler](../triggers/schedule-triggers.md#timing-of-scheduling) runs
-  When an external service or script calls a [Webhook](../triggers/webhook-triggers.md)
-  When an external service or script calls our [Trigger Fleet Runs API endpoint](../api.md#trigger-fleet-runs)

### Log Retention

Log data is routinely deleted from our system to decrease storage costs. The amount of time we'll hold onto your logs is determined by the pricing tier that you're currently subscribed to. Currently, we keep logs around for a minimum of 90 days.
- Developer Plan has access to 72 hours of logs.
- Team Plan has access to 30 days of logs.
- Enterprise plan has access to a custom amount of logs.

### Log Data

The data contained within a Log differs slightly for Vessels and Fleets. Explore them in depth below.

- [Vessel Logs](vessel-logs.md)
- [Fleet Logs](fleet-logs.md)

:::tip Pro Tip
You can export your logs with our [List Voyages API endpoint](../api.md#list-voyages). You can also use our [Library Blueprint](../../blueprint-library/shipyard-api/shipyard-api-overview.md) to accomplish the same thing.
:::

## Additional Notes

1. Logs cannot be manually removed from Shipyard by users. If you need a log deleted because sensitive information was accidentally printed, contact [support](mailto:support@shipyardapp.com).
2. We currently only expose a portion of the available log data, but we have more metadata stored on the backend. If there's something you would like to see, please contact [support](mailto:support@shipyardapp.com).
