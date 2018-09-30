## java.lang.*;

该包是 Java 的核心 jar 包，使用下面的所有的类时，可以不用导入

1. Object（所有类的父类，包含数组）
  
  构造器：
  
  ```java
  Object()
  ```

  方法：
  
  ```java
  String toString()
  int hashCode()
  boolean equals(Object obj)
  ```

2. String 字符串

  构造器：
  
  ```java
  String();
  String("");
  String(char ch[]);
  String(byte b[]);
  String s = "";
  ```
  
  方法：
  
  ```java
  int     length()
  int     indexOf(int a)
  int     indexOf(String s);
  int     lastIndexOf(String s);
  char    charAt(int a);
  String  replace(String old,String new);
  boolean  equals(Object obj);
  String   subString(int s,int end)
  String   subString(int s);
  boolean  endsWith(Stirng  s)
  boolean  startsWith(String s)
  char []a   toCharArray();
  String   toUpperCase()
  String   toLowerCase()
  String[] s   split(",");
  String     trim();
  boolean   contains("")
  byte []   getBytes()
  ```
  
3. StringBuffer StringBuilder
  
  可变字符串
  
  构造器：
  
  ```java
  StringBuffer("");
  StringBuilder("");
  ```
  
  方法：
  
  ```java
  append("");
  length()
  toString()
  insert();
  ```

4. Math
  
  所有的方法全部都是静态的
  
  ```java
  abs()
  ceil()
  floor()
  rint()
  round()
  min()
  max()
  random()   0--1
  ```

5. System
  
  in
  
  out
  
  err
  
  exit(0)
  
  arrayCopy()


6. 包装类

   byte	Byte

   short	Short

   ​	int	Integer

   ​	long	Long

   ​	float	Float

   ​	double  Double

   ​	char	Character

   ​	boolean Boolean

   自动装箱   自动拆箱

   isLetter()

   isDigit()

   isWhiteSpace()

   toUpperCase()

   toLowerCase()

   isUpperCase()

   isLowerCase()

## java.util.*;

1. Date

  ```java
  Date();   ---  得到系统的当前时间
  Date(long lo)   --- 从基准时间过了 lo 毫秒后的时间
  				基准时间： 1970-1-1 8:00:00
  	
  getYear()
  getMonth()
  getDate()
  getDay()
  getHours()
  getMinutes()
  getSeconds()
  ```
