---
id: bit.io-execute-query
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

Execute any SQL query against a bit.io database, without returning any of the resulting data. This Blueprint should primarily be used for queries that perform functionality other than SELECT, like multi-step SQL jobs, or DML statements.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| API Key | BITIO_API_KEY | Password | :white_check_mark: | - | - | API Key associated to your bit.io account. For more information, see the Authorization documentation. |
| Query | BITIO_QUERY | Alphanumeric | :white_check_mark: | - | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored. |


