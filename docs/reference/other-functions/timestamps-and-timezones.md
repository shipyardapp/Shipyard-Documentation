---
id: timestamps-and-timezones
title: Timestamps and Timezones
hide_title: true
description: Information about how Platform displays timestamps and interprets scheduled run times.
keywords:
  - time
  - timezone
  - time zone
  - tz
  - timestamp
---

# Timestamps and Timezones

## Definition

Throughout the application, you'll see timestamps for the following pieces of information:

- Last Update
- Last Run
- Created At
- Expected Start
- Start Time
- End Time

These timestamps are commonly shown on the [Logs Tab](../logs/logs-overview.md) or within a Table. Timestamps are always displayed in the timezone that your computer is currently set to, which should _usually_ be the timezone where you are physically located.

In the settings of a project, you're able to set the project's timezone. This setting only affects the timezone used for [Schedule Triggers](../triggers/schedule-triggers.md), not how those times are displayed throughout the project.

#### Example

- You have a project named *Playground* with *Pacific Time* selected.
- Your computer is set to *Eastern Time*.
- You schedule a Vessel in the project *Playground* to run at 12:00 PM.
- On the [Logs](../logs/logs-overview.md), the Vessel will show that it is scheduled to run at 3:00 PM.
- On the [Triggers tab](../triggers/triggers-overview.md), the Vessel will show that it is scheduled to run at 12:00.
