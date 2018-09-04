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

