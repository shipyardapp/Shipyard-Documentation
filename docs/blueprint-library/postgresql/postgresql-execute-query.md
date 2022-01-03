---
id: postgresql-execute-query
title: PostgreSQL Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code PostgreSQL Execute Query blueprint. Execute any SQL query against a PostgreSQL database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.
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
|:---|:---|:---|:---|:---|:---|:---|
| Host | HOST | Alphanumeric | :white_check_mark: |  | - | The domain or the IP address of the database you want to connect to. |
| Port | PORT | Integer | :white_check_mark: | 5432 | - | Number for the database port to connect to. Defaults to 5432. |
| Username | USERNAME | Alphanumeric | :white_check_mark: | - | - | Name of the user to connect to the database with. |
| Password | PASSWORD | Password | :heavy_minus_sign: | - | - | Password associated to the provided username. |
| Database | DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database in the PostgreSQL to connect to. |
| Extra URL Parameters | URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the &#34;?&#34;. Must be separated by &#34;&amp;&#34;. |
| Query | query | Alphanumeric | :white_check_mark: | - | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |


