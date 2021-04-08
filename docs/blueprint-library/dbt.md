---
id: dbt
title: dbt (Data Build Tool) Blueprints
hide_title: true
sidebar_label: dbt (Data Build Tool)
description: Information about the Blueprint Library connections with dbt.
keywords:
  - dbt
  - data built tool
  - template
  - blueprint
---

# dbt Blueprints

:::caution
This section is a work in progress and may be missing key details. If you need help using dbt Blueprints, reach out to support@shipyardapp.com
:::

## Authorization

### Overview

dbt Blueprints will not work without first syncing your own GitHub repository. [**Follow this in-depth guide**](https://www.shipyardapp.com/blog/deploying-dbt-in-the-cloud) **or the steps below before running.**

### **Steps**

1. Add [this script](https://github.com/shipyardapp/dbt-tutorial/blob/main/execute_dbt.py) to the root directory of the GitHub repository where your dbt models live, with the file name of `execute_dbt.py`.
2. Move your `profiles.yml` file to the root directory of the GitHub repository where your dbt models live.
3. Connect Shipyard to the GitHub repository where your dbt models live. For in-depth instructions, [follow this tutorial](https://www.shipyardapp.com/blog/automate-deployment-github-code/).
4. Edit this Blueprint's code to be connected to the GitHub repository and branch/tag where your dbt models live. To edit the Blueprint: - Click Blueprints on the sidebar - Click the name of your dbt Blueprint - Click the Code tab at the top"
5. If you used the default setting of cloning your GitHub repository to a folder with the repo's name, update the "File to Run" field to include the name of your repo as a folder. e.g. `your_repo_name/execute_dbt.py` If you opted to clone into the current working directory, do nothing.
6. Click "Use this Blueprint" in the top-right corner to get started building a Vessel with the dbt Blueprint.

## Execute CLI Command Blueprint

### Overview

Once you have followed the Authorization steps for dbt Blueprints, type in any of the available [dbt CLI commands](https://docs.getdbt.com/reference/dbt-commands/).

This Blueprint supports the ability to run multiple commands with the use of `&&`.

e.g. `dbt compile && dbt run`

### Variables

### Screenshots

## Helpful Links

[Getting Started with dbt + Shipyard](https://www.shipyardapp.com/blog/deploying-dbt-in-the-cloud/)

[dbt Documenation](https://docs.getdbt.com/)
