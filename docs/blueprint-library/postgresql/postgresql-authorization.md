---
id: postgresql-authorization
sidebar_position: 1
title: PostgreSQL Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize PostgreSQL to work with Platform's low-code PostgreSQL templates.
keywords:
  - postgresql
  - blueprint
  - template
  - authorization
---

#  Authorization

Connecting PostgreSQL to Platform requires you to have:
1. A PostgreSQL user with read/write access to the database and all associated tables/views you wish to access. We recommend setting up an account specifically for Platform access, although you can use an existing user.
2. Platform [IP Addresses whitelisted](https://www.shipyardapp.com/docs/faqs/security/ip-whitelist/)


### Creating a New User

1. Login to your PostgreSQL server  
2. In the command line, create a user by running `CREATE USER <user name> WITH PASSWORD '<new password>';`  
3. The PostgreSQL server URL, the username, and password are all used in the Blueprints below  
