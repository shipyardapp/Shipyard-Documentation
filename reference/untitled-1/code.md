# Code

## Definition

Code can be provided either by the In-App Editor, or the File Upload system. All code executed on our platform is subject to our Terms of Use.

### In-App Editor <a id="in-app-editor"></a>

The in-app editor allows you to copy and paste your code directly into Shipyard and make changes as needed. If this option is selected, both the file name and code must be filled out.

Syntax highlighting is built in, using the language of the Code Blueprint that you selected. This solution is perfect for smaller code snippets that you may need to change and edit on the fly.

### File Upload <a id="file-upload"></a>

The file upload system allows you to upload a single file on your machine that contains the necessary components for your code to work.

After uploading a file, the uploaded file name will remain present. Clicking the file name will download the contents back to your local machine. Uploading a new file or clicking the trash icon will remove the existing file altogether.

Shipyard only supports the uploading of a single file. If you have multiple files that your script uses, you will need to compress the files together and upload that file. Upon running your Vessel, Shipyard will automatically decompress the contents to the home directory.

## Limitations

1. Every time you upload a file using the upload method, the new upload **replaces everything** that has previously been uploaded, **including** any text in the in-app editor.
2. The in-app editor only supports editing one file per Vessel.
3. You can only have one file uploaded at a time.
4. Only `.zip` and `.tar` compression formats are decompressed at runtime. There is no support for `.7z`  `.gz`  `.bz3`  `.xz` or `.lz` 
5. Automatic decompression only happens at the highest level. Shipyard will not decompress multiple levels of 

