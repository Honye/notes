# Apache Virtual Host

虚拟主机指的是在单一机器上运行多个网站（例如 api.examlple.com 和 docs.example.com）。虚拟主机可以基于 IP，即每个 IP 一个站点； 或者基于名称， 即每个 IP 多个站点。这些站点运行在同一物理服务器上的事实不会明显的透漏给最终用户

官方给出了比较全面的的[示例](https://httpd.apache.org/docs/2.4/vhosts/examples.html)

## 示例

`docs.example.com` 和 `blog.example.com` 指向同一个 IP

```properties
Listen 80
<VirtualHost *:80>
  DocumentRoot "/www/docs"
  ServerName docs.example.com
</VirtualHost>
<VirtualHost *:80>
  DocumentRoot "/www/blog"
  ServerName blog.example.com
</VirtualHost>
```

当访问 `docs.example.com` 时使用 `/www/docs` 文件夹的文档

当访问 `blog.example.com` 时使用 `/www/blog` 文件夹的文档



访问时若提示 `Forbidden`

> **Forbidden**
>
> You don't have permission to access this resource.

需要配置文件读取权限

```properties
<Directory "/www/blog">
  Require all granted
</Directory>
```

## 检查配置

修改完配置后使用命令行参数 `-S` 检查。这个命令会显示 Apache 是如何解析配置文件的

```bash
apachectl -S
# 或
httpd -S
```

## 代理 Node.js 服务

需要加载如下模块

- mod_proxy
- mod_proxy_http

可使用 `-M` 检查已加载的模块

```bash
apachectl -M
apachectl -M | grep proxy
```

案例：Node.js 服务部署到同一台机器不同端口，使用 `api.example.com` 代替 `api.example.com:8080` 访问

```properties
<VirtualHost *:80>
  ServerName api.example.com
  ProxyPass "http://127.0.0.1:8080/"
  ProxyPreserveHost On
  ProxyPassReverse "http://127.0.0.1:8080/"
</VirtualHost>
```

### 获取用户真实 IP

使用 Apache 代理 Node.js 服务后，Node.js `request.socket.remoteAddress` 得到的是 Apache 代理服务的 IP，并非用户真实 IP。需做如下改动：

Apache 添加 如下模块

- mod_remoteip

修改配置，增加 [RemoteIPHeader](https://httpd.apache.org/docs/2.4/zh-cn/mod/mod_remoteip.html#remoteipheader)

```properties
# httpd.conf
RemoteIPHeader X-Forwarded-For
RemoteIPTrustedProxy 127.0.0.1
RemoteIPInternalProxy 127.0.0.1
```

Node.js 通过如下方式获取用户真实 IP

```javascript
request.headers['x-forwarded-for'] || request.socket.remoteAddress
```

注意：`x-forwarded-for`  全小写。Node.js 中 headers 属性名为全小写
