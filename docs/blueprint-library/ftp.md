---
id: ftp
title: FTP Blueprints
hide_title: true
sidebar_label: FTP
description: Information about the Blueprint Library connections with FTP.
keywords:
  - ftp
  - file transfer protocol
  - template
  - blueprint
---

# FTP Blueprints

## Authorization

### Overview

In order to get started with FTP Blueprints, a user and password with read and write access is required.

### Steps

The username and password values that are [created when adding a user](https://www.hostmysite.com/support/dedicated/general/filezillauser/index.shtml) (for [FileZilla](https://filezilla-project.org/) as an example) would be passed into the appropriate input variables listed below in order to connect progammatically to the FTP server. _Read_ and _write_ permissions should be provided when the user is added to the FTP server.

## Download Files Blueprint

### Overview

Quickly export one or more files from an FTP Server.

This Blueprint requires _read_ permissions in order to download from the FTP server.

#### Additional Notes about the Fields

- The File Name fields can include directory/folder information, but it is not recommended for consistency.
- 

#### Matching to Multiple Files with Regex

You can always use Regex to match to multiple files. The Blueprint will look for all files that match the provided regex in all subfolders of the provided **FTP Folder Name**.

By setting **FTP File Name Match Type** to Regex Match, setting the **Local File Name** will result in the file name being enumerated. Matches are not always found in the same order, so the enumeration could vary.

Given the following file structure:
```
reports/
├─ customer_data.csv
├─ external/
│  ├─ geo_data.csv
├─ monthly/
│  ├─ jan_data.csv
│  ├─ feb_data.csv
│  ├─ mar_data.csv
├─ aggregated/
│  ├─ data_yearly.csv
│  ├─ data_quarterly.csv
│  ├─ data_monthly.csv
company_data.csv
```

##### Example 1
|Variable Name| Value|
|:---|:---|
|**FTP File Name Match Type:**| `Regex Match`|
|**FTP File Name:** |`_data.csv`|
|**FTP Folder Name:**| `<emtpy>`|
|**Local File Name:**| `data.csv`|
|**Matched Files:**| - customer_data.csv<br/>- geo_data.csv<br/>- jan_data.csv<br/>- feb_data.csv<br/>- mar_data.csv<br/>- company_data.csv|<br/>
|**Downloaded Files:**| - data_1.csv
- data_2.csv
- data_3.csv
- data_4.csv
- data_5.csv
- data_6.csv|

##### Example 2
**FTP File Name Match Type:** `Regex Match`

**FTP File Name:** `_data.csv`

**FTP Folder Name:** `reports/monthly`

**Local File Name:** `<empty>`

**Matched Files:**
- jan_data.csv
- feb_data.csv
- mar_data.csv
  
**Downloaded Files:**
- jan_data.csv
- feb_data.csv
- mar_data.csv

The Blueprint filters down to the folder of `reports/monthly`. In this folder, it finds 3 files that match the regex.

##### Example 3

**FTP File Name Match Type:** `Regex Match`
**FTP File Name:** `monthly`
**FTP Folder Name:** `reports`
**Local File Name:** `data.csv`
**Matched Files:**
- data_monthly.csv
- jan_data.csv
- feb_data.csv
- mar_data.csv
  
**Downloaded Files:**
- data_monthly.csv
- jan_data.csv
- feb_data.csv
- mar_data.csv

The Blueprint filters down to the folder of `reports`. In this folder, it finds a folder, `monthly` that matches the regex - so it includes all of it's files. Additionally, it finds a file in the subfolder `aggregated`.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Host** | ✔️ |  Domain or IP address of the FTP server to connect to. |
| **Port** | ➖ | Number for the port to connect to. `21` is used by default. |
| **Username** |➖ | Value of the configured username in the FTP server. |
| **Password** |➖ | Value of the configured password associated to the username on the FTP server. |
| **FTP Folder Name** |➖ | Name of the folder where the file is stored in the FTP server. |
| **FTP File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **FTP File Name** | ✔️ |  Name of the target file in the FTP server. Can be regex if "Match Type" is set accordingly. |
| **Local Folder Name** | ➖ | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| **Local File Name** |➖ | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |

## Upload Files Blueprint

### Overview

The **FTP - Upload Files** Blueprint allows users to easily import one or more files directly into an FTP Server, no matter how big they are.

This Blueprint requires _write_ permissions in order to upload to the FTP server.  

### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Host** | ✔️ |Domain or IP address of the FTP server to connect to |
| **Port** | ➖ | Number for the port to connect to - `21` is used for FTP |
| **Username** | ➖ | Value of the configured username in the FTP server - see **Authorization** |
| **Password** | ➖ | Value of the configured password in the FTP server - see **Authorization** |
| **Local Folder Name** | ➖ | Name for the local folder in the Shipyard Vessel to upload the target file from |
| **Local File Name Match Type** | ✔️ | Method used by Shipyard to look for the local file name in the Vessel |
| **Local File Name** | ✔️ | Name for the file in the Shipyard Vessel to upload |
| **FTP Folder Name** | ➖ | Name of the folder where the file is uploaded to in the FTP server |
| **FTP File Name** | ➖ | Name of the file uploaded in the FTP server |

## Helpful Links

[Python FTP Methods](https://docs.python.org/3.7/library/ftplib.html)
