
数据库：存储数据的仓库

数据库管理系统：管理数据库的软件系统

数据模型：

层次模型  网状模型  关系模型

命名规则：

1，可以使用字符编码集里面的任意字符和“_”,"$"的组合

2,可以以数字开头，但是不能全是数字

3，长度不能超过64个字符，别名的长度不能256个字符

数据类型：

1，数值型 smallint int bigint float double decimal

2，字符型 char varchar text blob

3，日期型 date time datetime year time timestamp

4，null型 null


登录： `mysql -u用户名 -p密码`

查看数据库：`show databases ;`

创建数据库：`create database 数据库名;`

删除数据库：`drop database 数据库名;`

使用数据库：`use 数据库名;`

查看表： `show tables ;`

建表语句：`create table 表名(列名 数据类型（长度）,....);`

查看表结构：`desc 表名;`

查看建表语句: `show create table 表名;`

查看建库语句： `show create database 数据库名；`

修改表结构：

增加列，修改列：`alter table 表名 add/modify 列名 数据类型`

删除列名：`alter table 表名 drop 列名`

修改列名： `alter table 表名 change 旧列名 新列名 数据类型`

修改表明：`alter table 旧表名 rename 新表名`

修改数据库名：

1,建新数据库

2，`alter table 旧库名.旧表名 rename 新库名.新表名`

3,删除旧库

插入数据：`insert into 表名[(列名，...)] values(值1，值2，....);`

注意：插入数据的顺序要和字段顺序一致

`insert into 表名 set 列名=值1,列名=值2 .... ;`

查询：`select * from 表名`

`update 表名 set 列名=新值,列名=新值 where 列名=值1 ;`
  
`truncate 表名`

`delete from 表名 where 列名=值1 ; `
 
   

