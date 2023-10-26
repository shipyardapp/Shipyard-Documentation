---
id: notion-upload-file-from-shipyard-to-notion-database
title: Notion Template - Upload File from Shipyard to Notion Database
hide_title: true
sidebar_label: Upload File from Shipyard to Notion Database
description: Information about Shipyard's low-code Notion Upload File from Shipyard to Notion Database blueprint. Quickly upload a file to a Notion Database 
keywords:
    - notion
    - blueprint
    - template
---

# Notion - Upload File from Shipyard to Notion Database

## Overview
Quickly upload a file to a Notion Database. Unsupported Notion datatypes for upload are:
- Files
- People
- Rollup
- Relation
- Formula

When uploading a file to a database in Notion, you have two options from Shipyard: to replace an existing database or to append to an existing database. 

#### Replace
When the `Replace` insert method is selected, this will do one of two things: 1) create a new database or 2) overwrite an existing database. The inputs provided will determine the behaviour. For instance, if the `Database ID` is provided, the blueprint will attempt to overwrite that existing database. If the `Database ID` is not provided, the blueprint will attempt to create a new database, but in order to do so the `Page ID` of where the new database will live is required. 

#### Append
When the `Append` insert method is selected, the blueprint will attempt to add new rows to an existing database. In order to do so, the `Database ID` is required, failing to provide it will result in an error.


**NOTE** - existing schemas and datatypes are strictly enforced. If there is a mismatch in datatypes for data being loaded, it will fail.
## Variables

| Name               | Reference            | Type         | Required           | Default  | Options                                                                | Description                                                                                                                                                    |
|:-------------------|:---------------------|:-------------|:-------------------|:---------|:-----------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Access Token       | NOTION_ACCESS_TOKEN  | Password     | :white_check_mark: | -        | -                                                                      | The access token assigned to the integration created                                                                                                           |
| Database ID        | NOTION_DATABASE_ID   | Alphanumeric | :heavy_minus_sign: | -        | -                                                                      | The ID of the notion database found in the URL. Is necessary if `Append` is selected                                                                           |
| Page ID            | NOTION_PAGE_ID       | Alphanumeric | :heavy_minus_sign: | -        | -                                                                      | The parent page ID where the Database will reside. Is only necessary if `Replace` is selected and the database doesn't exist.                                  |
| Database Name      | NOTION_DATABASE_NAME | Alphanumeric | :heavy_minus_sign: | -        | -                                                                      | The optional name of the database to be created. If `Replace` is selected and the database doesn't exist, this will provide a name for the one that is created |
| Source File Name   | NOTION_FILE_NAME     | Alphanumeric | :heavy_minus_sign: | -        | -                                                                      | The name of the file to load to Notion                                                                                                                         |
| Source Folder Name | NOTION_FOLDER_NAME   | Alphanumeric | :heavy_minus_sign: | -        | -                                                                      | The optional name of the folder containing the file to load to Notion                                                                                          |
| Insert Method      | NOTION_INSERT_METHOD | Select       | :heavy_minus_sign: | `append` | Append: `append`<br></br><br></br>Replace: `replace`<br></br><br></br> | The option to overwrite an existing database, or append additional rows                                                                                        |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Notion - Upload File from Shipyard to Notion Database
    inputs:
        NOTION_ACCESS_TOKEN: null  ## REQUIRED
        NOTION_DATABASE_ID: null
        NOTION_PAGE_ID: null
        NOTION_DATABASE_NAME: null
        NOTION_FILE_NAME: null
        NOTION_FOLDER_NAME: null
        NOTION_INSERT_METHOD: append
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
    -   204
    -   205
    -   206
    -   249

```
