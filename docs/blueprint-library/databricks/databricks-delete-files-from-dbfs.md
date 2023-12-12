---
id: databricks-delete-files-from-dbfs
title: Databricks Template - Delete Files from DBFS
hide_title: true
sidebar_label: Delete Files from DBFS
description: Information about Shipyard's low-code Databricks Delete Files from DBFS blueprint. Delete one or more files from your Databricks File System (DBFS). 
keywords:
    - databricks
    - blueprint
    - template
---

# Databricks - Delete Files from DBFS

## Overview
Delete one or more files from your Databricks File System (DBFS). The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Databricks Folder Name | DATABRICKS_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Name of the folder where you want to upload the local file(s) in the Databricks File System (DBFS). If left blank, uploads to /FileStore/. |
| Databricks File Name Match Type | DATABRICKS_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Databricks File Name" will look for one file with exact match, or multiple files using regex. |
| Databricks File Name | DATABRICKS_SOURCE_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |
| Workspace Instance URL | DATABRICKS_INSTANCE_URL  | Alphanumeric |:white_check_mark: | - | - | The subdomain, domain, and top-level domain (TLD) of your Databricks Workspace URL. |
| Access Token | DATABRICKS_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | The personal access token associated with the provided Workspace Instance. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Databricks - Delete Files from DBFS
    inputs:
        DATABRICKS_SOURCE_FOLDER_NAME: null
        DATABRICKS_SOURCE_FILE_NAME_MATCH_TYPE: exact_match  ## REQUIRED
        DATABRICKS_SOURCE_FILE_NAME: null
        DATABRICKS_INSTANCE_URL: null  ## REQUIRED
        DATABRICKS_ACCESS_TOKEN: null ## REQUIRED
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   200
    -   201
    -   202
    -   203
    -   212
    -   214

```
