---
id: amazon-redshift-upload-csv-to-table
title: Amazon Redshift Template - Upload CSV to Table
hide_title: true
sidebar_label: Upload CSV to Table
description: Information about Shipyard's low-code Amazon Redshift Upload CSV to Table blueprint. 
keywords:
    - amazon redshift
    - blueprint
    - template
---

# Amazon Redshift - Upload CSV to Table

## Overview

Upload a CSV file to any table in Amazon Redshift. With the file data, you can create a new table, overwrite the existing table, or append to the end of the table.

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
| **Folder Name** | Optional subdirectory to store results in Shipyard |
| **File Name** | [REQUIRED] Name for CSV query output file |
| **Table Name** | [REQUIRED] Redshift table name to insert data into |
| **Insertion Method** | [REQUIRED] Dropdown with options for determining how data is inserted into the table |