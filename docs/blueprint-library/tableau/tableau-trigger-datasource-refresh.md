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



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Username | TABLEAU_USERNAME | Alphanumeric | :white_check_mark: | - | - | Your personal username that you use to log in with Tableau. |
| Password | TABLEAU_PASSWORD | Password | :white_check_mark: | - | - | The password associated with the provided username. |
| Site ID | TABLEAU_SITE_ID | Alphanumeric | :white_check_mark: | - | - | Typically found in the URL as /site/YOURSITEID/ |
| Server URL | TABLEAU_SERVER_URL | Alphanumeric | :white_check_mark: | - | - | The scheme, subdomain, domain, and top-level domain (TLD) of your Tableau URL. |
| Data Source Name | TABLEAU_DATASOURCE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the published datasource you want to refresh. |


