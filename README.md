#File Uploads With Node

Simple file uploads using node, express w/ multer

Adapted from [this tutorial](https://www.codementor.io/tips/9172397814/setup-file-uploading-in-an-express-js-application-using-multer-js)

---
##Issues:

* Files are uploaded to our uploads folder *without* the file extension
* need to write function to pull the file name and extension from the object and save it as such.