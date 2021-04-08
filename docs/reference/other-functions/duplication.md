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

Shipyard allows users to easily duplicate their Vessels or their Blueprints. This is commonly used to create slight variations or in lieu of built-in versioning.

<Tabs
defaultValue="vessel"
values={[
{label: 'Vessels', value: 'vessel'},
{label: 'Blueprints', value: 'blueprint'},
]}>
<TabItem value='vessel'>

When a Vessel is duplicated, the following things occur:

1. A new Vessel is immediately created, with the name of `{Old Vessel Name} (Copy) {New Vessel ID}` .
2. The [Code](../code/code-overview.md), [Command](../code/command.md), [Environment Variables](../requirements/environment-variables.md), and [Packages](../requirements/external-package-dependencies.md) from the old Vessel are transferred to the new Vessel.
3. The Vessel's [Triggers](../triggers/triggers-overview), [Guardrails](../settings/guardrails.md), and [Notifications](../settings/notifications.md) are all reset.
4. The new Vessel starts with 0 logs.

</TabItem>
<TabItem value='blueprint'>

When a Blueprint is duplicated, the following things occur:

1. A new Blueprint is immediately created, with the name of `{Old Blueprint Name} (Copy) {New Blueprint ID}` .
2. The [Blueprint Variables](../inputs/blueprint-variables.md), [Blueprint Description](../inputs/blueprint-description.md), [Code](../code/code-overview.md), [Command](../code/command.md), [Environment Variables](../requirements/environment-variables.md), and [Packages](../requirements/external-package-dependencies.md) from the old Blueprint are transferred to the new Blueprint.
3. The Blueprint's [Guardrails](../settings/guardrails.md) are reset.
4. The new Blueprint is set to the Hidden [visibility](visibility.md).

</TabItem>
</Tabs>

:::caution
Pressing duplicate will immediately create a duplicate without you needing to save anything. You will, however, likely want to change a few settings or create a more readable name.
:::

## Additional Notes

1. You can't duplicate an instance of a Vessel or a Blueprint that has been changed since the last save. You must first click save.
