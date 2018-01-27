
### JSP 九大内置对象

![JSP内置对象](./_image/snipaste20171119_175853.png)

#### out 对象
out 对象是 JspWriter 类的实例，是向客户端输出内容常用的对象。

|   方法   |   返回   |   说明    |
| :------ | :----  | :---- |
|   println()   |   void   |   向客户端打印字符串    |
|   clear()   |   void   |   清除缓冲区的内容，如果在flush()之后调用会抛出异常   |
|   clearBuffer()   |   void   |   清除缓冲区的内容，如果在flush()之后调用不会抛出异常    |
|   flush()   |   void   |   将缓冲区内容输出到客户端   |
|   getBufferSize()   |   int   |   返回缓冲区以字节数的大小，如不设缓冲区则为0  |
|   getRemaining()   |   int   |   返回缓冲区还剩余多少空间可用   |
|   isAutoFlush()   |   boolean   |   返回缓冲区满时，是自动清空还是抛出异常   |
|   close()   |   void   |   关闭输出流  |

#### get 和 post 区别
```html
<form name="regForm" action="动作" method="请求方式">
</form>
```

**表单有两种提交方式：get 与 post**
1. get: 以明文的方式通过 URL 提交数据，数据在 URL 中可以看到。提交的数据最多不超过 2kb。安全性较低但效率比 post 方式高。适合提交数据量不大，安全性不高的数据。比如：搜索、查询等功能。
2. post: 将用户提交的信息封装在 HTML HEADER 内。适合提交数据量大，安全性高的用户信息。比如：注册、修改、上传等功能。

#### request 对象
客户端的请求信息将封装在 request 对象中，通过它才能了解到客户的需求，然后做出响应。它是 HttpServletRequest 类的实例。request 对象具有请求域，即完成客户端的请求之前，该对象一直有效。

方法   |   返回   |   说明
---- | ---- | ---- 
getParameter(String name)   |   String   |   返回name指定参数的参数值
getParameterValues(String name)   |   String []   |   返回包含参数name的所有值的数组
setAttribute(String, Object)   |   void   |   存储此请求中的属性
getAttribute(String name)   |   Object   |   返回指定属性的的属性值
getContentType()   |   String   |   得到请求体的MIME类型
getProtocol()   |   String   |   返回请求用的协议类型及版本号
getServerName()   |   String   |   返回接受请求的服务器主机名
getServerPort()   |   int   |   返回服务器接受此请求所用的端口号
getCharacterEncoding()   |   String   |   返回字符编码方式
getContentLength()   |   int   |   返回请求体的长度（字节数）
getRemoteAddr()   |   String   |   返回发送此请求的客户端IP地址
getRealPath(String path)   |   String   |   返回一虚拟路径的真实路径
getContextPath()   |   String   |   返回上下文路径

**解决中文乱码问题**
```jsp
<% 
    // 解决中文乱码问题，但无法解决URL传递中文出现乱码的问题
    request.setCharacterEncoding("utf-8"); 
%>
```
解决 URL 传递中文乱码问题需要修改 Tomcat `/conf/server.xml`配置
```xml
<!-- 添加 URIEncoding 属性 -->
<Connector port="8080" protocol="HTTP/1.1"
    connectionTimeout="20000"
    redirectPort="8443"
    URIEncoding="utf-8" />
```

#### response 对象
response 对象包含了响应客户请求的有关信息，但在 JSP 中很少直接使用到它。它是 HttpServletResponse类的实例。response 对象具有页面作用域，即访问一个页面时，该页面的 response 对象只能对这次访问有效，其它页面的 response 对象对该页面无效。

方法   |   返回   |   说明
---- | ---- | ---- 
getCharacterEncoding()   |   String   |   返回响应用的何种字符编码
setContentType(String type)   |   void   |   设置响应的 MIME 类型
getWriter()   |   PrintWriter   |   返回可以向客户端输出字符的一个对象（与内置out对象有区别）
sendRedirect(String location)   |   void   |   重新定向客户端的请求

**内置 out 对象和 response.getWriter()**
```jsp
<%
    out.println("内置对象 out 输出内容<br>");
    // 如果不加 flush()，outer 会在 out 前输出
    out.flush();
    
    PrintWriter outer = response.getWriter();
    outer.println("response.getWriter() 输出内容<br>");
%>
```
#### 请求转发和请求重定向的区别
请求重定向：客户端行为，`response.sendRedirect()`，从本质上讲等同于两次请求，前一次的请求对象不会保存，地址栏的 URL 地址会改变。

请求转发：服务器行为，`request.getRequestDispatcher().forward(req, res);`是一次请求，转发后请求对象会保存，地址栏的 URL 地址不会改变。