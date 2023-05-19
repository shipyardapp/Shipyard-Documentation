---
id: bitio-store-query-results-as-csv
title: bit.io Template - Store Query Results as CSV
hide_title: true
sidebar_label: Store Query Results as CSV
description: Information about Shipyard's low-code bit.io Store Query Results as CSV blueprint. Turn the results of your SQL SELECT statement into a CSV file. 
keywords:
    - bit.io
    - blueprint
    - template
---

# bit.io - Store Query Results as CSV

## Overview
Turn the results of your SQL SELECT statement into a CSV file. Extract your bit.io data into files for easier delivery to clients and partners.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Password | BITIO_PASSWORD  | Password |:white_check_mark: | `-` | - | Password associated to your bit.io account. For more information, see the Authorization documentation. |
| Database | BITIO_DATABASE  | Alphanumeric |:white_check_mark: | `-` | - | Name of the database to connect to. This is the same as your current repository name, which has the structure user_name/repo_name. |
| Query | BITIO_QUERY  | Alphanumeric |:white_check_mark: | `-` | - | A SELECT statement that returns data. Formatting is ignored. |
| Folder Name | BITIO_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | The folder structure that you want your CSV to be created in. If left blank, the file will be created in the home directory. |
| File Name | BITIO_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `output.csv` | - | The file name that you want your generated CSV to have. |
| Include Column Names as Header? | BITIO_FILE_HEADER  | Boolean |:white_check_mark: | `True` | - | If checked, your CSV file will include a header row with column names. |


