---
id: thoughtspot-export-liveboard-report
title: Thoughtspot Template - Export Liveboard Report
hide_title: true
sidebar_label: Export Liveboard Report
description: Information about Shipyard's low-code Thoughtspot Export Liveboard Report blueprint. Quickly export a Thoughtspot liveboard report into a variety of formats ranging from CSV, PNG, and PDF 
keywords:
    - thoughtspot
    - blueprint
    - template
---

# Thoughtspot - Export Liveboard Report

## Overview
Quickly export a Thoughtspot liveboard report into a variety of formats ranging from CSV, PNG and PDF

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Token | THOUGHTSPOT_TOKEN  | Password |:white_check_mark: | - | - | The API token generated in Thoughtspot |
| Metadata Identifier | THOUGHTSPOT_METADATA_ID  | Alphanumeric |:white_check_mark: | - | - | The ID of the associated liveboard  |
| Visualization Identifiers | THOUGHTSPOT_VISUALIZATION_IDS  | Alphanumeric |:heavy_minus_sign: | - | - | The optional list of specific visualizations to include in the export. If omitted then all will be included |
| File Format | THOUGHTSPOT_FILE_FORMAT  | Select |:white_check_mark: | `csv` | CSV: `csv`<br></br><br></br>PDF: `pdf`<br></br><br></br>PNG: `png`<br></br><br></br> | The desired file format for the export to have |
| Runtime Filter | THOUGHTSPOT_RUNTIME_FILTER  | Alphanumeric |:heavy_minus_sign: | - | - | A column condition to filter the exported data |
| Runtime Sort | THOUGHTSPOT_RUNTIME_SORT  | Alphanumeric |:heavy_minus_sign: | - | - | A column sort to sort the output data |
| File Name | THOUGHTSPOT_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `liveboard` | - | The name of the download file to have |


