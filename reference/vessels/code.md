# Code

## Definition

Code can be provided either by the In-App Editor, the File Upload system, or via a Git connection. All code executed on our platform is subject to our [Terms of Service](https://www.shipyardapp.com/legal/terms).

### In-App Editor <a id="in-app-editor"></a>

The in-app editor allows you to copy and paste your code directly into Shipyard and make changes as needed. If this option is selected, both the **file name** and **code** fields must be filled out.

This solution is perfect for smaller code snippets that you may need to change and edit on the fly.

### File Upload <a id="file-upload"></a>

The file upload system allows you to upload a single file on your machine that contains the necessary components for your code to work.

After uploading a file, the uploaded file name will remain present. Clicking the file name will download the contents back to your local machine. Uploading a new file or clicking the trash icon will remove the existing file altogether.

Shipyard only supports the uploading and storage of a single file per Vessel. If you have multiple files that your script uses, you will need to compress the files together and upload that file. Upon running your Vessel, Shipyard will automatically decompress the contents to the home directory.

### Git Connection

The Git connection allows you to sync with code that lives in an external git version control platform \(e.g. Github\). This connection consists of 3 components:

* **Repo** - Select the repository where your code lives.
* **Code Source** - Select the branch or tag that contains the code you want to use.
* **Git Clone Location** - Choose whether the repository code should be cloned into the current working directory or a folder named after your repository \(the default cloning method\).

At runtime, the contents of this repository and branch/tag will be cloned, ensuring that the latest code commit is used.

## Screenshots

![In-App Editor](../../.gitbook/assets/image%20%2886%29.png)

![](../../.gitbook/assets/image%20%283%29.png)

![Git Connection](../../.gitbook/assets/image%20%2883%29.png)

## Limitations

1. Every time you upload a file using the upload method, the new upload **replaces everything** that has previously been uploaded, **including** any text in the in-app editor.
2. The in-app editor only supports editing one file per Vessel.
3. You can only have one file uploaded at a time.
4. The git connection only supports Github at the moment.
5. Only `.zip` and `.tar` compression formats are decompressed at runtime. There is no support for `.7z`  `.gz`  `.bz3`  `.xz` or `.lz` 
6. Automatic decompression only happens at the highest level. Shipyard will not decompress multiple levels of folders or files.

## Learn More

* [How to Download Uploaded Code](../../how-tos/vessels/how-to-download-uploaded-code.md)

