
## 实现微信页面的步骤

### 第一步：编写 4 个 fragment 和与之相对应的布局文件

### 第二步：编写一个底部导航栏 bottom.xml 

### 第三步：在 activity_main.xml 中添加一个 ViewPager(android.support.v4.view.ViewPager)控件，导入 bottom.xml

<include android:id="@+id/bottom" layout="@layout/bottom">

### 第四步：编写自定义PagerAdapter 继承 FragmentPagerAdapter    MyAdapater

定义一个 ArrayList<Fragment>  全局变量 fragments

重载构造方法

```java
public MyViewPagerAdapter(FragmentManager fm,ArrayList<Fragment> fragments) {
	super(fm);
	this.fragments = fragments;
}
```

重写 getItem(int position), getCount()

```java
getItem(int position)   return fragments.get(position)
getCount()  return fragments.size()
```
        
### 第五步：初始化控件 ViewPager, 4 个RadioButton, 4 个fragment, ArrayList<Fragment> fragments

将4个fragment添加到fragments

获得FragmentManager对象

```java
FragmentManager fm = getSupportFragmentManager();
```

创建自定义 MyAdapater 的对象

```java
MyAdapater mya = new MyAdapater(fm , fragments);
```

### 第六步：为 ViewPager 设置 Adapter，为ViewPager 设置 OnPageChangedListener()

```java
vp.setAdapter(mya);
vp.addOnPageChangeListener( new  OnPageChangeListener(){

})
```

### 第七步：为radio设置监听器


补充：eclipse 导入 v4 包源码的方法

在 libs 文件夹下新建文件 android-support-v4.jar.properties

并在文件里面填入内容 

```
src=D:\\Android_1\\android-sdk\\android-sdk\\extras\\android\\support\\v4\\src
```

****等号右边的值为你实际 v4 包源码存放位置

关闭工程，重新打开
        
