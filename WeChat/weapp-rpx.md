---
title: 小程序使用 rpx 存在像素差（实战篇）
tag: 
 - 小程序
---

# 小程序使用 rpx 存在像素差（实战篇）

在小程序中我想实现如下表格布局效果。第一个单元格纵向占两格高度，由于小程序不存在 table 元素，只能自己通过样式实现。

<img src="./assets/css-grid@2x.png" alt="css-grid@2x" style="zoom:30%;" />

我的实现方式是

```css
.cell {
  height: 88rpx; /* 每个单元格固定高度 */
  float: left;
}
.cell:first-child {
  height: 176rpx;
}
```

这样写在 iPhone5 就会存在如下问题，`176rpx != 88rpx * 2`。

<img src="./assets/rpx-error@2x.png" alt="rpx-error@2x" style="zoom:30%;" />

为什么会出现这种情况，小程序屏幕宽固定为 750rpx，就是把屏幕宽分成 750份，每份就是 1rpx。当屏幕宽（像素）不能被 750 整除时，小程序做了取整操作。

```css
.cell {
  height: 88rpx;
  /*
  iPhone5 宽 320px
  88rpx = 320px / 750 * 88 = 37.5466666667px 
  取整
  88rpx = 37px，最终效果为 37px
  */
}
.cell:first-child {
  height: 176rpx;
  /*
  176rpx = 320px / 750 * 176 = 75.0933333333px
  取整
  176rpx = 75px，最终效果为 75px
  明显 75px != 37px * 2，然后就遇到了上述问题
  */
}
```

**解决方案**

使用 `calc()`

```diff
.cell:first-child {
-  height: 176rpx;
+  height: calc(88rpx * 2);
}
```

这样小程序在编译时会先将 88rpx 转换为 px，然后再乘以 2，这样就会保证是 2倍关系了。

<img src="./assets/rpx-fixed@2x.png" alt="rpx-fixed@2x" style="zoom:30%;" />

[完整源码](https://github.com/Honye/weapp-mark/commit/b64eb4460b75841c1d77bc13bc1fc816a32abf59)

若只是想单纯实现上述网格布局，也可使用 CSS grid 实现，可[参考源码](https://github.com/Honye/weapp-mark/commit/36c6e45459b728a9de237a50f8a20f228ab65402)