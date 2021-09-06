# Stylus

## calc()

在 `calc()` 函数中使用变量

```stylus
a = 10px
b = 20px
padding-bootom: "calc(%s + 10rem)" % a
padding-bottom: "calc(%s + %s)" % (a b)
```
