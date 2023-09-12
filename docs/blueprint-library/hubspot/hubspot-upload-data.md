---
id: hubspot-upload-data
title: Hubspot Template - Upload Data
hide_title: true
sidebar_label: Upload Data
description: Information about Shipyard's low-code Hubspot Upload Data blueprint. Hubspot integration for importing data. Supports various file formats and operations. 
keywords:
    - hubspot
    - blueprint
    - template
---

# Hubspot - Upload Data

## Overview
Before diving into the blueprint, it's essential to familiarize yourself with a few prerequisites and concepts to ensure a smooth experience:

**Hubspot Access Token:**

The blueprint requires an access token from Hubspot for authentication.
If you don't have one, you'll need to obtain it from Hubspot. Typically, this is done through the Hubspot API settings in your account.
Keep this token secure; it's your key to accessing your Hubspot account programmatically.

**Data File Preparation:**

Ensure your contact data is in a supported file format (e.g., CSV, Excel).
The blueprint will ask for the filename, so keep the file accessible and know its path.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Access Token | HUBSPOT_ACCESS_TOKEN  | Password |:white_check_mark: | - | - | Token for authenticating with Hubspot. This ensures secure access to the Hubspot account for exporting data. |
| Import Name | HUBSPOT_IMPORT_NAME  | Alphanumeric |:white_check_mark: | - | - |  A name to identify this import job. |
| Upload Operation Type | HUBSPOT_IMPORT_OPERATION  | Select |:white_check_mark: | `UPSERT` | Create: `CREATE`<br></br><br></br>Update: `UPDATE`<br></br><br></br>Upsert: `UPSERT`<br></br><br></br> | Choose the type of import operation (e.g., create, update). |
| Source Folder Name | HUBSPOT_SOURCE_FOLDER_NAME  | Alphanumeric |:white_check_mark: | - | - | Directory where the blueprint will search for files to import. |
| Filename for Import | HUBSPOT_FILENAME  | Alphanumeric |:white_check_mark: | - | - | Exact name or regex pattern to identify the files for import. |
| Source File Name Match Type  | HUBSPOT_SOURCE_MATCH_TYPE  | Select |:white_check_mark: | `exact_match` | Exact: `exact_match`<br></br><br></br>Regex: `regex_match`<br></br><br></br> | Method for matching the source file name. Choose 'Exact' for exact names or 'Regex' for regular expression patterns. |
| File Format | HUBSPOT_FILE_FORMAT  | Select |:heavy_minus_sign: | `CSV` | `CSV`,Excel Spreadsheet: `SPREADSHEET`<br></br><br></br> | Specify the format of the file being imported |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
from shipyard_hubspot.cli import upload_contacts

upload_contacts.main()
```
