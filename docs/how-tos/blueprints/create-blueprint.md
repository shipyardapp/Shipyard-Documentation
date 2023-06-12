---
id: create-blueprint
title: How to Create a New Blueprint
hide_title: true
description: Quick how-to guide to create a Blueprint.
keywords:
  - create
  - add
  - build
  - make
  - blueprint
  - template
---

# How to Create a New Blueprint

## Overview

When you use a solution over and over again, it's a good idea to turn it into a Blueprint. This how to guide will walk you through the steps needed to create a repeatable solution as a [Blueprint](../../reference/blueprints/blueprints-overview.md).

## Steps

### Step 1 - Initial Setup

1. Navigate to your organization's Blueprints using the side navigation.
2. Click the **Add Blueprint** button in the top-right.
3. Select the language that you want to use to build your Blueprint.

### Step 2 - Create Inputs

All of the information on this tab is optional, but strongly recommended.

1. Follow this how to guide on [creating Blueprint Variables](create-blueprint-variables.md).
2. Repeat until you've created all of the variables you need.
3. Give your Blueprint a [description](../../reference/blueprints/org-blueprints/blueprint-description.md) that indicates what exactly it will do.
4. Click **Preview this Blueprint** to verify that everything looks exactly as you want.
5. Click **Next Step** once you're done.

### Step 3 - Provide Code

All of the information on this tab is required.

1. Provide the code for your solution, using any of the [available methods](../../reference/code/code-overview.md).
2. Provide the File to Run to execute your script properly.
3. Click **Next Step** once you're done.

### Step 4 - Define Requirements

All of the information on this tab is optional.

1. Provide any [environment variables](../../reference/environment-variables/environment-variables-overview.md) that your script uses.
2. Provide any [external packages](../../reference/packages/external-package-dependencies.md) that your script needs to use.
3. Click **Next Step** once you're done.

### Step 5 - Settings

1. Give your Blueprint a unique, descriptive name.
2. Give your Blueprint a synopsis that describes what it should be used for.
3. If desired, update the [visibility](../../reference/blueprints/org-blueprints/visibility.md) or the [guardrails](../../reference/guardrails.md).
4. Click **Save and Finish** once you're done

:::tip success
You've now successfully created a Blueprint.
:::
