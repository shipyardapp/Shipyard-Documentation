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

# How to Reference a Blueprint Variable

## Overivew

As part of creating a Blueprint, you'll no doubt have multiple Blueprint Variables that users can fill out. To access the data that users enter, you'll want to use the Variable's Reference Name.

For the examples below, say we have an example where the Variable's Reference Name is `cool_var_name` .

## Steps

<Tabs
defaultValue="ui"
values={[
{label: 'Shipyard UI', value: 'ui'},
{label: 'Environment Variable', value: 'env'},
]}>
<TabItem value="ui">

1. Locate the field where you want user data to flow into. Common locations are in the [Argument Value ](../../reference/vessels/code/command.md#arguments)or the [Environment Variable Value ](../../reference/vessels/environment-variables/)field.
2. Use the format of `${VAR_NAME}` , replacing `VAR_NAME` with your Reference Name. For our example, this would be `${cool_var_name}`
3. Save the Vessel.

:::caution
**Important**: Your Reference Name is case sensitive.
:::

Now, when the Vessel runs, the reference of `${cool_var_name}` will be replaced by whatever the user enters for that variable.
</TabItem>
<TabItem value='env'>

1. In your code, set a variable to pull data from an Environment Variable whose name matches the Reference name. E.g. In python, you would run `os.environ.get('cool_var_name')`
2. Save and/or upload your code.

:::caution
**Important**: Your Reference Name is case sensitive.
:::

Now, when the Vessel runs in Shipyard, your Environment Variable value for `cool_var_name` will be replaced by whatever the user enters for that variable.

:::info
**Note:** This way of referencing a Blueprint Variable is less ideal because it will not work the same locally as it does in Shipyard unless you add the necessary environment variables to your local machine.  
:::
</TabItem>
</Tabs>

## Further Reading

Learn how **Blueprint Variables** are created and stored.  
Learn how to access **Environment Variables**.
