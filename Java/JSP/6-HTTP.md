
## http 协议的无状态性
无状态是指，当浏览器发送请求给服务器的时候，服务器响应客户端请求。但是当同一个浏览器再次发送请求给服务器的时候，服务器并不知道它就是刚才那个浏览器。简单地说，就是服务器不会去记得你，所以就是无状态协议。

## Cookie
### 什么是 Cookie？
Cookie：中文名称为“小甜饼”，是 Web 服务器保存在客户端的一系列文本信息。
典型应用一：判定注册用户是否已经登录网站。
典型应用二：“购物车”处理。

### Cookie 的作用
- 对特定对象的追踪
- 保存用户网页浏览记录与习惯
- 简化登录
安全风险：容易泄露用户信息

### JSP 中创建与使用 Cookie
创建 Cookie 对象
```java
Cookie mCookie = new Cookie(String key, Object value);
```
写入 Cookie 对象
```java
response.addCookie(mCookie);
```
读取 Cookie 对象
```java
Cookie[] cookies = request.getCookies();
```
Cookie 常用方法：

| 方法名 | 返回 | 说明 |
| :---- | :---- | :---- |
| setMaxAge(int expiry) | void | 设置 cookie 的有效期，单位为秒 |
| setValue(String value) | void | 在 cookie 创建后，对 cookie 进行赋值 |
| getName() | String | 获取 cookie 的名称 |
| getValue() | String | 获取 cookie 的值 |
| getMaxAge() | int | 获取 cookie 的有效时间，单位秒 |

### 解决中文异常问题
```java
request.setCharacterEncoding("utf-8");
// 使用 URLEncoder 解决无法在 Cookie 当中保存中文字符的问题
String username = URLEncoder.encode(request.getParameter("username"),"utf-8");
Cookie usernameCookie = new Cookie("username", username);

Cookie[] cookies = request.getCookies();
for(Cookie c : cookies) {
    if(c.getName().equals("username")) {
        // 读取 Cookie 时需使用 URLDecoder 解码
        username = URLDecoder.decode(c.getValue(), "utf-8");
    }
}
```

## Session 与 Cookie 区别
| Session | Cookie |
| :---- | :---- |
| 在服务器端保存用户信息 | 在客户端保存用户信息 |
| 保存的是 Object 类型 | 保存的是 String 类型 |
| 随会话的结束而将存储的数据销毁 | 可以长期保存在客户端 |
| 保存重要的信息 | 保存不重要的用户信息 




