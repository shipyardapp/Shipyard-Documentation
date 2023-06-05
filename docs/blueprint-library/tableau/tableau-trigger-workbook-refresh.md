---
id: tableau-trigger-workbook-refresh
title: Tableau Template - Trigger Workbook Refresh
hide_title: true
sidebar_label: Trigger Workbook Refresh
description: Information about Shipyard's low-code Tableau Trigger Workbook Refresh blueprint. Trigger a manual refresh of a specified workbook in Tableau. 
keywords:
    - tableau
    - blueprint
    - template
---

# Tableau - Trigger Workbook Refresh

## Overview
Manually trigger a refresh of a workbook in Tableau.

This Blueprint will only kick off the refresh and will almost always return a status of success. It will not wait around to verify if the created refresh job was successfully completed, but it will create and store the generated job ID to _shipyard-artifacts/tableau-blueprints/variables/job_id.pickle_

**Recommended Setup:**

1. A Vessel built with the _Tableau - Check Refresh Status_ Blueprint should be run immediately after this Vessel. This will ensure that you build your Fleet to act on the final status of your refresh.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Authentication Method | TABLEAU_SIGN_IN_METHOD  | Select |:white_check_mark: | `username_password` | Username & Password: `username_password`<br></br><br></br>Access Token: `access_token`<br></br><br></br> | Determine which authentication method to use when connecting to Tableau. |
| Username or Access Token Name | TABLEAU_USERNAME  | Alphanumeric |:white_check_mark: | - | - | Your personal username or the name of the access token that you use to log in with Tableau. |
| Password or Access Token | TABLEAU_PASSWORD  | Password |:white_check_mark: | - | - | The password associated with the provided username OR the access token associated with the provided access token name. |
| Server URL | TABLEAU_SERVER_URL  | Alphanumeric |:white_check_mark: | - | - | The scheme, subdomain, domain, and top-level domain (TLD) of your Tableau URL. |
| Site ID | TABLEAU_SITE_ID  | Alphanumeric |:white_check_mark: | - | - | Typically found in the URL as /site/YOURSITEID/ |
| Project Name | TABLEAU_PROJECT_NAME  | Alphanumeric |:white_check_mark: | - | - | The project name that the Datasource belongs to. |
| Workbook Name | TABLEAU_WORKBOOK_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the published workbook you want to refresh. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: Tableau - Trigger Workbook Refresh
  inputs:
    TABLEAU_SIGN_IN_METHOD: username_password ## REQUIRED
    TABLEAU_USERNAME: null ## REQUIRED
    TABLEAU_PASSWORD: null ## REQUIRED
    TABLEAU_SERVER_URL: null ## REQUIRED
    TABLEAU_SITE_ID: null ## REQUIRED
    TABLEAU_PROJECT_NAME: null ## REQUIRED
    TABLEAU_WORKBOOK_NAME: null ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "200-205"
```
