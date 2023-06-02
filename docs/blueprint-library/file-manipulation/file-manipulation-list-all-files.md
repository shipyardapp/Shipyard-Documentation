---
id: file-manipulation-list-all-files
title: File Manipulation Template - List All Files
hide_title: true
sidebar_label: List All Files
description: Information about Shipyard's low-code File Manipulation List All Files blueprint. List all of the local files available on Shipyard at the moment the Vessel is run.
keywords:
    - file manipulation
    - blueprint
    - template
---

# File Manipulation - List All Files

## Overview

List all of the local files available on Shipyard at the moment the Vessel is run. When run as part of Fleet, this will print out every folder and every file has been downloaded or created by the current Fleet run.

This Blueprint works by running a Bash command of `ls -laR`



## Variables

This Blueprint does not require variables.## YAML

Below is the YAML template for this Blueprint and can be used in the Fleet [YAML Editor](../../reference/fleets/yaml-editor.md).

```yaml
source:
  blueprint: File Manipulation - List All Files
  inputs:
  type: BLUEPRINT
guardrails:
  retry_count: 0
  retry_wait: 0s
  runtime_cutoff: 4h0m0s
  exclude_exit_code_ranges:
```