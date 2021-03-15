---
id: status
title: Status
hide_title: true
description: Information about the different statuses of Vessels and Fleets.
keywords:
  - status
  - state
  - end result
  - exit code
---

# Status

## Definition

**Status** refers to the final outcome of a single run for a Vessel, tied to an individual [log](../logs/README.md). The following statuses are currently possible:

| Name           | Icon |Definition                                                                                                                    |
| :------------- |:----- |:---------------------------------------------------------------------------------------------------------------------------- |
| **Success**    | ![Success Status Icon](../../.gitbook/assets/success.png) | This run completed with an exit code of 0.                                                                                    |
| **Errored**    | ![Errored Status Icon](../../.gitbook/assets/errored.png)| This run completed with an exit code from 1 to 255.                                                                           |
| **Terminated** | ![Terminated Status Icon](../../.gitbook/assets/terminated.png)| This run was manually stopped by a user.                                                                                      |        |
| **Retrying**   | ![Retrying Status Icon](../../.gitbook/assets/retry.png) | This run has previously errored and is running again based on options selected in the Guardrails.                              |
| **Running**    | ![Running Status Icon](../../.gitbook/assets/running.png) | This run is currently occuring.                                                                                               |
| **Scheduled**  | ![Scheduled Status Icon](../../.gitbook/assets/scheduled.png) | This run has not yet occurred, but is scheduled to occur in the next 24 hours                                                 |
| **Incomplete** | ![Incoemplet Status Icon](../../.gitbook/assets/incomplete.png) | This run will never occur. This status can only be seen on Fleet logs, when upstream Vessels failed to take a branching path. |