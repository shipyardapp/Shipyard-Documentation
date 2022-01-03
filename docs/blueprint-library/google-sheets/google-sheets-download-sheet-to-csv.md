---
id: google-sheets-download-sheet-to-csv
title: Google Sheets Template - Download Sheet to CSV
hide_title: true
sidebar_label: Download Sheet to CSV
description: Information about Shipyard's low-code Google Sheets Download Sheet to CSV blueprint. Quickly export your data from a Google Sheet. Once the data has downloaded, transfer it to another service or run another Vessel against the data.
keywords:
    - google sheets
    - blueprint
    - template
---

# Google Sheets - Download Sheet to CSV

## Overview

Quickly export data from a single tab on a Google Sheet to a CSV. 

Only one tab of data can be downloaded at a time, since CSVs are flat files. If you leave the tab name blank, the first tab of data will be pulled.

Content of the downloaded file can be refined by providing a cell range. Otherwise, the entire contents of the tab will be downloaded.



## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Google Sheet Name or ID | source_file_name | Alphanumeric | :white_check_mark: | - | - | Name or ID of the sheet to fetch data from. |
| Tab Name | tab_name | Alphanumeric | :heavy_minus_sign: | - | - | Name of the tab in the sheet to fetch data from. This field is case sensitive. If left blank, data will be pulled from the first tab. |
| Shared Drive Name | drive | Alphanumeric | :heavy_minus_sign: | - | - | Name of the Shared Drive the sheet exists in. This field is case sensitive. Leave blank if the file does not exist in a Shared Drive. |
| Local File Name | destination_file_name | Alphanumeric | :white_check_mark: | - | - | Name of file to be generated with the results. Should be `.csv` extension. |
| Local Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: | - | - | Folder where the file should be downloaded. Leaving blank will place the file in the home directory. |
| Cell Range | cell_range | Alphanumeric | :heavy_minus_sign: | - | - | Range to fetch data from in the sheet formatted as `A1:B10`. If left blank the entire contents of the tab will be fetched. |
| Service Account | GOOGLE_APPLICATION_CREDENTIALS | Password | :white_check_mark: | - | - | JSON from a Google Cloud Service account key. |


