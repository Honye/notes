
## Looper 类的作用

将一个普通线程转换为循环线程

一个线程中只能有一个 Looper 对象，对应一个消息队列
   
如何将普通线程变为 Looper 线程

1,编写自定义的线程类，继承 Thread 类

 2,重写 run 方法

1)在 run 方法开始的时候调用 Looper.prepare();

实例化Handler对象

2)在 run 方法结束的时候调用 Looper.loop() 将该线程加入到循环中
     
## handler 使用

主要作用：处理线程与线程之间的通信消息
  
要和谁通信就要使用谁的 Handler 对象进行发送消息

一个线程中可以有多个 Handler 

Handler 在哪里实例化，那么它就与哪个线程 Looper 绑定

使用步骤：

1，在相应的线程位置实例化 Handler 对象

2，重写 HandlMessage()
         
3，发送消息   

使用相应的 Handler 进行发送消息

```java
Message msg = new Message() ;   
handler.sendMessage(msg);

Message msg = handler.obtinMessage();
msg.sendtotarget();
```

## 任务调度

1，声明变量

```java
Timer timer = new Timer();
MyTimeTask task = new MyTimeTask();
```
       
2,编写自定义 MyTimerTask 继承 TimerTask
       
3，重写run方法
   
4，在onCreate()方法中，进行任务调度

```java
timer.schedule(task,0,1000); 
```

5,在点击事件更新了 max 的值

   


