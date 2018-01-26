
### 服务的概念

服务是运行在手机后台的程序，它是没有界面

### 服务的作用：

一：做一些耗时的操作，如下载，音乐播放

二：快速启动

### 服务的两种使用方式

一，Context.startService()

特点：调用者和服务之间没有必然的关系，调用者没有调用Context.stopService()方法，那么这个服务就一直在后台运行，直到调用了Context.stopService()方法，或者手动在应用管理中停止服务，或者关机重启

如果当前service没有实例：

Context.startService()-->onCreate()-->onStartCommand()-->service running

如果当前service有实例：

Context.startService()-->onStartCommand()-->service running
    
Context.stopService()-->onDestroy()-->service die

二，bindService()

特点：不同同日生但求同日死

activity 一旦绑定服务，一定要在 activity() 被摧毁之前解绑服务(使用bind方法只能绑定一次)
      
如果当前service没有实例：

Context.bindService()-->onCreate()-->onBind()-->service running -->Context.unBind()-->onUnbind()-->onDestroy()
      
           

   
   
