---
id: amazon-athena-store-query-results-as-csv
title: Amazon Athena Template - Story Query Results as CSV
hide_title: true
sidebar_label: Story Query Results as CSV
description: Information about Shipyard's low-code Amazon Athena Story Query Results as CSV blueprint.
keywords:
  - amazon athena
  - blueprint
  - template
---

# Store Query Results as CSV Blueprint

## Overview

The **Amazon Athena - Store Query Results as CSV** Blueprint allows users to run arbitrary queries against Athena and store the CSV output in the Shipyard Vessel.

## Variables

| Variable Name | Description |
|:---|:---|
| **Database** | [REQUIRED] The name of the [Athena database](https://docs.aws.amazon.com/athena/latest/ug/understanding-tables-databases-and-the-data-catalog.html) the run the query against |
| **Query** | [REQUIRED] The [SQL-style](https://docs.aws.amazon.com/athena/latest/ug/ddl-sql-reference.html) query to run against the Athena database |
| **S3 Log Bucket Name** | [REQUIRED] The S3 bucket to output the query logs into |
| **S3 Log Folder Name** | The optional subdirectory within the S3 bucket to store query logs |
| **Local File Name** | [REQUIRED] The name of the log file is stored under in Shipyard |
| **Local Folder Name** | The optional subdirectory the log file output is stored under in Shipyard |
| **Access Key ID** | [REQUIRED] The access key ID for programmatic IAM user used to download the file - see **Authorization** above for more information |
| **Secret Access Key** | [REQUIRED] The secret access key for programmatic IAM user used to download the file - see [**Authorization**](#authorization) above for more information |
| **Region** | [REQUIRED] The AWS region for the S3 bucket and IAM user |
