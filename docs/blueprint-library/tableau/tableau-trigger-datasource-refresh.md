---
id: tableau-trigger-datasource-refresh
title: Tableau Template - Trigger Datasource Refresh
hide_title: true
sidebar_label: Trigger Datasource Refresh
description: Information about Shipyard's low-code Tableau Trigger Datasource Refresh blueprint. Trigger a manual refresh of a specified datasource in Tableau.
keywords:
    - tableau
    - blueprint
    - template
---

# Tableau - Trigger Datasource Refresh

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [Tableau authorization guide](https://www.shipyardapp.com/docs/blueprint-library/tableau/tableau-authorization/)**.

Manually trigger a refresh of a datasource in Tableau.

This Blueprint will only kick off the refresh and will almost always return a status of success. It will not wait around to verify if the created refresh job was successfully completed, but it will create and store the generated job ID to _shipyard-artifacts/tableau-blueprints/variables/job_id.pickle_

**Recommended Setup:**

1. A Vessel built with the _Tableau - Check Refresh Status_ Blueprint should be run immediately after this Vessel. This will ensure that you build your Fleet to act on the final status of your refresh.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Authentication Method | TABLEAU_SIGN_IN_METHOD | Select | :white_check_mark: | `username_password` | Username & Password: `username_password`<br></br><br></br>Access Token: `access_token` | Determine which authentication method to use when connecting to Tableau. |
| Username or Access Token Name | TABLEAU_USERNAME | Alphanumeric | :white_check_mark: | - | - | Your personal username or the name of the access token that you use to log in with Tableau. |
| Password or Access Token | TABLEAU_PASSWORD | Password | :white_check_mark: | - | - | The password associated with the provided username OR the access token associated with the provided access token name. |
| Server URL | TABLEAU_SERVER_URL | Alphanumeric | :white_check_mark: | - | - | The scheme, subdomain, domain, and top-level domain (TLD) of your Tableau URL. |
| Site ID | TABLEAU_SITE_ID | Alphanumeric | :white_check_mark: | - | - | Typically found in the URL as /site/YOURSITEID/ |
| Project Name | TABLEAU_PROJECT_NAME | Alphanumeric | :white_check_mark: | - | - | The project name that the Datasource belongs to. |
| Datasource Name | TABLEAU_DATASOURCE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the published datasource you want to refresh. |


