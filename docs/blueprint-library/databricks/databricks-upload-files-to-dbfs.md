---
id: databricks-upload-files-to-dbfs
title: Databricks Template - Upload Files to DBFS from Platform
hide_title: true
sidebar_label: Upload Files to DBFS from Platform
description: Information about Platform's low-code Databricks Upload Files to DBFS from Platform blueprint. Easily import one or more files from Platform to your Databricks File System (DBFS). 
keywords:
    - databricks
    - blueprint
    - template
---

# Databricks - Upload Files to DBFS from Platform

## Overview
Easily import one or more files from Platform to your Databricks File System (DBFS). The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Shipyard Folder Name | DATABRICKS_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The local folder name where the file is contained |
| Shipyard File Name Match Type | DATABRICKS_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Shipyard File Name" will look for one file with exact match, or multiple files using regex. |
| Shipyard File Name | DATABRICKS_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file on Platform. Can be regex if "Match Type" is set accordingly. |
| Databricks Folder Name | DATABRICKS_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder where you want to upload the local file(s) in the Databricks File System (DBFS). If left blank, uploads to /FileStore/. |
| Databricks File Name | DATABRICKS_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |
| Workspace Instance URL | DATABRICKS_INSTANCE_URL  | Alphanumeric |:white_check_mark: | - | - | The subdomain, domain, and top-level domain (TLD) of your Databricks Workspace URL. |
| Access Token | DATABRICKS_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The personal access token associated with the provided Workspace Instance. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Databricks - Upload Files to DBFS from Shipyard
  inputs:
    DATABRICKS_SOURCE_FOLDER_NAME: null
    DATABRICKS_SOURCE_FILE_NAME_MATCH_TYPE: exact_match  ## REQUIRED
    DATABRICKS_SOURCE_FILE_NAME: null ## REQUIRED
    DATABRICKS_DESTINATION_FOLDER_NAME: null
    DATABRICKS_DESTINATION_FILE_NAME: null
    DATABRICKS_INSTANCE_URL: null  ## REQUIRED
    DATABRICKS_ACCESS_TOKEN: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '201'
    - '202'
    - '203'
    - '212'
    - '214'

```
