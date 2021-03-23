---
title: HTML 小知识
date: 2018-6-22 09:24:13
description: HTML 知识总结
tags: [HTML, HTML5]
---

# HTML 小知识

### iOS「添加到主屏幕」图标

```html
<head>
    <link rel="apple-touch-icon" href="/custom_icon.png" >
    <!-- 不同尺寸 -->
    <link rel="apple-touch-icon" size="76x76" href="/custom_icon.png" >
    <link rel="apple-touch-icon" size="120x120" href="/custom_icon.png" >
    <link rel="apple-touch-icon" size="152x152" href="/custom_icon.png" >
</head>
```

[iOS 官网说明](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) 

## input

MDN 地址：<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file>

```html
<!-- 选择图片 -->
<input type="file" accept="image/*" >
<!-- 选择视频 -->
<input type="file" accept="video/*" >
<!-- 选择音频 -->
<input type="file" accept="audio/*" >
<!-- 直接打开相机拍照 -->
<input type="file" accept="image/*" capture="camera" >
<!-- 直接打开相机录像 -->
<input type="file" accept="video/*" capture="camera" >
```

### iOS <input\> 聚焦时页面放大

1. 字体不小于 16px
2. 禁止页面缩放