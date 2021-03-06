
## 一、基本查询语法

### 1、查询所有列

```sql
select * from 表名;
```

### 2、查询指定列

1)无别名

```sql
select 列名1，列名2 from 表名;
```

2)为表中的列指定别名

```sql
select 列名1 [as] 别名1,列名2 [as] 别名2 from 表名;
```

### 3、查询结果表达式

```sql
select 列名值表达式 from 表名;
```
		
例：select name,age+10 from students;

### 4、消除重复行

```sql
select distinct 列名 from 表名;
```

## 二、where 子句

### 1、运算符

		┏━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┓
		┃          ┃>，<，>=，<=，<>    ┃大于，小于，大于等于，小于等于，不等于┃
		┃          ┣━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━┫
		┃          ┃between 值1 and 值2 ┃在值1与值2之间的值(包含值1和值2)      ┃
		┃          ┣━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━┫
		┃比较运算符┃in(列值1,列值2)     ┃查询列为值1或值2的行信息              ┃
		┃          ┣━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━┫
		┃          ┃like(表达式)        ┃模糊查询，%表示多个字符，_表示单个字符┃
		┃          ┣━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━┫
		┃          ┃is null             ┃判断是否为空                          ┃
		┣━━━━━╋━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━┫
		┃          ┃and &&              ┃与运算，同true则为true                ┃
		┃          ┣━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━┫
		┃逻辑运算符┃or ||               ┃或运算，一true则为true                ┃
		┃          ┣━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━┫
		┃          ┃not !               ┃非运算，结果取反                      ┃
		┗━━━━━┻━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━┛

## 三、聚合函数

count(列名)：计数

sum(列名)：求和

avg(列名)：求平均值

max(列名)/min(列名)：求最大值/最小值

## 四、分组查询

```sql
select * from 表名 group by 列名;
```
	
通常要和聚合函数一起使用

对分组后的数据进行筛选

```sql
select * from 表名 group by 列名 having 条件表达式;
```

## 五、排序查询
	
```sql
select * from 表名 order by 列名 [asc/desc];
```

若不写方括号，则默认是asc升序；降序需要加上desc


## 六、表连接

### 1、内连接

1)	
```sql
select 字段列表 from 表1 inner join 表2 on 连接条件;
```

2)	
```sql
select 字段列表 from 表1,表2 where 连接条件;
```

### 2、外连接

1)左连接

```sql
select 字段列表 from 表1 left join 表2 on 连接条件;
```

2)右连接

```sql
select 字段列表 from 表1 right join 表2 on 连接条件;
```

## 七、字符函数

### 1、合并字符串函数

`concat(s1,s2)`直接连接
			
例：
```sql
select concat("abc","123");
```

`concat_ws(x,s1,s2)`	将s1和s2用x串接

例：
```sql
select concat_ws(",","abc","123");
```

### 2、字母大小转换

1)转换为大写

upper(s)/ucase(s)

例：select upper("abc");

2)转换为小写

lower(s)/lcase(s)

例：select lcase("ABC");

### 3、删除空格

trim(s)	删除字符s两边空格

ltrim(s)	删除字符s左边空格

rtrim(s)	删除字符s右边空格

### 4、删除两边指定字符

trim(x from s)	删除字符s两边的字符x

## 八、数学函数

### 1、绝对值函数

abs(x)

### 2、圆周率函数

PI()

### 3、平方根函数

sqrt(x)

### 4、求余函数

mod(x,y)

### 5、返回大于或等于x的最小整数

ceil(x)/ceiling(x)

### 6、返回小于或等于x的最大整数

floor(x)

### 7、随机数

1)	rand()	0~1的完全随机

2)	rand(x)	返回相同的0~1的随机数	x为整数

### 8、四舍五入

round(x)	四舍五入

round(x,y)	四舍五入，保留小数点后y位

truncate(x,y)	保留小数点后y位，无四舍五入

## 九、日期时间函数

### 1、当前日期

surrent_date()/curdate()

### 2、当前时间

current_time()/curtime()

### 3、当前日期时间

now()/current_timestamp()/localtime()/sysdate()

### 4、获取年/月/日/时/分/秒

1)年

year(d)

2)月

month(d)	值为1~12

monthname(d)	值为January ~ December

3)日

day(d)

4)时

hour(t)

5)分

minute(t)

6)秒

second(t)

7)本年第几季度

quarter(d)	值为1~4

注：d为日期，t为时间
