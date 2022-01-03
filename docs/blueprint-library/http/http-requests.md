---
id: http-requests
title: HTTP Template - Requests
hide_title: true
sidebar_label: Requests
description: Information about Shipyard's low-code HTTP Requests blueprint. Run a GET, POST, PATCH, or PUT request against any URL or API.
keywords:
    - http
    - blueprint
    - template
---

# HTTP - Requests

## Overview

Run a GET, POST, PATCH, or PUT request against any URL or API. Useful for working with any external API or service not natively supported by Shipyard Blueprints.

For downloading large files, we recommend using the *HTTP - Download File from URL* Blueprint.

For more information on how to use this Blueprint, [read the documentation](https://www.shipyardapp.com/docs/blueprint-library/http). You can also dig into the open-source code [on Github](https://github.com/shipyardapp/httprequest-blueprints).

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:---|:---|:---|:---|:---|:---|:---|
| Method | method | Select | :white_check_mark: | GET | `GET`, `POST`, `PUT`, `PATCH` | - |
| URL | url | Alphanumeric | :white_check_mark: |  | - | - |
| Content Type | content_type | Select | :white_check_mark: | application/json | `application/json`, `application/xml`, `text/plain`, `text/html` | - |
| Authorization Header | authorization_header | Password | :heavy_minus_sign: | - | - | - |
| Message | message | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Destination Folder Name | destination_folder_name | Alphanumeric | :heavy_minus_sign: |  | - | - |
| Destination File Name | destination_file_name | Alphanumeric | :white_check_mark: | response.txt | - | - |
| Print Response to Output? | print_response | Boolean | :white_check_mark: | true | - | - |


