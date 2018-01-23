## include 指令
语法：
```jsp
<%@ include file="URL" %>
```

## include 动作
语法：
```jsp
<jsp:include page="URL" flush="true|false" />
```
属性：
**page**：要包含的页面
**flush**：被包含的页面是否从缓冲区读取

## include 指令与 include 动作比较
| | include 指令 | include 动作 |
| :---- | :---- | :---- |
| 语法格式 | <%@ include file="URL" %> | \<jsp:include page="URl" /> |
| 发生作用时间 | 页面转换期间 | 请求期间 |
| 包含的内容 | 文件的实际内容 | 页面的输出 |
| 转换成 Servlet | 主页面和包含页面转换成为一个 Servlet | 主页面和包含页面转换为独立的 Servlet |
| 编译时间 | 较慢--资源必需被解析 | 较快 |
| 执行时间 | 稍快 | 较慢--每次资源必需被解析 |

## forward 动作
语法：
```jsp
<jsp:forward page="URL" />
```
等同于：
```java
request.getRequestDispatcher("/url").forward(request, response);
```

## param 动作
语法：
```java
<jsp:param name="参数名" value="参数值" />
```
常常与 \<jsp:forward> 一起使用，作为其子标签。
如：
```java
<jsp:forward page="user.jsp" >
    <jsp:param name="email" value="admin@test.com" />
</jsp:forward>
```

## plugin 动作
