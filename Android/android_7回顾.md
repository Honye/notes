
## 基本UI控件

### TextView  常用的属性  

```xml
android:textColor
android:textSize
android:layout_width
android:layout_height
android:background
android:text
android:autolink
android:id
```
   
### EditText

```xml
android:ems
android:inputType
android:maxlength
android:singleLine
android:lines
android:hint
```

### RadioGroup //互斥的单选按钮(有且只能有一项处于选中状态)
RadioButton 与 RadioGroup 同时使用
android:checked="false"

### Button

点击监听器

设置监听器的方法

1,匿名内部类

```java
bt.setOnClickListener(new OnClickListener(){public void onClick(View view){}}) //当前调用这个监听器的对象就是这个view  bt==view
```

2,写一个内部类myOnclickListener，实现OnClickListener接口，重写onClick(View view)方法

```java
myOnclickListener my = new myOnclickListener() ;
bt.setOnClickListener(my);
```

3,当前Activity实现OnCliclickListener接口,重写onClick(View view)方法

```java
bt.setOnClickListener(this);
```

4，当前Activity编写一个点击监听器的方法，onMyClick(View view),在布局文件中，Button的属性 android:onClick="onMyClick"

### ImagView

android:src="@drawble/资源名"

### ImagButton

android:src="@drawble/资源名"

### CheckBox 复选框

```java
if(cb.isChecked) {
    cb.getText();
}
```

## 复合UI控件

### spinner //下来框
 
填充数据的方法

1，直接在布局的时候，静态填充

```xml
android:entries="@array/资源名"
```

2,动态填充

```java
ArrayAdapter ad = new ArrayAdapter(Context context,int android.R.layout.simple_spinner_item,String[] data); //创建ArrayAdapter对象
sp.setAdapter(ad) //为spinner设置adapter
//获取spinner的数据
sp.getSelectedItem();
```

### DatePicker / DatePickerDiaLog

```java
 dp.init(Context context,new OnDataChangedListener,year,month,day) //初始化DatePicker 
 
DataPickDialog dpd = new DataPickDialog(Context context,new OnDateSetListener(),year,month,day); // 创建DataPickDialog对象
dpd.show(); //展示DataPickDialog 
```

### TimePicker/ TimePickerDiaLog

```java
tp.setOnTimeChangedListener(new OnTimeChangedListener(){}) //为TimePicker设置时间改变监听器

TimePickerDiaLog tpd = new TimePickerDiaLog(Context c, new OnTimeSetListener(),hour,min) //创建TimePickerDiaLog对象
tpd.show() //展示TimePickerDiaLog 
```

## 高级UI控件

### ListView

下拉列表  数据展示都需要 Adapter 支持

1、仅展示字符串类型的数据，用 ArrayAdapter

2、展示图文混排的数 SimpleAdater 必须要自定义 Item 的布局

```java
SimpleAdapter sp = new SimpleAdapter(Context c , ArrayList<Map<String,Object>> data_list , int resid , String[] from , int[] to);
// data_list 数据集合
// resid 自定义布局文件的id R.layout.xxx
// from 里面的值是map数据中键的集合
// to 里面的值，是map数据中的值所展示的控件的ID
lv.setAdapter(sp);
lv.setOnItemClickListener(new OnItemClickListener(){})
```

3,、实现 Item 里面按钮单独点击事件，自定义 Adapter 继承 BaseAdapter 重写getView() 方法

自定义一个Adapter，继承 BaseAdapter

```java
// 全局变量 
LayoutInflater ml , ArrayList<map<String,Object>> data_list;
// 构造方法的参数  Context c, ArrayList<map<String,Object>> data_list
//实例化 LayoutInflater 
ml = LayoutInflater.from(c) ;
//实例化数据
this.data_list = data_list ;
// 重写 getView(View onvertView ,int position)
View v;
//判断convertView是否为null
if(convertView == null) {
    v = ml.inflater(R.layout.xxx,null);
} else {
    v = convertView
};
//得到Button对象
Button bt = v.findViewById(R.id.xx);
map<String,Object> data = data_list.get(position);
//为相应的控件设置相应的展示信息
bt.setText();
//为bt设置监听器
bt.setOnClickListener(new OnClickListener(){});
//创建自定义Adapter对象
MyAdapter my = new MyAdapter ( c , data_list);
//为ListView设置Adapter
lv.setAdapter(my);
```

### GridView //网格布局

```xml
android:numColumn //设置列的数量
android:columnWidth //设置列宽
```

```java
data_list.remove() ;
adapter.notifyDataChange();
```

### ViewPager //展示页面滑动效果

```java
android.surpport.v4.view.ViewPager  

PagerAdapter   pa //必须重写四个方法 getCount() isViewFromObject(View v,Object o),destroyItem(),instantiateItem()
int getCount() // 返回的数据为 page_list.size()
boolean isViewFromObject(View v,Object o) //返回的数据是 v == o
void destroyItem(ViewGroup v , int position)  //当当前Itembei销毁的时候调用
   //super.destroy
   ViewPager(v).removeView(page_list.get(position))

View instantiateItem(ViewGroup v, int position) //当当前页面即将展示的时候
  
 ViewPager(v).addView(page_list.get(position))
 return page_list.get(position)

//为ViewPager添加监听器
 vp.setAdapter(pa)

//为vp添加监听器
vp.addPageChangeListener(new PageChangeListener(){})
```

### ProgressBar

进度条   小圆圈，横向进度条

```xml
android:max //设置最大值
android:progress //设置当前值
```  

### RatingBar

评分器

```xml
android:numStars //设置评分星星数
android:stepSize //设置一次点击步长
android:rating //默认值
android:isIndicator //是否可点击 true是不可点击，false是不可点击
```

### SeekBar

拖动条

```xml
android:max
android:progress
```

```java
sb.setOnSeekBarChangeListener(new OnSeekBarChangeListener()) //设置监听器
```

### 菜单（选项菜单，上下文菜单，子菜单）

```java
// 选项菜单：OptionMenu   onCreateOptionsMenu() onOptionsItemSelected()
onCreateOptionsMenu(Menu menu)  //添加菜单
//Java代码添加
menu.add(int groupid, int itemid,int order,String title);
```
使用资源文件

在res文件夹下，新建一个文件夹命名为 menu

新建 my_menu.xml 文件 根标签 `<menu>` 字标签 `<item android:id="" android:title="">`

```java
getMenuInflater().inflater(R.menu.xx,menu)
```

上下文菜单  onCreatContextMenu() onContextItemSelected()


### 弹出框 AlterDialog, PopupWindow

AlterDialog //非阻塞的

PopupWindow //阻塞的
 



