---
id: github-vessel
title: Building a Vessel with Code from GitHub
hide_title: true
description: In-depth tutorial to walk you through the steps needed to set up a Vessel with code from GitHub.
keywords:
  - code
  - advanced
  - tutorial
  - github
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Building a Vessel with Code from GitHub

## Overview

In this tutorial, you'll walk through the steps required to set up a Vessel that runs a Python script from GitHub.


By the end of the tutorial, you'll be able to:

- Connect your GitHub account to Shipyard.
- Create a [Vessel](../reference/vessels.md) with a script from GitHub.
- Install [package dependencies](../reference/packages/external-package-dependencies.md) for your solution.
- Check [Logs](../reference/logs/logs-overview.md) to verify that a Vessel ran successfully.

## Setup

We will be picking up from our Getting Started Tutorial: [Building Your First Fleet with Low-Code Library Blueprints](../getting-started/first-fleet.md). The script that we will run from GitHub is the same script that is found in the third [Getting Started Tutorial](../getting-started/first-vessel-with-code.md).

If you'd like to follow along, you can work through the first two tutorials or you can create a starting point with this YAML code:

```
name: Download File from Webpage and Email to User
vessels:
    Download Slinky Dog Dash Ride Data:
        source:
            blueprint: HTTP - Download File from URL
            inputs:
                HTTP_CUSTOM_HEADERS: null
                HTTP_DESTINATION_FILE_NAME: slinky_dog_dash.csv
                HTTP_DESTINATION_FOLDER_NAME: disney_world_wait_times
                HTTP_FILE_URL: https://cdn.touringplans.com/datasets/slinky_dog.csv
            type: BLUEPRINT
        guardrails:
            retry_count: 1
            retry_wait: 0s
            runtime_cutoff: 4h0m0s
        notifications:
            emails:
                - steven.johnson@shipyardapp.com
            after_error: true
            after_on_demand: false
    Email Slinky Dog Dash Ride Data:
        source:
            blueprint: Email - Send Message with File
            inputs:
                EMAIL_BCC: null
                EMAIL_CC: null
                EMAIL_INCLUDE_SHIPYARD_FOOTER: true
                EMAIL_MESSAGE: Here are the wait times for Slinky Dog Dash
                EMAIL_PASSWORD: SHIPYARD_HIDDEN
                EMAIL_SEND_METHOD: tls
                EMAIL_SENDER_ADDRESS: ${EMAIL_USERNAME}
                EMAIL_SENDER_NAME: null
                EMAIL_SMTP_HOST: smtp.gmail.com
                EMAIL_SMTP_PORT: "587"
                EMAIL_SOURCE_FILE_NAME: slinky_dog_dash_with_hours.csv
                EMAIL_SOURCE_FILE_NAME_MATCH_TYPE: exact_match
                EMAIL_SOURCE_FOLDER_NAME: disney_world_wait_times
                EMAIL_SUBJECT: Slinky Dog Dash Ride Data
                EMAIL_TO: steven.johnson@shipyardapp.com
                EMAIL_USERNAME: shipyardapptest@gmail.com
            type: BLUEPRINT
        guardrails:
            retry_count: 1
            retry_wait: 0s
            runtime_cutoff: 4h0m0s
        notifications:
            emails:
                - steven.johnson@shipyardapp.com
            after_error: true
            after_on_demand: false
connections:
    Download Slinky Dog Dash Ride Data:
        Email Slinky Dog Dash Ride Data: SUCCESS
notifications:
    emails:
        - steven.johnson@shipyardapp.com
    after_error: true
    after_on_demand: false
```

## Steps

### Step 1: Fork Repository
:::note
This tutorial assumes that you have a GitHub account. If you do not have an account, head [here](https://github.com/join) and create one
:::

1. Head to this [repository](https://github.com/shipyardapp/github-demos)

:::info
The Python scripts in this repository take a ride data CSV and convert the wait time column from minutes to hours. Feel free to read the code before continuing.
:::

2. Click the **Fork** button on the top right corner of the webpage.
   
![](../.gitbook/assets/shipyard_2022_12_07_11_47_26.png)

3. Under **Repository Name**, enter `shipyard_github_tutorial`.
4. Click **Create Fork**. This will redirect you to the forked repository on your GitHub account.

![](../.gitbook/assets/shipyard_2022_12_07_11_52_30.png)

### Step 2: Connecting GitHub to Shipyard

1. Head over to [Shipyard](https://www.shipyardapp.com/) and sign in.
2. Using the sidebar, click on **Admin** to access the drop-down menu.
3. Under Admin, select **Integrations**.

![](../.gitbook/assets/shipyard_2022_12_05_10_51_57.png)

3. Click **GitHub**.
4. Click **Add Connection**.

![](../.gitbook/assets/shipyard_2022_12_05_10_54_20.png)

5. Sign into GitHub if you haven't already. If you are signed in, you will be taken to GitHub to select which GitHub organization you want to connect to Shipyard. Choose the organization where you cloned the repository from earlier.

![](../.gitbook/assets/shipyard_2022_12_05_10_56_52.png)

6. Choose to allow Shipyard to have access to all repositories or just the cloned repository from earlier. 
7. Click **Install**. This will redirect you back to the Admin page on Shipyard where you will be able to see your GitHub connection on the right side of the page.

![](../.gitbook/assets/shipyard_2022_12_05_11_22_14.png)


