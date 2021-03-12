---
id: vessels
title: Vessels
hide_title: true
description: Information about how to build and edit Vessels.
keywords:
  - vessels
  - tasks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vessels

## Definition

A Vessel is the "unit of work" in Shipyard, or an individual script that has been designed and built to accomplish a very specific job. Just like the real world equivalent, Vessels can be built for any purpose and come in any size, shape, or speed.

Every Vessel is either built with code or with a Blueprint that contains the design specifications that determine what that Vessel will do. Building a new Vessel will walk you through a multi-step setup wizard. The steps required for creating a New Vessel differ based on the creation method that you select.

## Setup

### With Code

Building a Vessel with code allows you to write and run scripts from scratch with no changes to your existing code or additional configuration files. The code is executed on Shipyard's cloud infrastructure in isolation.

When building a Vessel with code, your script should return an exit code of 0 to indicate a successful run. Any other exit code indicates failure.

Additionally, your script should stop its work if it receives a SIGTERM \(15\) signal.

#### Wizard Steps

1. Select **With Code**
2. Select a **Language**
3. Provide [**Code**](../code/code-overview)
4. Define **Requirements** \([Environment Variables](../requirements/environment-variables), [External Package Dependencies](../requirements/external-package-dependencies)\)
5. Save **Settings** \([Information](../settings/information), [Notifications](../settings/notifications), and [Guardrails](../settings/guardrails)\)

### With Blueprint

Building a Vessel with a Blueprint allows you to run scripts without needing to touch code. Instead, you're only required to fill out a few key form inputs. This user input then gets passed to a script in the backend.

#### Setup Steps

1. Select **With a Blueprint**
1. Select your [**Blueprint**](../blueprints/blueprints-overview)
1. Provide [**Inputs**](inputs)
1. Save **Settings** \([Information](../settings/information), [Notifications](../settings/notifications), and [Guardrails](../settings/guardrails)\)

## Additional Notes

1. A Vessel can only be tied to one Blueprint, one Project, and one Organization.
2. A Vessel's Blueprint or Code type cannot be changed once it is built.
3. A Vessel's Project cannot be changed once it is built.
4. A Vessel is not version controlled. Any changes made directly in the Vessel creation pages cannot be visualized or restored.

## Learn More

- [How to Build a New Vessel using a Code Blueprint](../../how-tos/vessels/build-vessel-code)
- [How to Build a New Vessel using a Custom Blueprint](../../how-tos/vessels/build-vessel-blueprint)
- [How to Duplicate a Vessel](../../how-tos/vessels/duplicate-vessel)
- [How to Search for Vessels](../../how-tos/vessels/search-for-vessel)
- [How to Delete a Vessel](../../how-tos/vessels/delete-vessel)
- [How to Edit a Vessel](../../how-tos/vessels/edit-vessel)
- [How to Assess Vessel Performance](../../how-tos/vessels/assess-vessel-performance)
