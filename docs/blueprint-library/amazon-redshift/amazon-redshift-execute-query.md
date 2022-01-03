---
id: amazon-redshift-execute-query
title: Amazon Redshift Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code Amazon Redshift Execute Query blueprint. Execute any SQL query against your Redshift database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.
keywords:
    - amazon redshift
    - blueprint
    - template
---

# Amazon Redshift - Execute Query

## Overview

Execute any SQL query against your Redshift database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/amazon-redshift). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/amazonredshift-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Host | REDSHIFT_HOST | Alphanumeric | :white_check_mark: | - | - | The domain or the IP address of the database you want to connect to. |
| Port | REDSHIFT_PORT | Integer | :white_check_mark: | 5439 | - | - |
| Username | REDSHIFT_USERNAME | Alphanumeric | :white_check_mark: | - | - | - |
| Password | REDSHIFT_PASSWORD | Password | :heavy_minus_sign: | - | - | Password for the provided username |
| Database | REDSHIFT_DATABASE | Alphanumeric | :white_check_mark: | - | - | Name of the database that you want to connect to |
| Extra URL Parameters | REDSHIFT_URL_PARAMETERS | Alphanumeric | :heavy_minus_sign: | - | - | Extra parameters that will be placed at the end of the connection string, after the &#34;?&#34;. Must be separated by &#34;&amp;&#34; |
| Query | REDSHIFT_QUERY | Alphanumeric | :white_check_mark: | - | - | Any SQL query that runs a job against the database (CREATE, DROP, INSERT, etc.). Formatting is ignored |


