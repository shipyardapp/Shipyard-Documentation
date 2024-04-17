---
id: motherduck-upload-file-to-motherduck
title: MotherDuck Template - Upload File to Table
hide_title: true
sidebar_label: Upload File to Table
description: Information about Shipyard's low-code MotherDuck Upload File to Table blueprint. Quickly upload a CSV or parquet file to a a database table in MotherDuck
keywords:
  - motherduck
  - blueprint
  - template
---

# MotherDuck - Upload File to Table

## Overview

Quickly upload a CSV or parquet file to a a database table in MotherDuck. 

**Recommended Setup** 
This blueprint should be used after downloading or fetching data from another source. 


### File Types
This blueprint can be used to upload either CSV or Parquet files. For larger datasets it is recommended to use Parquet files when possible. 

### Insert Type
This blueprint can be used to overwrite data (with the `Create or Replace` option) or append to existing rows (with the `Append` option). In either case, if the table does not exist it will be created.

### Match Type
This blueprint supports uploading multiple files using a Glob pattern or a regular expression. For single file uploads, use the `Exact Match` option and provide the exact file name to upload.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Access Token | MOTHERDUCK_TOKEN | Password | :white_check_mark: | - | - | The API token for programmatic access to MotherDuck |
| Database | MOTHERDUCK_DATABASE | Alphanumeric | :heavy_minus_sign: | - | - | The optional database to connect to. If omitted, the blueprint will resort to the default. Additionally the database will be created if provided and it doesn't exist |
| Table Name | MOTHERDUCK_TABLE | Alphanumeric | :white_check_mark: | - | - | The name of the target table in MotherDuck to upload to |
| Source File Name | MOTHERDUCK_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | The name of the file to upload to MotherDuck |
| Source Folder Name | MOTHERDUCK_FOLDER | Alphanumeric | :heavy_minus_sign: | - | - | The optional folder location of where the source file is located |
| Insert Method | MOTHERDUCK_INSERT_METHOD | Select | :white_check_mark: | `append` | Append: `append`<br></br><br></br>Create or Replace: `replace`<br></br><br></br> | The insert method to use upon upload |
| Source File Match Type | MOTHERDUCK_MATCH_TYPE | Select | :white_check_mark: | - | Exact Match: `exact_match`<br></br><br></br>Glob Match: `glob_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | The match type dictates whether a single file will be uploaded, or multiple that either match a glob or regex pattern |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: MotherDuck - Upload File to Table
  inputs:
    MOTHERDUCK_TOKEN: null  ## REQUIRED
    MOTHERDUCK_DATABASE: null
    MOTHERDUCK_TABLE: null  ## REQUIRED
    MOTHERDUCK_FILE_NAME: null ## REQUIRED
    MOTHERDUCK_FOLDER: null
    MOTHERDUCK_INSERT_METHOD: append  ## REQUIRED
    MOTHERDUCK_MATCH_TYPE: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '101'
    - '102'
    - '103'
    - '200'
    - '210'
    - '220'
    - '249'
 ```


