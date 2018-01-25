
## JDBC 操作数据库的步骤

1、加载数据库驱动

```java
Class.forName("com.mysql.jdbc.Driver");
```

注：加载数据库驱动前需要导入mysql的jar包

2、建立数据库连接对象

URL格式：主协议:子协议://主机名:端口号/数据库名;

```java
String url="jdbc:mysql://localhost:3306/数据库名";
String user="用户名";
String pwd="密码";
Connecton conn=DriverManager.getConnection(url,user,pwd);
```

3、创建执行SQL语句的对象

```java
// 1) Statement对象
Statement stm = conn.createStatement();
// 2) PreparedStatement对象
String sql = "select * from students where name=? and sex=?";
PreparedStatement ps = conn.preparedStatement(sql);
ps.setString(1,"张三");
ps.setString(2,"女");
```

4、执行SQL语句

```java
// 1) Statement语句
String sql = "SQL执行语句";
boolean bo = stm.execute(sql);			//执行任何SQL语句
ResultSet res = stm.executeQuery(sql);  //执行SQL查询语句
int a = stm.executeUpdate(sql);			//执行SQL增删改语句
// 2) PreparedStatement对象
boolean bo = ps.execute();				//执行任何SQL语句
ResultSet res = ps.executeQuery();		//执行SQL查询语句
int a = ps.executeUpdate();				//执行SQL增删改语句
```

5、处理结果

表的查询遍历

```java
String sql = "select * from students";
ResultSet res = stm.excuteQuery(sql);
while(res.next()) {
    int stuno = res.getInt("表中stuno对应的列名");
    String name = res.getString("name");
    Date birthday = res.getDate("birthday");
}
```

6、释放资源

```java
res.close();
stm.close();
conn.close();
```
		