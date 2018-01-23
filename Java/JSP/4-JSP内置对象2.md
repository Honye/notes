
### session 内置对象
- session 表示客户端与服务器的一次会话
- Web 中的 Session 指的是用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间
- 从上述定义中可以看到，session 实际上是一个特定的时间概念
- 在服务器的内存中保存着不同用户的 session
- session 对象是一个 JSP 内置对象
- session 对象在第一个 JSP 页面被装载时自动创建，完成会话期管理
- 从一个客户打开浏览器并连接到服务器开始，到客户端关闭浏览器离开这个服务器结束，被称为一个会话
- 当一个客户访问一个服务器时，可能会在服务器的几个页面之间切换，服务器应当通过某种方法知道这是一个客户，就需要 session 对象
- session 对象是 HttpSession 类的实例

#### 常用方法
|   方法  | 返回    |   说明  |
| :---- | :---- | :---- |
| getCreationTime() | long | 返回 session 创建时间 |
| getId() | String | 返回创建时JSP引擎为它设的唯一ID号 |
| setAttribute(String name, Object value) | Object | 使用指定名称将对象绑定到此会话 |
| getAttribute(String name) | Object | 返回与此会话中指定名称绑定在一起的对象，如果没有对象绑定在该名称下，则返回 null |
| getValueNames() | String [] | 返回包含此 session 中所有可用属性的数组 |
| getMaxInactiveInterval() | int | 返回两次请求间隔多长时间此 session 被取消（单位秒）

session 会话是用来保存用户状态的一种机制
会话保存在服务器的内存里
每个会话对应一个唯一的 sessionId

#### session 生命周期
1. 活动：
    - 某次会话当中通过超链接打开的新页面属于同一次会话
    - 只要当前会话页面没有全部关闭，重新打开新的浏览器窗口访问同一项目资源时属于同一次会话
    - 除非本次会话的所有页面都关闭后再重新访问某个 JSP 或者 Servlet 将会创建新的会话
        *注意事项：*原有会话还存在，只是旧的 session 仍然存在于服务器，只不过再也没有客户端会携带它然后交于服务器检验
2. 销毁：
 Session 的销毁只有三种方式
    1. 调用session.invalidate() 方法
    2. Session 过期（超时）
    3. 服务器重新启动

#### session 设置超时时间
Tomcat 默认 session 超市时间为30分钟。
设置 session 超时有两种方式：
1. 使用 session 内置对象的属性方法

    ```java
    session.setMaxInactiveInterval(1800); //单位秒
  ```

2. 在`web.xml`中配置

    ```xml
    <session-config>
        <!-- 单位分钟 -->
        <session-timeout>30</session-timeout>
    <session-config>
  ```

### application 内置对象
 - application 对象实现了用户间数据的共享，可存放全局变量。
 - application 开始于服务器的启动，终止于服务器的关闭。
 - 在用户的前后连接或不同用户之间的连接中，可以对application对象的同一属性进行操作。
 - 在任何地方对application对象属性的操作，都将影响到其他用户对此的访问。
 - 服务器的启动和关闭决定了application对象的生命。
 - application对象是ServletContext类的实例。
#### 常用方法
| 方法 | 返回 | 说明 |
| :---- | :---- | :---- |
| setAttribute(String name, Object value) | void | 使用指定名称将对象绑定到此会话 |
| getAttribute(String name) | Object | 返回与此会话中指定名称绑定在一起的对象，如果没有对象绑定在改名称下，则返回null |
| getAttributeNames() | Enumeration | 返回所有可用属性名的枚举 |
| setServerInfo() | String | 返回JSP（SERVLET）引擎名及版本号 |

### page 内置对象
page 对象就是指当前JSP页面本身，有点像类中的this指针，它是java.lang.Object类的实例。
常用方法：

| 方法 | 返回 | 说明 |
| :---- | :---- | :---- |
| getClass() | class | 返回此Object的类 |
| hashCode() | int | 返回此Object的hash码 |
| equals(Object obj) | boolean | 判断此Object是否与指定的Object对象相等 |
| copy(Object obj) | void | 把此Object拷贝到指定的Object对象中 |
| clone() | Object | 克隆此Object对象 |
| toString | String | 把此Object转换成String类的对象 |
| notify() | void | 唤醒一个等待的线程 |
| notifyAll() | void | 唤醒所有等待的线程 |
| wait(int timeout) | void | 使一个线程处于等待直到timeout结束或被唤醒 |
| wait() | void | 使一个线程处于等待直到被唤醒 |

### pageContext 对象
 - pageContext对象提供了对JSP页面内所有的对象及名字空间的访问
 - pageContext对象可以访问到本页所在的session，也可以取本页所在的application的某一属性值
 - pageContext对象相当于页面中所有功能的集大成者
 - pageContext对象的本类名也叫pageContext

| 方法 | 返回 | 说明 |
| :---- | :---- | :---- |
| getOut() | JspWriter | 返回当前客户端响应被使用的JspWriter流（out）|
| getSession() | HttpSession | 返回当前页中的HttpSession对象（session）|
| getPage() | Object | 返回当前页的Object对象（page）|
| getRequest() | ServletRequest | 返回当前页的ServletRequest对象（request）|
| getResponse() | ServletResponse | 返回当前页的ServletResponse对象（response）|
| setAttribute(String name, Object value) | void | 设置属性及属性值 |
| getAttribute(String name, int scope) | Object | 在指定范围内取属性的值 |
| getAttributeScope(String name) | int | 返回某属性的作用范围 |
| forward(String relativeUrlPath) | void | 使当前页重导到另一页面 |
| include(String relativeUrlPath) | void | 在当前位置包含另一文件 |

### config对象
config对象是在一个Servlet初始化时，JSP引擎向它传递信息用的，此信息包括Servlet初始化时所要用到的参数（通过属性名和属性值构成）以及服务器的有关信息（通过传递一个ServletContext对象）

| 方法 | 返回 | 说明 |
| :---- | :---- | :---- |
| getServletContext() | ServletContext | 返回含有服务器相关信息的ServletContext对象 |
| getInitParameter(String name) | String | 返回初始化参数的值 |
| getInitParameterNames() | Enumeration | 返回Servlet初始化所需参数的枚举 |

### Exception对象
exception对象是一个异常对象，当一个页面在运行过程中发生了异常，就产生这个对象。如果一个JSP页面要应用此对象，就必须把isErrorPage设为true，否则无法编译。它实际上是java.lang.Throwable的对象

| 方法 | 返回 | 说明 |
| :---- | :---- | :---- |
| getMessage() | String | 返回描述异常的信息 |
| toString() | String | 返回关于异常的简短描述信息 |
| printStackTrace() | void | 显示异常及其栈轨迹 |
| FillInStackTrace() | Throwable | 重写异常的执行栈轨迹 |


