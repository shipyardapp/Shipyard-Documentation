---
id: first-blueprint
title: Building your First Blueprint
hide_title: true
sidebar_label: Building your First Blueprint
description: In-depth tutorial to walk you through the steps needed to set up a repeatable Blueprint that you can build Vessels with.
keywords:
  - blueprint
  - template
  - tutorial
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Building Your First Blueprint

## Overview

In this tutorial, you'll walk through the steps required to set up a very simple Blueprint that contains multiple inputs types.

:::note
This Blueprint will accomplish the same thing
:::

* A Blueprint, built with Python, that generates a CSV file containing stock data and prints the output.
* A Vessel, built with a Blueprint, that emails the contents of the CSV file. 

By the end of the tutorial, you will know how to:

* Set up a Blueprint with Python
* Set up Blueprint Variables that pass data to your code with either Arguments or Environment Variables

# Step 1 - Create a New Organization Blueprint

1. Click the **Blueprints** button on the sidebar.
2. Click the **Add BLueprint** button in the top-right corner.
3. Select **Python**.

# Step 2 - Create Blueprint Variables

1. Click the **+** icon to add a new Blueprint Variable

# Step 3 - Provide Internals
<Tabs
defaultValue="env"
values={[
{label: 'Environment Variables', value: 'env'},
{label: 'Arguments', value: 'args'},
]}>
<TabItem value="env">
</TabItem>
<TabItem value="args">
</TabItem>

```python title="stocks.py"
# Import external packages
import pandas_datareader as web
import pandas as pd
import datetime
import os
import ast
 
# Set key variables
today = datetime.date.today()  
start = today - datetime.timedelta(days=int(os.environ.get('DATE_RANGE')))
end = today
stocks = ast.literal_eval(os.environ.get('STOCKS'))
file_name = os.environ.get('FILE_NAME')

# Create stock price dataframe
df = pd.DataFrame()
for stock in stocks:
  stock_df = web.DataReader(stock, 'yahoo', start, end)
  stock_df['symbol'] = stock
  df = pd.concat([stock_df,df])

# Set better print options
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
pd.set_option('display.max_colwidth', None)
 
# Create CSV with stock prices
df.to_csv(file_name)
print(f'{file_name} was successfully created.')

# Print the contents of the generated dataframe.
print(df)
```