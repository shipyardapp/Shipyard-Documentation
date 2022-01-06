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

Quickly export one or more files from an FTP Server. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

This Blueprint requires _read_ permissions in order to download from the FTP server.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Host** | ✔️ |  Domain or IP address of the FTP server to connect to. |
| **Port** | ✔️ | Number for the port to connect to. `21` is used by default. |
| **Username** |➖ | Value of the configured username in the FTP server. |
| **Password** |➖ | Value of the configured password associated to the username on the FTP server. |
| **FTP Folder Name** |➖ | Name of the folder where the file is stored in the FTP server. |
| **FTP File Name Match Type** | ✔️ | Determines if the text in "FTP File Name" will look for one file with exact match, or multiple files using regex. |
| **FTP File Name** | ✔️ |  Name of the target file in the FTP server. Can be regex if "Match Type" is set accordingly. |
| **Local Folder Name** | ➖ | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| **Local File Name** |➖ | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |

## Upload Files Blueprint

### Overview

Easily import one or more files directly into an FTP Server, no matter how big they are. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

This Blueprint requires _write_ permissions in order to upload to the FTP server.  

### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Host** | ✔️ |Domain or IP address of the FTP server to connect to. |
| **Port** | ✔️ | Number for the port to connect to. `21` is used by default. |
| **Username** | ➖ | Value of the configured username in the FTP server. |
| **Password** | ➖ | Value of the configured password associated to the username on the FTP server. |
| **Local Folder Name** | ➖ | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| **Local File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **Local File Name** | ✔️ | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| **FTP Folder Name** | ➖ | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of the FTP. |
| **FTP File Name** | ➖ | What to name the file(s) being uploaded. If left blank, defaults to the original file name(s). |

## Helpful Links

[Python FTP Methods](https://docs.python.org/3.7/library/ftplib.html)
