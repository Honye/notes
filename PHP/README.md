# PHP

# Mac OSX

1. httpd.conf

   `/private/etc/apache2/httpd.conf`

   ```yaml
   # 取消下行注释（可能版本不一样）
   # LoadModule php7_module libexec/httpd/libphp7.so
   ```

2. DocumentRoot

   `/Library/WebServer/Documents`

   可在 `httpd.conf` 中设置

   改为

   ```yaml
   DocumentRoot "/Users/<your_user>/Sites"
   <Directory "/Users/<ypur_user>/Sites">
   ```

3. User & Group

   Apache 默认运行 User 为 `_www`，Group 为 `_www`，当我们尝试访问 DocumentRoot 中文件时会遇到权限问题。解决方案是将 User 替换为自己真实的用户名。

   ```yaml
   User <your_user>
   Group staff
   ```

4. ServerName

   ```yaml
   # 替换以下一行
   #ServerName www.example.com:80
   # 为以下一行
   ServerName localhost
   
   ```


