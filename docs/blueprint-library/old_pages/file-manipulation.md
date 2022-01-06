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

### Overview

Compress one or multiples files into a single archive using ZIP, TAR, TAR.GZIP, or TAR.BZ2 compression methods.

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

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

Decompress a single archive using ZIP, TAR, TAR.GZIP, or TAR.BZ2 into a single folder containing all compressed files.

Be sure you know what type of compression was used on the file originally! There are many instances where a file might end in `.zip` but be compressed using `.gzip` (or other methods). 

If the archive contains only a single file, the `New File Name` field can be used to rename it. Otherwise, if the archive contains multiple files, it is recommended to leave this field blank to retain the original file and folder names.


### Variables
| Variable Name |Required?| Description |
|:---|:---|:--|
| **Compression Type** | ✔️ | Type of compression used to decompress the archive. |
| **Local File Name** | ✔️ | Name of the target compressed archive on Shipyard. |
| **Local Folder Name** | ➖ |Name of the local folder on Shipyard where the target compressed file lives. If left blank, will look in the home directory. |
| **New File Name** | ➖ | What to name the newly decompressed file on Shipyard. Only takes effect if a single file is being decompressed. |
| **New Folder Name** | ➖ | Folder where the newly decompressed file(s) should be created on Shipyard. Leaving blank will place the archive's contents in the home directory. If the folder does not already exist, it will be created. |

## Convert CSV Blueprint

### Overview
Convert one or more CSV files into a TSV, PSV, XLSX, Parquet, DTA, or HDF5 file.

The [match type](https://www.shipyardapp.com/docs/reference/blueprint-library/match-type/) selected greatly affects how this Blueprint works.

This Blueprint uses built-in Pandas methods to read in a CSV file and output it as another file type.

### Variables
| Variable Name |Required?| Description |
|:---|:---|:--|
| **Destination File Format**|✔️|Type of file that you want the CSV file(s) converted into.|
| **Local Folder Name** | ➖ |Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |
| **Local File Name Match Type** | ✔️ | Determines if the text in "Local File Name" will look for one file with exact match, or multiple files using regex. |
| **Local File Name** | ✔️ | Name of the target file on Shipyard. Can be regex if "Match Type" is set accordingly. |
| **New Folder Name** | ➖ | Folder where the newly converted file(s) should be created on Shipyard. Leaving blank will place the file in the home directory. If the folder does not already exist, it will be created. |
| **New File Name** | ➖ | What to name the newly converted files on Shipyard. If left blank, defaults to the original file name(s). |

## Helpful Links

[Python Compression Methods](https://docs.python.org/3.7/library/archiving.html)  
[Pandas to\_{format} Modules](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_csv.html)
