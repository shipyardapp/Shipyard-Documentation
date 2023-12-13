---
id: databricks-download-files-from-dbfs
title: Databricks Template - Download Files from DBFS to Shipyard
hide_title: true
sidebar_label: Download Files from DBFS to Shipyard
description: Information about Shipyard's low-code Databricks Download Files from DBFS to Shipyard blueprint. Quickly export one or more files from your Databricks File System (DBFS).  
keywords:
    - databricks
    - blueprint
    - template
---

# Databricks - Download Files from DBFS to Shipyard

## Overview
Quickly export one or more files from your Databricks File System (DBFS). The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Databricks Folder Name | DATABRICKS_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder where the file is stored in the Databricks File System (DBFS). If left blank, looks in the /FileStore/. |
| Databricks File Name Match Type | DATABRICKS_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Databricks File Name" will look for one file with exact match, or multiple files using regex. |
| Databricks File Name | DATABRICKS_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the target file in the Databricks File System (DBFS). Can be regex if "Match Type" is set accordingly. |
| Shipyard Folder Name | DATABRICKS_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded on Shipyard. Leaving blank will place the file in the home directory. |
| Shipyard File Name | DATABRICKS_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being downloaded on Shipyard. If left blank, defaults to the original file name(s). |
| Workspace Instance URL | DATABRICKS_INSTANCE_URL  | Alphanumeric |:white_check_mark: | - | - | The subdomain, domain, and top-level domain (TLD) of your Databricks Workspace URL. |
| Access Token | DATABRICKS_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The personal access token associated with the provided Workspace Instance. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Databricks - Download Files from DBFS to Shipyard
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
