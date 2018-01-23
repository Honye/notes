
## contentprovider

步骤

1，编写自定义 ContentProvider 继承 ContentProvider

1) 定义全局变量

```java
DatabaseHelper helper
static UriMatcher matcher = new UriMatcher(UriMatcher.NO_MATCHE);//当传入的uri在注册的uri中匹配不到时的返回码
static final String AUTH = "com.sfdff.vgghg" ;
static final int PERSON = 1 ;
```
             
2) 在静态代码块中注册uri

```java
static  {
    matcher.addUri(AUTH,"person",PERSON);
}   
```
               
3) 在onCreate 方法中初始化 helper   

4) 在相应的方法里，根据传入的URI进行相应的操作

```java
public Cursor query(Uri uri,String[] columns , String selection,String[] selectionArgs,String groupby,String having,String orderby) {
    //获得uri的匹配返回码
    int  code = matcher.match(uri);
    if(code == PERSON) { 
        SQLiteDatabase db = helper.getReadableDatabase();
        return db.query("person",columns,selection,selectionArgs,groupby,having,orderby)
    }
    return null ;
}
```

5) 在 manifest.xml 文件中注册

```xml
<permission android:name="com.zdsoft.CCCC">
<use-permission android:name="com.zdsoft.CCCC">

<provider android:name="com.zdsoft.MyContentProvider"
    authorities="com.sfdff.vgghg"
    android:permission="com.zdsoft.CCCC"
/>
```

6)在 ContentResover 内容解析的时候，需要在 manifest.xml 文件中加上自定义的权限

```xml
<use-permission android:name="com.zdsoft.CCCC">
```

## contentResolver

步骤

1，获得ContentResolver对象

```java
ContentResolver cr = getContentResolver();
```
     
2, 获得Uri对象

```java
Uri uri = Uri.parse("content://autherity/path");
```

3, 操作 增，删，改，查

```java
cr.query(uri,columns,seletion,selectionargs,group by , having,sortorder)
cr.insert(uri,values)  //values是ContentValues
cr.delete(uri,where,whereargs)
cr.update(uri,values,where,whereargs)
```


