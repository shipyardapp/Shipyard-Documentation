---
id: dbt-core-set-up-data-warehouse
title: dbt Core Tutorial Part 1 - Setting Up Your Data Warehouse
sidebar_label: Part 1 - Setting Up Your Data Warehouse
sidebar_position: 1
hide_title: true
description: Set up data in your data warehouse of choice (Snowflake, Databricks, BigQuery, or Redshift) to begin using dbt Core. Part one of a three part series on running dbt Core in the cloud.
keywords:
  - dbt
  - dbt core
  - data warehouse
  - data build tool
  - snowflake
  - bigquery
  - redshift
  - databricks
  - tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# dbt Core Tutorial Part 1 - Setting Up Your Data Warehouse

To begin our tutorial for dbt core in Shipyard, we need to setup an example dataset to work with. This guide will follow the steps in dbt's tutorial, however, we will setup the following cloud data warehouses:
* [BigQuery](#bigquery)
* [Databricks](#databricks)
* [Redshift](#redshift)
* [Snowflake](#snowflake)

Before getting into the steps of setting up the different cloud data warehouses, please download the sample files that we will use for this tutorial [here](https://drive.google.com/drive/folders/15gLVxj5-aMee0CRZ7H9Ht-S9CkZ1jB6y?usp=sharing).

:::note
This tutorial assumes that you have an account created for your chosen data warehouse. If not, please go create an account before proceeding.
:::


## Bigquery

### Set-Up demo project
1. Navigate to the [BigQuery Console](https://console.cloud.google.com/bigquery?project=dbt-demos)
2. Click to access the **Project Browser** on the top left corner of your screen.

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_16_15_34_51.png)

3. On the top right of the Project Browser, click New Project. This will redirect you to put information in about your new project.
4. Under **Project Name**, enter `dbt-demos`. Organization and Location can stay at their default values.
5. Click **Create**.

### Upload Data
1. Locate the `dbt-demos` project that we created on the left side bar.
2. Click the 3 dots and choose **Create dataset**

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_16_15_54_46.png)

3. For **Dataset ID**, enter `538_football`.
4. Click **Create Dataset**.
5. Expand the dbt-demos project on the left sidebar by clicking the arrow. Locate the 538_football dataset. Click the 3 dots and choose **Create Table**.
6. Under **Create Table from**, choose Upload and choose `spi_matches_latest.csv`.
7. Under **File Format**, choose CSV.
8. Project and Dataset should automatically be set to `dbt-demos` and `538_football` respectively.
9. Under table, enter `stg_football_matches`
10. Check the box for **Auto Detect**.

Your settings should look like this:

![](../../.gitbook/assets/shipyard_2022_07_18_10_20_43.png)

11.  Click **Create Table**.
12.  Repeat steps 5-11 with the second CSV file, however name the table `stg_football_rankings`.

You should be able to see the two tables you created under the `538_football` dataset on the left sidebar as seen in this photo:

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_16_16_34_08.png)

You should now be able to query `dbt-demos.538_football.stg_football_matches` and `dbt-demos.538_football.stg_football_matches`. Feel free to run this query to verify that this process worked successfully: 
```sql
SELECT * FROM `dbt-demos.538_football.stg_football_matches`
```


## Snowflake

### Set-Up Users, Roles, Warehouses, and Database

1. From the Snowflake homepage, click **Worksheets** on the top of the webpage.
2. Input the follow query and run it:

```
USE ROLE accountadmin;
-- dbt roles
CREATE OR REPLACE ROLE dbt_dev_role;
CREATE OR REPLACE USER dbt_user PASSWORD = "sailboats";
GRANT ROLE dbt_dev_role,dbt_prod_role TO USER dbt_user;
GRANT ROLE dbt_dev_role,dbt_prod_role TO ROLE accountadmin;
CREATE OR REPLACE WAREHOUSE dbt_dev_wh  WITH WAREHOUSE_SIZE = 'XSMALL' AUTO_SUSPEND = 60 AUTO_RESUME = TRUE MIN_CLUSTER_COUNT = 1 MAX_CLUSTER_COUNT = 1 INITIALLY_SUSPENDED = TRUE;
GRANT ALL ON WAREHOUSE dbt_dev_wh  TO ROLE dbt_dev_role;
CREATE OR REPLACE DATABASE dbt_hol_dev;
GRANT ALL ON DATABASE dbt_hol_dev  TO ROLE dbt_dev_role;
GRANT ALL ON ALL SCHEMAS IN DATABASE dbt_hol_dev   TO ROLE dbt_dev_role
```
This query creates an example user, warehouse, and database to use throughout the tutorial.

3. Click the **Databases** button on the top left of your screen. You should see the `DBT_HOL_DEV` database that we created:

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_20_14_47_37.png)

4. Click **Worksheets** on the top of your page.

### Create Tables
1. Enter the following query into the worksheet to create our `stg_football_rankings` table:

```sql
CREATE TABLE DBT_HOL_DEV.PUBLIC.STG_FOOTBALL_RANKINGS(
  rank integer,
  prev_rank integer,
  name string,
  league string,
  off float,
  def float,
  spi float
)
```


2.  Click **Run**.
3.  Enter the following query into a worksheet to create our `stg_football_matches` table:

```sql
CREATE TABLE DBT_HOL_DEV.PUBLIC.STG_FOOTBALL_MATCHES(
  season integer,
  date date,
  league_id integer,
  league string,
  team1 string,
  team2 string,
  spi1 float,
  spi2 float,
  prob1 float,
  prob2 float,
  probtie float,
  proj_score1 float,
  proj_score2 float,
  importance1 float,
  importance2 float,
  score1 integer,
  score2 integer,
  xg1 float,
  xg2 float,
  nsxg1 float,
  nsxg2 float,
  adj_score1 float,
  adj_score2 float
 )
 ```
### Load Data into Tables
1.  Click **Databases** on the top of your Snowflake page.
2.  Click `DBT_HOL_DEV`
3.  Click `STG_FOOTBALL_RANKINGS`.
4.  Click **Load Data** which will bring up the load data menu.
5.  Choose **DBT_DEV_WH** as the warehouse to load data. Click next.
6.  Click **Select Files** and select `spi_global_rankings.csv`. Click next.
7.  Click the plus sign next to the drop down to create our file format.
8.  Under **name**, enter **dbt_tutorial_csv**.
9.  Change header lines to skip to 1 from 0.
10. Keep the other settings at their default.
11. Click **Finish**.
12. Click **Load**.
13. After the data has loaded into Snowflake, you will receive a success message that looks like this:

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_20_15_04_46.png)

14. Click **Databases** on the top of your Snowflake page.
15. Click `DBT_HOL_DEV`.
16. Click `STG_FOOTBALL_MATCHES`.
17. Click **Load Data** which will bring up the load data menu.
18. Choose **DBT_DEV_WH** as the warehouse to load data. Click next.
19. Click **Select Files** and select `spi_matches_latest.csv`. Click next.
20. Use the dropdown menu to select the **dbt_tutorial_csv** as the file format.
21. Click **Finish**.
22. Click **Load**.

You should be able to see both tables listed under your `DBT_HOL_DEV` database now.

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_20_15_12_16.png)

