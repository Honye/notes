
## 安装
 - MSI 安装（Windows Installer）
 - ZIP 安装

## 目录结构
 - bin：存储可执行文件
 - data：存储数据文件
 - docs：文档
 - include：存储包含的头文件
 - lib：存储库文件
 - share：错误消息和字符集文件

## 修改编码方式
修改 `/bin/my.ini` 文件中配置：
```
[mysql]
default-character-set=utf8

[mysqld]
character-set-server=utf8
```

## 启动 MySQL 服务
若 mysql 已注册到系统服务中，可使用命令启动服务：
```shell
$ net start mysql
```
`mysql` 为服务名，同样可以使用命令停止服务：
```shell
$ net stop mysql
```
此命令也可用于其它服务

## 退出 MySQL
三种方式：
```shell
mysql> exit;
mysql> quit;
mysql> \q;
```

## MySQL 登录
语法： `mysql 参数`

| 参数 | 描述 |
| :--- | :--- |
| -D, --database=name | 打开指定数据库 |
| --delimiter=name | 指定分隔符 |
| -h, --host=name | 服务器名称 |
| -p, --password[=value] | 密码 |
| -P, --port=# | 端口号 |
| --prompt=value | 设置提示符 |
| -u, --user=name | 用户名 |
| -V, --version | 输出版本信息且退出 |

如：
```shell
$ mysql -uroot -p123456
```