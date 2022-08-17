---
id: mysql-execute-query
title: MySQL Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code MySQL Execute Query blueprint. Execute any SQL query against a MySQL database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.
keywords:
    - mysql
    - blueprint
    - template
---

# MySQL - Execute Query

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [MySQL authorization guide](https://www.shipyardapp.com/docs/blueprint-library/mysql/mysql-authorization/)**.

Execute any SQL query against a MySQL database, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | MYSQL_HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | MYSQL_PORT | Integer | :white_check_mark: | 3306 | - | Number for the database port to connect to. Defaults to 3306. |
| Username | MYSQL_USERNAME | Alphanumeric | :white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | MYSQL_PASSWORD | Password | :heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | MYSQL_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database in MySQL to connect to. |
| Extra URL Parameters | MYSQL_URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the &#34;?&#34;. Must be separated by &#34;&amp;&#34;. |
| Query | MYSQL_QUERY | Alphanumeric | :white_check_mark: | - | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: MySQL - Execute Query
  inputs:
    Host: null ## REQUIRED
    Port: 3306 ## REQUIRED
    Username: null ## REQUIRED
    Password: null 
    Database: null ## REQUIRED
    Extra URL Parameters: null 
    Query: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
