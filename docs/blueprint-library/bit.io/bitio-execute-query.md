---
id: bitio-execute-query
title: bit.io Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code bit.io Execute Query blueprint. Execute any SQL query against a bit.io database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.
keywords:
    - bit.io
    - blueprint
    - template
---

# bit.io - Execute Query

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [bit.io authorization guide](https://www.shipyardapp.com/docs/blueprint-library/bitio/bitio-authorization/)**.

Execute any SQL query against a bit.io database, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Password | BITIO_PASSWORD | Password | :white_check_mark: | - | - | Password associated to your bit.io account. For more information, see the Authorization documentation. |
| Database | BITIO_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database to connect to. This is the same as your current repository name, which has the structure user_name/repo_name. |
| Query | BITIO_QUERY | Alphanumeric | :white_check_mark: | - | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: bit.io - Execute Query
  inputs:
    Password: null ## REQUIRED
    Database: null ## REQUIRED
    Query: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
```
