---
id: postgresql-execute-query
title: PostgreSQL Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code PostgreSQL Execute Query blueprint. Execute any SQL query against a PostgreSQL database. 
keywords:
    - postgresql
    - blueprint
    - template
---

# PostgreSQL - Execute Query

## Overview
Execute any SQL query against a PostgreSQL database, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | POSTGRES_HOST  | Alphanumeric |:white_check_mark: | `-` | - | The domain or the IP address of the database you want to connect to. |
| Port | POSTGRES_PORT  | Integer |:white_check_mark: | `"5432"` | - | Number for the database port to connect to. Defaults to 5432. |
| Username | POSTGRES_USERNAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the user to connect to the database with. |
| Password | POSTGRES_PASSWORD  | Password |:heavy_minus_sign: | `-` | - | Password associated to the provided username. |
| Database | POSTGRES_DATABASE  | Alphanumeric |:white_check_mark: | `-` | - | Name of the database in the PostgreSQL to connect to. |
| Extra URL Parameters | POSTGRES_URL_PARAMETERS  | Alphanumeric |:heavy_minus_sign: | `-` | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| Query | POSTGRES_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |


