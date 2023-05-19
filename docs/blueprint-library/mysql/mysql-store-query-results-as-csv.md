---
id: mysql-store-query-results-as-csv
title: MySQL Template - Store Query Results as CSV
hide_title: true
sidebar_label: Store Query Results as CSV
description: Information about Shipyard's low-code MySQL Store Query Results as CSV blueprint. Turn the results of your SQL SELECT statement into a CSV file. 
keywords:
    - mysql
    - blueprint
    - template
---

# MySQL - Store Query Results as CSV

## Overview
Turn the results of your SQL SELECT statement into a CSV file. Extract your MySQL data into files for easier delivery to clients and partners.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Host | MYSQL_HOST  | Alphanumeric |:white_check_mark: | `-` | - | The domain or the IP address of the database you want to connect to. |
| Port | MYSQL_PORT  | Integer |:white_check_mark: | `"3306"` | - | Number for the database port to connect to. Defaults to 3306. |
| Username | MYSQL_USERNAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the user to connect to the database with. |
| Password | MYSQL_PASSWORD  | Password |:heavy_minus_sign: | `-` | - | Password associated to the provided username. |
| Database | MYSQL_DATABASE  | Alphanumeric |:white_check_mark: | `-` | - | Name of the database in MySQL to connect to. |
| Extra URL Parameters | MYSQL_URL_PARAMETERS  | Alphanumeric |:heavy_minus_sign: | `-` | - | Extra parameters that will be placed at the end of the connection string, after the "?". Must be separated by "&". |
| Query | MYSQL_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | A SELECT statement that returns data. Formatting is ignored. |
| Folder Name | MYSQL_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| File Name | MYSQL_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `output.csv` | - | The file name that you want your generated CSV to have. |
| Include Column Names as Header? | MYSQL_FILE_HEADER  | Boolean |:white_check_mark: | `True` | - | If checked, your CSV file will include a header row with column names. |


