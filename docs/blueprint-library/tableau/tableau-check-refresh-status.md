---
id: tableau-check-refresh-status
title: Tableau Template - Check Refresh Status (Deprecated)
hide_title: true
sidebar_label: Check Refresh Status (Deprecated)
description: Information about Platform's low-code Tableau Check Refresh Status (Deprecated) blueprint. Check the job status of a recent workbook or datasource refresh.
keywords:
  - tableau
  - blueprint
  - template
---

# Tableau - Check Refresh Status (Deprecated)



## Overview

This Blueprint has been deprecated. Please use the vendor's "Trigger" Blueprint and set the "Wait for Completion" option to "True". Using this new option is free, more stable, and will complete faster. Read more about this change [here](https://www.shipyardapp.com/blog/orchestrate-data-tools-free).

Check the job status of a workbook or datasource that has recently been refreshed in Tableau. 

**Recommended Setup:**

1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.

2. This Vessel should run immediately after a Vessel built with the _Tableau - Trigger Workbook/Datasource Refresh_ Blueprint. With this setup, you can leave the Job ID field blank and this Vessel will check for the results of the recently created job.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Authentication Method | TABLEAU_SIGN_IN_METHOD | Select | :white_check_mark: | `username_password` | Username & Password: `username_password`<br></br><br></br>Access Token: `access_token`<br></br><br></br> | Determine which authentication method to use when connecting to Tableau. |
| Username or Access Token Name | TABLEAU_USERNAME | Alphanumeric | :white_check_mark: | - | - | Your personal username or the name of the access token that you use to log in with Tableau. |
| Password or Access Token | TABLEAU_PASSWORD | Password | :white_check_mark: | - | - | The password associated with the provided username OR the access token associated with the provided access token name. |
| Server URL | TABLEAU_SERVER_URL | Alphanumeric | :white_check_mark: | - | - | The scheme, subdomain, domain, and top-level domain (TLD) of your Tableau URL. |
| Site ID | TABLEAU_SITE_ID | Alphanumeric | :white_check_mark: | - | - | Typically found in the URL as /site/YOURSITEID/ |
| Job ID | TABLEAU_JOB_ID | Alphanumeric | :heavy_minus_sign: | - | - | The ID of a specific job you check the status of. If left blank, will try to find the job ID from an "Refresh Workbook/Datasource" Vessel that ran upstream. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: Tableau - Check Refresh Status (Deprecated)
  inputs:
    TABLEAU_SIGN_IN_METHOD: username_password  ## REQUIRED
    TABLEAU_USERNAME: null ## REQUIRED
    TABLEAU_PASSWORD: null ## REQUIRED
    TABLEAU_SERVER_URL: null ## REQUIRED
    TABLEAU_SITE_ID: null ## REQUIRED
    TABLEAU_JOB_ID: null
  type: BLUEPRINT
guardrails:
  retry_count: 12
  retry_wait: 0h5m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '201'
    - '202'
    - '203'
    - '204'
    - '205'
    - '210'
    - '211'
 ```


