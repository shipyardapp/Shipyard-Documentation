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

The **FTP - Download Files** Blueprint allows users to quickly export one or more files from an FTP Server.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP address of the FTP Server to connect to |
| **Port** | Number for the port to connect to - `21` is used for FTP |
| **Username** | Value of the configured username in the FTP server - see **Authorization** |
| **Password** | Value of the configured password in the FTP server - see **Authorization** |
| **FTP Folder Name** | Name of the folder where the file is stored in the FTP server |
| **FTP File Name Match Type** | [REQUIRED] Method used by Shipyard to look for the file name in the FTP server |
| **FTP File Name** | [REQUIRED] Name of the target file in the FTP server |
| **Local Folder Name** | Name for the folder to store the file in the Shipyard Vessel |
| **Local File Name** | Name for file to store in the Shipyard Vessel |

## Upload Files Blueprint

### Overview

The **FTP - Upload Files** Blueprint allows users to easily import one or more files directly into an FTP Server, no matter how big they are.

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP address of the FTP Server to connect to |
| **Port** | Number for the port to connect to - `21` is used for FTP |
| **Username** | Value of the configured username in the FTP server - see **Authorization** |
| **Password** | Value of the configured password in the FTP server - see **Authorization** |
| **Local Folder Name** | Name for the local folder in the Shipyard Vessel to upload the target file from |
| **Local File Name Match Type** | [REQUIRED] Method used by Shipyard to look for the local file name in the Vessel |
| **Local File Name** | [REQUIRED] Name for file in the Shipyard Vessel to upload |
| **FTP Folder Name** | Name of the folder where the file is uploaded to in the FTP server |
| **FTP File Name** | Name of the file uploaded in the FTP server |

## Helpful Links

[Python FTP Methods](https://docs.python.org/3.7/library/ftplib.html)
