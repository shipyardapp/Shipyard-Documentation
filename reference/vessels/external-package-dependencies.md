# External Package Dependencies

## Definition

Every language that Shipyard supports has packages that can be installed to enhance the functionality and simplicity of your scripts. If your script uses an external package, you'll have to tell Shipyard what packages to install before running the script.

How you enter this information varies by language.

{% tabs %}
{% tab title="Python" %}
The Python Code Blueprint comes with `pip version 19.0.3` pre-installed, allowing you to easily install python package dependencies. In order for your Vessel to run successfully, you must provide a way to install these packages. There are 2 options in the platform for installing Python packages. 

### **Packages Module**

On the Requirements tab of every Vessel, the right hand side contains a module for installing packages. Packages should be formatted with the Package Name field filled out. Optionally, you can include a version for each package name that you've listed. Versions must be formatted in according to [Python standards](https://www.python.org/dev/peps/pep-0440/#version-specifiers).



### **Uploading requirements.txt**

You can also install package dependencies by including a `requirements.txt` file in the root directory of the file you upload, or by making the file in the in-app editor. For more information on how `requirements.txt` should be formatted, [read this guide](https://pip.pypa.io/en/stable/user_guide/#requirements-files).

In order to install public packages from GitHub \(that are not available on PyPA, or for different versions\) you will need to use the git+git scheme with the GitHub URL.

```text
git+git://github.com/Apache/Airflow@master#egg=airflow
```

{% hint style="info" %}
**Tips**: We recommend installing packages using the Packages Module so that team members can quickly view and change the version.
{% endhint %}
{% endtab %}

{% tab title="Bash" %}
The Bash Code Blueprints run inside Docker containers running a Debian image. Commands required in your Bash scripts come from Linux packages.

If you are writing Bash on your own machine, then you likely already know what commands are required from external dependencies. Those package names go in the Packages module located on the Define Requirements tab.

[Here](https://www.debian.org/distrib/packages) is the site to find all available packages you can use with Bash in Shipyard.
{% endtab %}
{% endtabs %}

## Screenshots

![Python Packages](../../.gitbook/assets/image%20%2864%29.png)



