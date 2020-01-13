# Code Blueprints

## Definition

Code Blueprints allow you to write and run code from scratch with no changes to your existing code or additional configuration files.  The code is executed on Shipyard's cloud infrastructure in isolation.

When building a Vessel using a Code Blueprint, your script should return an exit code of 0 to indicate a successful run. Any other exit code indicates failure.

Additionally, your script should stop its work if it receives a SIGTERM \(15\) signal.

## Components

When creating a Vessel from a Code Blueprint, you must always provide the following elements:

1. Code
2. Command to execute the code
3. Vessel Information
4. Guardrails

You may also _optionally_ provide these elements:

1. External Package Dependencies
2. Environment Variables
3. Triggers
4. Notifications

## Language Differences

### Command

{% tabs %}
{% tab title="Python" %}
In order to build a Vessel with a  Python Code Blueprint, you'll need to give Shipyard a command to execute the code. In most cases, your command will look like this:

**Program** - `python3`  is the only available option  
**File to Run** - Reference a file name that ends in `.py`  
**Arguments** - Provide any command line arguments necessary for your script to run.
{% endtab %}

{% tab title="Bash" %}
In order to build a Vessel with a Bash Code Blueprint, you'll need to give Shipyard a command to execute the code. In most cases, your command will look like this:

**Program** - `bash`  is the only available option  
**File to Run** - Reference a file name that ends in `.sh`  
**Arguments** - Provide any command line arguments necessary for your script to run.
{% endtab %}
{% endtabs %}

### External Package Dependencies

{% tabs %}
{% tab title="Python" %}
The Python Code Blueprint comes with `pip version 19.0.3` pre-installed, allowing you to easily install python package dependencies. In order for your Vessel to run successfully, you must provide a way to install these packages. There are 3 options in the platform for installing Python packages. 

### **Packages Module**

On the Define Requirements tab of every Vessel, the right hand side contains a module for installing packages. Packages should be formatted with their Package Name. Optionally, you can include a version for each package name that you've listed. Versions must be formatted in according to [Python standards](https://www.python.org/dev/peps/pep-0440/#version-specifiers).

### **Including a requirements.txt**

You can also install package dependencies by including a `requirements.txt` file in the root directory of the file you upload, or by making the file in the in-app editor. For more information on how `requirements.txt` should be formatted, [read this guide](https://pip.pypa.io/en/stable/user_guide/#requirements-files).

In order to install public packages from GitHub \(that are not available on PyPA, or for different versions\) you will need to use the git+git scheme with the GitHub URL.

```text
git+git://github.com/Apache/Airflow@master#egg=airflow
```
{% endtab %}

{% tab title="Bash" %}
The Bash Code Blueprints run inside Docker containers running a Debian image. Commands required in your Bash scripts come from Linux packages.

If you are writing Bash on your own machine, then you likely already know what commands are required from external dependencies. Those package names go in the Packages module located on the Define Requirements tab.

[Here](https://www.debian.org/distrib/packages) is the site to find all available packages you can use with Bash in Shipyard.
{% endtab %}
{% endtabs %}

## Limitations

{% tabs %}
{% tab title="Python" %}
1. There is currently only support for a single version of the Python language, 3.7.
2. You cannot access a private repo in github as part of your package requirements. We are actively working on ways to better support CI/CD through git connections.
{% endtab %}

{% tab title="Bash" %}
1. Only whitelisted packages can be installed. This is to prevent malicious activity. If you have a specific package that you need installed, reach out to support.
{% endtab %}
{% endtabs %}