23. Click on `STG_FOOTBALL_RANKINGS` and click **Grant Privileges** on the right of the screen. Grant all actions to the `DBT_DEV_ROLE`.
24. Repeat this for `STG_FOOTBALL_MATCHES`.
 
You should now be able to query `"DBT_HOL_DEV"."PUBLIC"."STG_FOOTBALL_RANKINGS"` and `"DBT_HOL_DEV"."PUBLIC"."STG_FOOTBALL_MATCHES"`. Feel free to run this query to verify that this process worked successfully: 
```sql
select * from "DBT_HOL_DEV"."PUBLIC"."STG_FOOTBALL_MATCHES"
```

## Databricks

### Create Tables and Load Data
1.  From the Databricks homepage, navigate to the left sidebar and select data. This will open up the sidebar to look at the data currently stored in Databricks.
2.  Click **Create Table**. This will take you to the Create New Table page.
3.  Under Files, click the box to browse your files and select `spi_matches_latest.csv`.

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_19_11_12_40.png)

4.  Click **Create Table with UI**
5.  Select Cluster to preview table. Click **Preview Table**. This will give you the ability to specify options for the table.

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_19_11_13_44.png)

6.  Under **Table Name**, enter `stg_football_matches`.
7.  Under **Create in Database**, feel free to change to any database you like. We will use the default for simplicity's sake.
8.  Under **File Type**, make sure CSV is selected.
9.  Under **Column Delimiter**, make sure `,` is in the box.
10. Check the box for **First row is header**.
11. Check the box for **Infer schema**.
12. Click **Create Table**. This will redirect to the table that you just created:

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_19_11_25_05.png)

