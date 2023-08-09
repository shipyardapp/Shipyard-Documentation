---
id: environment-variables-overview
title: Environment Variables Overview
hide_title: true
description: Information about the environment variables panel.
keywords:
  - env_var
  - env var
  - environment variables
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Environment Variables Overview

## Definition

Environment Variables are set at the beginning of a run for the current Vessel. These types of variables are the preferred way to pass secrets \(password, API tokens, etc.\) to scripts. Secrets required by your programs should **never** be hard-coded into the script. Instead, use Environment Variables to pass them to your script.

Environment Variables all have a **Name** and a **Value**. By referencing the variable's **Name** in your program, you can retrieve the **Value**. For more information, read our guide on how to access environment variable data [with code](../../how-tos/environment-variables/access-environment-variables-with-code.md) or [using the UI](../../how-tos/environment-variables/access-environment-variables-in-ui.md). 

Environment Variables set in Shipyard are not visible in the UI and are encrypted on the backend. There are 3 distinct ways that your environment variable values can show up.

- **Redacted** - By default, anything you type will remain redacted and show as `•••••••`
- **Visible** - By clicking the eye icon, you can see the text that you just typed in.
- **\(Hidden\)** - By default, if you have previously saved sensitive information in an environment variable, we don't surface this value in the UI. This is done for security reasons so that the secrets are not downloaded to your browser and cannot be viewed by other users. You will only see environment variables that you typed in your current session.

When you first create Environment Variables, both the **Name** and **Value** fields should be filled out. To set a value as an empty string, type a single character and delete it to show `(empty string)`.

When editing environment variables in the future that show `(hidden)`, leaving the **Value** field blank will result in Shipyard continuing to use the previously set value for that **Name**.

:::tip Pro Tip
Staying inline with programming best practices, we recommend that all of your environment variable names be in ALL CAPS, but Shipyard does not require it.
:::

## Screenshots

![Multiple examples of setting environment variables](../../.gitbook/assets/image_65.png)

## Additional Notes

1. Previously stored environment variables can never be viewed.
2. Leaving an existing Name's value as blank will result in the value not updating. If you need to set a value to be blank, you will need to delete it, save the Vessel, then recreate the environment variable with a blank value.
3. Because Vessels are containerized, environment variables you set cannot be shared across a Fleet and will only be available for the Vessel where they are set.

