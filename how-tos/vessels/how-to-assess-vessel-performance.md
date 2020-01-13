# How to Assess Vessel Performance

## Overview

Once your Vessel is up and running on Shipyard, you'll want to track how it's performing over time, finding ways to prevent errors as they arise. There are multiple ways that you can assess Vessel performance.

## Steps

{% tabs %}
{% tab title="Project Level" %}
1. Navigate to the project of your choice.
2. On the main screen, you'll be able to visually see all of the Vessels that have been built under that project. The left-most column will show the last status for each given Vessel. 
3. Filter by status by clicking the "funnel" icon to the right of the column header. 
4. Select the status\(es\) you want to view and click "OK". This will allow you to see all Vessels whose last run matched the status\(es\) you selected.

If you want to assess the performance of a single Vessel, you'll need to dive into the **Vessel Level** tab.
{% endtab %}

{% tab title="Vessel Level" %}
1. Click a Vessel name to navigate to the Logs tab for that Vessel.  On this page, you'll be able to visually see all of the Logs that have been created under that Vessel. Additionally, you can use the scorecards at the top to understand the % of times that your Vessel is running successful.
2. Filter by status by clicking the "funnel" icon to the right of the column header. 
3. Select the status\(es\) you want to view and click "OK". This will allow you to see all Vessels whose last run matched the status\(es\) you selected.

At this point, you may want to understand more about why a Vessel failed or ran into a particular status at a given time. To do so, view the steps on the **Log Level** tab.
{% endtab %}

{% tab title="Log Level" %}
1. Click the Log ID to dive one step deeper.
2. Use the the top information boxes to dissect how long the vessel took to run, what the final exit code was, etc.
3. Use the code output section to dig into specific errors that may have been printed while the Vessel was running.
{% endtab %}
{% endtabs %}

## Further Reading

Understand all of the possible **statuses** that a Vessel can have.  
Understand the **Log data**.

