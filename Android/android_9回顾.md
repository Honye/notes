
## fragment

使用方法

1,静态的

第一步：编写自定义的Fragment,继承Fragment

 (android.support.v4.app.Fragment),必须重写onCreateView()

第二步：MainActivity 必须继承的是 FragmentActivity，在 MainActivity 的布局文件中，添加 Fragment 控件，android:name="com.zhidi.test.MyFragment"

在MainActivity中获得MyFragment的对象

```java
FragmentManager fm = getSupportFragmentManager();   // 获得FragmentManager对象
MyFragment mf = (MyFragment )fm.findFragmentById(R.id.xxx);   // 获得MyFragment对象
```

2,动态的

第一步：编写自定义的 Fragment, 继承 Fragment
 (android.support.v4.app.Fragment), 必须重写 onCreateView()

第二步：在 MainActivity 中 必须继承的是 FragmentActivity

```java
FragmentManager fm = getSupportFragmentManager(); //获得FragmentManager对象
MyFragment mf = new MyFragment(); //创建MyFragment对象
FragmentTransaction ft = fm.beginTransaction();//开启事务
ft.replace(r.id.yyy,mf);//添加MyFragment对象到容器，第一个参数是容器的id,mf是MyFragment对象
ft.addToBackStack(null); //根据项目需求，是否将该对象添加到回退栈
ft.commit(); //提交事务  
```
          
注意：事务一旦提交，就不能再次使用，如需再次操作，需重新开启事务

## Fragment 与 Activity 之间的通信

第一步：编写自定义的 Fragment, 继承 Fragment
 (android.support.v4.app.Fragment),必须重写onCreateView()

第二步：获取控件对象 

第三步：在 MyFragment 中自定义接口 MyInterFace，并且定义一个MyInterFace 类型的全局变量 myin

在接口里定义需要实现的方法  public int  getPosition(int position)

第四步：重写了Fragment的onAttach(Context activity)方法，把Activity强转为MyInterFace类型对象，并赋值给myin

myin = (MyInterface)activity ;

第五步：在MainActivity中，继承FragmentActivity 实现 MyInterface接口
           
重写getPosition方法

第六步：在MyFragment的控件的点击事件中调用myin的getPosition方法，将int position传值给myin

 补充 Fragment与fragment 之间的通信

第七步：在另一个自定义的Fragment中定义相应方法 SecondFragment

第八步：在MainActivity中获得SecondFragment 的对象

第九步：在getposition方法中调用SecondFragment中的xxxx()方法



  
    
     







