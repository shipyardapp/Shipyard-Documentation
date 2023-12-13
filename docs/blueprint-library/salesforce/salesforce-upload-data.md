---
id: salesforce-upload-data
title: Salesforce Template - Upload Data
hide_title: true
sidebar_label: Upload Data
description: Information about Shipyard's low-code Salesforce Upload Data blueprint. Uses credentials to access Salesforce, finds files in a folder, then inserts or updates their data. 
keywords:
    - salesforce
    - blueprint
    - template
---

# Salesforce - Upload Data

## Overview
## Preparation:

1. **Salesforce Credentials:**  
   Ensure you have your Salesforce login details at hand, including the access token, domain, username, password, security token, consumer key, and consumer secret. These are essential for securely connecting to your Salesforce account.

2. **Identify Your Data Files:**  
   Know the exact location and names of the files you wish to transfer. These could be in formats like CSV or Excel.

3. **Choose Your Action:**  
   Decide whether you're looking to add new entries to Salesforce or update existing ones. If updating, take note of the unique ID field for the records, which ensures the right data gets updated.

4. **Specify a Salesforce Object:**  
   Identify the type of Salesforce object (e.g., "Account") you aim to populate or update with your data.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | SALESFORCE_ACCESS_TOKEN  | Password |:heavy_minus_sign: | - | - | The token used to authenticate with Salesforce.	 |
| Domain URL | SALESFORCE_DOMAIN  | Alphanumeric |:white_check_mark: | - | - | Your Salesforce domain URL. Typically is before .my.salesforce.com |
| Username | SALESFORCE_USERNAME  | Alphanumeric |:heavy_minus_sign: | - | - | Your Salesforce login username. |
| Password | SALESFORCE_PASSWORD  | Password |:heavy_minus_sign: | - | - | Your Salesforce account password.	 |
| Security Token | SALESFORCE_SECURITY_TOKEN  | Password |:heavy_minus_sign: | - | - | Additional security token for Salesforce access.	 |
| Consumer Key	 | SALESFORCE_CONSUMER_KEY  | Alphanumeric |:heavy_minus_sign: | - | - | Key from your Salesforce connected app.	 |
| Consumer Secret	 | SALESFORCE_CONSUMER_SECRET  | Password |:heavy_minus_sign: | - | - | Secret associated with the consumer key.	 |
| Object Type | SALESFORCE_OBJECT_TYPE  | Alphanumeric |:white_check_mark: | `Account` | - | The type of Salesforce record you're updating. For example Account, Opportunity, Customer, etc. This name must match Salesforce's API Name from their object manager view. |
| Search Type | SALESFORCE_SOURCE_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact: `exact_match`<br></br><br></br>REGEX: `regex_match`<br></br><br></br> | Method for matching the source file name. Choose 'Exact' for exact names or 'Regex' for regular expression patterns. |
| Data File Location	 | SALESFORCE_SOURCE_FOLDER_NAME  | Alphanumeric |:white_check_mark: | `.` | - | Directory where your data files are stored.	 |
| Data Filename or Pattern	 | SALESFORCE_SOURCE_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | Exact name or pattern to identify files for import.	 |
| Action | SALESFORCE_IMPORT_OPERATION  | Select |:white_check_mark: | `insert` | Insert: `insert`<br></br><br></br>Upsert: `upsert`<br></br><br></br>Update: `update`<br></br><br></br>Delete: `delete`<br></br><br></br> | Choose to add new data or update existing data.	 |
| Unique ID Field (if updating) | SALESFORCE_ID_FIELD  | Alphanumeric |:heavy_minus_sign: | - | - | The field that uniquely identifies a record for updates.	 |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Salesforce - Upload Data
  inputs:
    SALESFORCE_ACCESS_TOKEN: null
    SALESFORCE_DOMAIN: null  ## REQUIRED
    SALESFORCE_USERNAME: null
    SALESFORCE_PASSWORD: null
    SALESFORCE_SECURITY_TOKEN: null
    SALESFORCE_CONSUMER_KEY: null
    SALESFORCE_CONSUMER_SECRET: null
    SALESFORCE_OBJECT_TYPE: Account ## REQUIRED
    SALESFORCE_SOURCE_MATCH_TYPE: exact_match ## REQUIRED
    SALESFORCE_SOURCE_FOLDER_NAME: . ## REQUIRED
    SALESFORCE_SOURCE_FILE_NAME: null ## REQUIRED
    SALESFORCE_IMPORT_OPERATION: insert ## REQUIRED
    SALESFORCE_ID_FIELD: null
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '102'
    - '103'
    - '106'
    - '201'
    - '202'
    - '206'

```
