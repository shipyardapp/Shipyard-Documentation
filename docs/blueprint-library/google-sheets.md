---
id: google-sheets
title: Google Sheets Blueprints
hide_title: true
sidebar_label: Google Sheets
description: Information about the Blueprint Library connections with Google Sheets.
keywords:
  - sheets
  - template
  - blueprint
---

# Google Sheets Blueprints

## Authorization

### Overview

In order to get started with the Google Sheets Blueprints, a service account with the necessary GCP permissions is required.

### Steps

- search "google sheets api"
- click "enable"
- click "credentials" in sidebar
- click "+ create credentials"
- click "service account" from options
- add "service account name" value
	- id generated (don't change)
- optionally add description
- click "create and continue"
- "select a role" dropdown
- find "basic"
- select "editor"
- click "continue"
- skip "grant users access to this service account"
- click "done"
- under "service accounts" table click new service account
- click "keys" table
- under "add key" dropdown
- click "create new key"
- for "key type" select "json"
- click "create"
- copy downloaded json file contents
- add to "service account" inputs field on all bigquery blueprints

## Download Sheet to CSV Blueprint

### Overview

The **Google Sheets - Download Sheet to CSV** Blueprint allows users to retrieve data from a Google Sheet as a CSV.

### Variables

| Variable Name | Description |
|:---|:---|
| **Google Sheet Name** | [REQUIRED] The name of the sheet to fetch data from |
| **Tab Name** | The name of the tab in the sheet to fetch data from - if left blank the default is the first tab |
| **Shared Drive Name** | The shared Drive name - should only be provided if the sheet exists in a shared Drive |
| **Local File Name** | [REQUIRED] The name for the file when fetched locally into the Shipyard Vessel |
| **Local Folder Name** | The folder name to store the fetched CSV file in |
| **Cell Range** | The range to fetch data from in the sheet - if left blank the full tab will be fetched |
| **Google Service Account Credentials** | [REQUIRED] The JSON from a Google Cloud Service account key - see **Authorization** above for more information |

## Upload CSV to Sheet Blueprint

### Overview

The **Google Sheets - Upload CSV to Sheet** Blueprint allows users to upload a CSV data into a Google Sheet.

### Variables

| Variable Name | Description |
|:---|:---|
| **Google Sheet Name** | [REQUIRED] The name of the sheet to put data into |
| **Tab Name** | The name of the tab in the sheet to insert data into - if left blank the default is the first tab |
| **Shared Drive Name** | The shared Drive name - should only be provided if the sheet exists in a shared Drive |
| **Local File Name** | [REQUIRED] The name for the CSV file to upload into the sheet |
| **Local Folder Name** | The folder name the CSV file may optionally be in |
| **Starting Cell** | The cell to start at when uploading data - if left blank the full tab will be uploaded |
| **Google Service Account Credentials** | [REQUIRED] The JSON from a Google Cloud Service account key - see **Authorization** above for more information |

## Clear Data from Sheet Blueprint

### Overview

The **Google Sheets - Clear Data from Sheet** Blueprint allows users to remove data from a Google Sheet.

### Variables

| Variable Name | Description |
|:---|:---|
| **Google Sheet Name** | [REQUIRED] The name of the sheet to clear data from |
| **Tab Name** | The name of the tab in the sheet to clear data from - if left blank the default is the first tab |
| **Shared Drive Name** | The shared Drive name - should only be provided if the sheet exists in a shared Drive |
| **Cell Range** | The range to clear data from in the sheet - if left blank the full tab will be cleared |
| **Google Service Account Credentials** | [REQUIRED] The JSON from a Google Cloud Service account key - see **Authorization** above for more information |

## Helpful Links

[Google Sheets API Python Documentation](https://developers.google.com/sheets/api/quickstart/python)
