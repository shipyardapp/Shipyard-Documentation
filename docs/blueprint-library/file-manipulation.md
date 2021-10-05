---
id: file-manipulation
title: File Manipulation Blueprints
hide_title: true
sidebar_label: File Manipulation
description: Information about the File Manipulation Blueprints in the Library.
keywords:
  - file manipulation
  - file management
  - files
  - template
  - blueprint
---

# File Manipulation Blueprints

:::caution
This section is a work in progress and may be missing key details. If you need help using File Manipulation Blueprints, reach out to support@shipyardapp.com
:::

## Compress Files Blueprint

Compress one or multiples files into a single archive using ZIP, TAR, TAR.GZIP, or TAR.BZ2 compression methods.

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

### Overview

### Variables

| Variable Name |Required?| Description |
|:---|:---|:--|
| **Compression Type** | ✔️ | Type of compression to use on the provided files. |
| **Local Folder Name** | ➖ |Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |
| **Local File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **Local File Name** | ✔️ | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| **New Folder Name** | ➖ | Folder where the newly compressed file should be created on Shipyard. Leaving blank will place the file in the home directory. If the folder does not already exist, it will be created. |
| **New File Name** | ✔️ | What to name the newly compressed file on Shipyard. It is recommended to end this name with the same extension as the compression type chosen. |

## Decompress Files Blueprint

### Overview

### Variables

### Screenshots

## Convert CSV Blueprint

### Overview

### Variables

### Screenshots

## Helpful Links

[Python Compression Methods](https://docs.python.org/3.7/library/archiving.html) [Pandas to\_{format} Modules](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_csv.html)
