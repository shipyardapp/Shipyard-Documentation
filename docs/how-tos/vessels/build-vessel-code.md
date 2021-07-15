---
id: build-vessel-code
title: How to Build a New Vessel using Code
hide_title: true
description: Quick how-to guide to build a Vessel with code.
keywords:
  - how to
  - code
  - vessel
  - setup
---

# How to Build a New Vessel using a Code Blueprint

## Overview

Every unique solution you create will require you to build a [Vessel](../../reference/vessels.md). If you're creating the solution from scratch, you'll want to create a Vessel with [Code](../../reference/code/code-overview.md). This how to guide will walk you through the steps to build a Vessel with Code.

## Steps

### Step 1 - Initial Setup

1. Navigate to the Vessels tab underneath a project.
2. Hover over the **+ New** button in the top-right and click **New Vessel**.
3. Select **With Code**.
4. Select the language that you want to use to build your Vessel.

At this point you'll be walked through the Vessel setup wizard. If at any point in the process, you want to go to a previous step, you can either click on the step process number at the top, or click the **Back** button at the bottom. You can also completely delete your unfinished progress by clicking **Cancel**.

### Step 2 - Provide Code

All of the information on this tab is required.

1. Provide the code for your solution, using any of the [available methods](../../reference/code/code-overview.md).
2. Provide the [command](../../reference/code/command.md) details necessary for your code to run properly.
3. Click **Next Step** once you're done.

### Step 3 - Define Requirements

All of the information on this tab is optional.

1. Provide any [environment variables](../access-environment-variables.md) that your script uses.
2. Provide any [external packages](../../reference/requirements/external-package-dependencies.md) that your script needs to use.
3. Click **Next Step** once you're done.

### Step 4 - Save Settings

1. Give your Vessel a unique, descriptive name.
2. Optionally, change the project. By default, the project you navigated to in [Step 1](#step-1---initial-setup) will be selected.
3. Optionally, edit the [notifcations](../../reference/settings/notifications.md) to send users emails about the Vessel.
4. Optionally, edit the [guardrails](../../reference/settings/guardrails.md) to make the system automatically retry your Vessel upon an error.
5. Click **Save and Finish** once you're done

:::success
You've now successfully built a Vessel with code.
:::
