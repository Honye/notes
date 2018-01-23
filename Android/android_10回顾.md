## xml解析
  三个文件夹下的 xml 解析 res_xml  res_raw assets

### res_xml

```java
source().getXml(R.xml.xxx);
```

`XmlPresourceParser` 是 XmlPullParser 的子接口 ，所以`XmlPresource XmlResourceParser xmlp = getReParser`实际上是一个 pull 解析器

### res_raw

```java
//获得解析工厂
XmlPullParserFactory factory = XmlPullFactory.newInstence();
//获得解析器
XmlPullParser p = factory.newPullPaser();
//获得输入流
InputStream in = getResource().openRawResource(R.raw.xxx);
//设置输入
p.setInput(in);
```

### assets

```java
//获得解析工厂
XmlPullParserFactory factory = XmlPullFactory.newInstence();
//获得解析器
XmlPullParser p = factory.newPullPaser();
//获得输入流
InputStream in = getResource().getAssets().open(xxx.xml);
//设置输入
p.setInput(in);  
```

## 数据存储

### 内部存储

存储

```java
//获得输出流
FileOutputStream out = MainActivity.this.openFileOutput("文件名"，int mode);
//写数据
out.write(xxx.getbytes());
//刷新数据
out.flush();
//关闭资源
out.close();
```

获取数据

```java
//获得输入流
FileInputStream in = MainActivity.this.openFileInput("文件名");
//读数据
......
//关闭资源
in.close();
```

### 外部存储

 存储

```java
//创建File对象
// File file = new File("/mnt/sdcard/文件名"); 
File file = new File(Environment.getExtratalStorag Directory()+"/"+"文件名"); 
//创建输出流对象
 FileOutputStream out = new FileOutputStream(file);
//写数据
out.write(xxx.getbytes());
//刷新数据
out.flush();
//关闭资源
out.close();
```

在manifest.xml文件中注册写权限

```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

读取数据

```java
//创建File对象
File file = new File(Environment.getExtratalStorag Directory()+"/"+"文件名"); 
//创建输入流对象
FileInputStream in = new FileInputStream(file);
//读数据
......
//关闭资源
in.close();
```

## SharedPreference 存储

```java
//获得SharedPreference对象
SharedPreference sp = getSharedPreference("文件名",int 模式); //MODE_PRIVATE MODE_APPEND
SharedPreference.Editor e = sp.editor() //获得编辑器
e.put("key","value") //存放内容
e.commit() ; //提交数据

SharedPreference存储读取数据
//获得SharedPreference对象
SharedPreference sp = getSharedPreference("文件名",int 模式); 
//通过getString("")方法获取值
sp.getString("key")
```

