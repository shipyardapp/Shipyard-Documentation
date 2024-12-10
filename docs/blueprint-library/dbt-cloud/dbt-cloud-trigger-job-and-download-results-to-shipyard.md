---
id: dbt-cloud-trigger-job-and-download-results-to-shipyard
title: dbt Cloud Template - Trigger Job and Download Results to Platform
hide_title: true
sidebar_label: Trigger Job and Download Results to Platform
description: Information about Platform's low-code dbt Cloud Trigger Job and Download Results to Platform blueprint. Execute an existing job in the dbt Cloud interface, wait for it to finish, and download the resulting logs and artifacts.
keywords:
  - dbt cloud
  - blueprint
  - template
---

# dbt Cloud - Trigger Job and Download Results to Platform

## Overview

A Vessel built with this Blueprint will kick off a single job on dbt Cloud and check for the status every 60 seconds. Once the status is confirmed to be completed, Platform will attempt to download all of the logs and artifacts.

The final status of this Vessel in Platform will reflect the status of the run in dbt Cloud.

The "cause" for an execution triggered via Platform will always contain the following details:
- Fleet ID
- Vessel ID
- Vessel Log ID

**Note:** This is considered an "all-in-one" Blueprint for the other 2 dbt Cloud Blueprints. This blueprint will not incur any billable runtime.

## Variables

| Name | Reference | Type | Required | Default | Options | Description             |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------------------|
| Service Token | DBT_API_KEY | Password | :white_check_mark: | - | - | Your unique service token for dbt Cloud. Instructions for how to get this token can be found in the authorization documentation. |
| Account ID | DBT_ACCOUNT_ID | Alphanumeric | :white_check_mark: | - | - | Your unique Account ID, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/dashboard/ |
| Job ID | DBT_JOB_ID | Alphanumeric | :white_check_mark: | - | - | The ID of a specific job you want to run, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/jobs/JOB_ID/ |
| Download Artifacts? | DBT_DOWNLOAD_ARTIFACTS | Boolean | :white_check_mark: | `"true"` | - | Determines if the artifacts from the run that was generated will be downloaded. Checked by default. |
| Download Logs? | DBT_DOWNLOAD_LOGS | Boolean | :white_check_mark: | `"true"` | - | Determines if the logs from the run that was generated will be downloaded. Checked by default. |




## YAML

Below is the YAML template for this Blueprint and can be used in the
Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: dbt Cloud - Trigger Job and Download Results to Shipyard
  inputs:
    DBT_API_KEY: null  ## REQUIRED
    DBT_ACCOUNT_ID: null ## REQUIRED
    DBT_JOB_ID: null ## REQUIRED
    DBT_DOWNLOAD_ARTIFACTS: '"true"' ## REQUIRED
    DBT_DOWNLOAD_LOGS: '"true"' ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0h0m0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - '200'
    - '201'
    - '211'
    - '212'
 ```


