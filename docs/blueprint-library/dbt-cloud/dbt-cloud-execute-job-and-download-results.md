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

The &#34;cause&#34; for an execution triggered via Shipyard will always contain the following details:
- Fleet ID
- Vessel ID
- Vessel Log ID

**Note:** This is considered an &#34;all-in-one&#34; Blueprint for the other 3 dbt Cloud Blueprints. By using this Blueprint, you will accumulate runtime as the Vessel continuously waits for the job to be completed. The tradeoff is that results may be quicker and the setup/complexity is less.

If you want to reduce the overall runtime you&#39;re billed for, you will need to instead set up a Fleet with Vessels built with these blueprints in this order:

Execute Job -&gt; Check Run Status -&gt; Download Artifacts &amp; Logs



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Service Token | API_KEY | Password | :white_check_mark: | - | - | - |
| Account ID | ACCOUNT_ID | Alphanumeric | :white_check_mark: | - | - | - |
| Job ID | JOB_ID | Alphanumeric | :white_check_mark: | - | - | - |
| Download Artifacts? | DOWNLOAD_ARTIFACTS | Boolean | :white_check_mark: | true | - | - |
| Download Logs? | DOWNLOAD_LOGS | Boolean | :white_check_mark: | true | - | - |


