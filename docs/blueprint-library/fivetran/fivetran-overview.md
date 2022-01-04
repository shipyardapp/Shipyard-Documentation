---
id: fivetran-overview
title: Fivetran Blueprints Overview
hide_title: true
sidebar_label: Overview
description: Information about Shipyard's low-code Fivetran templates.
keywords:
  - fivetran
  - blueprint
  - template
  - overview
---

# Fivetran Blueprints Overview

Fivetran Blueprints help data teams orchestrate their Fivetran connectors with other tools in their data stack. Our modular Fivetran Blueprints make it easy to execute a sync, check the status of a sync, or update the settings for a specific connector. We've also included an all-in-one Blueprint so you can flexibly determine how you would like to interact with Fivetran.

Beyond making it easier to connect Fivetran syncs to your other data tools, these Blueprints also give you finer-tuned control over how often your data syncs and can prevent downstream processes from running if Fivetran runs into issues.

Every Blueprint listed on this page stores the JSON response of the API calls and other files under the following folder structure:
`shipyard-artifacts/fivetran-blueprints/`

Sub-folders can be any of the following:
- responses
- variables

If you would like to run an action against Fivetran that is not built out as a Blueprint, you can use an HTTP Blueprint to run any command against the [Fivetran API](https://fivetran.com/docs/rest-api).

:::note
These Blueprints will only work for Fivetran customers that have API access (Starter and Enterprise Plans).
:::

## Available Blueprints
Shipyard currently has the following Blueprints readily available:
- [Execute Sync](fivetran-execute-sync)
- [Check Sync Status](fivetran-check-sync-status)
- [Execute Sync and Check Status](fivetran-execute-sync-and-check-status)

## How to Use
For information on how to set up these Blueprints successfully, please read through the [Fivetran Authorization guide](fivetran-authorization).

## Open Source Code
The code that powers these Blueprints is [available on our Github](https://github.com/shipyardapp/fivetran-blueprints), open sourced under the Apache License 2.0. We'd love to have you contribute to others using Shipyard Blueprints by creating issues or submitting PRs.

## Helpful Fivetran Links
- [Fivetran API Documentation](https://fivetran.com/docs/rest-api)