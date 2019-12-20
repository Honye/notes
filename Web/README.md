---
title: Web
date: 2018-6-22 15:02:07
tags: [web, javascript, html, html5, css, css3]
---

# WEB

## JavaScript

- [sosh - web share js library](https://github.com/calledT/sosh) 

## CSS

[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)





```c
[0, 2] 3*0  0 = index / 3
//[3, 5] 3*1  1 = index / 3
[6, 8] 3*2. 2 = index / 3
//[9, 11]
[12, 14]

6*Math.floor(index/6) <= index <= 2 + 6*Math.floor(index/6)
```

- AliOSS

  1. [微信小程序中图片上传阿里云 OSS](https://segmentfault.com/a/1190000015152636)

  2. [小程序图片上传阿里 OSS 使用方法](https://www.jianshu.com/p/4372ad69c861)

  3. [JavaScript 客户端签名直传（官方）](https://help.aliyun.com/document_detail/31925.html?spm=5176.doc31923.6.628.JYYHox)

  4. AliOSS 图片压缩

     ```
     imgurl?x-oss-process=image/resize,w_100,h_100/quality,Q_80
     ```

     [AliOSS 图片处理文档](https://www.alibabacloud.com/help/zh/doc-detail/44686.htm?spm=a2c63.p38356.a1.2.15974733N7lPnA)

- `IntersectionObserver`

  使用此 API 实现了当 A 元素出现时隐藏 B 元素的效果

  [MDN - Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

  [IntersectionObserver Polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)
  
- `window.scrollTo()` smooth

  锚点平滑滚动

  ```css
  html {
    scroll-behavior: smooth;
  }
  
  @media (prefers-reduce-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
  ```

  ```javascript
  new Router({
    ...
    scrollBehavior: (to, from, savedPosition) => {
      if (to.hash) {
        return window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        return {
          x: 0,
          y: 0,
        }
      }
    }
  })
  ```

  [Smooth scroll behavior polyfill](https://github.com/iamdustan/smoothscroll)

- Vue 单页应用 SEO

  [处理 Vue 单页面 SEO 的另一种思路](https://segmentfault.com/a/1190000011072893)

