---
id: amazon-redshift-execute-query
title: Amazon Redshift Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code Amazon Redshift Execute Query blueprint. Execute any SQL query against your Redshift database. 
keywords:
    - amazon redshift
    - blueprint
    - template
---

# Amazon Redshift - Execute Query

## Overview
Execute any SQL query against your Redshift database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | REDSHIFT_HOST  | Alphanumeric |:white_check_mark: | `-` | - | The domain or the IP address of the database you want to connect to. |
| Port | REDSHIFT_PORT  | Integer |:white_check_mark: | `"5439"` | - | Port number where the database accepts inbound connections. |
| Username | REDSHIFT_USERNAME  | Alphanumeric |:white_check_mark: | `-` | - | Username configured as part of the database credentials. See Authorization documentation for more information. |
| Password | REDSHIFT_PASSWORD  | Password |:heavy_minus_sign: | `-` | - | Password for the provided username |
| Database | REDSHIFT_DATABASE  | Alphanumeric |:white_check_mark: | `-` | - | Name of the database that you want to connect to |
| Extra URL Parameters | REDSHIFT_URL_PARAMETERS  | Alphanumeric |:heavy_minus_sign: | `-` | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&" |
| Query | REDSHIFT_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored |


