---
id: databricks-move-or-rename-files-on-dbfs
title: Databricks Template - Move or Rename Files on DBFS
hide_title: true
sidebar_label: Move or Rename Files on DBFS
description: Information about Shipyard's low-code Databricks Move or Rename Files on DBFS blueprint. Move or rename one or more files from in your Databricks File System (DBFS) to another.
keywords:
    - databricks
    - blueprint
    - template
---

# Databricks - Move or Rename Files on DBFS

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [Databricks authorization guide](https://www.shipyardapp.com/docs/blueprint-library/databricks/databricks-authorization/)**.

Easily import one or more files from Shipyard to your Databricks File System (DBFS). The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Original Databricks Folder Name | DATABRICKS_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the Databricks File System folder where the file you want to move lives. If left blank, selects from /FileStore/. |
| Original Databricks File Name Match Type | DATABRICKS_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;Original Databricks File Name&#34; will look for one file with exact match, or multiple files using regex. |
| Original Databricks File Name | DATABRICKS_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file on the Databricks File System (DBFS). Can be regex if &#34;Match Type&#34; is set accordingly. |
| New Databricks Folder Name | DATABRICKS_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where you want to move the Databricks files to in the Databricks File System (DBFS). If left blank, selects from /FileStore/. |
| New Databricks File Name | DATABRICKS_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being moved or renamed. If left blank, defaults to the original file name(s). |
| Workspace Instance URL | DATABRICKS_INSTANCE_URL | Alphanumeric | :white_check_mark: | - | - | The subdomain, domain, and top-level domain (TLD) of your Databricks Workspace URL. |
| Access Token | DATABRICKS_ACCESS_TOKEN | Password | :white_check_mark: | - | - | The personal access token associated with the provided Workspace Instance. |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Databricks - Move or Rename Files on DBFS
  inputs:
    Original Databricks Folder Name: null 
    Original Databricks File Name Match Type: exact_match ## REQUIRED
    Original Databricks File Name: null ## REQUIRED
    New Databricks Folder Name: null 
    New Databricks File Name: null 
    Workspace Instance URL: null ## REQUIRED
    Access Token: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200-203"
    - "212"
    - "214"
```
