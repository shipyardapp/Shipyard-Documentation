---
id: amazon-redshift-store-query-results-as-csv
title: Amazon Redshift Template - Store Query Results as CSV
hide_title: true
sidebar_label: Store Query Results as CSV
description: Information about Shipyard's low-code Amazon Redshift Store Query Results as CSV blueprint.
keywords:
    - amazon redshift
    - blueprint
    - template
---

# Amazon Redshift - Store Query Results as CSV

### Overview

Turn the results of your SQL SELECT statement into a CSV file. Extract your Amazon Redshift data into files for easier delivery to clients and partners.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or the IP address of the database to connect to |
| **Port** | [REQUIRED] Port number where the database accepts inbound connections |
| **Username** | [REQUIRED] Username configured as part of the database credentials - see [**Authorization**](#authorization) above for more information |
| **Password** | Optional password for database security credentials - see [**Authorization**](#authorization) above for more information |
| **Database** | Name of the database to connect to |
| **Extra URL Parameters** | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&" |
| **Query** | [REQUIRED] SQL query to run against the target database |
| **Folder Name** | Optional subdirectory to store results in Shipyard |
| **File Name** | [REQUIRED] Name for CSV query output file |
