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

Vessels are run in independent docker containers, so underlying code, environment variables, and packages of one cannot affect another.

Every Vessel is either built with code or with a Blueprint that contains the design specifications that determine what that Vessel will do. New Vessels get built through the process of building a [Fleet](fleets/fleets-overview.md). The options required for creating a New Vessel differ based on the creation method that you select.

### Project Vessel
A Project Vessel is a Vessel that has been previously built in a Fleet but is now disconnected from any Fleet. You can turn any existing Vessel into a Project Vessel by removing it from a Fleet and saving the Fleet. Project Vessels are an easy way to move a Vessel from one Fleet to another or to store the contents of a Fleet for later.

:::warning
Project Vessels will be removed from the application soon. We do not recommend relying on these and suggest that if you need to keep this information around, you build a Fleet with a single Vessel.
:::

## Setup

### With Code

Building a Vessel with code allows you to write and run scripts from scratch with no changes to your existing code or additional configuration files. The code is executed on Shipyard's cloud infrastructure in isolation.

When building a Vessel with code, your script should return an exit code of 0 to indicate a successful run. Any other exit code indicates failure.

Additionally, your script should stop its work if it receives a SIGTERM \(15\) signal.

#### Panels

1. [Code](code/code-overview.md)
2. [Arguments](arguments.md) (Optional)
3. [Environment Variables](environment-variables/environment-variables-overview.md) (Optional)
4. [Code Packages](packages/external-package-dependencies.md) (Optional)
5. [System Packages](packages/system-package-dependencies.md) (Optional)
6. [Notifications](notifications.md) (Optional)
7. [Guardrails](guardrails.md) (Optional)


### With a Blueprint

Building a Vessel with a Blueprint allows you to run scripts without needing to touch code. Instead, you're only required to fill out a few key form inputs. This user input then gets passed to a script in the backend.

#### Setup Steps

1. [Inputs](inputs.md)
2. [Notifications](notifications.md) (Optional)
3. [Guardrails](guardrails.md) (Optional)
   
## Additional Notes

1. A Vessel can only be tied to one Blueprint, one Project, and one Organization.
2. A Vessel's Blueprint or Code type cannot be changed once it is built.
3. A Vessel's Project cannot be changed once it is built.
4. A Project Vessel is _not_ version controlled.
5. A Fleet Vessel _is_ version controlled. A Vessel's previous configuration within a Fleet is viewable in the Fleet's [Version Control](fleets/version-control.md) tab.

## Learn More

- [How to Build a New Vessel using a Code Blueprint](../how-tos/vessels/build-vessel-code.md)
- [How to Build a New Vessel using a Custom Blueprint](../how-tos/vessels/build-vessel-blueprint.md)
- [How to Duplicate a Vessel](../how-tos/vessels/duplicate-vessel.md)
- [How to Delete a Vessel](../how-tos/vessels/remove-vessel.md)
- [How to Edit a Vessel](../how-tos/vessels/edit-vessel.md)
- [How to Assess Vessel Performance](../how-tos/vessels/assess-vessel-performance.md)
