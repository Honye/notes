## java.util.*;

1. Date
  
  ```java
  Date(); // 得到系统的当前时间
  Date(long 1);  // 从1970-1-1 08:00:00 开始过了 l 毫秒后的时间
  getYear()    1900
  getMonth()    1
  getDate()
  getDay()
  getHours()
  getMinutes()
  getSeconds()
  getTime()
  
  set....
  ```

2. Calender

  构造器：

  ```java
  getInstance()
  GregorianCalender
  ```

  字段：

  ```java
  YEAR
  MONTH
  DATE    DAY_OF_MONTH
  HOUR   HOUR_OF_DAY
  MINUTE
  SECOND
  MILLSECOND
  DAY_OF_WEEK
  WEEK_OF_MONTH
  WEEK_OF_MONTH_IN_YEAR
  DAY_OF_YEAR
  ```

  方法：
  
  ```java
  get()
  set()
  isLeapYear(year)
  ```
  
  例如：

  ```java
  Calender c=Calender.getInstance();
  GregorianCalender gc=new GregorianCalender();
  int year=gc.get(c.YEAR);
  .....
  ```

## java.text.*;

1. DateFormat    --   SimpleDateFormat
  
  ```java
  SimpleDateFormat sdf = new SimplseDateFormat("yyyy年MM月dd日 HH:mm:ss SSSS E");
  sdf.format(Date da);
  sdf.parse(Stirng s);
  ```

2. NumberFormat  ---  DecimalFormat
  
  ```java
  DecimalFormat df = new DecimalFormat("0000.00"); // "####.##"
  df.format(double d);
  df.parse(String s);
  ```
