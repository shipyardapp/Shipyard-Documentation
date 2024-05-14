---
id: shipyard-api-trigger-fleet
title: Shipyard Template - Trigger Fleet
hide_title: true
sidebar_label: Trigger Fleet
description: Information about Shipyard's low-code Shipyard Trigger Fleet blueprint. Quickly trigger a fleet in Shipyard to run
keywords:
  - shipyard
  - blueprint
  - template
---

# Shipyard API - Trigger Fleet



## Overview

Quickly trigger an existing fleet in Shipyard to run without waiting for completion

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Shipyard API Key | SHIPYARD_API_KEY | Password | :white_check_mark: | - | - | The API key that Shipyard generated for you |
| Project ID | SHIPYARD_API_PROJECT_ID | Alphanumeric | :white_check_mark: | - | - | The project ID where the target fleet resides |
| Fleet ID | SHIPYARD_API_FLEET_ID | Alphanumeric | :white_check_mark: | - | - | The ID of the fleet to trigger |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Shipyard API - Trigger Fleet
  inputs:
    SHIPYARD_API_KEY: null  ## REQUIRED
    SHIPYARD_API_PROJECT_ID: null ## REQUIRED
    SHIPYARD_API_FLEET_ID: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '104'
    - '105'
    - '106'
    - '249'
 ```


