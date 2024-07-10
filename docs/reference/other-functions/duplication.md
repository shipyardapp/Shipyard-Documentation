---
id: duplication
title: Duplication
hide_title: true
description: Information about how duplication works in Shipyard.
keywords:
  - copy
  - duplicate
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Duplication

## Definition

Shipyard allows users to easily duplicate their Vessels, Fleets, Blueprints. This is commonly used to create slight variations or in lieu of built-in versioning.

<Tabs
defaultValue="vessel"
values={[
{label: 'Vessels', value: 'vessel'},
{label: 'Fleets', value: 'fleet'},
{label: 'Blueprints', value: 'blueprint'},
]}>
<TabItem value='vessel'>

When a Vessel is duplicated, the following things occur:

1. A new Vessel is immediately created. The name of the new Vessel will be the same as the original with three digits appended to the end (eg. the duplicate of `My Vessel` may be named `My Vessel 123`).
2. The [Code](../code/code-overview.md), [Arguments](../arguments.md), [Environment Variables](../environment-variables/environment-variables-overview.md), [Packages](../packages/external-package-dependencies.md), [Guardrails](../guardrails.md), and [Notifications](../notifications.md) from the old Vessel are transferred to the new Vessel.

</TabItem>
<TabItem value='fleet'>

When a Fleet is duplicated, the following things occur:

1. A new Fleet is immediately created. The name of the new Fleet will be the same as the original with three digits appended to the end (eg. the duplicate of `My Fleet` may be named `My Fleet 123`).
2. The [Vessels](../vessels.md) from the old Fleet are mirrored in the new Fleet.
3. The Fleet's [Triggers](../triggers/triggers-overview.md) are all reset.
4. The new Fleet starts with 0 logs.

</TabItem>
<TabItem value='blueprint'>

When a Blueprint is duplicated, the following things occur:

1. A new Blueprint is immediately created. The name of the new Blueprint will be the same as the original with three digits appended to the end (eg. the duplicate of `My Blueprint` may be named `My Blueprint 123`).
2. The [Blueprint Variables](../blueprints/org-blueprints/blueprint-variables.md), [Blueprint Description](../blueprints/org-blueprints/blueprint-description.md), [Code](../code/code-overview.md), Command, [Environment Variables](../environment-variables/environment-variables-overview.md), [Packages](../packages/external-package-dependencies.md), and [Guardrails](../guardrails.md) from the old Blueprint are transferred to the new Blueprint. Effectively, every field gets carried over.
3. The new Blueprint is set to the Hidden [visibility](../blueprints/org-blueprints/visibility.md).

</TabItem>
</Tabs>

:::caution
Pressing duplicate will immediately create a duplicate without you needing to save anything. You will, however, likely want to change a few settings or create a more distinct name.
:::

## Additional Notes

1. You can't duplicate an instance of a Blueprint or Fleet that has been changed since the last save. You must first click save.
