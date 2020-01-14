# Building a more Advanced "Hello World" Vessel

## Overview

In this tutorial, you'll walk through the steps required to set up a more advanced Vessel that prints `Hello, World`. This contains many of the same steps as our original Hello World tutorial, with added steps to teach more features of the platform. By the end of the tutorial, you'll be able to:

* Set up a Vessel using a Code Blueprint
* Upload a script to Shipyard.
* Pass arguments to your solution.
* Pass environment variables to your solution.
* Install packages for your solution.
* Reference platform variables.
* Create a schedule.
* Check to verify that a Vessel ran successfully.

{% hint style="warning" %}
**Note:** For the sake of the this tutorial, we suggest starting off by building a Vessel inside of a Project called "Playground". You can follow [**this tutorial** ](building-playground-project.md)to set that up.
{% endhint %}

## Steps

1. Using the sidebar, click on "Projects" to expand the list of projects.
2. Click on the "Playground" project. You'll be directed to the Vessels tab for the Playground project.
3. Click on the "Build Vessel" button in the top-right corner of the screen.  


   ![](../.gitbook/assets/image%20%2819%29.png)

  

4. A modal will pop up asking you what type of blueprint you would like to use to build your Vessel. On the left side of the modal, you'll see an option for a **Code Blueprint**. Click "Select" for this option.

![](../.gitbook/assets/image%20%287%29.png)

{% hint style="success" %}
You've successfully started the setup flow for building a Vessel using a Code Blueprint! 
{% endhint %}

We'll now walk through the process of filling out the next 5 steps to create our "Hello World" Vessel. Select the tab of either **Python** or **Bash** to get language specific instructions.

### Step 1 - Select a Blueprint

![](../.gitbook/assets/image%20%2824%29.png)

{% tabs %}
{% tab title="Python" %}
Click on the **Python** Blueprint. You'll be immediately redirected to the next step.
{% endtab %}

{% tab title="Bash" %}
Click on the **Bash** Blueprint. You'll be immediately redirected to the next step.
{% endtab %}
{% endtabs %}

### Step 2 - Provide your Code

On the left side of the screen, make sure the **Upload** button is selected. This will change the fields below to look like the following:

{% tabs %}
{% tab title="Python" %}
![](../.gitbook/assets/image%20%2813%29.png)

1. Download the following file to your computer.
2. Click the upload section of page and select this file.
3. On the right-hand side of the screen, there is a field entitled **File to Run**. Because we only have the single file that we created on the left-hand side that we want to run, you'll need to write `hello_world_advanced.py`  in this field.
4. Click the "Next Step" button at the bottom of the screen.

![](../.gitbook/assets/image%20%289%29.png)
{% endtab %}

{% tab title="Bash" %}
1. In the field entitled **File Name** write `hello_world.sh` . This is now the name of your script.
2. In the field titled **Code** write `echo 'Hello, World!'` . Your script `hello_world.sh`  now contains the shell command to print this famous message.
3. On the right-hand side of the screen, there is a field entitled **File to Run**. Because we only have the single file that we created on the left-hand side that we want to run, you'll need to write `hello_world.sh`  in this field.
4. Click the "Next Step" button at the bottom of the screen.
{% endtab %}
{% endtabs %}

### **Step 3 - Requirements**

For this tutorial, we don't have any environment variables to set up or packages to install. Go ahead and click the **Next Step** button at the bottom of the screen.

### Step 4 - Triggers

1. Make sure the **Schedule** button is selected.
2. Click the Plus icon to make a new schedule.
3. Under **How Often** select **Daily**.
4. Select a time that's 10 minutes in the future from now.

![](../.gitbook/assets/image%20%2812%29.png)

{% hint style="warning" %}
**Note:** The Vessel will be scheduled according to it's project's timezone. If you didn't set the Playground project to your current time zone, it will not be scheduled to run 10 minutes in the future.
{% endhint %}

Click the **Next Step** button at the bottom of the screen.

