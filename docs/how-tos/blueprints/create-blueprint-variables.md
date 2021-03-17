---
id: create-blueprint-variables
title: How to Create Blueprint Variables
hide_title: true
description: Quick how-to guide to create Blueprint variables.
keywords:
  - create
  - add
  - build
  - make
  - blueprint
  - template
  - input
  - variables
---

# How to Create Blueprint Variables

## Overview

To create an effective Blueprint, you'll need to add multiple [Blueprint Variables](../../reference/inputs/blueprint-variables.md) that a user can fill out on the [Inputs tab](../../reference/inputs/vessel-inputs.md) while building a Vessel. The data from these Blueprint Variables will then pass directly to the code every time the Vessel runs. This how to guide will walk you through the steps to create these Blueprint Variables.

## Steps

### Step 1 - Required Fields
1. [Edit an existing Blueprint](edit-blueprint.md), or [create a new one](create-blueprint.md).
2. On the Input tab, click the **+** button next to the "Blueprint Variables" header. A drawer on the right hand side of the screen will open up.
3. Give your variable a Display Name that will be shown to users.
4. Give your variable a Reference Name that will be passed to the script.
5. Select the Variable Type. This changes the format of how the user needs to provide their input.

### Step 2 - Optional Fields
The following steps are optional, but strongly recommended to increase usability.

1. Set a [default value](../../reference/inputs/blueprint-variables#default-value) for the variable to use.
2. Select if the field should be [required](../../reference/other-functions/duplication.md#required) or not.
3. Give the variable [placeholder](../../reference/inputs/blueprint-variables.md#placeholder) text as an example of what should be entered.
4. Give the variable a [tooltip](../../reference/inputs/blueprint-variables.md#tooltip) explanation.

### Step 3 - Create the Variable
1. Click the **Add Variable** Button at the bottom.

:::success
You've successfully made a new Blueprint Variable.
:::
