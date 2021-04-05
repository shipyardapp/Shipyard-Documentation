---
id: troubleshooting
title: Troubleshooting and Debugging
hide_title: true
description: A list of common errors and how to debug them.
keywords:
  - debug
  - troubleshoot
---

## Module Not Found

`ModuleNotFoundError: No module named 'xxxx'`

If your script runs into this issue, there's a few likely scenarios:
1. You haven't provided the right [External Package Dependendencies](reference/requirements/external-package-dependencies.md) on the requirements tab or through a `requirements.txt` file.
2. You have provided a package incorrectly, either by:
   1. Including a typo in the package name.
   2. Not formatting the version number properly.
   3. Listing a version that doesn't exist.

To test this out on your local machine, you can spin up a new virtual environment and pip install packages one by one. If one throws an error, that's your culprit.

Unfortunately, if pip runs into a single error during installation, it will fail to install all remaining packages listed.

## No such file or directory

### Beginning of Output
If this error appears printed at the beginning of your output and your Vessel appears to never run, the likely culprit is due to the [File to Run](reference/code/command.md#file-to-run) field either containing, or not containing, the correct folder name.

1. If you're using a Git Connection, make sure to [follow these instructions](reference/code/git-connection.md#accessing-code-from-git) to reference the file name correctly.
2. If you're not storing files in a folder structure, make sure the File to Run field only contains the file name.
3. If you are using a folder structure, make sure the File to Run field contains the exact location of the file.

### Middle/End of Output
If this error appears towards the end of your output and your Vessel appears to have run partially, the likely culprit is that your code is referencing the wrong file name or location.

It is sometimes difficult to remember all of the files that would be available to your Vessels in a Fleet. We recommend this guide to [list all available files](how-tos/fleets/see-all-files.md) so you can better visualize the file names.