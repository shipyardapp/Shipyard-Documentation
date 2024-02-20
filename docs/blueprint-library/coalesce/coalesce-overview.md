---
id: coalesce-overview
title: Coalesce Blueprints Overview
hide_title: true
sidebar_label: Overview
description: Information about Shipyard's low-code Coalesce templates.
keywords:
  - coalesce
  - blueprint
  - template
  - overview
---

# Coalesce Blueprints Overview

Shipyard's low-code Coalesce blueprints allow users to connect their data in Coalesce to the rest of their modern data
stack.

## How to Use

For information on how to set up these Blueprints successfully, please read through
the [Coalesce Authorization guide](coalesce-authorization.md).

## Available Blueprints

Shipyard currently has the following Blueprints readily available:

- [Trigger Job](coalesce-trigger-job.md)
- [Check Job Status (Deprecated)](coalesce-determine-job-status.md)


## Common Troubleshooting Steps

<details>
    <summary>Check Coalesce Problem Scanner</summary>
    <p>
        Coalesce has a built-in problem scanner that can be used to troubleshoot common issues.<br />
        To access the problem solver, follow these steps:
    </p>
    <ul>
        <li><b>Step 1:</b> Navigate to the Coalesce UI</li>
        <li><b>Step 2:</b> Go to the build page</li>
        <li><b>Step 3:</b> Click the "!" icon:</li>
    </ul>
<a href="https://docs.coalesce.io/docs/problem-scanner">For Coalesce's official documentation on the problem scanner, click here.</a>
</details>
<details>
    <summary>Validate Refresh Jobs</summary>
    <p>If you are having issues with your refresh job running, you should first validate it is able to be run manually. To do this:</p>
    <ul>
        <li><b>Step 1:</b> Go to Coalesce UI</li>
        <li><b>Step 2:</b> Go to the build page</li>
        <li><b>Step 3:</b> Click on "Jobs" on the sidebar</li>
        <li><b>Step 4:</b> Click on the job you are having issues with</li>
        <li><b>Step 5:</b> Click on "Run All" in the top right corner</li>
        <li><b>Step 6:</b> If the job runs successfully, go to the deploy page</li>
        <li><b>Step 7:</b> Scroll to the environment you are having issues with and verify a new refresh job was created</li>
    </ul>
    <p><b>Note:</b> <em>If the job ran successfully, but it is not listed here, it is likely that the job is not configured to run on the environment you are having issues with.</em></p>
</details>

<details>
    <summary>Confirm Environment Connection</summary>
    <p>If you are having issues running your refresh job and are receiving an error associated with your connection or environment ID, you should use Coalesce's built-in connection validation to confirm it is configured correctly.</p>
    <ul>
        <li><b>Step 1:</b> Go to Coalesce UI</li>
        <li><b>Step 2:</b> Go to the deploy page</li>
        <li><b>Step 3:</b> Click on "..." icon next to the environment you wish to verify</li>
        <li><b>Step 4:</b> Click on "Configure Environment"</li>
        <li><b>Step 5:</b> Click on "User Credentials"</li>
        <li><b>Step 6:</b> Click on "Test Connection"</li>
    </ul>
</details>

## Open Source Code

The code that powers these Blueprints
is [available on our Github](https://github.com/shipyardapp/shipyard-blueprints/tree/main/shipyard_blueprints/coalesce),
open sourced under the Apache License 2.0. We'd love to have you contribute to others using Shipyard Blueprints by
creating issues or submitting PRs.
