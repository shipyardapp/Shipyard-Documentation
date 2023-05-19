---
id: hightouch-trigger-sync
title: Hightouch Template - Trigger Sync
hide_title: true
sidebar_label: Trigger Sync
description: Information about Shipyard's low-code Hightouch Trigger Sync blueprint. Immediately trigger a Hightouch sync. 
keywords:
    - hightouch
    - blueprint
    - template
---

# Hightouch - Trigger Sync

## Overview
Immediately execute a Hightouch snyc. The sync must already be set up within the Hightouch interface.

If a sync is already running for the specified connector, it will be stopped and restarted.

This Blueprint will only kick off the sync and will almost always return a status of success. It will not wait around to verify if the sync was successfully completed, but it will create and store the source ID used to `shipyard-artifacts/hightouch-blueprints/variables/sync_run_id.pickle`

**Recommended Setup:**
1. This Vessel should be immediately followed by a Vessel built from the Check Sync Status Blueprint so you can verify the status and completion of your sync.
2. The Hightouch Sync being triggered should be set to a *Manual* schedule to avoid conflicting runs.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| API Key | HIGHTOUCH_API_KEY  | Password |:white_check_mark: | `-` | - | The API Key associated with your Hightouch account. |
| Sync ID | HIGHTOUCH_SYNC_ID  | Alphanumeric |:white_check_mark: | `-` | - | The ID of the Hightouch sync you want to refresh. |
| Run a Full Resync? | HIGHTOUCH_FULL_RESYNC  | Boolean |:white_check_mark: | `False` | - | If TRUE, will rescync all of the rows in the query, rather than only the new ones. |


