---
id: bitio-execute-query
title: bit.io Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code bit.io Execute Query blueprint. Execute any SQL query against a bit.io database. 
keywords:
    - bit.io
    - blueprint
    - template
---

# bit.io - Execute Query

## Overview
Execute any SQL query against a bit.io database, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Password | BITIO_PASSWORD  | Password |:white_check_mark: | `-` | - | Password associated to your bit.io account. For more information, see the Authorization documentation. |
| Database | BITIO_DATABASE  | Alphanumeric |:white_check_mark: | `-` | - | Name of the database to connect to. This is the same as your current repository name, which has the structure user_name/repo_name. |
| Query | BITIO_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |


