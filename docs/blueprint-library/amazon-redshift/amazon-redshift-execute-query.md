---
id: amazon-redshift-execute-query
title: Amazon Redshift Template - Execute Query
hide_title: true
sidebar_label: Execute Query
description: Information about Shipyard's low-code Amazon Redshift Execute Query blueprint.
keywords:
    - amazon redshift
    - blueprint
    - template
---

# Amazon Redshift - Execute Query

## Overview

Execute any SQL query against your Redshift database. Perfect for creating multi-step SQL jobs, executing DML statements, or running scheduled queries.

## Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or the IP address of the database to connect to |
| **Port** | [REQUIRED] Port number where the database accepts inbound connections |
| **Username** | [REQUIRED] Username configured as part of the database credentials - see [**Authorization**](#authorization) above for more information |
| **Password** | Optional password for database security credentials - see [**Authorization**](#authorization) above for more information |
| **Database** | Name of the database to connect to |
| **Extra URL Parameters** | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&" |
| **Query** | [REQUIRED] SQL query to run against the target database |