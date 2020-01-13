# Environment Variables

## Definition

Environment Variables are variables that are set at the beginning of a run for the current Vessel. These types of variables are the preferred way to pass secrets \(password, API tokens, etc.\) to scripts.

Environment Variables are like variables in other programming languages. They all have a key and a value. By referencing the name in your program, you can retrieve the value. There are usually special manners with which to retrieve Environment Variables as opposed to "normal" variables in a programming language. Here's how you can access these Environment Variables in your code.

{% tabs %}
{% tab title="Python" %}
```text
os.environ.get('OPERATOR_A')
```
{% endtab %}

{% tab title="Bash" %}
```text
${OPERATOR_A}
```
{% endtab %}
{% endtabs %}

Secrets required by your programs should **never** be hard-coded into the script. Instead, use Environment Variables to pass them to your script. Environment Variables set in Shipyard are not visible in the UI and are encrypted.

As seen in the picture above, each Environment Variable is set per row, with the provided KEY and value.

There are 3 distinct ways that your environment variable values can show up.

*  **Visible** - By clicking the eye icon, you can see the text that you just typed in.
*  **Hidden** - By default, anything you type will remain hidden.
*  **Redacted** - By default, if you have previously saved sensitive information in an environment variable, we don't surface this information. This is done for security reasons so that the secrets are not downloaded to your browser. You will only see environment variables that you typed in your current session.

When you first create Environment Variables, all values should be filled out. When editing environment variables in the future, leaving the value field blank will result in Shipyard continuing to use the previously set Value for that KEY.

Staying inline with programming best practices, we recommend that all of your environment variable names be in ALL CAPS, but Shipyard doesn't require it.

## Limitations

1. Previously stored environment variables can never be viewed.
2. Leaving a value as blank will result in the value not updating. If you need to set a value to be blank, you will need to delete it, save the Vessel, then recreate the environment variable with a blank value.

