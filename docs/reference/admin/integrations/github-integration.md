---
id: github-integration
title: GitHub Integration
hide_title: true
description: Connect your Platform organization to your GitHub organization.
keywords:
  - github
  - integration
  - git
---

# GitHub Integration

## Definition

The GitHub integration allows you to set up [GitHub Code Sync](../../code/git-connection.md) for any of your Vessels or Blueprints.

Platform supports an unlimited number of GitHub connections to multiple different organizations. Every repository that is synced with Platform will be available to any user in the Organization with _Create_ or _Edit_ [permissions](../roles.md) for Blueprints.

### Setup

By clicking **Add Connection**, you can choose to sync Platform to any GitHub organization that your GitHub account has access to. This setup flow allows you to specify whether to give Platform access to all repositories \(including newly created ones\) or only specific repositories. By default, Platform will have read-only access to the contents of the repositories you select.

Once a connection has been set up, you can always change the level of access after the fact. The **edit** button will redirect you to the GitHub application page where you can change repository access or delete the connection altogether.

## Screenshots

![GitHub Connection Overview](../../../.gitbook/assets/image_107.png)

![Selecting a GitHub Organization to connect to](../../../.gitbook/assets/image_104.png)

![Selecting repositories to connect to](../../../.gitbook/assets/image_113.png)

## Additional Notes

1. Platform has a 1:1 relationship when connecting to GitHub organizations. You cannot sync your personal organization in GitHub with two different organizations in Platform.

## Learn More

- [GitHub Code Sync Announcement](https://www.shipyardapp.com/blog/automating-github-code-sync/)
- [Getting Started with GitHub Code Sync](https://www.shipyardapp.com/blog/automate-deployment-github-code/)
