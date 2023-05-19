---
id: tableau-download-view
title: Tableau Template - Download View
hide_title: true
sidebar_label: Download View
description: Information about Shipyard's low-code Tableau Download View blueprint. Download the contents of view as a pdf, csv, or png. 
keywords:
    - tableau
    - blueprint
    - template
---

# Tableau - Download View

## Overview
Download a view from Tableau as a PNG, PDF, or CSV file. Typically used for pulling live data visuals and sending them to a messaging service, like Email or Slack.

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Authentication Method | TABLEAU_SIGN_IN_METHOD  | Select |:white_check_mark: | username_password | Username & Password: `username_password`<br></br><br></br>Access Token: `access_token`<br></br><br></br> | Determine which authentication method to use when connecting to Tableau. |
| Username or Access Token Name | TABLEAU_USERNAME  | Alphanumeric |:white_check_mark: | - | - | Your personal username or the name of the access token that you use to log in with Tableau. |
| Password or Access Token | TABLEAU_PASSWORD  | Password |:white_check_mark: | - | - | The password associated with the provided username OR the access token associated with the provided access token name. |
| Server URL | TABLEAU_SERVER_URL  | Alphanumeric |:white_check_mark: | - | - | The scheme, subdomain, domain, and top-level domain (TLD) of your Tableau URL. |
| Site ID | TABLEAU_SITE_ID  | Alphanumeric |:white_check_mark: | - | - | Typically found in the URL as /site/YOURSITEID/ |
| Project Name | TABLEAU_PROJECT_NAME  | Alphanumeric |:white_check_mark: | - | - | The project name that the workbook view you want to download lives in. Leave blank if found in the root project. |
| Workbook Name | TABLEAU_WORKBOOK_NAME  | Alphanumeric |:white_check_mark: | - | - | The name of the workbook that the view you want to download lives in. |
| View Name | TABLEAU_VIEW_NAME  | Alphanumeric |:white_check_mark: | - | - | Name of the view that you want to download. |
| Download As | TABLEAU_FILE_TYPE  | Select |:white_check_mark: | png | .png: `png`<br></br><br></br>.pdf: `pdf`<br></br><br></br>.csv: `csv`<br></br><br></br> | File format to download the specified view name as.  |
| File Name | TABLEAU_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | - | - | File name that will be created for the view being downloaded. Include the extension. |
| Folder Name | TABLEAU_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | Folder where the file will be created. Leave blank to store in the current working directory |


