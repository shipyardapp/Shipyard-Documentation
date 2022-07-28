---
id: access-environment-variables-in-ui
title: How to Access Environment Variables in the UI
hide_title: true
description: Quick how-to guide to access environment variables from a Blueprint or a Vessel.
keywords:
  - how to
  - environment variables
  - env_var
  - env var
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to Access Environment Variables in the UI

## Overview

When a user provides input via [Blueprint Variables](../../reference/blueprints/org-blueprints/blueprint-variables.md), you pass values to your script using [environment variables](../../reference/environment-variables/environment-variables-overview.md), or when you want to access Shipyard's context-aware [platform environment variables](../../reference/environment-variables/shipyard-environment-variables.md), you'll sometimes want to make sure that you can access these values in the UI. This how to guide will walk you through the steps to access environment variables.

## Steps

For this example, our environment variable will be named `OPERATOR_A`.

1. Navigate to any Vessel.
2. In any input field, other than code, write `${OPERATOR_A}`.
3. Save the Vessel.


:::tip success
You've now successfully accessed an environment variable in the UI.
:::
