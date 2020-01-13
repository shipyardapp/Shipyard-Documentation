# Blueprint Variables

## Definition

Blueprint Variables are the variables that code relies on user input for. They don't exist directly in your code. Instead, they become present in the system as environment variables that your Blueprint can use while running.  
  
The user who creates a Vessel from your Custom Blueprint is going to provide the their own values on the Form Input page for variables you define in the Blueprint. Those values then become available each time that the Vessel runs.

## Components

**Name** - A required string of letters and digits. This name will be used to reference the data input by a user. Variable names must be unique \(case insensitive\) within a Blueprint.

**Variable** **Type** -  A high level choice that helps provide validation for the user input. The following are the currently available variable types:

*  **Alphanumeric -** Lets the user provide a string of text.
*  **Integer -** Lets the user provide a number, rounded down.
*  **Floating Point -** Lets the user provide a decimal number.
*  **Boolean** -  Lets the user select either a `TRUE`  or `FALSE`  value in the form of a checkbox.
*  **Date** - Allows the user to provide a date, using a date selector, in the `YYYY/MM/DD`  format.
*  **Select -**  Allows a Blueprint creator to define a restricted set of valid values. These values contain both a Display Name, shown to the user, and an internal name, passed to the code. Only those values that you define here will be available to the user. 
*  **Password** - Allows the user to provide a string that gets hidden by default. This value will not be displayed upon future edits \(similar to the behavior of Environment Variables\) for security purposes.
*  **File Upload** - Allows the user to upload a file manually to be used by the code.

No matter the selected variable type, the final user input will always passed back to your code as a string.  
  
**Required** - Indicates whether or not the user will have to provide this value for the Vessel to be built successfully.  
  
**Default Value / Options** - Provides a mechanism for defining the default value a variable should have if the user does not specify one when creating the Vessel. This field changes based on the variable type selected.

**Placeholder** - Greyed out text that you want the user to see in the input box they have to fill out. Good for providing example values.

**Description** - An optional value that will display in a tooltip next to the variable name. This should be provided so that users of your Template know what values should be input and what your Blueprint is going to do with that value.

A Blueprint can contain as many variables as you want. Blueprint variables can be re-ordered to make it easier for users to understand the data input.  


## Accessing Values

All of the variables that are defined in your Blueprint are provided at runtime as environment variables.

The environment variable name is formatted to be the variable name, in ALL CAPS, with special characters removed and white space replaced with `_`  name. For example, if a variable's name is **Operator A**, then its environment variable name will be **OPERATOR\_A**. 

**Note:** A Blueprint's environment variables and Blueprint variables **are** **both** set as environment variables that can be accessed at runtime. It's important to make sure that the naming between these two sections doesn't overlap. Additionally, make sure not to set any variables to important environment variable names like `PATH` or `HOME` unless you really know what you're doing.

There are two ways to retrieve the environment variable value in your script.

### **Set Variables Using Environment Variables**

In your code, you can obtain the value for the variable just like you would any other environment variable. For more information, visit the Environment Variable article.

### **Pass Variables Into Script**

You can obtain the variable's value via the command arguments by referencing the variable using `${VARIABLE_NAME}`. In practice, it will look like this:

We recommend this option, as it makes it super clear which variables are being passed to the script and how they are being used.

## Limitations

1. A Blueprint cannot have two variables with the same name.
2. A Blueprint variable cannot be conditionally shown or hidden based on a user's selection.

