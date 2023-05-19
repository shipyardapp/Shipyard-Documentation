---
id: domo-refresh-dataset
title: Domo Template - Refresh Dataset
hide_title: true
sidebar_label: Refresh Dataset
description: Information about Shipyard's low-code Domo Refresh Dataset blueprint. Manually trigger a refresh of a dataset in Domo. 
keywords:
    - domo
    - blueprint
    - template
---

# Domo - Refresh Dataset

## Overview
Manually trigger a refresh of a dataset in Domo.

Authentication can be provided with either an access token or a combination of username and password. If both are provided, access token will be preferred.

This Blueprint will only kick off the refresh and will almost always return a status of success. It will not wait around to verify if the created refresh job was successfully completed, but it will create and store the generated job ID to shipyard-artifacts/domo-blueprints/variables/job_id.pickle

**Recommended Setup:**

1. A Vessel built with the _Domo - Check Refresh Status_ Blueprint should be run immediately after this Vessel. This will ensure that you build your Fleet to act on the final status of your refresh.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | DOMO_ACCESS_TOKEN  | Password |:heavy_minus_sign: | `-` | - | Access token to authenticate with Domo. Used in place of username/password. |
| Email | DOMO_EMAIL  | Alphanumeric |:heavy_minus_sign: | `-` | - | Email that you use to log into Domo. Used with the password for authentication as an alternative method to providing an access token. |
| Password | DOMO_PASSWORD  | Password |:heavy_minus_sign: | `-` | - | Password associated to the email used to sign into Domo. Used with the email for authentication as an alternative method to providing an access token. |
| Client ID | DOMO_CLIENT_ID  | Alphanumeric |:white_check_mark: | `-` | - | Client ID of your organization's Domo App. |
| Secret | DOMO_SECRET_KEY  | Password |:white_check_mark: | `-` | - | Secret associated with the provided Client ID. |
| Domo Instance | DOMO_INSTANCE  | Alphanumeric |:white_check_mark: | `-` | - | Typically found in the URL structure as https://DOMOINSTANCE.domo.com |
| Dataset ID | DOMO_DATASET_ID  | Alphanumeric |:white_check_mark: | `-` | - | UUID of the dataset you want to download, typically found at the end of the URL. |


