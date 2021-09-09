---
id: sftp
title: SFTP Blueprints
hide_title: true
sidebar_label: SFTP
description: Information about the Blueprint Library connections with SFTP.
keywords:
  - sftp
  - secure file transfer protocol
  - template
  - blueprint
---

# SFTP Blueprints

## Authorization

### Overview

In order to get started with SFTP Blueprints, a user and password with read and write access is required.

### Steps

The username and password values that are [created when adding a user](https://www.hostmysite.com/support/dedicated/general/filezillauser/index.shtml) (for [FileZilla](https://filezilla-project.org/) as an example) would be passed into the appropriate input variables listed below in order to connect progammatically to the SFTP server. _Read_ and _write_ permissions should be provided when the user is added to the SFTP server.

## Download Files Blueprint

### Overview

The **SFTP - Download Files** Blueprint allows users to quickly export one or more files from an SFTP Server.

This Blueprint requires _read_ permissions in order to download from the SFTP server.  

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP address of the SFTP server to connect to |
| **Port** | Number for the port to connect to - `22` is used for SFTP |
| **Username** | Value of the configured username in the SFTP server - see **Authorization** |
| **Password** | Value of the configured password in the SFTP server - see **Authorization** |
| **SFTP Folder Name** | Name of the folder where the file is stored in the SFTP server |
| **SFTP File Name Match Type** | [REQUIRED] Method used by Shipyard to look for the file name in the SFTP server |
| **SFTP File Name** | [REQUIRED] Name of the target file in the SFTP server |
| **Local Folder Name** | Name for the folder to store the file in the Shipyard Vessel |
| **Local File Name** | Name for the file to store in the Shipyard Vessel |

## Upload Files Blueprint

### Overview

The **SFTP - Upload Files** Blueprint allows users to easily import one or more files directly into an SFTP Server, no matter how big they are.

This Blueprint requires _write_ permissions in order to upload to the SFTP server.  

### Variables

| Variable Name | Description |
|:---|:---|
| **Host** | [REQUIRED] Domain or IP address of the SFTP server to connect to |
| **Port** | Number for the port to connect to - `22` is used for SFTP |
| **Username** | Value of the configured username in the SFTP server - see **Authorization** |
| **Password** | Value of the configured password in the SFTP server - see **Authorization** |
| **Local Folder Name** | Name for the local folder in the Shipyard Vessel to upload the target file from |
| **Local File Name Match Type** | [REQUIRED] Method used by Shipyard to look for the local file name in the Vessel |
| **Local File Name** | [REQUIRED] Name for the file in the Shipyard Vessel to upload |
| **SFTP Folder Name** | Name of the folder where the file is uploaded to in the SFTP server |
| **SFTP File Name** | Name of the file uploaded in the SFTP server |

## Helpful Links

[Paramiko Documentation](http://docs.paramiko.org/en/stable/)