13. Click **Data** on the left sidebar to open the data sidebar. Click **Create Table**.
14. Repeat steps 3-12 with the following changes:
    1.  Under Files, click the box to browse your files and select `spi_global_rankings.csv`.
    2.  Under **Table Name**, enter `stg_football_rankings`.
15. After repeating those steps with the indicated changes, your resulting page should look like this:

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_19_11_31_39.png)

You should now be able to query `default.stg_football_rankings` and `default.stg_football_matches`. Feel free to run this query to verify that this process worked successfully: 
```sql
select * from default.stg_football_matches
```


## Redshift

:::note
This tutorial assumes that you have done the following:

  * setup the appropriate permissions (see [authorization guide](../../blueprint-library/amazon-redshift/amazon-redshift-authorization.md))
  * created a Redshift cluster
  * created an S3 bucket to store the sample files
:::

### Load data into S3

1. From your AWS console, navigate to your S3 buckets.
2. Navigate into the bucket you created for this tutorial by clicking on its name.
3. Create a folder inside of your bucket named `fivethirtyeight_football` by clicking the **Create Folder** button.
4. Once the folder is created, navigate inside of it.
5. Click the **Upload** button to begin the process of uploading our sample files.
6. Click **Add Files**.
7. Select the two files from your file system and click open. After you do that, your page should look like this:

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_23_16_19_24.png)

8. Click **Upload**. After the upload is complete, you should be shown an upload succeeded banner that looks like this:

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_23_16_24_11.png)

### Create Tables in Redshift

1. Navigate into Redshift and use the navigation menu to go to the query editor.
2. Create new schema for our sample data named `soccer` by running this query:

```sql
create schema if not exists soccer
```
3. Run the following query to create tables inside of our new soccer schema to hold our uploaded data in S3.

```sql
create table soccer.stg_football_rankings(
  rank integer,
  prev_rank integer,
  name varchar(255),
  league varchar(255),
  offense float,
  def float,
  spi float
);

create table soccer.stg_football_matches(
  season integer,
  date date,
  league_id integer,
  league varchar(255),
  team1 varchar(255),
  team2 varchar(255),
  spi1 float,
  spi2 float,
  prob1 float,
  prob2 float,
  probtie float,
  proj_score1 float,
  proj_score2 float,
  importance1 float,
  importance2 float,
  score1 integer,
  score2 integer,
  xg1 float,
  xg2 float,
  nsxg1 float,
  nsxg2 float,
  adj_score1 float,
  adj_score2 float
);
```

Now that we have our tables setup in Redshift. We need to load the data from S3 into the tables.
### Load data from S3 into Redshift Tables

1. Navigate to S3 and find the files that we uploaded in the prior steps.
2. Click the name of each file to locate the S3 URI.
3. Copy and paste the S3 URIs for use later in these steps.

![](../.gitbook/assets/../../../.gitbook/assets/shipyard_2022_05_24_10_22_12.png)

4. Navigate back to the Redshift console.
5. Run the following two queries replacing S3 URI, IAM_role, and region with the values that are specific to you:

```sql
copy soccer.stg_football_matches( season, date, league_id, league, team1, team2, spi1, spi2, prob1, prob2, probtie, proj_score1, proj_score2, importance1, importance2, score1, score2, xg1, xg2, nsxg1, nsxg2, adj_score1, adj_score2)
from 'S3 URI'
iam_role 'arn:aws:iam::XXXXXXXXXX:role/RoleName'
region 'us-east-1'
delimiter ','
ignoreheader 1
acceptinvchars;
```

```sql
copy soccer.stg_football_rankings( rank, prev_rank, name, league, offense, def, spi)
from 'S3 URI'
iam_role 'arn:aws:iam::XXXXXXXXXX:role/RoleName'
region 'us-east-1'
delimiter ','
ignoreheader 1
acceptinvchars;
```

You should now be able to query `soccer.stg_football_rankings` and `soccer.stg_football_matches`. Feel free to run this query to verify that this process worked successfully: 
```sql
select * from soccer.stg_football_matches
```
