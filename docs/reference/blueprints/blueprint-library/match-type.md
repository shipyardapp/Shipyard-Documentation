---
id: match-type
title: Match Types
hide_title: true
description: Information about how Match Type for Blueprints in the Blueprint Library works.
keywords:
  - regex
  - regular
  - expression
  - exact
  - match
  - blueprints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Match Types

## Definition

A large number of Library Blueprints have a **Match Type** field that allows you to select between Exact Match and Regex Match. 

- **Exact Match** - Matches to a single file, using a combination of the Folder Name and File Name. 

- **Regex Match** - Matches to multiple files, using regular expressions.

The Match Type selected affects the Source fields and the Destination fields differently. The names of these fields will differ based on the Blueprint you've selected and the functionality of that Blueprint.

- **Source** - If you're downloading files, this will be the vendor/tool. If you're uploading files, this will be Platform's local file system.

- **Destination** - If you're uploading files, this will be the vendor/tool. If you're downloading files, this will be Platform's local file system.

## Exact Match

### Effects on Source

When using Exact Match, the Blueprint will look for a file that exactly matches (case sensitive) the combination of the provided **Source Folder Name** and **Source File Name**. When the folder name and file name are combined, we correctly format the `/` characters, so you don't need to worry about the difference between providing a folder as `folder/structure`, `/folder/structure` or `folder/structure/`.

When the Source is Platform, leaving the Folder Name blank assumes that the file you want to match to lives in the home directory. When the Source is a vendor/tool, leaving the Folder Name blank assumes that the file you want to match to lives in the root directory.

### Effects on Destination

When using Exact Match, the Destination Folder Name and File name will be combined together and created exactly as you typed them. 

If a **Destination Folder Name** is provided that doesn't already exist, it will be created.

If you leave **Destination File Name** empty, the original file name that you match to will be kept, stripped of the folder name.

### Examples
Assume that we are downloading files from a Vendor, and our vendor has the following file structure. Click through the tabs below to see how the inputs will change the resulting file matched to.
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
<Tabs
defaultValue="ex1"
values={[
{label: 'Original File Name', value: 'ex1'},
{label: 'New File Name', value: 'ex2'},
{label: 'No Match', value: 'ex3'},
]}>

<TabItem value="ex1">



**Inputs**

|Variable Name| Value|
|:---|:---|
|**Source File Name Match Type**| `Exact Match`|
|**Source File Name**| `jan_data.csv`|
|**Source Folder Name**| `reports/monthly`|
|**Destination Folder Name**| `<empty>`|
|**Destination File Name**| `<empty>`|



**Result**

The Blueprint combines the folder and file name to interpret the source file as `reports/monthly/jan_data.csv`. One file is found that matches. Because the Destination File Name is empty, the original file name is kept in tact.

|Element| Names|
|:---|:---|
|**Matched Files**|reports/monthly/jan_data.csv|
|**Downloaded Files**|jan_data.csv|


</TabItem>
<TabItem value="ex2">

**Inputs**

|Variable Name| Value|
|:---|:---|
|**Source File Name Match Type**| `Exact Match`|
|**Source File Name**| `jan_data.csv`|
|**Source Folder Name**| `reports/monthly`|
|**Destination Folder Name**| `january`|
|**Destination File Name**| `january_2022.csv`|

**Result**

The Blueprint combines the folder and file name to interpret the source file as `reports/monthly/jan_data.csv`. One file is found that matches. Because the Destination Folder Name has a value, a folder named `january` is created. Because the Destination File Name has a value, the file is renamed to `january_2022.csv` upon download.

|Element| Names|
|:---|:---|
|**Matched Files**|reports/monthly/jan_data.csv|
|**Downloaded Files**|january/january_2022.csv|


</TabItem>

<TabItem value="ex3">

**Inputs**

|Variable Name| Value|
|:---|:---|
|**Source File Name Match Type**| `Exact Match`|
|**Source File Name** |`jan_data.csv`|
|**Source Folder Name**| `<emtpy>`|
|**Destination Folder Name**| `<empty>`|
|**Destination File Name**| `<empty>`|

**Result**

The Blueprint does not find a file to match to, because no file named `jan_data.csv` lives in the root directory. This results in an error. 

|Element| Names|
|:---|:---|
|**Matched Files**| |
|**Downloaded Files**| |

</TabItem>

</Tabs>


## Regex Match

### Effects on Source

When using Regex Match, the Blueprint will first filter down to the folder provided under Source Folder Name. Next, it will then pull in every file that exists under your filter and its subfolders. Then, it will compare the names of these files to the regex provided under **Source File Name**. All matching file names are then looped through for downloading/uploading.

When the Source is Platform, leaving the Folder Name blank will cause Platform to search for all matches in the home directory and its subdirectories. When the Source is a vendor/tool, leaving the Folder Name blank will cause Platform to search for all the matches in the root directory and its subdirectories.

