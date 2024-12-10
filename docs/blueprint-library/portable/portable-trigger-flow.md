---
id: portable-trigger-flow
title: Portable Template - Trigger Flow
hide_title: true
sidebar_label: Trigger Flow
description: Information about Platform's low-code Portable Trigger Flow blueprint. Triggers a Portable flow to run
keywords:
  - portable
  - blueprint
  - template
---

# Portable - Trigger Flow

:::info
This Blueprint is classified as "Free" and does not incur billable runtime. [Learn more](../../reference/blueprints/blueprint-library/blueprint-library-overview.md#free-blueprints).
:::

## Overview

Use this blueprint to trigger a Portable flow to run. It is recommended to leave the `Wait for Completion` option set to `TRUE` so that the vessel exits upon completion of the flow in Portable. If the option is set to `FALSE` the vessel will exit upon successfully triggering the flow.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| API Token | PORTABLE_API_TOKEN | Password | :white_check_mark: | - | - | The API token generated in Portable |
| Flow ID | PORTABLE_FLOW_ID | Alphanumeric | :white_check_mark: | - | - | The ID of the flow to run |
| Wait for Completion | PORTABLE_WAIT | Boolean | :white_check_mark: | `TRUE` | - | Whether to wait for the flow to complete. If TRUE, Platform will wait for completion before exiting |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Portable - Trigger Flow
  inputs:
    PORTABLE_API_TOKEN: null  ## REQUIRED
    PORTABLE_FLOW_ID: null ## REQUIRED
    PORTABLE_WAIT: 'TRUE' ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '201'
    - '203'
    - '210'
    - '211'
    - '214'
    - '249'
 ```


