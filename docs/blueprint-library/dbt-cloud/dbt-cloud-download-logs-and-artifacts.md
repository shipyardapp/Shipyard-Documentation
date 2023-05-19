---
id: dbt-cloud-download-logs-and-artifacts
title: dbt Cloud Template - Download Logs and Artifacts
hide_title: true
sidebar_label: Download Logs and Artifacts
description: Information about Shipyard's low-code dbt Cloud Download Logs and Artifacts blueprint. Download the logs and artifacts of a specific dbt Cloud run for transfer to another location. 
keywords:
    - dbt cloud
    - blueprint
    - template
---

# dbt Cloud - Download Logs and Artifacts

## Overview
Download all of the Logs and Artifacts created by a single run on dbt Cloud.

This Vessel should run immediately after a Vessel built with the _dbt Cloud - Check Run Status_ Blueprint. With this setup, you can leave the Run ID field blank and this Vessel will download the logs and artifacts of the recently completed run.

The steps of each run can be variable so we combine the log data from every step into one file.

- All of the debug logs will be stored under `shipyard-artifacts/dbtcloud-blueprints/logs/dbt.log`
- All of the console logs will be stored under `shipyard-artifacts/dbtcloud-blueprints/logs/dbt_console_output.txt`
- All of the artifacts will be stored as separate files located under `shipyard-artifacts/dbtcloud-blueprints/artifacts/` using their original name.
- The responses for this request will always be stored at `shipyard-artifacts/dbtcloud-blueprints/responses/run_RUNID_response.json` and  `shipyard-artifacts/dbtcloud-blueprints/responses/step_STEPID_response.json`


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Service Token | DBT_API_KEY  | Password |:white_check_mark: | `-` | - | Your unique service token for dbt Cloud. Instructions for how to get this token can be found in the authorization documentation. |
| Account ID | DBT_ACCOUNT_ID  | Alphanumeric |:white_check_mark: | `-` | - | Your unique Account ID, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/dashboard/ |
| Run ID | DBT_RUN_ID  | Alphanumeric |:heavy_minus_sign: | `-` | - | The ID of a specific job you want to run, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/runs/RUN_ID/. If left blank, will try to find the run ID from an "Execute Job" Vessel that ran upstream. |


