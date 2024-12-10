---
id: upsert-fleet
title: Upsert Fleet
hide_title: true
description: Instructions on how to upsert a Fleet using Platform's GitHub Actions.
keywords:
  - ci/cd
  - github actions
  - shipyard actions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upsert Platform Fleet GitHub Action

This action allows you to upsert (update or insert) a Platform fleet configuration based on GitHub events such as commits, pull request openings, or merges.

The way that the action decides to create or update a fleet is based on the id fields within the YAML. If the id exists in the Platform project, the fleet will be updated. If the id does not exist, a new fleet will be created. Same goes for the individual vessels within the fleet. For more information on Platform Fleet YAMLs, see the [Platform Fleet YAML Reference](../../tutorials/create-fleets-with-yaml.md).

## Overview

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
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: <step-name>
        uses: shipyardapp/shipyard-actions/upsert-fleet@v1
        with:
          org_id: '<organization-id>'
          project_id: '<project-id>'
          yaml_path: '<path-to-your-fleet-config.yaml>'
          shipyard_api_key: '<API_KEY> ideally in the form of ${{ secrets.SHIPYARD_API_KEY }}'
```

### Action Inputs

The `shipyardapp/shipyard-actions/upsert-fleet` action has the following inputs:

* **org_id:** Your organization ID in Platform.
* **project_id:** Your project ID in Platform.
* **yaml_path:** The path to the YAML file defining the fleet configuration.
* **shipyard_api_key:** Your Platform API key, stored securely in GitHub secrets.

### Quick Start

Here are some examples of how you can configure the Platform GitHub Action to upsert a fleet based on different GitHub events. You can copy and paste these configurations into your workflow file and customize them as needed. You are not limited to these examples, and you can create your own configurations based on your requirements.

<Tabs
defaultValue="on-push"
values={[
{label: 'On Push', value: 'on-push'},
{label: 'On PR', value: 'on-pullrequest'},
{label: 'On Schedule', value: 'on-schedule'},
{label: 'On Specific Files Change', value: 'specific-files'},
{label: 'Manually', value: 'manual'},
{label: 'Upsert Multiple Platform Fleets on Matrix Builds', value: 'matrix-builds'},
]}>

<TabItem value="on-push">

```yaml
name: Upsert Platform Fleet on Push
on:
  push:
    branches:
      - main

jobs:
  upsert-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Upsert Platform Fleet
        uses: shipyardapp/shipyard-actions/upsert-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          yaml_path: './path-to-your-fleet-config.yaml'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
```

</TabItem>

<TabItem value="on-pullrequest">

```yaml
name: Upsert Platform Fleet on Pull Request
on:
  pull_request:
    branches:
      - main

jobs:
  upsert-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Upsert Platform Fleet
        uses: shipyardapp/shipyard-actions/upsert-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          yaml_path: './path-to-your-fleet-config.yaml'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
```

</TabItem>

<TabItem value="on-schedule">

```yaml
name: Upsert Platform Fleet on Schedule
on:
  schedule:
    - cron: '0 0 * * *'

jobs:
  upsert-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Upsert Platform Fleet
        uses: shipyardapp/shipyard-actions/upsert-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          yaml_path: './path-to-your-fleet-config.yaml'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
```

</TabItem>

<TabItem value="manual">

```yaml
name: Upsert Platform Fleet on Workflow Dispatch
on:
  workflow_dispatch:

jobs:
  upsert-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Upsert Platform Fleet
        uses: shipyardapp/shipyard-actions/upsert-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          yaml_path: './path-to-your-fleet-config.yaml'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
```

</TabItem>

<TabItem value="specific-files">

```yaml
name: Upsert Platform Fleet on Specific Files Change
on:
  push:
    paths:
      - 'src/**'
      - 'config/**'

jobs:
  upsert-fleet:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Upsert Platform Fleet
        uses: shipyardapp/shipyard-actions/upsert-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          yaml_path: './path-to-your-fleet-config.yaml'
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
```

</TabItem>

<TabItem value="matrix-builds">

```yaml
name: Upsert Multiple Platform Fleets on Matrix Builds
on:
  push:
    paths:
      - 'src/**'

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        yaml_path: ['./config/fleet-config1.yaml', './config/fleet-config2.yaml', './config/fleet-config3.yaml']
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Upsert Platform Fleet
        uses: shipyardapp/shipyard-actions/upsert-fleet@v1
        with:
          org_id: 'your-organization-id'
          project_id: 'your-project-id'
          yaml_path: ${{ matrix.yaml_path }}
          shipyard_api_key: ${{ secrets.SHIPYARD_API_KEY }}
```

</TabItem>
</Tabs>
