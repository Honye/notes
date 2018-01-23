
## 滚动视图

ScrollView 垂直滚动

HorizontalScrollView 水平滚动

TextView 滚动
 
```xml
android:scrollbars="horizontal"
```

java代码中

```java
tv.setMovementMethod(ScrollingMovmentMethod.getInstance())
```

## TimePicker 

```java
tmp.setOnTimeChangeListener()
```

## TimePickerDiaLog

```java
TimePickeDiaLog tpd = new TimePickeDiaLog(context,new OnTimeSetListener,hourofday , minut,boolean is24hour )
```

## ProgressBar 进度条

```
android:max 设置进度条的最大值
style=      设置进度条的显示效果
```

## RatingBar 评分控件

```
android:numstart 设置评分星星数
android:stepSize 设置点击步长
android:rating  设置当前值(默认值)
android:isIndictor 设置是否可以点击
```

```java
rb.setOnRatingBarChangListener(new OnRatingBarChangeListener())
```

## SeekBar 拖动进度条

```
android:max 设置最大值
android:progress 设置当前值
```

```java
sb.setOnSeekBarChangeListener(new ....)
```

## ListView 

简单的只有文字显示的 ListView

1,准备一个ListView

2,需要一个ArrayAdapte  new ArrayAdapter(context,R.layout.xxx,数据源)

3,为lv设置adapter

4,为lv设置监听器

```java
lv.setOnItemClickListener()
```



