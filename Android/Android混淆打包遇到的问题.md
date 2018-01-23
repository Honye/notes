---
title: Android 混淆打包遇到的问题
date: 2018-01-02 22:35:33
tags: [Android]
---

### 使用 ButterKnife 后打包出错
解决方案是在 `proguard-rules.pro` 文件中忽略对 ButterKnife 的混淆。

ButterKnife 7.0 以下：

```
-keep class butterknife.** { *; }
-dontwarn butterknife.internal.**
-keep class **$$ViewInjector{ *; }

-keepclasseswithmembernames class * {
    @butterknife.* <fields>;
}

-keepclasseswithmembernames class * {
    @butterknife.* <methods>;
}
```

ButterKnife 7.0 以上：

```
-keep class butterknife.** { *; }
-dontwarn butterknife.internal.**
-keep class **$$ViewBinder { *; }

-keepclasseswithmembernames class * {
    @butterknife.* <fields>;
}

-keepclasseswithmembernames class * {
    @butterknife.* <methods>;
}
```

### 使用 EventBus 后打包压缩出错
解决方案是在 `proguard-rules.pro` 文件中忽略对 EventBus 的混淆。

```
-keepattributes *Annotation*  
-keepclassmembers class ** {  
@org.greenrobot.eventbus.Subscribe <methods>;  
}  
-keep enum org.greenrobot.eventbus.ThreadMode { *; }  
  
# Only required if you use AsyncExecutor  
-keepclassmembers class * extends org.greenrobot.eventbus.util.ThrowableFailureEvent {  
<init>(java.lang.Throwable);  
}
```

### aapt_rules.txt (系统找不到指定的路径)
错误：
```
Warning:Exception while processing task Java.io.FileNotFoundException: D:\...\app\build\intermediates\proguard-rules\release\aapt_rules.txt (系统找不到指定的路径。)
```
解决：
菜单栏 Build --> Clean Project，clean 之后再 Build --> Make Project，再打包就好了

### Error: Avoid non-default constructors in fragments
错误：
```
Error: Avoid non-default constructors in fragments: use a default constructor plus Fragment#setArguments(Bundle) instead [ValidFragment]
```
解决：<http://blog.csdn.net/chniccs/article/details/51258972>

### "XXX" is not translated in .....
错误：
```
"app_name" is not translated in "af" (Afrikaans), "am" (Amharic), "ar" (Arabic), "bg" (Bulgarian), "ca" (Catalan),  
"cs" (Czech), "da" (Danish), "de" (German), "el" (Greek), "en-rGB" (English: United Kingdom), "en-rIN" (English:  
India), "es" (Spanish), "es-rUS" (Spanish: United States), "et-rEE" (Estonian: Estonia), "fa" (Persian),  
```
解决：<http://www.codes51.com/article/detail_114285.html>

### release-stripped.ap_' specified for property 'resourceFile' does not exist
错误：
```
Error:A problem was found with the configuration of task ':app:packageBAIDURelease'.
> File 'D:\AndroidStudioProjects\CodeBlog\app\build\intermediates\res\resources-BAIDU-release-stripped.ap_' specified for property 'resourceFile' does not exist.
```
解决：<http://blog.csdn.net/brian512/article/details/52619548>

### 使用 LitePal 后混淆出错
在 `proguard-rules.pro` 中忽略 LitePal。

```
-keep class org.litepal.** { *; }
-keep class * extends org.litepal.crud.DataSupport { *; }
```

[更多关于混淆的问题](http://blog.csdn.net/wxpqqa/article/details/53284223)
[关于混淆加密的文章](https://segmentfault.com/a/1190000002910305)