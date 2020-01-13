# Command

## Definition

A Command consists of values that are used to execute a program within an operating system. A command typically starts with the name of the programming language to run, then the script name. At the end, you can provide the script with additional arguments to affect exactly how the script runs.

The following is an example of a command that runs a script written in Python.

```text
python3 script_name.py all --columns name,id,time --split
```

Within the Shipyard platform, a Command is broken into distinct sections of the Program, the File to Run, and the Arguments.

**Program** - `python3`  
**File to Run** - `script_name.py`  
**Arguments** -  `--columns name,id,time`  & `all`  & `--split`  

### Program <a id="program"></a>

This option defines which installed package on Shipyard's operating system should be used to execute your code. The available options under program are based on the Code Blueprint that you select.  
  
**Python** - python3  
**Bash** - bash

Every selected language also has the option to use `bash` as its program of choice. In this way, you can execute a shell script while still having a language pre-installed.  


### File to Run <a id="file-to-run"></a>

The File to Run should relate to the single file that you want the selected program to execute. Examples of common formatting:  
  
**Python** - script\_name.py  
**Bash** - scriptname.sh

### Arguments <a id="arguments"></a>

Arguments are comprised of flags and values and are added to the command in the order they are entered \(although generally order should not matter\). There are 3 potential use cases for arguments:

**Value Only** - Used for positional arguments. These must be placed at the top of the list.  
**Flag Only** - Serves as a boolean value to turn a function on or off.  
**Flag and Value** - Pass through a provided value to a specific argument name.  
 

**Note:** Command arguments are not suitable for secrets. They are available to change the behavior of your script with values that are not secret, like a file name to process or column names in a table to work with.

### Limitations of the Command <a id="limitations-of-the-command"></a>

1. Shipyard can only run a single command at a time. If multiple commands need to be run, you should create and run a single shell script that contains the code to run multiple commands successively.

