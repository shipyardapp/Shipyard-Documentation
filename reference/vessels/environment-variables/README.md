# Environment Variables

## Definition

Environment Variables are set at the beginning of a run for the current Vessel. These types of variables are the preferred way to pass secrets \(password, API tokens, etc.\) to scripts. Secrets required by your programs should **never** be hard-coded into the script. Instead, use Environment Variables to pass them to your script. 

Environment Variables all have a **KEY** and a **Value**. By referencing the variable's **KEY**, or name, in your program, you can retrieve the value. There are usually special manners with which to retrieve Environment Variables as opposed to "normal" variables in a programming language. Here's how you can access these Environment Variables in your code.

{% tabs %}
{% tab title="Python" %}
```text
import os

var = os.environ.get('OPERATOR_A','default value')
```
{% endtab %}

{% tab title="Bash" %}
```text
$OPERATOR_A
```
{% endtab %}
{% endtabs %}

Environment Variables set in Shipyard are not visible in the UI and are encrypted on the backend. There are 3 distinct ways that your environment variable values can show up.

* **Redacted** - By default, anything you type will remain redacted and show as `•••••••`
* **Visible** - By clicking the eye icon, you can see the text that you just typed in.
* **\(Hidden\)** - By default, if you have previously saved sensitive information in an environment variable, we don't surface this information. This is done for security reasons so that the secrets are not downloaded to your browser. You will only see environment variables that you typed in your current session.

When you first create Environment Variables, both the **KEY** and **Value** fields should be filled out. When editing environment variables in the future, leaving the **Value** field blank will result in Shipyard continuing to use the previously set value for that **KEY**.

Staying inline with programming best practices, we recommend that all of your environment variable names be in ALL CAPS, but Shipyard does not require it.

## Screenshots

![](../../../.gitbook/assets/image%20%2879%29.png)

## Limitations

1. Previously stored environment variables can never be viewed.
2. Leaving a value as blank will result in the value not updating. If you need to set a value to be blank, you will need to delete it, save the Vessel, then recreate the environment variable with a blank value.



