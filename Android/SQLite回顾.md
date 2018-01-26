
## 使用SQLite步骤

1，编写自定义的Helper类 继承SQLiteOpenHelper

```java
private static final String DB_NAME = "test.db" ;
private static int version = 1;
//构造
public MyHelper(Context context) {
     super(context,DB_NAME,null,version);
}
```

//在有第一次创建数据库时调用

onCreate()

//主要做的是建表，及初始化表数据

//在数据库版本更新的时候调用，版本号必须高于前一个版本

onUpgrade()  //主要做的是修改表结构的操作，目前只提供了修改表名和添加字段的功能

如果要修改字段名

1),创建新表 xxx

2),将旧表(ddd)数据导入至新表 xxx

insert into xxx(x1,x2,x3,x4) select d1,d2,d4,null from ddd;

3),删除旧表

drop table ddd ;

4),修改新表名至旧表名

alert table xxx rename to ddd ;

操作SQLite数据库

增删改

```java
SDLiteDatabase db = myhelper.getWritableDatabase();
db.execSQL(sql,Objec[] objs)
db.insert()
db.delete()
db.update()
```

查询

```java
SDLiteDatabase db = myhelper.getReadableDatabase();
db.rawQuery(sql,String[] selectArgs)
db.query();
```

