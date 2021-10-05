---
id: data-manipulation
title: Data Manipulation Blueprints
hide_title: true
sidebar_label: Data Manipulation
description: Information about the Data Manipulation Blueprints in the Library.
keywords:
  - manipulation
  - template
  - blueprint
---

# Data Manipulation Blueprints


## Compare Datasets Blueprint

### Overview

Compare two CSV files and return files that show the rows with differing and overlapping information. It is expected that the two files provided will:
- Provide columns in the first row of the CSV file.
- Have the same number of columns
- Have the same column names

After comparing data in the two files, the following files _may_ be generated:
- {File Name 1}_only.csv (contains only rows found in `File Name 1`)
- {File Name 2}_only.csv (contains only rows found in `File Name 2`)
- {File Name 1}_overlap.csv (contains rows found in both `File Name 1` AND `File Name 2`)

If there is no unique data, a file with the `_only` will not be created. If there is no overlapping data, the `_overlap` file will not be created.

This Blueprint is relatively memory intensive because it loads both file contents into memory using Pandas. For larger file sizes, we recommend running a comparison directly in a database.

### Variables
| Variable Name |Required?| Description |
|:---|:---|:--|
| **File Name 1** | ✔️ | Name of the target file on Shipyard. |
| **Folder Name 1** | ➖  | Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |
| **File Name 2** | ✔️ | Name of the 2nd target file on Shipyard. |
| **Folder Name 2** | ➖  | Name of the local folder on Shipyard where the target file lives. If left blank, will look in the home directory. |

## Helpful Links

[Pandas Documentation](https://pandas.pydata.org/docs/)

