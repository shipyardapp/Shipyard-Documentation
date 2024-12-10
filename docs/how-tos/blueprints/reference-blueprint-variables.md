---
id: reference-blueprint-variables
title: How to Reference a Blueprint Variable
hide_title: true
description: Quick how-to guide to reference a Blueprint variable.
keywords:
  - reference variable
  - environment variable
  - variable
  - blueprint
  - template
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to Reference User Input from a Blueprint Variable

## Overview

As part of creating a Blueprint, you'll no doubt have multiple [Blueprint Variables](../../reference/blueprints/org-blueprints/blueprint-variables.md) that users can fill out. To access the user input, you'll want to use the Variable's Reference Name. This how to guide will walk you through the steps to reference those Blueprint Variables in your code.



## Steps

For the examples below, say we have an example where the Variable's Reference Name is `cool_var_name` .

:::caution
Your Reference Name is case sensitive. Make sure you type it exactly the same.
:::

<Tabs
defaultValue="ui"
values={[
{label: 'Platform UI', value: 'ui'},
{label: 'Environment Variable', value: 'env'},
]}>
<TabItem value="ui">

1. Locate the field where you want user data to flow into. Common locations are in the [Argument Value ](../../reference/arguments.md) or the [Environment Variable Value](../../reference/environment-variables/environment-variables-overview.md) field.
2. Use the format of `${VAR_NAME}` , replacing `VAR_NAME` with your Reference Name. For our example, this would be `${cool_var_name}`
3. Save the Vessel.

Now, when the Vessel runs, the reference of `${cool_var_name}` will be replaced by whatever the user enters for that variable.
</TabItem>
<TabItem value='env'>

1. In your code, set a variable to [access data from an Environment Variable](../environment-variables/access-environment-variables-with-code.md) whose name matches the Reference Name. 
2. Save and/or re-upload your code depending on your setup.


Now, when the Vessel runs in Platform, your Environment Variable value for `cool_var_name` will be replaced by whatever the user enters for that variable.

:::note
This way of referencing a Blueprint Variable is less ideal because it will not work the same locally as it does in Platform unless you add the necessary environment variables to your local machine.  
:::
</TabItem>
</Tabs>

:::tip success
You've now successfully referenced user input in your code.
:::