:::note
Technically, all files names are a combination of their folder name and file name. So a file named `data.csv` in a folder named `reports` is seen as `reports/data.csv` for the sake matching with regex. This can result in your regex matching to a file because of its folder name.
:::

### Effects on Destination

If you provide a **Destination File Name** when Regex Match is used, and more than one file is matched to, we enumerate the files by adding `_#` to the end of the file name _before_ the file extension. This prevents each file from being uploaded/downloaded with the same name, which would result in a single file being continuously overwritten.

For example, if you provided a **Destination File Name** of `report.csv` and your regex finds multiple matches, the files will be uploaded/downloaded as `report_1.csv`, `report_2.csv`, etc.

If you leave **Destination File Name** empty, the original file names that you match to will be kept, stripped of the folder name.

### Examples
Assume that we are downloading files from a Vendor, and our vendor has the following file structure. Click through the tabs below to see how the inputs will change the resulting files matched to.
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
<Tabs
defaultValue="ex1"
values={[
{label: 'Fully Filtered Match', value: 'ex1'},
{label: 'Sub-Folder Match', value: 'ex2'},
{label: 'Enumerated Destination Files', value: 'ex3'},
{label: 'Non-Enumerated Destination Files', value: 'ex4'},
]}>

<TabItem value="ex1">



**Inputs**

|Variable Name| Value|
|:---|:---|
|**Source File Name Match Type**| `Regex Match`|
|**Source File Name**| `_data\.csv`|
|**Source Folder Name**| `reports/monthly`|
|**Destination File Name**| `<empty>`|



**Result**

The Blueprint filters down to the folder of `reports/monthly`. In this folder, it finds 3 files that match the regex. The original file names are kept in tact.

|Element| Names|
|:---|:---|
|**Matched Files**|reports/monthly/jan_data.csv<br/>reports/monthly/feb_data.csv<br/>reports/monthly/mar_data.csv|
|**Downloaded Files**|jan_data.csv<br/>feb_data.csv<br/>mar_data.csv|


</TabItem>
<TabItem value="ex2">

**Inputs**

|Variable Name| Value|
|:---|:---|
|**Source File Name Match Type**| `Regex Match`|
|**Source File Name**| `monthly`|
|**Source Folder Name**| `reports`|
|**Destination File Name**| `<empty>`|

**Result**

The Blueprint filters down to the folder of `reports`. In this folder, it finds a folder, `monthly` that matches the regex - so it includes all of its files. Additionally, it finds a file in the subfolder `aggregated`. Because the Destination File Name is empty, the files retain their original names.

|Element| Names|
|:---|:---|
|**Matched Files**|reports/aggregated/data_monthly.csv<br/>reports/monthly/jan_data.csv<br/>reports/monthly/feb_data.csv<br/>reports/monthly/mar_data.csv|
|**Downloaded Files**|data_monthly.csv<br/>jan_data.csv<br/>feb_data.csv<br/>mar_data.csv|


</TabItem>

<TabItem value="ex3">

**Inputs**

|Variable Name| Value|
|:---|:---|
|**Source File Name Match Type**| `Regex Match`|
|**Source File Name** |`_data\.csv`|
|**Source Folder Name**| `<emtpy>`|
|**Destination File Name**| `data.csv`|

**Result**

The Blueprint does not filter down at all. Across all folders and subfolders, it finds 6 files that match the regex. It then proceeds to name all of them `data_#.csv`, due to enumeration logic.

|Element| Names|
|:---|:---|
|**Matched Files**| reports/customer_data.csv<br/>reports/external/geo_data.csv<br/>reports/monthly/jan_data.csv<br/>reports/monthly/feb_data.csv<br/>reports/monthly/mar_data.csv<br/>company_data.csv|
|**Downloaded Files**| data_1.csv<br/>data_2.csv<br/>data_3.csv<br/>data_4.csv<br/>data_5.csv<br/>data_6.csv|

</TabItem>

<TabItem value="ex4">

**Inputs**

|Variable Name| Value|
|:---|:---|
|**Source File Name Match Type**| `Regex Match`|
|**Source File Name** |`jan_.*`|
|**Source Folder Name**| `<emtpy>`|
|**Destination File Name**| `data.csv`|

**Result**

The Blueprint does not filter down at all. Across all folders and subfolders, it finds 1 file that matches the regex. It then proceeds to name it `data.csv`

|Element| Names|
|:---|:---|
|**Matched Files**| reports/monthly/jan_data.csv|
|**Downloaded Files**| data.csv|

</TabItem>

</Tabs>

## Learn More

- [Learn Regex](https://regexone.com/)
- [Test Your Regex](https://regex101.com/)
