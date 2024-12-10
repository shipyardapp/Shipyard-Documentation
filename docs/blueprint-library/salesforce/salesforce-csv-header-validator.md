---
id: salesforce-csv-header-validator
title: Salesforce Template - CSV Header Validator
hide_title: true
sidebar_label: CSV Header Validator
description: Information about Platform's low-code Salesforce CSV Header Validator blueprint. Easily validate CSV headers against Salesforce properties and fetch Salesforce field details. 
keywords:
    - salesforce
    - blueprint
    - template
---

# Salesforce - CSV Header Validator

## Overview
Before you begin, ensure you're equipped with the essentials:

### 1. **Inputs Ready**
To use this blueprint, you'll need:
- **Salesforce Credentials**: 
  - Access token
  - Consumer key
  - Consumer secret
  - Username
  - Password
  - Security token
  - Domain
- **CSV File**: Path to the CSV you want to validate.
- **Object Type**: Salesforce object type (e.g., Account, Contact) to validate against.
- **Field Names**: List of expected field names.

### 2. **Understanding the Blueprint Flow**
- After providing the inputs, the blueprint authenticates with Salesforce.
- It fetches properties of the Salesforce object type.
- If a CSV is provided, it validates its headers against Salesforce properties. If any mismatches are found, it'll highlight them.
- Without a CSV, it displays the Salesforce object type's properties.

### 3. **Salesforce Properties Insight**
The blueprint offers insights into Salesforce properties. For each property, you get:
- Name
- Label
- Data type
- Attributes: Creatable, Updateable, Nillable, Unique status.

### 4. **Error Handling**
The blueprint has built-in error handling. If issues arise (like authentication errors or file not found), it provides clear feedback.

### 5. **Maximizing Blueprint Utility**
While its primary function is CSV header validation, it also helps you understand Salesforce properties. This understanding is key to structuring your CSVs effectively for future transfers.

In short, this blueprint ensures your CSV data aligns with Salesforce, paving the way for smooth data transfers.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Domain URL | SALESFORCE_DOMAIN  | Alphanumeric |:white_check_mark: | - | - | The domain used to access your Salesforce instance. |
| Access Token | SALESFORCE_ACCESS_TOKEN  | Password |:heavy_minus_sign: | - | - | Token provided by Salesforce to securely authenticate and access their API. |
| Consumer Key | SALESFORCE_CONSUMER_KEY  | Alphanumeric |:heavy_minus_sign: | - | - | Unique key to identify and authenticate your application's integration. |
| Consumer Secret | SALESFORCE_CONSUMER_SECRET  | Password |:heavy_minus_sign: | - | - | Secret key used in tandem with the consumer key to authenticate your application. |
| Username | SALESFORCE_USERNAME  | Alphanumeric |:heavy_minus_sign: | - | - | Your Salesforce account's username. |
| Password | SALESFORCE_PASSWORD  | Password |:heavy_minus_sign: | - | - | Your Salesforce account's password. |
| Security Token | SALESFORCE_SECURITY_TOKEN  | Password |:heavy_minus_sign: | - | - | Additional security token provided by Salesforce to enhance protection. |
| CSV Filename | SALESFORCE_CSV_FILE  | Alphanumeric |:heavy_minus_sign: | - | - | The name/path of the CSV file you want to validate against Salesforce properties. |
| Object Type | SALESFORCE_OBJECT_TYPE  | Alphanumeric |:white_check_mark: | - | - | The specific Salesforce object type (e.g., Account, Customer) you want to validate against. This name must match Salesforce's API Name from their object manager view. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Salesforce - CSV Header Validator
  inputs:
    SALESFORCE_DOMAIN: null  ## REQUIRED
    SALESFORCE_ACCESS_TOKEN: null
    SALESFORCE_CONSUMER_KEY: null
    SALESFORCE_CONSUMER_SECRET: null
    SALESFORCE_USERNAME: null
    SALESFORCE_PASSWORD: null
    SALESFORCE_SECURITY_TOKEN: null
    SALESFORCE_CSV_FILE: null
    SALESFORCE_OBJECT_TYPE: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '102'
    - '103'
    - '201'
    - '202'
    - '206'

```
