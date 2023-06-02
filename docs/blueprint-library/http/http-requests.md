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

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Method | HTTP_METHOD  | Select |:white_check_mark: | `GET` | `GET`,`POST`,`PUT`,`PATCH`, | Request method to use against the URL. Shipyard supports GET, POST, PUT, and PATCH. |
| URL | HTTP_URL  | Alphanumeric |:white_check_mark: | - | - | URL to run a request against. |
| Content Type | HTTP_CONTENT_TYPE  | Select |:white_check_mark: | `application/json` | `application/json`,`application/xml`,`text/plain`,`text/html`,`application/x-www-form-urlencoded`, | The type of content provided by the server. The API you run a request against may state that a specific content-type should be chosen. |
| Authorization Header | HTTP_AUTHORIZATION_HEADER  | Password |:heavy_minus_sign: | - | - | Credentials to access an API should be provided in the authorization header. |
| Message | HTTP_MESSAGE  | Alphanumeric |:heavy_minus_sign: | - | - | The data to be sent to the API. Also known as the body of the request. |
| Destination Folder Name | HTTP_DESTINATION_FOLDER_NAME  | Alphanumeric |:heavy_minus_sign: | - | - | The folder where the returned response should be stored. If left blank, defaults to the home directory. |
| Destination File Name | HTTP_DESTINATION_FILE_NAME  | Alphanumeric |:white_check_mark: | `response.txt` | - | The name of the file that the response should be generated to. |
| Print Response to Output? | HTTP_PRINT_RESPONSE  | Boolean |:white_check_mark: | `False` | - | If checked, the response will be printed to the log output in Shipyard. This is only recommended if the output is guaranteed to not have sensitive in it. |


## YAML
Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).
```yaml
source:
  blueprint: HTTP - Requests
  inputs:
    HTTP_METHOD: GET ## REQUIRED
    HTTP_URL: null ## REQUIRED
    HTTP_CONTENT_TYPE: application/json ## REQUIRED
    HTTP_AUTHORIZATION_HEADER: null 
    HTTP_MESSAGE: null 
    HTTP_DESTINATION_FOLDER_NAME: null 
    HTTP_DESTINATION_FILE_NAME: response.txt ## REQUIRED
    HTTP_PRINT_RESPONSE: false ## REQUIRED
  type: BLUEPRINT
guardrails:
  retry_count: 1
  retry_wait: 0s
  runtime_cutoff: 1h0m0s
  exclude_exit_code_ranges:
    - "0"
```
