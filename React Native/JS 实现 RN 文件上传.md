---
title: JS实现 RN 文件上传
date: 2017-08-06 23:35:30
tags: [React Native]
---
> 转自: <http://blog.qiniu.com/archives/5806>

本文将介绍：
- 如何使用原生 Javascript 上传文件
- 如何使用七牛云 SDK 上传文件到七牛云

在 App 中文件上传是一个非常重要的需求，但是翻遍 React Naitve 的官方文档没有发现有详细介绍文件上传的文章，在 github上 搜索一下倒是发现了不少 repo 在做这样的事情

[![1](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/11.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/11.png)

[https://github.com/PhilippKrone/react-native-fileupload ](https://github.com/PhilippKrone/react-native-fileupload)

[![2](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/21.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/21.png)

<https://github.com/eduedix/react-native-networking>

遗憾的是这项项目都是基于 native code 实现的，虽然在 React Native 使用 Native Comment 有很好的工具支持，但是终归没有直接使用纯 JS 的库更方便。其实 React Native 已经悄悄支持了文件上传，我们可以不用引入任何依赖、从容的用几行 JS 来解决文件上的问题。

[![42702](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/42702.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/42702.png)

是不是非常简单直白？上面这几行代码对应到 html 的表单类似这样，我们用这几行代码模拟了一次文件上传的表单

[![42703](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/42703.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/42703.png)

对应的 Http 请求类似如下

[![42704](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/42704.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/42704.png)

下面详细分析一下这几行简短的代码的作用，

[![42705](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/42705.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/42705.png)

我们首先创建一个 FormData 对象，FormData 对象指代一个 Form 表单对象的内容，这里我们只需要关注 Form 内的内容和他们的 Content-Type 就可以了，这里我们添加了 key，token 和 file 这几个 form 内容，并特别指定了 file 的 Content-Disposition 的类型是 application/octet-stream ,代表这是一个任意的二进制数据，这里可以是 png,jpeg 的图片和其他任何类型。key 和 token 是服务器需要的额外信息。key 是上传到服务器的文件名，token 是请求令牌。最后在用fetch 提交请求的过程中 FormData 会帮助我们添加 Http 本身的 Content-Type等信息。

[![42706](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/42706.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/42706.png)

这四行简短的代码帮助我们构建了 Http 的 Payload，并实际提交到上传的服务器。实际返回的服务器端响应客户端需要处理，可以使用 fetch 的 Promise API，非常方便

[![42707](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/42707.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/42707.png)

这里有个坑需要提醒一下，大家在debug返回响应的时候会发现请求在一个 Promise 结束后不再进入第二个 Promise，再次发送请求，发现前面请求的 Promise 又继续执行下去。这其实是 React Native Debugger 的一个 bug，大家忽略就可以了，在非 debug 模式就一切正常了。

有了以上知识我们就可以很容易的上传文件到服务器了，这里有很多小伙伴会选择类似七牛云存储这种服务来加速开发，根据七牛的官方文档构建 token 就可以上传了，这里七牛也很贴心的推出了 React Native 平台的 SDK

使用 SDK 之后上传文件就变的非常简单了，首先是安装

[![42708](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/42708.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/42708.png)

安装之后配置自己的 AK 和 SK，这个可以在个人中心里面找到

[![42709](http://7j1ynv.com5.z0.glb.qiniucdn.com/wp-content/uploads/2016/04/42709.png)](http://blog.qiniu.com/wp-content/uploads/2016/04/42709.png)

这里我们再举一个现实世界的例子，用户在图片库中选择图片之后上传到七牛云存储，因为目前 React Native 官方还不支持从图片库，摄像头等多个渠道获取图片，这里的代码使用了另外一个开源库[ https://github.com/marcshilling/react-native-image-picker](https://github.com/marcshilling/react-native-image-picker) 。

完整demo：<https://github.com/buhe/present-demo/tree/master/presentdemo>
