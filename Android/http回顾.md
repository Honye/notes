
## http 协议  超文本传输协议

### http 协议的特点：

基于TCP协议的，无状态，无连接（短链接），客户端/服务器模式

### http 协议请求消息：

请求行：请求方法，urI(资源路径), http 协议版本

请求头：浏览器的信息，客户端能接收到的内容的格式，客户端语言环境....

请求体：用户向服务端发送的数据

### http 协议的响应消息：

状态行：http版本，响应状态码，状态码描述

响应头：服务端的类型，内容类型，响应时间.....

响应体：服务端响应给客户端的数据

### http的工作步骤：

1，建立连接

2，发送请求

3，服务响应

4，客户端收到响应，断开连接

## http 协议的请求方法：GET，POST

### GET 方法和 POST 方法的区别

1，安全性，get方法会将用户输入的信息以键值对的形式拼接到URL后面，POST方法封装到请求体

2,内容描述是不同的，get方法 query string parameters  ,post方法 form data

3,在输入信息有中文的时候，POST是自动编码的，而get是需要程序员自己编码

## 代码编写：

1，创建URL对象

```java
String str ="http://192.168.1.128:8080/student/login.php?username=admin&password=admin" ;
URL url = new URL(str);
```

2,调用 ur l的 openConnection() 方法，获得 HTTPUrlConnection 的对象，建立连接

```java
HTTPUrlConnection conn = (HTTPUrlConnection)url.openConnection();
```
 
3,//设置请求方法

```java
conn.setRequestMethod("POST");
```

4,//设置允许用户输出

```java
conn.setDoOutput(true);
```

5,获得输入流,准备接收服务端响应的信息

```java
InputStream in = conn.getInputStream();
```

6,获得服务端响应状态码

```java
int st = conn.getResponseCode();
```

7,根据不同的响应码进行不同操作

```java
if( st == HttpUrlConnection.HTTP_OK) {
   system.out.println("服务响应成功");
}
```

8,关闭资源，释放连接

```java
in.close();
conn.disconnect();
```


