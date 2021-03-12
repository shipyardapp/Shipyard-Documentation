---
id: command
title: Command
hide_title: true
description: Information about command section of the code tab.
keywords:
  - command
  - arguments
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Command

## Definition

A Command consists of values that are used to execute a program within an operating system. A command typically starts with the name of the programming language to run, then the script name. At the end, you can provide the script with additional arguments to affect exactly how the script runs.

<Tabs
groupId="languages"
defaultValue="python"
values={[
{label: 'Python', value: 'python'},
{label: 'Bash', value: 'bash'},
{label: 'Node', value: 'node'},
]}>
<TabItem value="python">
The following is an example of a command that runs a script written in Python.

```text
python3 script_name.py all --columns name,id,time --split
```

Within the Shipyard platform, a Command is broken into distinct sections of the Program, the File to Run, and the Arguments.
</TabItem>
<TabItem value="bash">
The following is an example of a command that runs a script written in Bash.

```text
bash scriptname.sh all --columns name,id,time --split
```

Within the Shipyard platform, a Command is broken into distinct sections of the Program, the File to Run, and the Arguments.
</TabItem>
<TabItem value="node">
The following is an example of a command that runs a script written in Node.js.

```text
node scriptName.js all --columns name,id,time --split
```

Within the Shipyard platform, a Command is broken into distinct sections of the Program, the File to Run, and the Arguments.
</TabItem>
</Tabs>

### Program

The program field defines which installed package on Shipyard's operating system should be used to execute your code. The available options under program are based on the language that you select. This field is currently disabled with plans to support multiple language versions in the future.

<Tabs
groupId="languages"
defaultValue="python"
values={[
{label: 'Python', value: 'python'},
{label: 'Bash', value: 'bash'},
{label: 'Node', value: 'node'},
]}>
<TabItem value="python">

`python3`
</TabItem>
<TabItem value="bash">

`bash`
</TabItem>
<TabItem value="node">

`node`
</TabItem>
</Tabs>

### File to Run

The File to Run field should relate to the single file that you want the selected program to execute. This field can include a directory structure if the file is located under a series of folders. Examples of common formatting:

<Tabs
groupId="languages"
defaultValue="python"
values={[
{label: 'Python', value: 'python'},
{label: 'Bash', value: 'bash'},
{label: 'Node', value: 'node'},
]}>
<TabItem value="python">

`script_name.py`
OR
`folder_a/script_name.py`
</TabItem>
<TabItem value="bash">

`scriptname.sh`
OR
`folder_a/folder_b/scriptname.sh`
</TabItem>
<TabItem value="node">

`scriptName.js`
OR
`folder_a/folder_b/scriptName.js`
</TabItem>
</Tabs>

### Arguments

Arguments are comprised of flags and values. The are added to the command in the order they are entered \(although generally, the order should not matter\).

<Tabs
groupId="languages"
defaultValue="python"
values={[
{label: 'Python', value: 'python'},
{label: 'Bash', value: 'bash'},
{label: 'Node', value: 'node'},
]}>
<TabItem value="python">

`all`, `--columns name id time` & `--split`
</TabItem>
<TabItem value="bash">

`all`, `--columns name id time` & `--split`
</TabItem>
<TabItem value="node">

`all`, `--columns name id time` & `--split`
</TabItem>
</Tabs>

We currently only accept arguments that have **both** a Flag and a single Value, as these more explicit.

If you have a valid use case for needing positional arguments or a boolean flag, please reach out to support.

:::caution
Command arguments are not suitable for secrets. They are available to change the behavior of your script with values that are not secret, like a file name to process or column names in a table to work with. For secrets, use [environment variables](../requirements/environment-variables).
:::

## Screenshots

![](../../.gitbook/assets/command.png)

## Additional Notes

1. Shipyard can only run a single command at a time. If multiple commands need to be run \(with the use of `&&`\), you should create and run a single shell script that contains the code to run multiple commands successively.
2. Positional arguments that contain only values cannot be passed to your script.
3. Boolean arguments that contain only flags cannot be passed to your script.
