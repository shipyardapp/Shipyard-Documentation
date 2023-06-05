---
id: microsoft-sql-server-authorization
sidebar_position: 1
title: Microsoft SQL Server Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Microsoft SQL Server to work with Shipyard's low-code Microsoft SQL Server templates.
keywords:
- microsoft sql server
- blueprint
- template
- authorization
---

# Microsoft SQL Server Authorization
Connecting Microsoft SQL Server to Shipyard requires you to have:
1. A Microsoft SQL Server user with read/write access to the database and all associated tables/views you wish to access. We recommend setting up an account specifically for Shipyard access, although you can use an existing user.
2. Shipyard [IP Addresses whitelisted](https://www.shipyardapp.com/docs/faqs/security/ip-whitelist/)

## Creating a New User

1. Login to your Microsoft SQL Server    
2. Create a login either:  
	a. On the command line by running `CREATE LOGIN <login value> WITH PASSWORD = '<new password>';`  
	b. In the Object Explorer following [these instructions](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-login?view=sql-server-ver15)  
3. Create a user either:  
	a. On the command line by running `CREATE USER <user name> FOR LOGIN '<login value>';`  
	b. In the Object Explorer following [these instructions](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-database-user?view=sql-server-ver15)  
3. The server URL, the username, and password are all used in the Blueprints below  
