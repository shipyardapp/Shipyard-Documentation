---
id: sftp-authorization
sidebar_position: 1
title: SFTP Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize SFTP to work with Shipyard's low-code SFTP templates.
keywords:
  - sftp
  - blueprint
  - template
  - authorization
---

#  Authorization

In order to get started with SFTP Blueprints, a user and password with read and write access is required, or and RSA Key.

## Username and Password

The username and password values that are [created when adding a user](https://www.hostmysite.com/support/dedicated/general/filezillauser/index.shtml) (for [FileZilla](https://filezilla-project.org/) as an example) would be passed into the appropriate input variables listed below in order to connect programmatically to the SFTP server. _Read_ and _write_ permissions should be provided when the user is added to the SFTP server.

## RSA Key

To authenticate with an RSA key, you'll need to follow instructions for generating a public/private key pair and adding the public key to your SFTP. [This article](https://www.jscape.com/blog/setting-up-sftp-public-key-authentication-command-line) walks through the general steps needed.

Once you have the private key, (generally called `id_rsa`) , you'll need to upload the RSA Key in a Vessel that runs before your SFTP Vessel. Follow [this tutorial](../../tutorials/upload-local-file.md) for a basic understanding of how this should work.

At this point, you should be able to reference the RSA key by name when using an SFTP Blueprint.