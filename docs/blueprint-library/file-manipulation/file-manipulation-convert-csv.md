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
| Destination File Format | destination_file_format | Select | :white_check_mark: | tsv | `TSV (Tab-Separated File)`, `PSV (Pipe-Separated File)`, `XLSX (Excel File)`, `Parquet`, `Stata`, `hdf5` | Type of file that you want the CSV file(s) converted into. |
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |
| Local File Name Match Type | source_file_name_match_type | Select | :white_check_mark: | exact_match | `Exact Match`, `Regex Match` | Determines if the text in &#34;Local File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Local File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target file on Shipyard. Can be regex if &#34;Match Type&#34; is set accordingly. |
| New Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the newly converted file(s) should be created on Shipyard. Leaving blank will place the file in the home directory. If the folder does not already exist, it will be created. |
| New File Name | destination_file_name | Alphanumeric | :heavy_minus_sign: | - | - | What to name the newly converted files on Shipyard. If left blank, defaults to the original file name(s). |


