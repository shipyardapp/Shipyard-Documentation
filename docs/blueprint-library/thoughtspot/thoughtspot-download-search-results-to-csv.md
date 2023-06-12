---
id: thoughtspot-download-search-results-to-csv
title: Thoughtspot Template - Download Search Results  CSV to Shipyard
hide_title: true
sidebar_label: Download Search Results  CSV to Shipyard
description: Information about Shipyard's low-code Thoughtspot Download Search Results  CSV to Shipyard blueprint. Quickly download a natural language Thoughtspot query to a csv 
keywords:
    - thoughtspot
    - blueprint
    - template
---

# Thoughtspot - Download Search Results  CSV to Shipyard

## Overview
Quickly download a natural language Thoughtspot query to a csv

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Token | THOUGHTSPOT_TOKEN  | Password |:white_check_mark: | - | - | The API token generated from Thoughtspot |
| Query | THOUGHTSPOT_QUERY  | Alphanumeric |:white_check_mark: | - | - | None |
| Table ID | THOUGHTSPOT_TABLE_ID  | Alphanumeric |:white_check_mark: | - | - | The GUID for the table to query |
| Rows | THOUGHTSPOT_ROWS  | Alphanumeric |:heavy_minus_sign: | - | - | The number of rows to be returned. If omitted, then all will be returned |
| File Name | THOUGHTSPOT_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `search_data.csv` | - | The name of the file to be downloaded. Will default to search_data.csv |


