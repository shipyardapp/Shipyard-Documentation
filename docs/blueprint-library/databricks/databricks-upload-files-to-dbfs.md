---
id: databricks-upload-files-to-dbfs
title: Databricks Template - Upload Files to DBFS
hide_title: true
sidebar_label: Upload Files to DBFS
description: Information about Shipyard's low-code Databricks Upload Files to DBFS blueprint. Easily import one or more files from Shipyard to your Databricks File System (DBFS). 
keywords:
    - databricks
    - blueprint
    - template
---

# Databricks - Upload Files to DBFS

## Overview
Easily import one or more files from Shipyard to your Databricks File System (DBFS). The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Local Folder Name | DATABRICKS_SOURCE_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Local File Name Match Type | DATABRICKS_SOURCE_FILE_NAME_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match`<br></br><br></br> | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| Local File Name | DATABRICKS_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| Databricks Folder Name | DATABRICKS_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Name of the folder where you want to upload the local file(s) in the Databricks File System (DBFS). If left blank, uploads to /FileStore/. |
| Databricks File Name | DATABRICKS_DESTINATION_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |
| Workspace Instance URL | DATABRICKS_INSTANCE_URL  | Alphanumeric |:white_check_mark: | `-` | - | The subdomain, domain, and top-level domain (TLD) of your Databricks Workspace URL. |
| Access Token | DATABRICKS_ACCESS_TOKEN  | Password |:white_check_mark: | `-` | - | The personal access token associated with the provided Workspace Instance. |


