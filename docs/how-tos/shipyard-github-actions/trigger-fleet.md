---
id: trigger-fleet
title: Trigger Fleet
hide_title: true
description: Instructions on how to trigger a Fleet using Platform's GitHub Actions.
keywords:
  - ci/cd
  - github actions
  - shipyard actions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trigger Platform Fleet GitHub Action
## Overview
This action allows you to trigger a Platform fleet based on GitHub events such as commits, pull request openings, or merges.

### Prerequisites

Before proceeding, make sure you have completed the prerequisites outlined in the [Platform GitHub Actions Overview](shipyard-actions-overview.md).

### Base Platform Action Step  

With the Platform Action, you can use our pre-built action by referencing it in the `uses` field of your GitHub Actions workflow file along with providing the necessary inputs via the `with` field.

```yaml
name: <workflow-name>
on:
  <trigger-event>:
    <trigger-conditions>
jobs:
  <job-name>:
    runs-on: ubuntu-latest
    steps:
      - <any additional steps if needed>
      - name: <step-name>
        uses: shipyardapp/shipyard-actions/trigger-fleet@v1
        with:
          org_id: '<organization-id>'
          project_id: '<project-id>'
          fleet_id: '<fleet-id>'
          shipyard_api_key: '<API_KEY> ideally in the form of ${{ secrets.SHIPYARD_API_KEY }}'
          overrides: '{}'
          wait_for_run: 'true'
          wait_time: 5
```

### Action Inputs

The `shipyardapp/shipyard-actions/trigger-fleet` action has the following inputs:

* **org_id:** Your organization ID in Platform.
* **project_id:** Your project ID in Platform.
* **fleet_id:** The ID of the fleet you want to trigger.
* **shipyard_api_key:** Your Platform API key, stored securely in GitHub secrets.
* **overrides (Optional):** JSON string of parameters to override the default fleet settings.
* **wait_for_run (Optional):** Whether to wait for the fleet run to complete before the action finishes. Note: The success of the action will be determined by the final status of the fleet run.
* **wait_time (Optional):** Time in seconds to wait before rechecking the fleet run status if `wait_for_run` is set to true.

### Quick Start 

Here are some examples of how you can configure the Platform GitHub Action to trigger a fleet based on different GitHub events. You can copy and paste these configurations into your workflow file and customize them as needed. You are not limited to these examples, and you can create your own configurations based on your requirements.

<Tabs
defaultValue="on-push"
values={[
{label: 'On Push', value: 'on-push'},
{label: 'On PR', value: 'on-pullrequest'},
{label: 'On Schedule', value: 'on-schedule'},
{label: 'On Specific Files Change', value: 'specific-files'},
{label: 'Manually', value: 'manual'},
{label: 'Trigger Multiple Platform Fleets on Matrix Builds', value: 'matrix-builds'},
]}>

<TabItem value="on-push">

```yaml
name: Trigger Platform Fleet on Push
on:
  push:
    branches:
      - main

jobs:
  trigger-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Platform Fleet
        uses: shipyardapp/shipyard-actions/trigger-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          fleet_id: 'your-fleet-id'
          overrides: '{
            "vessel_overrides": [
                {
                    "name": "Execute Python Script",
                    "environment_variable_overrides": {
                        "name": "NEW VALUE"
                    }
                }
            ]
        }'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
          wait_for_run: 'false'
```

</TabItem>

<TabItem value="on-pullrequest">

```yaml
name: Trigger Platform Fleet on Pull Request
on:
  pull_request:
    branches:
      - main
jobs:
  trigger-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Platform Fleet
        uses: shipyardapp/shipyard-actions/trigger-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          fleet_id: 'your-fleet-id'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
          wait_for_run: 'true'
          wait_time: 5
```

</TabItem>

<TabItem value="on-schedule">

```yaml
name: Trigger Platform Fleet on Schedule
on:
  schedule:
    - cron: '0 0 * * *'
jobs:
  trigger-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Platform Fleet
        uses: shipyardapp/shipyard-actions/trigger-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          fleet_id: 'your-fleet-id'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
          wait_for_run: 'true'
          wait_time: 5
```

</TabItem>

<TabItem value="manual">

```yaml
name: Trigger Platform Fleet on Workflow Dispatch
on:
  workflow_dispatch:
jobs:
  trigger-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Platform Fleet
        uses: shipyardapp/shipyard-actions/trigger-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          fleet_id: 'your-fleet-id'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
          wait_for_run: 'true'
          wait_time: 5
```

</TabItem>

<TabItem value="specific-files">

```yaml
name: Trigger Platform Fleet on Specific Files Change
on:
  push:
    paths:
      - 'src/**'
      - 'test/**'
jobs:
  trigger-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Platform Fleet
        uses: shipyardapp/shipyard-actions/trigger-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          fleet_id: 'your-fleet-id'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
          wait_for_run: 'true'
          wait_time: 5
```

</TabItem>

<TabItem value="matrix-builds">

```yaml
name: Trigger Multiple Platform Fleets on Matrix Builds
on:
  push:
    paths:
      - 'src/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
    matrix:
      fleet_id: [ fleet-id-1, fleet-id-2, fleet-id-3 ]
    steps:
      - name: Trigger Platform Fleet
    uses: shipyardapp/shipyard-actions/trigger-fleet@v1
    with:
      org_id: 'your-organization-id'
      project_id: 'your-project-id'
      fleet_id: ${{ matrix.fleet_id }}
      shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
      wait_for_run: 'true'
      wait_time: 5
```

</TabItem>

</Tabs>

