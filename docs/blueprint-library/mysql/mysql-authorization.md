---
id: mysql-authorization
sidebar_position: 1
title: MySQL Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize MySQL to work with Shipyard's low-code MySQL templates.
keywords:
- mysql
- blueprint
- template
- authorization
---

# MySQL Authorization
Connecting MySQL to Shipyard requires you to have:
1. A MySQL user with read/write access to the database and all associated tables/views you wish to access. We recommend setting up an account specifically for Shipyard access, although you can use an existing user.
2. Shipyard [IP Addresses whitelisted](https://www.shipyardapp.com/docs/faqs/security/ip-whitelist/)

## Creating a New User

1. Login to your MySQL server  
2. In the command line, connect to a database by running `USE <database name>`  
3. In the command line, create a user by running `CREATE USER <user name> WITH PASSWORD '<new password>';`  
4. The MySQL server URL, the username, and password are all used in the Blueprints below  
