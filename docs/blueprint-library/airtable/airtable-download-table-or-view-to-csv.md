---
id: airtable-download-table-or-view-to-csv
title: Airtable Template - Download Table or View to CSV
hide_title: true
sidebar_label: Download Table or View to CSV
description: Information about Shipyard's low-code Airtable Download Table or View to CSV blueprint. Quickly export your data from an Airtable Table or View.  
keywords:
    - airtable
    - blueprint
    - template
---

# Airtable - Download Table or View to CSV

## Overview
Quickly export data from a single table on an Airtable base to a CSV. 

Only one table or view of data can be downloaded at a time, since CSVs are flat files.

Content of the downloaded file can be further refined by providing a view. Otherwise, the entire contents of the table will be downloaded.


## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Base ID | AIRTABLE_BASE_ID  | Alphanumeric |:white_check_mark: | `-` | - | The ID of your Airtable base. Found in the URL of your base and starts with `app` |
| Table Name or ID | AIRTABLE_TABLE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Can be the Name (case sensitive) or the ID of the table. The ID can be found in the URL and always starts with `tbl`. |
| View Name or ID | AIRTABLE_VIEW_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | Can be the Name (case sensitive) or the ID of the view. The ID can be found in the URL and always starts with `viw`. |
| Include Record IDs? | AIRTABLE_INCLUDE_RECORD_ID  | Boolean |:white_check_mark: | `True` | - | If checked, an additional column named `airtable_record_ids` will be created in the CSV containing each row's unique Airtable Record ID. This is recommended if data ever needs to be reloaded back into Airtable in the future. |
| API Key | AIRTABLE_API_KEY  | Password |:white_check_mark: | `-` | - | API Key associated with a user that has access to the specified Base, Table, and View listed. Will usually start with `key`. |
| Local File Name | AIRTABLE_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | Name of file to be generated with the results. Should be `.csv` extension. |
| Local Folder Name | AIRTABLE_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | `-` | - | lder where the file should be downloaded. Leaving blank will place the file in the home directory. |


