---
title:  XAMPP 启动 Tomcat 报错：Make sure you have Java JDK or JRE installed and the required ports are free
date: 2018-01-31 10:34:33
---

![XAMPP 启动 Tomcat 错误](http://upload-images.jianshu.io/upload_images/3762216-0271037931b83355.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 错误发生环境

重装系统前已经安装了 XAMPP，重装系统后未重新安装，启动 Tomcat 报错。

## 错误信息

```
9:42:16  [Tomcat] 	Attempting to start Tomcat app...
9:42:20  [Tomcat] 	Tomcat Started/Stopped with errors, return code: 1
9:42:20  [Tomcat] 	Make sure you have Java JDK or JRE installed and the required ports are free
9:42:20  [Tomcat] 	Check the "/xampp/tomcat/logs" folder for more information
```

## 解决方案

1. 确保 Java 环境已正确安装，环境变量是否已配置。

2. 修改注册表

- **Win + R**，输入 **regedit** 调出注册表编辑器；

- 选中 **HKEY_LOCAL_MACHINE/SOFTWARE**，右键新建项 **JavaSoft**，在 **JavaSoft** 下再新建项 **Java Development Kit**。

![修改注册表](http://upload-images.jianshu.io/upload_images/3762216-bc13083e5dba5ffc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

修改完后就能正常启动 Tomcat 了。

更多说明：[XAMPP里tomcat启动报错：Make sure you have Java JDK or JRE installed and the required ports are free](http://www.cnblogs.com/xiaoshen555/p/6004761.html)
