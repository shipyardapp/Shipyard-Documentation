---
id: dbt-cloud-execute-job-and-download-results
title: dbt Cloud Template - Execute Job and Download Results
hide_title: true
sidebar_label: Execute Job and Download Results
description: Information about Shipyard's low-code dbt Cloud Execute Job and Download Results blueprint. Execute an existing job in the dbt Cloud interface, wait for it to finish, and download the resulting logs and artifacts. 
keywords:
    - dbt cloud
    - blueprint
    - template
---

# dbt Cloud - Execute Job and Download Results

## Overview
A Vessel built with this Blueprint will kick off a single job on dbt Cloud and check for the status every 30 seconds. Once the status is confirmed to be completed, Shipyard will attempt to download all of the logs and artifacts.

The final status of this Vessel in Shipyard will reflect the status of the run in dbt Cloud.

The "cause" for an execution triggered via Shipyard will always contain the following details:
- Fleet ID
- Vessel ID
- Vessel Log ID

**Note:** This is considered an "all-in-one" Blueprint for the other 3 dbt Cloud Blueprints. By using this Blueprint, you will accumulate runtime as the Vessel continuously waits for the job to be completed. The tradeoff is that results may be quicker and the setup/complexity is less.

If you want to reduce the overall runtime you're billed for, you will need to instead set up a Fleet with Vessels built with these blueprints in this order:

Execute Job -> Check Run Status -> Download Artifacts & Logs

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Service Token | DBT_API_KEY  | Password |:white_check_mark: | `-` | - | Your unique service token for dbt Cloud. Instructions for how to get this token can be found in the authorization documentation. |
| Account ID | DBT_ACCOUNT_ID  | Alphanumeric |:white_check_mark: | `-` | - | Your unique Account ID, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/dashboard/ |
| Job ID | DBT_JOB_ID  | Alphanumeric |:white_check_mark: | `-` | - | The ID of a specific job you want to run, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/jobs/JOB_ID/ |
| Download Artifacts? | DBT_DOWNLOAD_ARTIFACTS  | Boolean |:white_check_mark: | `"true"` | - | Determines if the artifacts from the run that was generated will be downloaded. Checked by default. |
| Download Logs? | DBT_DOWNLOAD_LOGS  | Boolean |:white_check_mark: | `"true"` | - | Determines if the logs from the run that was generated will be downloaded. Checked by default. |


