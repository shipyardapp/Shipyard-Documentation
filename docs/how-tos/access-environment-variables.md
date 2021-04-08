---
id: access-environment-variables
title: How to Access Environment Variables
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

# How to Access Environment Variables

## Overview

When a user provides input via [Blueprint Variables](../reference/inputs/blueprint-variables), or you pass values to your script using [environment variables](../reference/requirements/environment-variables), you'll want to make sure that you can access these values in your code. This how to guide will walk you through the steps to access environment variables.

:::note
When accessing the contents of an environment variable in your code, we recommend storing it as a variable so it can be continuously used.
:::

## Steps

For this example, our environment variable will be named `OPERATOR_A`.

1. Navigate to the location of your code (local, GitHub, etc.)
2. Select the language your code is written in from the tabs below.

<Tabs
groupId="languages"
defaultValue="python"
values={[
{label: 'Python', value: 'python'},
{label: 'Bash', value: 'bash'},
{label: 'Node', value: 'node'},
]}>
<TabItem value="python">

```python
import os

os.environ.get('OPERATOR_A','default value')
```

</TabItem>
<TabItem value='bash'>

```bash
${OPERATOR_A}
```

</TabItem>
<TabItem value='node'>

```javascript
process.env.OPERATOR_A;
```

</TabItem>
</Tabs>

3. Add the above snippet to your code.



:::success
You've now successfully written code to access an environment variable.
:::
