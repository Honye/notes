# 前端样式小笔记

包含 CSS、CSS3、LESS、PostCSS

1. 编译后样式 `-webkit-box-orient` 不显示

   原因：autoprefixer 自动移除老式过时代码

   解决：添加注释关闭 autoprefixer，但如果有清除注释的插件，请关闭该插件，否则不生效

   ```css
   /* autoprefixer: off */
   -webkit-box-orient: vertical;
   /* autoprefixer: on */
   ```

   参考：https://github.com/postcss/autoprefixer/issues/776

## transition

MDN 地址：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition>

参考：<https://www.zhangxinxu.com/wordpress/2012/10/more-display-show-hide-tranisition/>

1. 动画属性前后不同值必须含数值，例如 `height:0` → `height: auto` 是没有动画效果的

2. 不同属性值的应用前后必须有时间差，例如：

   ```js
   element.style.height = '0px'
   element.style.height = '100px'
   ```
   
   虽然这里元素高度设置了 `0`, 也设置了 `100` 像素。但是，由于浏览器的性能机制，只会直接渲染后面100像素高度，因此，是不会出现动画效果的！

## :active

MDN 地址：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active>

iOS `:active` 不生效

> By default, Safari Mobile does not use the :active state unless there is a touchstart event handler on the relevant element or on the \<body>.

在 iOS 系统的移动设备中，需要在相关元素或 \<body> 上绑定一个 touchstart 事件才能激活 :active 状态

```html
<body ontouchstart=""></body>
<!-- or -->
<script>
  document.body.addEventListener('touchstart', function() {
    // 空函数即可
  })
</script>
```

## calc()

```css
.classname {
  width: calc(0 + 34px); /* 此句不生效，0 必须加单位 */
  width: calc(0px + 34px); /* ✓ */
}
```

### iPhoneX 下巴适配

```css
.fix-iphonex {
  bottom: 34px;
  bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
}
```

[网页适配 iPhoneX，就是这么简单](https://aotu.io/notes/2017/11/27/iphonex/index.html)