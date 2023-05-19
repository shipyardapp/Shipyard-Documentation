---
id: dbt-cloud-check-run-status
title: dbt Cloud Template - Check Run Status
hide_title: true
sidebar_label: Check Run Status
description: Information about Shipyard's low-code dbt Cloud Check Run Status blueprint. Check the status of a specific dbt Cloud run and return with the final status. 
keywords:
    - dbt cloud
    - blueprint
    - template
---

# dbt Cloud - Check Run Status

## Overview
Check for the status of a single run on dbt Cloud. The Vessel's exit code and status will match the status of the dbt Cloud run. 

- If the run is not completed, the Vessel will return an exit code of 255, an error.
- If the run has completed with an error, the Vessel will return an exit code of 1, an error.
- If the run has completed, but was canceled, the Vessel will return an exit code of 2, an error.
- If the run has completed successfully, the Vessel will return an exit code of 0, interpreted by Shipyard as Successful.

The response for this request will always be stored at _shipyard-artifacts/dbtcloud-blueprints/responses/run_RUNID_response.json_

**Recommended Setup:**

1. A Vessel built with this Blueprint should be paired with guardrail retries. This will allow the Vessel to continually check for status until a final result is found.

2. This Vessel should run immediately after a Vessel built with the _dbt Cloud - Execute Job_ Blueprint. With this setup, you can leave the Run ID field blank and this Vessel will check for the results of the recently created run.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Service Token | DBT_API_KEY  | Password |:white_check_mark: | `-` | - | Your unique service token for dbt Cloud. Instructions for how to get this token can be found in the authorization documentation. |
| Account ID | DBT_ACCOUNT_ID  | Alphanumeric |:white_check_mark: | `-` | - | Your unique Account ID, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/dashboard/ |
| Run ID | DBT_RUN_ID  | Alphanumeric |:heavy_minus_sign: | `-` | - | The ID of a specific job you want to run, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/runs/RUN_ID/. If left blank, will try to find the run ID from an "Execute Job" Vessel that ran upstream. |


