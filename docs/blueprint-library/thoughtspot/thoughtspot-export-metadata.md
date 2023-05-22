---
id: thoughtspot-export-metadata
title: Thoughtspot Template - Export Metadata
hide_title: true
sidebar_label: Export Metadata
description: Information about Shipyard's low-code Thoughtspot Export Metadata blueprint. Quickly download the metadata objects from Thoughtspot 
keywords:
    - thoughtspot
    - blueprint
    - template
---

# Thoughtspot - Export Metadata

## Overview
Quickly download the metadata objects from Thoughtspot

## Variables

| Name | Reference | Type | Required | Default | Options | Description |
|:-----|:----------|:-----|:---------|:--------|:--------|:------------|
| Token | THOUGHTSPOT_TOKEN  | Password |:white_check_mark: | - | - | API Token generated from Thoughtspot |
| Metadata ID | THOUGHTSPOT_METADATA_ID  | Alphanumeric |:white_check_mark: | - | - | The GUID of the associated metadata to fetch |
| File Name | THOUGHTSPOT_FILE_NAME  | Alphanumeric |:heavy_minus_sign: | `metadata.json` | - | The json file name that the downloaded data should have |


