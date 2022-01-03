---
id: google-sheets-upload-csv-to-sheet
title: Google Sheets Template - Upload CSV to Sheet
hide_title: true
sidebar_label: Upload CSV to Sheet
description: Information about Shipyard's low-code Google Sheets Upload CSV to Sheet blueprint. Easily import your data into a Google Sheet so your teams can collaboratively edit it. Create or update worksheets at scale.
keywords:
    - google sheets
    - blueprint
    - template
---

# Google Sheets - Upload CSV to Sheet

## Overview

Easily import data from a single CSV into a single Google Sheet tab. The Google Sheet must already exist for the data to be uploaded.

Only one CSV file can be uploaded at a time, since the upload process requires a static starting cell to determine where to place the data. If you leave the starting cell blank, data will be inserted starting at cell A1 and expanding in width and depth as needed.

If you leave the tab name blank, the data will be uploaded into the first tab. If you specify a Tab Name that doesn&#39;t exist, it will be created.

This Blueprint is still subject to [Google&#39;s limitations](https://support.google.com/drive/answer/37603) which restrict the number of cells, number of columns, and number of characters per cell in a spreadsheet.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Google Sheet Name or ID | destination_file_name | Alphanumeric | :white_check_mark: | - | - | Name or ID of the sheet to put data into. |
| Tab Name | tab_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the tab in the sheet to upload data tp. This field is case sensitive. If left blank, data will be put into the first tab. |
| Shared Drive Name | drive | Alphanumeric | :heavy_minus_sign: | - | - | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Local File Name | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name of the target CSV file on Shipyard to be uploaded to the sheet.  |
| Local Folder Name | source_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| Starting Cell | starting_cell | Alphanumeric | :heavy_minus_sign: | - | - | Cell to start at when uploading data. If left blank, will start at cell A1. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


