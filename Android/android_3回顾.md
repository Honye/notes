
## 相对布局

  一个控件以另一控件为参考，进行的布局

```xml
android:toLeftOf="@id/xxx" 将该组件放到指定ID组件的左边
android:toRightOf="@id/xxx" 将该组件放到指定ID组件的右边
android:layout_below="@id/xxx" 将该组件放到指定ID控件的下面
android:layout_above="@id/xxx"将该组件放到指定ID控件的上面
android:alignBaseLine="@id/xxx" 将该控件与指定ID的基线对齐
```

## 表格布局

```xml
android:collapseColumns="0" 隐藏指定的列（列的序号从0开始）
android:stretchColumns="0"  将指定的列用空白填充（列的序号从0开始，*表示所有）
android:shrinkColumns="0"   自动延伸指定的列的可用部分（列的序号从0开始，*表示所有）
android:layout_span="1"  用在tablerow内的控件属性（表示该控件占几列宽度）
```


