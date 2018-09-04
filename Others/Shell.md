# 命令行

1. 查看文件 MD5 值（或其他 Hash 值）

   **windows**

   Shell：

   语法：`certutil -hashfile {filepath} {hashtype}`

   说明：

   ​	

   ​	

   ​			filepath：文件路径

   	hashtype：Hash 值类型，包括 MD5、SHA1、SHA256

   示例：

   ```shell
   certutil -hashfile markeditor_64_1.2.5.3.exe MD5
   certutil -hashfile markeditor_64_1.2.5.3.exe SHA1
   certutil -hashfile markeditor_64_1.2.5.3.exe SHA256
   ```

   PowerShell：

   语法：`GET-FileHash {filepath} -Algorithm {hashtype}|Format-List`

   说明：

   filepath：文件路径

   ​	hashtype：Hash 值类型，包括 SHA1、SHA256、SHA384、SHA512、MACTripleDES、MD5、RIPEMD160

   示例：

   ```powershell
   # GET-FileHash filepath -Algorithm MD5|Format-List
   GET-FileHash .\markeditor_64_1.2.5.3.exe -Algorithm MD5|Format-List
   ```

   **Linux**

   语法：`{hashcmd} {filepath}`

   说明：

   hashcmd：md5sum - 查看 MD5 值；sha1sum；sha256sum；

   filepath：文件路径

   示例：

   ```shell
   # certutil -hashfile filepath MD5
   certutil -hashfile markeditor_64_1.2.5.3.exe MD5
   # or
   # md5sum filepath
   md5sum markeditor_64_1.2.5.3.exe
   ```
