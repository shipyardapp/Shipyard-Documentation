---
id: databricks-sql-warehouse-authorization
sidebar_position: 1
title: Databricks SQL Warehouse Blueprint Authorization
hide_title: true
sidebar_label: Authorization
description: Instructions on how to authorize Databricks SQL Warehouse to work with Platform's low-code Databricks SQL Warehouse templates.
keywords:
  - databricks sql warehouse
  - blueprint
  - template
  - authorization
---

#  Authorization

In order to get started with the Databricks SQL Warehouse Blueprints, you will need generate an access token for programatic SQL access. Additionally, you will need to obtain the Server Host address as well as the HTTP Path for the SQL warehouse. This guide will outline how to obtain all necessary fields. 

## Obtaining an Access Token
1. On the sidebar, navigate to the SQL Warehouses tab. This will pull up the active warehouses in your workspace.

2. Select the Warehouse that the blueprints will be connecting to

![](https://cdn.sanity.io/images/2xyydva6/dev/64bab1fdc25752d3c01e7c3006ce6a47e46dd98a-841x213.png?w=450)

3. In bottom right corner of the `Connection details` tab, select the `Create a personal access token` link, then select `Generate new token`

![](https://cdn.sanity.io/images/2xyydva6/dev/baac94bcd0ab4a9d9ccbfec8820c4c2f12b463da-772x194.png?w=450)


4. This will prompt you to specify a comment and a lifetime. For the comment, you can put **Platform Blueprints**, and the lifetime can be left blank (meaning no expiration)

![](https://cdn.sanity.io/images/2xyydva6/dev/cdf2a395e30ef5919d06e23c920fee20cfab4884-519x299.png?w=450)

5. Be sure to copy the access token and save it a secure location

## Obtaining the Server Host and HTTP Path
Both the Server Host and HTTP can be found in the **Connection details** of a SQL Warehouse. 

![](https://cdn.sanity.io/images/2xyydva6/dev/115f5091bf47625f75fa2f9e658dd09a4bcb2ca2-768x460.png?w=450)

## Granting Appropriate Access
In order for the blueprints to run successfully, they will need read/write access for both tables and schemas. Have your Databricks Admin run the following for the email associated with the access token created for Platform:
```sql
-- for the catalog in use
GRANT USE CATALOG ON CATALOG <catalog> TO
<shipyard-token>;

GRANT CREATE ON CATALOG <catalog> TO 
<shipyard-token>;

-- for the schema in use
GRANT CREATE ON SCHEMA <schema> TO 
<shipyard-token>;

GRANT SELECT ON SCHEMA <schema> TO 
<shipyard-token>;

GRANT MODIFY ON SCHEMA <schema> TO 
<shipyard-token>;
```
