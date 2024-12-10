---
id: mysql-execute-query
title: MySQL Template - Execute Queries
hide_title: true
sidebar_label: Execute Queries
description: Information about Platform's low-code MySQL Execute Queries blueprint. Execute any SQL query against a MySQL database. 
keywords:
    - mysql
    - blueprint
    - template
---

# MySQL - Execute Queries

## Overview
Execute any SQL query against a MySQL database, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | MYSQL_HOST  | Alphanumeric |:white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | MYSQL_PORT  | Integer |:white_check_mark: | `"3306"` | - | Number for the database port to connect to. Defaults to 3306. |
| Username | MYSQL_USERNAME  | Alphanumeric |:white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | MYSQL_PASSWORD  | Password |:heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | MYSQL_DATABASE  | Alphanumeric |:white_check_mark: | - | - | Name of the database in MySQL to connect to. |
| Extra URL Parameters | MYSQL_URL_PARAMETERS  | Alphanumeric |:heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| Query | MYSQL_QUERY  | Alphanumeric |:white_check_mark: | - | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: MySQL - Execute Queries
  inputs:
    MYSQL_HOST: null  ## REQUIRED
    MYSQL_PORT: '3306' ## REQUIRED
    MYSQL_USERNAME: null ## REQUIRED
    MYSQL_PASSWORD: null
    MYSQL_DATABASE: null  ## REQUIRED
    MYSQL_URL_PARAMETERS: null
    MYSQL_QUERY: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '0'

```
