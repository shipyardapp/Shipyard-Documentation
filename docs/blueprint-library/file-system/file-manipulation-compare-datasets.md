---
id: file-manipulation-compare-datasets
title: File System Template - Compare Datasets
hide_title: true
sidebar_label: Compare Datasets
description: Information about Shipyard's low-code File System Compare Datasets blueprint. Compare two CSV files and return files that show the rows with unique and overlapping information. 
keywords:
    - file system
    - blueprint
    - template
---

# File Manipulation - Compare Datasets

## Overview
Compare two CSV files and return files that show the rows with differing and overlapping information. It is expected that the two files provided will:
- Provide columns in the first row of the CSV file.
- Have the same number of columns
- Have the same column names

After comparing data in the two files, the following files _may_ be generated:
- {File Name 1}_only.csv (contains only rows found in `File Name 1`)
- {File Name 2}_only.csv (contains only rows found in `File Name 2`)
- {File Name 1}_overlap.csv (contains rows found in both `File Name 1` AND `File Name 2`)

If there is no unique data, a file with the `_only` will not be created. If there is no overlapping data, the `_overlap` file will not be created.

This Blueprint is relatively memory intensive because it loads both file contents into memory using Pandas. For larger file sizes, we recommend running a comparison directly in a database.

---
For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/data-manipulation). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/datamanipulation-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| File Name 1 | MANIPULATION_SOURCE_FILE_NAME_1  | Alphanumeric |:white_check_mark: | - | - | Name of the target file on Shipyard. |
| Folder Name 1 | MANIPULATION_SOURCE_FOLDER_NAME_1  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |
| File Name 2 | MANIPULATION_SOURCE_FILE_NAME_2  | Alphanumeric |:white_check_mark: | - | - | Name of the 2nd target file on Shipyard. |
| Folder Name 2 | MANIPULATION_SOURCE_FOLDER_NAME_2  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: File Manipulation - Compare Datasets
  inputs:
    MANIPULATION_SOURCE_FILE_NAME_1: null ## REQUIRED
    MANIPULATION_SOURCE_FOLDER_NAME_1: null 
    MANIPULATION_SOURCE_FILE_NAME_2: null ## REQUIRED
    MANIPULATION_SOURCE_FOLDER_NAME_2: null 
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "0"
```
