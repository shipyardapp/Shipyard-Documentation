# Command

## Definition

A Command consists of values that are used to execute a program within an operating system. A command typically starts with the name of the programming language to run, then the script name. At the end, you can provide the script with additional arguments to affect exactly how the script runs.

{% tabs %}
{% tab title="Python" %}
The following is an example of a command that runs a script written in Python.

```text
python3 script_name.py all --columns name,id,time --split
```

Within the Shipyard platform, a Command is broken into distinct sections of the Program, the File to Run, and the Arguments.

**Program** - `python3`  
**File to Run** - `script_name.py`  
**Arguments** -  `--columns`, `name` , ****`id`, `all` , `time` & `--split`  
{% endtab %}

{% tab title="Bash" %}
The following is an example of a command that runs a script written in Bash.

```text
bash scriptname.sh all --columns name,id,time --split
```

Within the Shipyard platform, a Command is broken into distinct sections of the Program, the File to Run, and the Arguments.

**Program** - `bash`  
**File to Run** - `scriptname.sh`  
**Arguments** -  `--columns`, `name` , ****`id`, `all` , `time` & `--split`  
{% endtab %}
{% endtabs %}

### Program <a id="program"></a>

This option defines which installed package on Shipyard's operating system should be used to execute your code. The available options under program are based on the Code Blueprint that you select.

{% tabs %}
{% tab title="Python" %}
`python3`
{% endtab %}

{% tab title="Bash" %}
`bash`
{% endtab %}
{% endtabs %}

### File to Run <a id="file-to-run"></a>

The File to Run should relate to the single file that you want the selected program to execute. Examples of common formatting:

{% tabs %}
{% tab title="Python" %}
`script_name.py`
{% endtab %}

{% tab title="Bash" %}
`scriptname.sh`
{% endtab %}
{% endtabs %}

### Arguments <a id="arguments"></a>

Arguments are comprised of flags and values and are added to the command in the order they are entered \(although generally order should not matter\).   
  
We currently only accept arguments that have **both** a Flag and a Value, as these more explicit.  
  
If you have a valid use case for needing positional arguments or a boolean flag, please reach out to support.

{% hint style="warning" %}
**Note:** Command arguments are not suitable for secrets. They are available to change the behavior of your script with values that are not secret, like a file name to process or column names in a table to work with.
{% endhint %}

## Screenshots

![](../../.gitbook/assets/image%20%2859%29.png)

## Limitations

1. Shipyard can only run a single command at a time. If multiple commands need to be run, you should create and run a single shell script that contains the code to run multiple commands successively.
2. Positional arguments that contain only values cannot be passed to your script.
3. Boolean arguments that contain only flags cannot be passed to your script.



