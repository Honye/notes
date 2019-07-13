**修改 MySQL 提示符**
1. 连接客户端时通过参数指定
```shell
$ mysql -uroot -proot --prompt 提示符
```
2. 连接上客户端后，通过 prompt 命令修改
```shell
mysql> prompt 提示符
```
如：
```shell
mysql> prompt \u [\d]>
用户名 [数据库名]> 
```
| 参数 | 描述 |
| :--- | :--- |
| \D | 完整的日期 |
| \d | 当前数据库 |
| \h | 服务器名称 |
| \u | 当前用户 |

**显示当前服务器版本**
```shell
mysql> SELECT VERSION();
```
**显示当前日期时间**
```shell
mysql> SELECT NOW();
```
**显示当前用户**
```shell
mysql> SELECT USER();   
```

### 语法规范
 - 关键字与函数名称全部大写
 - 数据库名称、表名称、字段名称全部小写
 - SQL 语句必须以分号结尾

### 数据库操作
1. 创建数据库
```shell
mysql> CREATE { DATABASE | SCHEMA } [ IF NOT EXISTS ] db_name [ DEFAULT ] CHARACTER SET [ = ] charset_name;
```
2. 查看当前服务器下的数据库列表
```shell
mysql> SHOW { DATABASES | SCHEMAS } [ LIKE 'pattern' | WHERE expr ];
```
3. 查看警告
```shell
mysql> SHOW WARNINGS;
```
4. 查看创表语句
```shell
mysql> SHOW CREATE DATABASE test;
```
5. 修改数据库
```shell
mysql> ALTER { DATABASE | SCHEMA } [ db_name ] [ DEFAULT ] CHARACTER SET [ = ] charset_name;
```
6. 删除数据库
```shell
mysql> DROP { DATABASE | SCHEMA } [ IF EXISTS ] db_name;
```

