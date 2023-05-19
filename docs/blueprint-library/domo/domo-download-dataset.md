---
id: domo-download-dataset
title: Domo Template - Download Dataset
hide_title: true
sidebar_label: Download Dataset
description: Information about Shipyard's low-code Domo Download Dataset blueprint. Downloads a Domo dataset as a CSV 
keywords:
    - domo
    - blueprint
    - template
---

# Domo - Download Dataset

## Overview
Download any Domo dataset as a csv. The entire dataset will be download, be aware of potential memory constraints if the dataset is very large ( greater than 1M rows). 

Either a username/password or an access token should be provided. If both are provided, the access token will be preferred.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Client ID | DOMO_CLIENT_ID  | Password |:white_check_mark: | `-` | - | Client ID is generated in the Domo Developer Portal. The ID should have the following scope: data, workflow, user, account, dashboard |
| Secret Key | DOMO_SECRET_KEY  | Password |:white_check_mark: | `-` | - | The secret attached to the generated Client ID |
| DOMO Dataset ID | DOMO_DATASET_ID  | Alphanumeric |:white_check_mark: | `-` | - | The id of the dataset desired to be replaced. Can be acquired from the url of the dataset |
| Local Destination Folder Name | DOMO_DESTINATION_FOLDER  | Alphanumeric |:heavy_minus_sign: | `-` | - | The file path of where the csv should be downloaded to. If left blank, then the file will be saved in the current working directory. |
| Local File Name | DOMO_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `-` | - | The name for the csv file once it is downloaded |


