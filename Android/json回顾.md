
## json 

  json 数据格式：json 对象，json 数组

###  json 对象：一个`{}`表示一个 json 对象

 json 对象里面存放的数据是键值对形式

键：是 json 对象的属性名，属性名用`""`引起来

值：是 json 对象的属性值，
 
属性与属性值之间用`:`分隔

属性与属性之间用`,`分隔

属性值的数据类型：

字符串类型，数值类型，boolean 类型，null 类型，json 对象，json 数组

```json
{
    "name":"张三",
    "sex":"男",
    "married":true,
    "wife": { 
        "name":"小花",
        "sex":"女"
    },
    "childs":[
        {
            "name":"张小三",
            "age":2
        },
        {
            "name":"张小小",
            "age":2
        }
    ]
}
```

### json 数组：-个`[]`表示一个 json 数组

json 数组里面存放的数据是元素

元素和元素之间使用`,`隔开

元素的数据类型：

字符串类型，数值类型，boolean类型，null类型，json对象，json数组

### json 解析步骤：

如果数据直接是 json 对象或者是 JSON 数组形式字符串

```java
String str1 = "[\"a\", \"b\",\"c\"]" ;
String str2 = "{\"name\":\"张三\"}" ;
```

1，将字符串转换成 json 对象或者 json 数组

```java
JSONOBject jobj = new JSONObject(str2);
JSONArray jarr = new JSONArray(str1);
```

2,通过 jsonObject 或 jsonArray 的 getxxx() 解析我们的 JSON 对象或 JSON 数组

```java
String name = jobj.getString("属性名");
```

3,展示解析结果

```java
system.out.println();
```

### json 数据生成：

第一种方式通过 put 方法：

```java
JsonObject jobj = new jsonObject();//创建jsonObject对象
jobj.put("属性名",属性值); //为JSON对象设置属性名及属性值
jobj.put("属性名",属性值);
String j_str = jobj.toString(); // 通过jsonobject的toString()方法将JSON对象转换成JSON对象格式的字符串
```

第二种方式：先将数据放进 map 集合，再将 map 集合传递给 jsonobject 对象，然后通过 jsonObject 的 toString() 方法将 JSON 对象转换成 JSON 对象格式的字符串

```java
Map<String,Object> map = new HashMap<String,Object>();
map.put("属性名",属性值);
map.put("属性名",属性值);
map.put("属性名",属性值);
JsonObject jobj = new jsonObject(map);//创建jsonObject对象
String j_str = jobj.toString(); 
```

第三种方法：创建一个实体对象，再将实体对象传递给 jsonobject 对象，然后通过 jsonObject 的 toString() 方法将 JSON 对象转换成 JSON 对象格式的字符串

```java
Student stu = new Student("张三","男",20);
JsonObject jobj = new jsonObject(stu);//创建jsonObject对象
jobj.remove("class");//移除class属性
String j_str = jobj.toString(1); //1：调整字符串格式。缩进的字符数
```
