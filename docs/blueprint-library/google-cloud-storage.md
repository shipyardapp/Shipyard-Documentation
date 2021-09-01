---
id: google-cloud-storage
title: Google Cloud Storage Blueprints
hide_title: true
sidebar_label: Google Cloud Storage
description: Information about the Blueprint Library connections with Google Cloud Storage.
keywords:
  - google cloud storage
  - gcs
  - template
  - blueprint
---

# Google Cloud Storage Blueprints

## Authorization

### Overview

In order to get started with the Google Cloud Storage Blueprints, a service account with the necessary GCP permissions is required.

### Steps

- iam & admin in sidebar
- click "service accounts" in sidebar
- click "+ create service account" header
- add "service account name" value
	- id generated (don't change)
- optionally add description
- click "create and continue"
- "select a role" dropdown
- find "cloud storage"
- select "storage object admin"
- click "continue"
- skip "grant users access to this service account"
- click "done"
- find new service account in table
- under "actions" column select "manage keys"
- under "add key" dropdown
- click "create new key"
- for "key type" select "json"
- click "create"
- copy downloaded json file contents
- add to "service account" inputs field on all bigquery blueprints

## Download Files Blueprint

### Overview

The **Google Cloud Storage - Download Files** Blueprint allows users to retrieve files stored in Google Cloud Storage (GCS).

### Variables

| Variable Name | Description |
|:---|:---|
| **Bucket Name** | [REQUIRED] Name of the GCS bucket to fetch the file from |
| **GCS Folder Name** | The optional folder in the GCS bucket to fetch the file from |
| **GCS File Name Match Type** | [REQUIRED] A dropdown selection of how to match the file name |
| **GCS File Name** | [REQUIRED] Name for the file stored in GCS |
| **Local Folder Name** | The optional folder name to store the fetched file in |
| **Local File Name** | [REQUIRED] Name for the file when fetched locally into the Shipyard Vessel |
| **Service Account** | [REQUIRED] The JSON from a Google Cloud Service account key - see **Authorization** above for more information |

## Upload Files Blueprint

### Overview

The **Google Cloud Storage - Upload Files** Blueprint allows users to put files into Google Cloud Storage (GCS) from the local Shipyard Vessel.

### Variables

| Variable Name | Description |
|:---|:---|
| **Local Folder Name** | The optional folder name to store the fetched file in |
| **Local File Name Match Type** | [REQUIRED] A dropdown selection of how to match the file name |
| **Local File Name** | [REQUIRED] Name for the file when fetched locally into the Shipyard Vessel |
| **GCS Bucket Name** | [REQUIRED] Name of the GCS bucket to fetch the file from |
| **GCS Folder Name** | The optional folder in the GCS bucket to fetch the file from |
| **GCS File Name** | [REQUIRED] Name for the file stored in GCS |
| **Service Account** | [REQUIRED] The JSON from a Google Cloud Service account key - see **Authorization** above for more information |

## Helpful Links

[Google Cloud Storage Python Documentation](https://cloud.google.com/storage/docs/reference/libraries#client-libraries-install-python)
