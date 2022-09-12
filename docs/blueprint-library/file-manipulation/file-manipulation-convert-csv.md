---
id: file-manipulation-convert-csv
title: File Manipulation Template - Convert CSV
hide_title: true
sidebar_label: Convert CSV
description: Information about Shipyard's low-code File Manipulation Convert CSV blueprint. Convert a CSV file into a TSV, PSV, XLSX, Parquet, DTA, or HDF5 file.
keywords:
    - file manipulation
    - blueprint
    - template
---

# File Manipulation - Convert CSV

## Overview

Convert one or more CSV files into a TSV, PSV, XLSX, Parquet, DTA, or HDF5 file.

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint uses built-in Pandas methods to read in a CSV file and output it as another file type.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Destination File Format | MANIPULATION_DESTINATION_FILE_FORMAT | Select | :white_check_mark: | `tsv` | Tab-Separated File (.tsv): `tsv`<br></br><br></br>Pipe-Separated File (.psv): `psv`<br></br><br></br>Excel File (.xlsx): `xlsx`<br></br><br></br>Parquet (.parquet): `parquet`<br></br><br></br>Stata (.dta): `stata`<br></br><br></br>HDF5 (.h5): `hdf5` | Type of file that you want the CSV file(s) converted into. |
| Local Folder Name | MANIPULATION_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |
| Local File Name Match Type | MANIPULATION_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| Local File Name | MANIPULATION_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| New Folder Name | MANIPULATION_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the newly converted file(s) should be created on Shipyard. Leaving blank will place the file in the home directory. If the folder does not already exist, it will be created. |
| New File Name | MANIPULATION_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the newly converted files on Shipyard. If left blank, defaults to the original file name(s) with an updated extension based on the selected file format. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: File Manipulation - Convert CSV
  inputs:
    MANIPULATION_DESTINATION_FILE_FORMAT: tsv ## REQUIRED
    MANIPULATION_SOURCE_FOLDER_NAME: null 
    MANIPULATION_SOURCE_FILE_NAME_MATCH_TYPE: exact_match ## REQUIRED
    MANIPULATION_SOURCE_FILE_NAME: null ## REQUIRED
    MANIPULATION_DESTINATION_FOLDER_NAME: null 
    MANIPULATION_DESTINATION_FILE_NAME: null 
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "0"
```
