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

# How to Build a New Vessel using Code

## Overview

Every unique solution you create will require you to build a [Vessel](../../reference/vessels.md). Vessels can only be built as part of a Fleet. If you're creating the solution from scratch, you'll want to create a Vessel with [Code](../../reference/code/code-overview.md). This how to guide will walk you through the steps to build a Vessel with Code.

## Steps

### Step 1 - Initial Setup

1. Click the **+ New Fleet** button in the top left corner of your page.
2. Choose a Project for your Fleet to go in.
3. Click the plus icon along the left side of the Fleet Builder sidebar.
4. Select any option under Code Vessels.

At this point, the Vessel editing panels will be opened. You can also completely delete your unfinished progress by clicking the red X in the corner of the Vessel.

### Step 2 - Name your Vessel

1. At the the top of the information panel, update your Vessel to have a descriptive name. By default, we automatically generate a unique, but undescriptive name.

### Step 3 - Provide Code

All of the information on this panel is required.

1. Provide the **File to Run** necessary for your code to run properly.
2. Provide the code for your solution, using any of the [available methods](../../reference/code/code-overview.md).

### Step 4 - Optional Items

All of the following panels are optional.

1. Provide any [arguments](../../reference/arguments.md) that your script uses.
2. Provide any [environment variables](../../reference/environment-variables/environment-variables-overview.md) that your script uses.
3. Provide any [language packages](../../reference/packages/external-package-dependencies.md) that your script needs to use.
4. Provide any [system packages](../../reference/packages/system-package-dependencies.md) that your script needs to use.
5. Update the [notifications](../../reference/notifications.md) if you want someone other than yourself to receive alerts.
6. Update the [guardrails](../../reference/guardrails.md) if you want your Vessel to retry in the event of an error.
7. Click **Save & Finish** once you're done.

<div dangerouslySetInnerHTML={{ __html: `<div style="position: relative; padding-bottom: calc(66.66666666666666% + 41px); height: 0;"><iframe src="https://demo.arcade.software/kD7uj6wzv0cxAB7IENof?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;" title="How to Build a New Vessel using Code"></iframe></div>` }} />



:::tip success
You've now successfully built a Vessel with code as part of a Fleet.
:::
