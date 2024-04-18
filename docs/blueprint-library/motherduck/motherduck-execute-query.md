---
id: motherduck-execute-query
title: MotherDuck Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code MotherDuck Execute Query blueprint. Quickly execute a SQL query against MotherDuck databases
keywords:
  - motherduck
  - blueprint
  - template
---

# MotherDuck - Execute Query

## Overview

Quickly execute a SQL query against MotherDuck databases. This blueprint is intended for DDL queries (i.e. CREATE, ALTER, DROP) as the results are not returned to Shipyard

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Access Token | MOTHERDUCK_TOKEN | Password | :white_check_mark: | - | - | The API token for programmatic access to MotherDuck |
| Query | MOTHERDUCK_QUERY | Alphanumeric | :white_check_mark: | - | - | The SQL query to execute against MotherDuck |
| Database | MOTHERDUCK_DATABASE | Alphanumeric | :heavy_minus_sign: | - | - | The optional database to connect to |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: MotherDuck - Execute Query
  inputs:
    MOTHERDUCK_TOKEN: null  ## REQUIRED
    MOTHERDUCK_QUERY: null ## REQUIRED
    MOTHERDUCK_DATABASE: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '221'
    - '249'
 ```


