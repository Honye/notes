
### Tomcat 目录结构

目录   |   说明
:----: | ----
/bin   |   存放各种平台下用于启动和停止 Tomcat 的命令文件
/conf   |   存放 Tomcat 服务器的各种配置文件
/lib   |   存放 Tomcat 服务器所需的各种 jar 文件
/logs   |   存放 Tomcat 的日志文件
/temp   |   Tomcat 运行时用于存放临时文件
/webapps   |   当发布 Web 应用时，默认将 Web 应用的文件发布到此目录中
/work   |   Tomcat 由 JSP 生成的 Servlet 放于此目录下

### 修改默认端口号
修改 Tomcat 安装目录下 `conf/server.xml` 文件
```xml
<!-- 修改 port 属性 -->
<Connector port="8080" 
    protocol="HTTP/1.1"
    connectionTimeout="20000"
    redirectPort="8443" 
/>
```