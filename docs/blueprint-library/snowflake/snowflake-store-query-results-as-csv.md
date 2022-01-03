---
id: snowflake-store-query-results-as-csv
title: Snowflake Template - Store Query Results as CSV
hide_title: true
sidebar_label: Store Query Results as CSV
description: Information about Shipyard's low-code Snowflake Store Query Results as CSV blueprint. Turn the results of your SQL SELECT statement into a CSV file. Extract your Snowflake data into files for easier delivery to clients and partners.
keywords:
    - snowflake
    - blueprint
    - template
---

# Snowflake - Store Query Results as CSV

## Overview

Turn the results of your SQL SELECT statement into a CSV file. Extract your Snowflake data into files for easier delivery to clients and partners.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Username | USERNAME | Alphanumeric | :white_check_mark: | - | - | The Snowflake Username that has access to the table/schema/warehouse that you want to execute a query against. |
| Password | PASSWORD | Password | :white_check_mark: | - | - | The password associated with your Username. |
| Account Name | ACCOUNT | Alphanumeric | :white_check_mark: | - | - | Typically found in the URL you use to access Snowflake, before `.snowflakecomputing.com`. |
| Warehouse | WAREHOUSE | Alphanumeric | :heavy_minus_sign: | - | - | The name of the Warehouse you want your query to run in. If left blank, will use the default Warehouse associated with the Username. |
| Database | DATABASE | Alphanumeric | :white_check_mark: | - | - | The name of the Database that you want to run a query against. |
| Schema | SCHEMA | Alphanumeric | :heavy_minus_sign: | - | - | The name of the Schema you want to run a query against. If left blank, it&#39;s expected that your query will include the schema in it. |
| Query | query | Alphanumeric | :white_check_mark: | - | - | A SQL query with a SELECT statement that returns data. |
| Local File Name | destination_file_name | Alphanumeric | :white_check_mark: | ${SHIPYARD_LOG_ID}_output.csv | - | The file name that you want your generated CSV to have. |
| Local Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| Include Column Names as Header? | file_header | Boolean | :white_check_mark: | true | - | If checked, your CSV file will include a header row with column names. |


