---
id: dbt-cloud-execute-job
title: dbt Cloud Template - Execute Job
hide_title: true
sidebar_label: Execute Job
description: Information about Shipyard's low-code dbt Cloud Execute Job blueprint. Execute an existing job in the dbt Cloud interface without waiting for results. 
keywords:
    - dbt cloud
    - blueprint
    - template
---

# dbt Cloud - Execute Job

## Overview
Execute a single job on dbt Cloud, creating a new run. The job must be set up within the dbt Cloud interface. Shipyard does not support sending override commands to the job at this time.

This Blueprint will only kick off the job and will always return a status of success. It will not wait around to verify if the created run was successfully completed, but it will create and store the generated run ID to _shipyard-artifacts/dbtcloud-blueprints/variables/run_id.pickle_

The "cause" for an execution triggered via Shipyard will always contain the following details:
- Fleet ID
- Vessel ID
- Vessel Log ID


The response for this request will always be stored at _shipyard-artifacts/dbtcloud-blueprints/responses/job_JOBID_response.json_


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Service Token | DBT_API_KEY  | Password |:white_check_mark: | `-` | - | Your unique service token for dbt Cloud. Instructions for how to get this token can be found in the authorization documentation. |
| Account ID | DBT_ACCOUNT_ID  | Alphanumeric |:white_check_mark: | `-` | - | Your unique Account ID, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/dashboard/ |
| Job ID | DBT_JOB_ID  | Alphanumeric |:white_check_mark: | `-` | - | The ID of a specific job you want to run, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/jobs/JOB_ID/ |


