---
id: looker-create-sql-runner-query
title: Looker Template - Create SQL Runner Query
hide_title: true
sidebar_label: Create SQL Runner Query
description: Information about Shipyard's low-code Looker Create SQL Runner Query blueprint. Quickly create and store a SQL query to be run against a Looker view or model.
keywords:
  - looker
  - blueprint
  - template
---

# Looker - Create SQL Runner Query

## Overview

Quickly create a SQL query (stored as a `slug`) to be run in a downstream vessel. This works best when paired with `Looker - Download SQL Query as File` blueprint.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Looker URL | LOOKER_URL | Alphanumeric | :white_check_mark: | - | - | The base URL of your organization's looker instance. Include https:// |
| Looker Client ID | LOOKER_CLIENT_ID | Password | :white_check_mark: | - | - | The Client ID generated from Looker for API access |
| Looker Client Secret | LOOKER_CLIENT_SECRET | Password | :white_check_mark: | - | - | The secret key generated from Looker for API access |
| Looker Connection Type | LOOKER_CONNECTION_TYPE | Select | :white_check_mark: | `connection_name` | Connection Name: `connection_name`<br></br><br></br>Model Name: `model_name`<br></br><br></br> | The type of connection to form the SQL runner query. This is either by connecting to a specific connection, or a model |
| Looker Connection Value | LOOKER_CONNECTION_VALUE | Alphanumeric | :heavy_minus_sign: | - | - | Depending the selection in the Looker Connection Type argument, this will either be the name of the connection or the name of the model |
| Looker SQL Query | LOOKER_SQL_QUERY | Alphanumeric | :white_check_mark: | - | - | The SQL query you would like to store |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Looker - Create SQL Runner Query
  inputs:
    LOOKER_URL: null  ## REQUIRED
    LOOKER_CLIENT_ID: null ## REQUIRED
    LOOKER_CLIENT_SECRET: null ## REQUIRED
    LOOKER_CONNECTION_TYPE: connection_name ## REQUIRED
    LOOKER_CONNECTION_VALUE: null
    LOOKER_SQL_QUERY: null  ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '203'
    - '204'
    - '205'
    - '206'
    - '207'
    - '208'
    - '209'
 ```


