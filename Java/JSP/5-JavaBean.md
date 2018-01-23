
### Javabean简介
Javabean就是符合某种特定的规范的Java类。使用Javabeans的好处是解决代码重复编写，减少代码冗余，功能区分明确，提高了代码的维护性。

#### Javabean设计原则

![JavaBean设计原则](http://opz28dn03.bkt.clouddn.com/images/snipaste20171121_224517.png)

### JSP动作
JSP动作元素（action elements），动作元素为请求处理阶段提供信息。动作元素遵循XML元素的语法，有一个包含元素名的开始标签，可以有属性、可选的内容、与开始标签匹配的结束标签。

第一类是与存取JavaBean有关的，包括：

    <jsp:useBean> <jsp:setProperty> <jsp:getProperty>

第二类是JSP1.2就开始有的基本元素，包括6个动作元素：

    <jsp:include> <jsp:forward> <jsp:param> <jsp:plugin> <jsp:params> <jsp:fallback>

第三类是JSP2.0新增的元素，主要与JSP Document有关，包括6个元素：

    <jsp:root> <jsp:declaration> <jsp:scriptlet> <jsp:expression> <jsp:text> <jsp:output>

第四类是JSP2.0新增的动作元素，主要用来动态生成XML元素标签的值，包括3个动作：

    <jsp:attribute> <jsp:body> <jsp:element>

第五类是JSP2.0新增的动作元素，主要用在Tag File中，有2个元素：

    <jsp:invoke> <jsp:dobody>

### 使用Javabeans
1. 像使用普通Java类一样，创建Javabean实例。
2. 在JSP页面中通常使用jsp动作标签使用Javabean。
    - useBeans动作
    - setProperty动作
    - getProperty动作

#### \<jsp:useBeans\>
作用：在JSP页面中实例化或者在指定范围内使用Javabean
```xml
<jsp:useBean id="标识符(作为实例名)" class="Java类名(完整包名)" scope="作用范围" />
```

#### \<jsp:setProperty\>
作用：给已经实例化的JavaBean对象的属性赋值，一共有4种形式。
```html
<!--跟表单关联，只要表单中的参数名与JavaBean属性名一致就赋值-->
<jsp:setProperty name="JavaBean实例名" property="*" />
<!--跟表单关联，指定给JavaBean某属性赋值，值为表单中同名参数-->
<jsp:setProperty name="JavaBean实例名" property="JavaBean属性名" />
<!--手动给JavaBean某属性赋值-->
<jsp:setProperty name="JavaBean实例名" property="JavaBean属性名" value="BeanValue" />
<!--跟request参数关联，指定给JavaBean某属性赋值，值为request中指定参数-->
<jsp:setProperty name="JavaBean实例名" property="JavaBean属性名" param="request对象中的参数名" />
```

#### \<jsp:getProperty\>
作用：获取指定JavaBean对象的属性值
```xml
<jsp:getProperty name="JavaBean实例名" property="属性名" />
```

### JavaBean的四个作用范围
使用`useBean`的`scope`属性可以用来指定JavaBean的作用范围。

   - page：仅在当前页面有效
   - request：可以通过`HttpRequest.getAttribute()`方法取得JavaBean对象
   - session：可以通过`HttpSession.getAttribute()`方法取得JavaBean对象
   - application：可以通过`application.getAttribute()`方法取得JavaBean对象

## Model1 简介
Model1模型出现前，整个 Web 应用的情况：几乎全部由 JSP 页面组成，JSP 页面接收处理客户端请求，对请求处理后直接做出响应。
这样存在的弊端：在页面层充斥着大量的业务逻辑的代码和数据访问层的代码，Web 程序的可扩展性和可维护性非常差。
JavaBean 的出现可以使 JSP 页面中使用 JavaBean 封装的数据或者调用 JavaBean 的业务逻辑代码，这样大大提升了程序的可维护性。
![Model1](http://opz28dn03.bkt.clouddn.com/images/Model1.png)

示例：
在`src`目录里新建一个包`com.honye`，在包里新建一个类`Student`
> src/com/honye/Student.class
```java
public class Student {
    private String id;
    private String name;
    private String sex;
    public Student() {
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
}
```
> web/form.jsp
```jsp
<form name="javabean" action="javaBean.jsp?sex=男" method="post">
    <table>
        <tr>
            <td>ID：</td>
            <td><input type="text" name="id" /></td>
        </tr>
        <tr>
            <td>姓名：</td>
            <td><input type="text" name="name" /></td>
        </tr>
        <tr>
            <td colspan="2" align="center"><input type="submit" value="提交" /></td>
        </tr>
    </table>
</form>
```
> web/javaBean.jsp
```jsp
<body>
    <%
        request.setCharacterEncoding("utf-8");  //防止中文乱码
        // 使用原始的方法创建实例
        Student student1 = new Student();
        student1.setId("1001");
        student1.setName("Honye");
    %>
    <!--使用表达式获取实例对象信息-->
    ID: <%=student1.getId()%><br>
    姓名: <%=student1.getName()%><br>
    <!--使用useBean动作创建实例；setProperty为实例赋值-->
    <jsp:useBean id="student2" class="com.honye.Student" scope="page" />
    <jsp:setProperty name="student2" property="id" value="1002" />
    <jsp:setProperty name="student2" property="name" value="红叶" />
    <!--使用getProperty获取实例对象-->
    ID：<jsp:getProperty name="student2" property="id" /><br>
    姓名：<jsp:getProperty name="student2" property="name" /><br>

    <jsp:useBean id="student3" class="com.honye.Student" scope="session" />
    <jsp:setProperty name="student3" property="*" />
    <jsp:setProperty name="student3" property="sex" />

    ID: <%=((Student)session.getAttribute("student3")).getId()%><br>
    姓名: <%=((Student)session.getAttribute("student3")).getName()%><br>
    性别：<%=((Student)session.getAttribute("student3")).getSex()%><br>
</body>
```

