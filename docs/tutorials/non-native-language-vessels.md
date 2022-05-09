---
id: non-native-language-vessels
title: Building Non-Native Language Vessels
hide_title: true
description: In-depth tutorial on building Vessels with languages other than the native Bash, Python, and Node.
keywords:
  - code
  - advanced
  - tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Building Non-Native Language Vessels

## Overview

**Shipyard** provides indirect support for languages outside of those natively supported (Bash, Python, and Node). This is done by using Bash Vessels to install the given language and any external packages before running the specified command to execute the script. With this approach, the user can effectively use whatever language they choose in Vessel construction.

Note that this approach will likely add in some additional execution time for the Vessel due to the installation and setup going into each Vessel run.

In this walk through, you'll construct a Vessel using a [language not natively supported](../reference/code/code-overview.md) in the platform.

By the end of the tutorial, you'll be able to:

- Set up a [Vessel](../reference/vessels.md)
- Use a non-natively supported language for the code
- Install third-party packages in that language
- Fetch data from an external API
- See output in the [Logs](../reference/logs/logs-overview.md)

## Setup

:::caution
For the sake of the this tutorial, we suggest starting off by building a *Testing* Project. You can follow [this tutorial](../getting-started/first-project.md) to set that up.
:::

Getting started with this walkthrough is fairly straight-forward.

<Tabs
groupId="languages"
defaultValue="ruby"
values={[
{label: 'Ruby', value: 'ruby'},
{label: 'Go', value: 'go'},
]}>
<TabItem value="ruby">

First, [download this zipped Ruby code](../.gitbook/assets/non_native_language_ruby.zip), named `non_native_language_ruby.zip` to your computer without making any changes.

Feel free to review the code in both `run.sh` and `script.rb` to see what each is doing. Here's a brief overview:

1. `run.sh`: this is the "entrypoint" for our Vessel code since Bash, not Ruby, is natively supported in Shipyard  
	a. Updates an environment variable (to suppress a warning in the logs)  
	b. Installs the third-party package `yell`  
	c. Runs the Ruby script  
2. `script.rb`: this is the core of the code and is written entirely in Ruby  
	a. Fetches the top stories from the Hacker News API  
	b. Gets an ID from the top stories response data  
	c. Fetches the story by the ID  
	d. Prints information using the `yell` package  

</TabItem>
<TabItem value="go">

First, [download this zipped Go code](../.gitbook/assets/non_native_language_go.zip), named `non_native_language_go.zip` to your computer without making any changes.

Feel free to review the code in both `run.sh` and `script.go` to see what each is doing. Here's a brief overview:

1. `run.sh`: this is the "entrypoint" for our Vessel code since Bash, not Go, is natively supported in Shipyard  
	a. Initializes Go modules for third-party packages  
	b. Installs the third-party package `logrus`  
	c. Runs the Go script  
2. `script.go`: this is the core of the code and is written entirely in Go  
	a. Fetches the top stories from the Hacker News API  
	b. Gets an ID from the top stories response data  
	c. Fetches the story by the ID  
	d. Prints information using the `logrus` package  

</TabItem>
</Tabs>

## Steps

### Step 1 - Vessel Type

1. Using the sidebar, click on **Projects** to expand the list of projects.
2. Click on either the *Playground* or *Testing* Project. You'll be directed to the Vessels tab for this project.
3. Hover over the **+ New** button in the top-right corner of the screen and click **New Vessel**.

![](../.gitbook/assets/shipyard_2021_03_16_16_23_03.png)

4. A modal will pop up asking you how you would like to build your Vessel. On the left side of the modal, you'll see an option for a **With Code**. Click this option.

![](../.gitbook/assets/shipyard_2021_03_16_16_24_01.png)

:::tip success
You've successfully started the setup flow for building a Vessel with code.
:::

### Step 2 - Language

1. Click on the **Bash** option. You'll be immediately redirected to the next step.

### Step 3 - Code

<Tabs
groupId="languages"
defaultValue="ruby"
values={[
{label: 'Ruby', value: 'ruby'},
{label: 'Go', value: 'go'},
]}>
<TabItem value="ruby">

1. In the radio button options, select **Upload**.
2. Click on the grey square with the text **"Click or drag file to this area to upload"** and upload the previously downloaded `non_native_language_ruby.zip` file.
3. Type `run.sh` into the **File to Run** field.
4. Click **Next Step**.

</TabItem>
<TabItem value="go">

1. In the radio button options, select **Upload**.
2. Click on the grey square with the text **"Click or drag file to this area to upload"** and upload the previously downloaded `non_native_language_go.zip` file.
3. Type `run.sh` into the **File to Run** field.
4. Click **Next Step**.

</TabItem>
</Tabs>

### Step 4 - Requirements

#### Environment Variables

1. No environment variables are needed for this tutorial

#### Packages

<Tabs
groupId="languages"
defaultValue="ruby"
values={[
{label: 'Ruby', value: 'ruby'},
{label: 'Go', value: 'go'},
]}>
<TabItem value="ruby">

1. Click the **+** icon next to Packages to add a new package.
2. In the **Package Name** field on the left-hand side, type `ruby-full`.
3. Click **Next Step**.

</TabItem>
<TabItem value="go">

1. Click the **+** icon next to Packages to add a new package.
2. In the **Package Name** field on the left-hand side, type `golang`.
3. Click **Next Step**.

</TabItem>
</Tabs>

### Step 5 - Settings

<Tabs
groupId="languages"
defaultValue="ruby"
values={[
{label: 'Ruby', value: 'ruby'},
{label: 'Go', value: 'go'},
]}>
<TabItem value="ruby">

1. Under the Information section, give your Vessel the name of `Non-Native Language - Ruby`.
2. Under the notifications section, make sure that your email is listed. It should be added by default.
3. Under the Guardrails section, set the **Number of Retries** to 2x and the **Time Between Retries** to 5m.
4. Click the **Save & Finish** button at the bottom of the screen.

</TabItem>
<TabItem value="go">

1. Under the Information section, give your Vessel the name of `Non-Native Language - Go`.
2. Under the notifications section, make sure that your email is listed. It should be added by default.
3. Under the Guardrails section, set the **Number of Retries** to 2x and the **Time Between Retries** to 5m.
4. Click the **Save & Finish** button at the bottom of the screen.

</TabItem>
</Tabs>

### Step 6 - Running the Vessel On-Demand

1. Click the blue **Run your Vessel** button. This will schedule your Vessel to run immediately and redirect you to the [Vessel Log](../reference/logs/vessel-logs.md) page.

![](../.gitbook/assets/vessel-built-successfully.png)

You should see the following page that shows you all of the details about the specific Log.

In the output, you'll see several things.

1. Shipyard creates a working directory under `/home/shipyard/`
2. Shipyard downloads the file you created under the Code section, decompresses it, and begins to run `run.sh`
3. Shipyard prints out the text `Top story on Hacker News stats` followed by the `title`, `score`, and `link` values

<Tabs
groupId="languages"
defaultValue="ruby"
values={[
{label: 'Ruby', value: 'ruby'},
{label: 'Go', value: 'go'},
]}>
<TabItem value="ruby">

![](../.gitbook/assets/non-native-language-log-ruby.png)

</TabItem>
<TabItem value="go">

![](../.gitbook/assets/non-native-language-log-go.png)

</TabItem>
</Tabs>

:::tip success
You've successfully created and verified a Vessel using a non-native language.
:::
