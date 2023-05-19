---
id: snowflake-execute-query
title: Snowflake Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code Snowflake Execute Query blueprint. Execute any SQL query against a Snowflake database. 
keywords:
    - snowflake
    - blueprint
    - template
---

# Snowflake - Execute Query

## Overview
Execute a query against Snowflake, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.

This Blueprint is limited to executing a single query. You cannot run multiple queries separated by `;` (this is prohibited by the Snowflake Python connector). Instead, you'll have to set up multiple Vessels with this Blueprint to run one after the other.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Username | SNOWFLAKE_USERNAME  | Alphanumeric |:white_check_mark: | `-` | - | The Snowflake Username that has access to the table, schema, and warehouse that you want to execute a query against. |
| Password | SNOWFLAKE_PASSWORD  | Password |:white_check_mark: | `-` | - | The password associated with your Username. |
| Account Name | SNOWFLAKE_ACCOUNT  | Alphanumeric |:white_check_mark: | `-` | - | Typically found in the URL you use to access Snowflake, before `.snowflakecomputing.com` |
| Warehouse | SNOWFLAKE_WAREHOUSE  | Alphanumeric |:heavy_minus_sign: | `-` | - | If left blank, will use the default warehouse associated with the provided username. |
| Database | SNOWFLAKE_DATABASE  | Alphanumeric |:white_check_mark: | `-` | - | The name of the Database that you want to run a query against. |
| Schema | SNOWFLAKE_SCHEMA  | Alphanumeric |:heavy_minus_sign: | `-` | - | The name of the Schema you want to run a query against. If left blank, it's expected that your query will include the schema in it. |
| Query | SNOWFLAKE_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | The contents of the SQL query that you want to run. Does not support running multiple queries separated by `;` |


