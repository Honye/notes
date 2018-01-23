
### .length, .length(), .size()的区别
1. java中的 length 属性是针对数组说的,比如说你声明了一个数组,想知道这个数组的长度则用到了length这个属性.
2. java中的length()方法是针对字符串String说的,如果想看这个字符串的长度则用到length()这个方法.
3. java中的size()方法是针对泛型集合说的,如果想看这个泛型有多少个元素,就调用此方法来查看

### java中数据类型 
1. 基本数据类型，也称原始数据类型。
    byte, short, char, int, long, float, double, boolean
他们之间的比较，应用双等号`==`,比较的是他们的值。 

2. 复合数据类型(类)
    当他们用`==`进行比较的时候，比较的是他们在内存中的存放地址，所以，除非是同一个new出来的对象，他们的比较后的结果为true，否则比较后结果为false。

```java
String str = "Hello";
// 字符拼接会创建一个新对象
String str2 = str + "World"; 
```

StringBuffer 是线程安全的，而 StringBuilder 则没有实现线程安全功能，所以性能略高
