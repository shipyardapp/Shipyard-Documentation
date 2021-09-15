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

The username and password values that are [created when adding a user](https://www.hostmysite.com/support/dedicated/general/filezillauser/index.shtml) (for [FileZilla](https://filezilla-project.org/) as an example) would be passed into the appropriate input variables listed below in order to connect programmatically to the SFTP server. _Read_ and _write_ permissions should be provided when the user is added to the SFTP server.

## Download Files Blueprint

### Overview

Quickly export one or more files from an SFTP Server. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

This Blueprint requires _read_ permissions in order to download from the SFTP server.

### Variables

| Variable Name | Required? | Description |
|:---|:---|:---|
| **Host** | ✔️ |  Domain or IP address of the SFTP server to connect to. |
| **Port** | ✔️ | Number for the port to connect to. `22` is used by default. |
| **Username** |➖ | Value of the configured username in the SFTP server. |
| **Password** |➖ | Value of the configured password associated to the username on the SFTP server. |
| **SFTP Folder Name** |➖ | Name of the folder where the file is stored in the SFTP server. |
| **SFTP File Name Match Type** | ✔️ | Determines if the text in "SFTP File Name" will look for one file with exact match, or multiple files using regex. |
| **SFTP File Name** | ✔️ |  Name of the target file in the SFTP server. Can be regex if "Match Type" is set accordingly. |
| **Local Folder Name** | ➖ | Folder where the file(s) should be downloaded. Leaving blank will place the file in the home directory. |
| **Local File Name** |➖ | What to name the file(s) being downloaded. If left blank, defaults to the original file name(s). |

## Upload Files Blueprint

### Overview

Easily import one or more files directly into an SFTP Server, no matter how big they are. The [match type](../reference/blueprint-library/match-type.md) selected greatly affects how this Blueprint works.

This Blueprint requires _write_ permissions in order to upload to the SFTP server.  

### Variables

| Variable Name | Required? |Description |
|:---|:---|:---|
| **Host** | ✔️ |Domain or IP address of the SFTP server to connect to. |
| **Port** | ✔️ | Number for the port to connect to. `22` is used by default. |
| **Username** | ➖ | Value of the configured username in the SFTP server. |
| **Password** | ➖ | Value of the configured password associated to the username on the SFTP server. |
| **Local Folder Name** | ➖ | Name of the local folder on Shipyard to upload the target file from. If left blank, will look in the home directory. |
| **Local File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **Local File Name** | ✔️ | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| **SFTP Folder Name** | ➖ | Folder where the file(s) should be uploaded. Leaving blank will place the file in the root directory of the SFTP. |
| **SFTP File Name** | ➖ | What to name the file(s) being uploaded to the SFTP. If left blank, defaults to the original file name(s). |

## Helpful Links

[Paramiko Documentation](http://docs.paramiko.org/en/stable/)
