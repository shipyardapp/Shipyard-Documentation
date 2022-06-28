---
id: google-cloud-storage-download-files
title: Google Cloud Storage Template - Download Files
hide_title: true
sidebar_label: Download Files
description: Information about Shipyard's low-code Google Cloud Storage Download Files blueprint. Quickly export one or more files a Google Cloud Storage (GCS) bucket. Once the files have downloaded, transfer them to another service or run another Vessel against the data.
keywords:
    - google cloud storage
    - blueprint
    - template
---

# Google Cloud Storage - Download Files

## Overview

&gt; ## **First time using this Blueprint? Make sure you follow our [Cloud Storage authorization guide](https://www.shipyardapp.com/docs/blueprint-library/google-cloud-storage/google-cloud-storage-authorization/)**.

Quickly export one or more files from a Google Cloud Storage (GCS) bucket. The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Bucket Name | GCS_BUCKET_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the GCS bucket to fetch the file from. |
| GCS Folder Name | GCS_SOURCE_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Name of the folder where the file is stored in the GCS Bucket. If left blank, looks in the root directory.  |
| GCS File Name Match Type | GCS_SOURCE_FILE_NAME_MATCH_TYPE | Select | :white_check_mark: | `exact_match` | Exact Match: `exact_match`<br></br><br></br>Regex Match: `regex_match` | Determines if the text in &#34;GCS File Name&#34; will look for one file with exact match, or multiple files using regex. |
| GCS File Name | GCS_SOURCE_FILE_NAME | Alphanumeric | :white_check_mark: | - | - | Name of the target file in the GCS bucket. Can be regex if &#34;Match Type&#34; is set accordingly. |
| Local Folder Name | GCS_DESTINATION_FOLDER_NAME | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| Local File Name | GCS_DESTINATION_FILE_NAME | Alphanumeric | :heavy_minus_sign: | - | - | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


