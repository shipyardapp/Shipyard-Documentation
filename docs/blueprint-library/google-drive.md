---
id: google-drive
title: Google Drive Blueprints
hide_title: true
sidebar_label: Google Drive
description: Information about the Blueprint Library connections with Google Drive.
keywords:
  - drive
  - storage
  - template
  - blueprint
---

# Google Drive Blueprints

## Authorization

### Overview

In order to get started with the Google Drive Blueprints, a service account with the necessary GCP permissions is required.

### Steps

- search "google drive api"
- click "enable"
- click "create credentials"
- "select an api" dropdown
- select "google drive api"
- for "what data will you be accessing?" select "application data"
- for "Are you planning to use this API with Compute Engine, Kubernetes Engine, App Engine, or Cloud Functions?" select "No, I'm not using them"
- click "next"
- add "service account name" value
	- id generated (don't change)
- optionally add description
- click "create and continue"
- click "continue"
- skip "grant users access to this service account"
- click "done"
- under "service accounts" table click new service account
- click "keys" tabe
- under "add key" dropdown
- click "create new key"
- for "key type" select "json"
- click "create"
- copy downloaded json file contents
- add to "service account" inputs field on all bigquery blueprints

## Download Files Blueprint

### Overview

The **Google Drive - Download Files** Blueprint allows users to retrieve files stored in Google Drive.

### Variables

| Variable Name | Description |
|:---|:---|
| **Google Drive Folder Name** | The optional folder in Google Drive to fetch the file from |
| **Google Drive File Name** | [REQUIRED] Name for the file stored in Google Drive |
| **Google Drive File Name Match Type** | [REQUIRED] A dropdown selection of how to match the file name |
| **Local Folder Name** | The optional folder name to store the fetched file in |
| **Local File Name** | The optional name for the file when fetched locally into the Shipyard Vessel |
| **Shared Drive Name** | The optional shared Drive name - should only be provided if the file exists in a shared Drive |
| **Service Account** | [REQUIRED] The JSON from a Google Cloud Service account key - see **Authorization** above for more information |

## Upload Files Blueprint

### Overview

The **Google Drive - Upload Files** Blueprint allows users to put files into Google Drive.

### Variables

| Variable Name | Description |
|:---|:---|
| **Local File Name** | [REQUIRED] Name for the local file in the Shipyard Vessel to upload to Google Drive |
| **Local File Name Match Type** | [REQUIRED] A dropdown selection of how to match the file name |
| **Local Folder Name** | The optional folder name the file to upload is stored in |
| **Shared Drive Name** | The optional shared Drive name - should only be provided if the file will be uploaded to a shared Drive |
| **Google Drive Folder Name** | The optional folder in Google Drive to store the file in |
| **Google Drive File Name** | The optional name for the file stored in Google Drive |
| **Service Account** | [REQUIRED] The JSON from a Google Cloud Service account key - see **Authorization** above for more information |

## Helpful Links

[Google Drive API Python Documentation](https://developers.google.com/drive/api/v3/quickstart/python)
