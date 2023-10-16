---
id: salesforce-download-data
title: Salesforce Template - Download Data
hide_title: true
sidebar_label: Download Data
description: Information about Shipyard's low-code Salesforce Download Data blueprint. Export specified Salesforce object data to a CSV file. 
keywords:
    - salesforce
    - blueprint
    - template
---

# Salesforce - Download Data

## Overview
Before using the blueprint, gather the following:

**Salesforce Credentials:** Including the access token, consumer key, consumer secret, username, password, security token, and domain.
CSV File Parameters:
Desired filename for the resulting CSV.
List of field names you want to export.
The Salesforce object type you're exporting from (e.g., Account, Contact).

**Workflow:**
The blueprint first establishes a connection with Salesforce using the provided credentials.
It then requests the data from the specified Salesforce object and fields.
The extracted data is saved into a CSV file, which will be named as per your input and given a ".csv" extension if not already present.
Error Handling:

Should there be any issues with authentication or data extraction, the blueprint will provide clear feedback, ensuring you're always informed.

## Variables

| Name | Reference | Type | Required           | Default | Options | Description |
|:-----|:----------|:-----|:-------------------|:--------|:--------|:------------|
| Domain | SALESFORCE_DOMAIN  | Alphanumeric | :heavy_minus_sign: | - | - | Your Salesforce domain URL. Typically is before .my.salesforce.com |
| Access Token | SALESFORCE_ACCESS_TOKEN  | Password | :heavy_minus_sign: | - | - | Token provided by Salesforce to securely authenticate and access their API. |
| Consumer Key | SALESFORCE_CONSUMER_KEY  | Alphanumeric | :heavy_minus_sign: | - | - | Unique key to identify and authenticate your application's integration. |
| Consumer Secret | SALESFORCE_CONSUMER_SECRET  | Password | :heavy_minus_sign: | - | - | Secret key used in tandem with the consumer key to authenticate your application. |
| Username | SALESFORCE_USERNAME  | Alphanumeric | :heavy_minus_sign: | - | - | Your Salesforce account's username. |
| Password | SALESFORCE_PASSWORD  | Password | :heavy_minus_sign: | - | - | Your Salesforce account's password. |
| Security Token | SALESFORCE_SECURITY_TOKEN  | Password | :heavy_minus_sign: | - | - | Additional security token provided by Salesforce to enhance protection. |
| Output Filename | SALESFORCE_FILENAME  | Alphanumeric | :white_check_mark: | - | - | The desired name/path for the resulting CSV file. |
| Desired Field Names | SALESFORCE_FIELD_NAMES  | Alphanumeric | :heavy_minus_sign: | - | - | List of field names from the Salesforce object you want to export. |
| Object Type | SALESFORCE_OBJECT_TYPE  | Alphanumeric | :white_check_mark: | - | - | The specific Salesforce object type (e.g., Account, Customer) you want to export data from. This name must match Salesforce's API Name from their object manager view. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
    blueprint: Salesforce - Download Data
    inputs:
        SALESFORCE_ACCESS_TOKEN: null
        SALESFORCE_CONSUMER_KEY: null
        SALESFORCE_CONSUMER_SECRET: null
        SALESFORCE_USERNAME: null
        SALESFORCE_PASSWORD: null
        SALESFORCE_SECURITY_TOKEN: null
        SALESFORCE_DOMAIN: null
        SALESFORCE_FILENAME: null
        SALESFORCE_FIELD_NAMES: null
        SALESFORCE_OBJECT_TYPE: null
    type: BLUEPRINT
guardrails:
    retry_count: 1
    retry_wait: 0h0m0s
    runtime_cutoff: 1h0m0s
    exclude_exit_code_ranges:
    -   102
    -   103
    -   201
    -   202
    -   206

```
