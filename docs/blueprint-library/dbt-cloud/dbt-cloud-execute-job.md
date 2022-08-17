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

&gt; ## **First time using this Blueprint? Make sure you follow our [dbt Cloud authorization guide](https://www.shipyardapp.com/docs/blueprint-library/dbt-cloud/dbt-cloud-authorization/)**.

Execute a single job on dbt Cloud, creating a new run. The job must be set up within the dbt Cloud interface. Shipyard does not support sending override commands to the job at this time.

This Blueprint will only kick off the job and will always return a status of success. It will not wait around to verify if the created run was successfully completed, but it will create and store the generated run ID to _shipyard-artifacts/dbtcloud-blueprints/variables/run_id.pickle_

The &#34;cause&#34; for an execution triggered via Shipyard will always contain the following details:
- Fleet ID
- Vessel ID
- Vessel Log ID


The response for this request will always be stored at _shipyard-artifacts/dbtcloud-blueprints/responses/job_JOBID_response.json_



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Service Token | DBT_API_KEY | Password | :white_check_mark: | - | - | Your unique service token for dbt Cloud. Instructions for how to get this token can be found in the authorization documentation. |
| Account ID | DBT_ACCOUNT_ID | Alphanumeric | :white_check_mark: | - | - | Your unique Account ID, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/dashboard/ |
| Job ID | DBT_JOB_ID | Alphanumeric | :white_check_mark: | - | - | The ID of a specific job you want to run, found in the URL of dbt Cloud. https://cloud.getdbt.com/#/accounts/ACCOUNT_ID/projects/PROJECT_ID/jobs/JOB_ID/ |


## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets.md#yaml-editor).

```yaml
source:
  blueprint: dbt Cloud - Execute Job
  inputs:
    Service Token: null ## REQUIRED
    Account ID: null ## REQUIRED
    Job ID: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
    - "200"
    - "201"
    - "211"
    - "212"
```
