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

1. A new Vessel is immediately created, with the name of `{Old Vessel Name} (Copy) {New Vessel ID}` .
2. The [Code](../code/code-overview.md), [Arguments](../arguments.md), [Environment Variables](../environment-variables/environment-variables-overview.md), [Packages](../packages/external-package-dependencies.md), [Guardrails](../guardrails.md), and [Notifications](../notifications.md) from the old Vessel are transferred to the new Vessel.

</TabItem>
<TabItem value='fleet'>

When a Fleet is duplicated, the following things occur:

1. A new Fleet is immediately created, with the name of `{Old Fleet Name} (Copy) {New Fleet ID}` .
2. Every Vessel in the Fleet is recreated with the name of `{Old Vessel Name} (Copy) {New Vessel ID}`, using the same rules when duplicating a Vessel individually.
3. The Fleet's [Triggers](../triggers/triggers-overview.md) are all reset.
4. The new Fleet starts with 0 logs.

</TabItem>
<TabItem value='blueprint'>

When a Blueprint is duplicated, the following things occur:

1. A new Blueprint is immediately created, with the name of `{Old Blueprint Name} (Copy) {New Blueprint ID}` .
2. The [Blueprint Variables](../blueprints/org-blueprints/blueprint-variables.md), [Blueprint Description](../blueprints/org-blueprints/blueprint-description.md), [Code](../code/code-overview.md), Command, [Environment Variables](../environment-variables/environment-variables-overview.md), [Packages](../packages/external-package-dependencies.md), and [Guardrails](../guardrails.md) from the old Blueprint are transferred to the new Blueprint. Effectively, every field gets carried over.
3. The new Blueprint is set to the Hidden [visibility](../blueprints/org-blueprints/visibility.md).

</TabItem>
</Tabs>

:::caution
Pressing duplicate will immediately create a duplicate without you needing to save anything. You will, however, likely want to change a few settings or create a more readable name.
:::

## Additional Notes

1. You can't duplicate an instance of a Vessel, Blueprint, or Fleet that has been changed since the last save. You must first click save.
