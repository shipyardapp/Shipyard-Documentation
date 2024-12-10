---
id: shipyard-actions-overview
title: Platform GitHub Actions Overview
hide_title: true
description: Overview of Platform's GitHub Actions and how to use them.
keywords:
  - ci/cd
  - github actions
  - shipyard actions
  - github
---

# Platform GitHub Actions Overview

## Overview

Platform provides a set of GitHub Actions that you can use to automate your CI/CD workflows. These actions are designed to help you build, test, and deploy your applications with ease.

## Available Actions

* [Upsert Fleet](upsert-fleet.md)
* [Trigger Fleet](trigger-fleet.md)

## Prerequisites

Before you can use Platform's GitHub Actions, ensure you have the following:

1. A GitHub account with the necessary permissions for the repository.
2. A Platform API key. See [Creating a Platform API Key](../../blueprint-library/shipyard-api/shipyard-api-authorization.md) for instructions.
3. Your Organization ID in Platform. See [Fetching Organization ID with API](../../tutorials/org-id-with-api.md) for instructions.
4. Your Project ID in Platform. Instructions are below.
5. Your Fleet ID in Platform (for Trigger Fleet Action). Instructions are below.

## Finding IDs

### Finding Your Project ID

1. Log into your Platform account.
2. Navigate to the project you want to manage.
3. The project ID is the portion of the URL after `/projects/`. Typically, the URL format is `https://app.shipyardapp.com/org-name/projects/project-id/fleets`.

### Finding Your Fleet ID

1. Log into your Platform account.
2. Navigate to the fleet you want to manage.
3. The fleet ID is the portion of the URL after `/fleets/`. Typically, the URL format is `https://app.shipyardapp.com/org-name/projects/project-id/fleets/fleet-id`.

## Basic Concepts

### Workflows

GitHub Actions are individual tasks that automate your workflows. These tasks are defined in a YAML file called a workflow file. A workflow file can contain one or more tasks executed in sequence, triggered by specific events, such as a pull request being opened or a push to a branch.

### Creating and Configuring the Workflow

**Method 1:** Create a YAML file in the `.github/workflows` directory of your repository.

**Method 2:** Use the GitHub Actions UI:

1. Navigate to the Actions tab in your repository.
2. Click "New workflow."
3. Select "Set up a workflow yourself."
4. Copy and paste the YAML configuration into the editor.
5. Click "Start commit" to save the workflow file.

## Common Workflow Triggers

Here are some common triggers to start a workflow:

**Push:** Trigger a workflow when a push is made to a specific branch.

```yaml
name: Push
on:
  push:
    branches:
      - main
```

**Pull Request:** Trigger a workflow when a pull request is opened, closed, or synchronized. This can be useful for
running tests or deploying based on changes to the code that are made in a pull request. For example, you can run tests
when a pull request is opened to ensure that the changes do not introduce any bugs.

```yaml
name: Pull Request
on:
  pull_request:
    types: [ opened ]
```

**Release:** Trigger a workflow when a new release is created. This can be useful for running tests or deploying based
on the creation of a new release. For example, you can run tests when a new release is created to ensure that the
release is stable before deploying it to production.

```yaml
name: Release
on:
  release:
    types: [ created ]
```

**Schedule:** Trigger a workflow at a specific time. This can be useful for running tests or deploying based on a
schedule. For example, you can run tests every day at midnight to ensure that the code is still working as expected.

```yaml
name: Schedule
on:
  schedule:
    - cron: '0 0 * * *'
```

**Workflow Dispatch:** Trigger a workflow manually. This can be useful for running tests or deploying on demand. For
example, you can trigger an action for one-offs or to test a specific feature. Worth noting that the workflow_dispatch
needs to be merged before it can be triggered. Also, you can pass parameters to the workflow_dispatch event.

```yaml
name: Workflow Dispatch
on:
  workflow_dispatch:
```

**When specific files change:** Trigger a workflow when specific files change. This can be useful for scenarios only
certain files or folders affect your Platform environment. For example, you may have a folder that contains
configuration files that you want to deploy to Platform when they change.

```yaml
name: When specific files change
on:
  push:
    paths:
      - 'src/**'
```

:::tip
For multiple files, use GitHub's [matrix builds](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs) feature.
:::

## Secrets, Environment, Repository Variables

Secrets, environment variables, and repository variables are used to store sensitive information that you don't want to
expose in your workflow files. You can use these variables to store API keys, passwords, and other sensitive
information.

Some key differences between these variables are that secrets are encrypted and cannot be accessed outside the
repository, while environment and repository variables are not encrypted and can be accessed by anyone with access to
the repository.
Secrets will not print to logs which can affect some of the links that the actions generate if you pass in inputs such
as organization ID, project ID, etc as secrets.

### Secrets
To store a secret:

1. Log into your GitHub account.
2. Navigate to the repository.
3. Go to "Settings" > "Secrets and Variables" > "Actions."
4. Click "New repository secret."
5. Enter the name and value of the secret, then click "Add secret."

Reference secrets in your workflow file with `${{ secrets.SECRET_NAME }}`.

### Environment Variables

Define environment variables in the `env` section of your workflow file.

```yaml
name: Environment Variables
on:
  push:
    branches:
      - main
      - develop

env:
  ENV_VARIABLE: 'value'
```

Reference environment variables with `${{ env.ENV_VARIABLE }}`.

### Repository Variables

To store a repository variable:

1. Log into your GitHub account.
2. Navigate to the repository.
3. Go to "Settings" > "Actions" > "Secrets and Variables" > "Variables."
4. Click "New repository variable."
5. Enter the name and value, then click "Add Variable."

Reference repository variables with `${{ vars.REPOSITORY_VARIABLE }}`.

:::note
Environment variables defined in the `env` section override repository variables with the same name.
:::

:::tip
Use GitHub Environments to group environment variables and secrets together for different environments (e.g., development, staging, production).
:::

## Jobs and Steps

A job is a collection of steps executed on the same runner. Each step is a single task. For example:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Run tests
        run: npm test
```

## Open Source Code

The code for these actions is [available on GitHub](https://github.com/shipyardapp/shipyard-actions), open-sourced under the Apache License 2.0. Contributions are welcome!

## Helpful GitHub Links

- [GitHub Actions: Events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [GitHub Actions: Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [GitHub Actions: Matrix Builds](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs)
- [GitHub Actions: Secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [GitHub Actions: Variables](https://docs.github.com/en/actions/learn-github-actions/variables)
- [GitHub Actions: Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts)
