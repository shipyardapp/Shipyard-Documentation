---
id: delete-blueprint
title: How to Delete a Blueprint
hide_title: true
description: Quick how-to guide to delete a Blueprint.
keywords:
  - delete
  - remove
  - blueprint
  - template
---

# How to Delete a Blueprint

## Overview

You may have an old blueprint that should no longer be used, or maybe you just set something up incorrectly. This how to guide will walk you through the steps to delete the [Blueprint](../../reference/blueprints.md).

:::note
You can't delete a Blueprint if it has any dependent Vessels. If you try to, you'll receive an error message of `You cannot delete the Blueprint. It has Vessels that were created from it.`
:::

:::warning
You can't recover a Blueprint once it's deleted. Make sure you have any data you need saved.
:::

## Steps

### Step 1 - Find the Blueprint

1. Click the **Blueprints** navigation button on the side navigation.
2. [Search for the Blueprint](search-for-blueprint.md).
3. Look under the Vessels column. If the number is >0, click the number. If not, skip to Step 3.

### Step 2 - Delete Dependent Vessels
1. Follow [this how to guide](../vessels/delete-vessel.md) to delete each dependent Vessel found in the table on the Vessels tab.
2. Once all dependent Vessels are deleted, switch to the Settings tab for the Blueprint you want to delete.

### Step 3 - Delete the Blueprint

1. Click the red **Delete** text at the bottom of the page.
2. Confirm that you really want to delete the Blueprint.

:::tip success
You've now successfully deleted a Blueprint.
:::