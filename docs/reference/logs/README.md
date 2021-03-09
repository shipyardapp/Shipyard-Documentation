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

Logs are a historical record of how something ran in Shipyard at a specific point in time. They can be referenced by their UUIDv4 and contain metadata pertaining to one individual voyage or run.

A log is created as soon as the **Run Now** button is clicked or as soon as the [scheduler](../triggers/schedule-triggers.md#timing-of-scheduling) is run.

### Log Retention

Log data is routinely deleted from our system to decrease storage costs. The amount of time we'll hold onto your logs is determined by the pricing tier that you're currently subscribed to. Currently, we keep logs around for a minimum of 72 hours and a maximum of 90 days.

### Data Stored

The data contained within a Log differs slightly for Vessels and Fleets differ slightly. Explore them in depth below.

{% page-ref page="fleet-logs.md" %}

{% page-ref page="vessel-logs.md" %}

## Limitations

1. Logs cannot be manually removed from Shipyard by users. If you need a log deleted because sensitive information was accidentally printed, contact [support](mailto:support@shipyardapp.com).
2. Logs cannot currently be exported from Shipyard for analysis. If you need access to this data, reach out to [support](mailto:support@shipyardapp.com).
3. We currently only expose a portion of the available log data, but we have more metadata stored on the backend. If there's something you would like to see, please contact [support](mailto:support@shipyardapp.com).
