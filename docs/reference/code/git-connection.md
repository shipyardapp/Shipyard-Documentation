---
id: git-connection
title: Git Connection
hide_title: true
description: Information about providing your code via Git connection.
keywords:
  - github
  - git
  - code
---

# Git Connection

## Definition

The Git connection allows you to sync with code that lives in an external git version control platform \(e.g. GitHub\). This connection consists of 3 components:

- **Repo** - Select the repository where your code lives.
- **Code Source** - Select the branch or tag that contains the code you want to use.
- **Git Clone Location** - Choose whether the repository code should be cloned into the current working directory or a folder named after your repository \(the default cloning method\).

At runtime, the contents of this repository and branch/tag will be cloned, ensuring that the latest code commit is used. Effectively, the following command is being run:

`git clone --branch branch-name repo-url`

The Git connection is only available after setting up a [GitHub Integration](../admin/integrations/github-integration.md).

## Accessing Code from Git

### Default - Folder with Repo Name

By default, your code is cloned into a new folder with the repo name. This mirrors the behavior that you would expect when running the command locally. If the [**file to run**] exists in your git repository, you will need to include the repo-name as a folder.

![Including the repo name as a folder](../../.gitbook/assets/folder_in_file_to_run.png)

### Unpack into Current Working Directory

If you select the option to "Unpack into Current Working Directory", your GitHub repository contents will be available in the home directory. Your **file to run** _will not_ need to include a folder name, unless the file exists in a nested folder structure.

![](../../.gitbook/assets/no_folder_file_to_run.png)

:::caution
While this option is convenient, due to the nature of file sharing within Fleets, there is a risk that the contents of your repository could be mistakenly overwritten by other Vessels in the Fleet.
:::

### Either Option

:::tip Pro Tip
You can use the [platform environment variable](../shipyard-environment-variables.md) of `SHIPYARD_CLONE_LOCATION` in your **file to run** to dynamically reference the clone location. This environment variable will resolve with `home/shipyard/` or `home/shipyard/<repo-name>` depending on the git clone location that you select.

![](../../.gitbook/assets/dynamic_clone_location_folder.png)
:::

## Screenshots

![](../../.gitbook/assets/github_code_sync.png)

## Additional Notes

1. The git connection only supports GitHub at the moment.

## Learn More

- [GitHub Code Sync Announcement](https://www.shipyardapp.com/blog/automating-github-code-sync/)
- [Getting Started with GitHub Code Sync](https://www.shipyardapp.com/blog/automate-deployment-github-code/)
