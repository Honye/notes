
Android 实用网址：<http://adt.android-studio.org/index.php>

## ADT配置
百度云：<http://pan.baidu.com/s/1qWFJoF6>

在 eclipse 中在线安装地址：<http://dl-ssl.google.com/android/eclipse/>

通过本地安装，压缩包下载地址：<http://developer.android.com/sdk/installing/installing-adt.html>

## 一、Android项目结构分
	src：存放java源代码
	gen：存放系统自动生成的配置文件（不修改）
	Android 4.4.2：该文件夹下包含android.jar文件，这是一个Java归档文件，其中包含构建应用程序所需的所有的Android SDK库（如Views、Controls）和APIs
	assets：存放资源文件，不会自动生成id，且不会自动占用空间
	bin：存放应用被编译后生成的可执行文件（.apk），以及应用用到被打包到apk中的资源文件
	res：存放应用用到的所有资源，如图片、布局等
		drawable：存放不同分辨率的图片资源
		layout：存放布局文件
		values：存放字符串，主题，颜色，样式等资源文件
		AndroidManifest.xml：清单文件，配置一些与应用有关的重要信息，包含包名，权限，程序组件等

二、文本框控件
	TextView显示文本框控件
		属性：
			android:id----控件的id
			android:layout_width----控件的宽度
			android:layout_height----控件的高度
				android:layout_width="wrap_content"	wrap_content：包裹实际文本内容大小
				android:layout_width="match_parent"	match_parent：当前控件铺满父类容器（2.3api之后添加的属性值）
				android:layout_width="fill_parent"	fill_parent：当前控件铺满父类容器（2.3api之前的属性值）
			android:text----文本内容
			android:textSize----文本大小
				android:textSize="28sp"
			android:textColor----文本颜色
				android:textColor="#000000"	RGB颜色值
			android:backgroud----控件背景

	EditText输入文本框控件
		属性：TextView基础上添加
			android:hint----输入提示文本
			android:inputType----输入文本类型
				android:inputType="textPassword"	输入格式为密码格
				android:inputType="phone"	输入格式为拨号键盘

将xml布局文件引入到activity.java中
	setContentView(R.layout.main_activity);

	练习：
		1、在Activity中需要获取一个id是bookName的TextView控件对象
			(TextView)this.findViewById(R.id.bookName)
		
		2、在Activity中给一个TextView设置字体颜色（tv为TextView对象）
			tv.setTextColor(Color.RED)

三、ImageView图片显示控件
	属性：
		android:src----图像内容		src会自适应
			android:src="@drawable/ic_launcher"	调用res/drawable文件夹下相应分辨率的图片
		android:background----控件背景		background会填充整个控件
			android:background="@drawable/ic_launcher"	不仅可以是图片
			android:background="#00ff00"	还可以是RGB颜色

	注：为了适配更多的分辨率，将所有图片分别在_hdpi，_mdpi，_ldpi文件夹中各存放一份

四、按钮控件
	Button普通按钮控件
		<Button
			android:id="@+id/button1"
			android:layout_width="match_parent"
			android:layout_height="wrap_content"
			android:text="Button"/>		一般将字符串存放在res/value文件夹下，后期调用

	ImageButton图片按钮控件
		<ImageButtom
			abdroid:id="@+id/imageButton1"
			android:layout_width="match_parent"
			android:layout_height="wrap_content"
			android:src="@drawableabc_ab_share_pack_holo_light" />	可以不设置，和button一样的显示效果。也可以在图片上带有文字

	共同点：都可以作为一个按钮产生点击事件
		产生明显的点击效果
	不同点：Button有text属性，ImageButton没有
		ImageButton有src属性，Button没有

五、按钮的监听事件
	通过匿名内部类实现
		private Button loginButton;	1、初始化按钮控件
		loginButton = (Button) findViewById(R.id.button1);	2、赋值  findViewById返回的是View对象，需要转换
		loginButton.setOnClickListener(new OnClickListener(){	3、设置监听器，通过监听器实现点击事件
			
			@Override
			public void onClick(View arg0){		在当前onClick方法中监听点击按钮的动作
				System.out.println("按钮被点击了");
			}
		});

	通过外部类监听事件
		private Button bt1;
		bt1=(Button) findViewById(R.id.button1);

		class MyOnClickListener implements OnClickListener{	创建自己的外部类
									OnClickListener是接口
			@Override
			public void onClick(View v){
				Log.i("tag","父类的onClick事件");
				v.setAlpha(0.5f);	设置透明度，0-1,0表示完全透明，1表示不透明
			}
		}
		
		bt1.setOnClickListener(new MyOnClickListener(){

			@Override
			public void onClick(View v){
				super.onClick(v);	调用父类的onClick方法
				Toast.makeText(MainActivity.this,"bt1要执行的逻辑",1).show();
			}
		});

六、AutoCompleteTextView控件

	1、功能：
		动态匹配输入的内容，如百度搜索引擎当输入文本时，可以根据内容显示匹配的热门信息

	2、属性：
		android:completionThreshold="2" ---->设置输入多少字符时自动匹配

	3、小案例：
		activity_main.xml文件中：
		<AutoCompleteTextView
			android:id="@+id/autoCompleteTextView1"
			android:layout_width="match_parent"
			android:layout_height="wrap_content"
			android:completionThreshold="2"		设置输入多少字符时自动匹配
			android:hint="@string/hello_world" >

			<requestFocus />
		</AutoCompleteTextView>

		MainActivity.java文件中
		public class MainActivity extends Activity{
			//初始化AutoCompleteTextView控件
			private AutoCompleteTextView autoText=null;
			//初始化数据源---匹配文本框输入的内容
			private String[] res={"beijing1","beijing2","beijing3","shanghai1","shanghai2"};

			@Override
			protected void onCreate(Bundle savedInstanceState){
				super.onCreate(savedInstanceState);
				setContentView(R.layout.activity_main);
				//初始化AutoCompleteTextView控件
				autoText=findViewById(R.id.autoCompleteTextView1);
				//设置适配器
				ArrayAdapter<String> adapter=new ArrayAdapter<String>(this,android.R.layout.simple_list_item_1,res);
				//将适配器与当前AutoComopleteTextView绑定
				autoText.setAdapter(adapter);
			}
		}

七、MultiAutoCompleteTextView控件

	1、功能：
		可支持选择多个值(在多次输入的情况下)，分别用分隔符分开，并且在每个值选中的时候再次输入值时会自动去匹配，
		可用在发短信，发邮件时选择联系人这种类型当中

	2、属性：
		android:completionThreshold="2" ----设置输入多少字符时自动匹配

	3、设置分隔符
		mtxt.setTokenizer(new MultiAutoCompleteTextView.CommaTokenizer());	此分隔符为,

	4、小案例
		与AutoCompleteTextView案例一样，只需在MainActivity.java文件中多为MultiAutoCompleteTextView设置分隔符

八、ToggleButton控件

	1、功能：
		ToggleButton有两种状态：选中和未选中状态
		并且需要为不同的状态设置不同的显示文本

	2、属性：
		android:checked="true"
		android:textOn="开"
		android:textOff="关"

九、Acticity的创建和使用

	Android四大组件
		Activity
		Service
		BroadcastReceiver
		Content Provider

	1、在src文件夹下创建一个继承Android中Activity类的类

	2、重写Activity中onCreate(Bundle savedInstanceState)方法

	3、设置显示的布局
		setContentView(R.layout.layout文件夹中布局文件名);

	4、在AndroidManifest.xml文件中,注册activity
		有<intent-filter>标签的为程序运行时显示的主页

十、Activity的生命周期

	onCreate();创建
	onStart();运行
	onResume();获取焦点
	onPause();失去焦点
	onStop();暂停
	onDestroy();销毁
	onRestart();

	1、从创建到销毁的生命周期

		onCreate()-->onStart()-->onResume()-->onPause()-->onStop()-->onDestroy()

	2、从启动到后台，再到前台的生命周期

		onCreate()-->onStart()-->onResume()-->onPause()-->onStop()-->onRestart()-->onStart()-->onResume()

	2、从启动到失去焦点，再到获取焦点的生命周期

		onCreate()-->onStart()-->onResume()-->onPause()-->onResume()

十一、ViewPager

	ViewPager可以使视左右滑动
	android.support.v4.view.ViewPager

	1、加载显示的页面

		将Layout布局转换为View对象
		(1) LayoutInflater li = getLayoutInflater().from(context);
			li.inflate(resource,root);

		(2) View.inflate(context,resource,root);

	2、配置Adapter
		(1) PagerAdapter 数据源：List<View>
		(2) FragmentPagerAdapter 数据源：List<Fragment>
		(3) FragmentStatePagerAdapter 数据源：List<Fragment>

	案例：参考 学习案例/AndroidViewPager

十二、OptionsMenu选项菜单

	1、创建选项菜单

		重写onCreateOptionsMenu()

			-设置菜单项可用代码动态设置  menu.add()
			-还可以通过xml设置  MenuInflater.inflate()

	2、设置菜单项点击事件

		重写onOptionsItemSelected()

	案例：
		1、新建一个类MainActivity继承Activity
		2、重写其中onCreateOptionsMenu()方法

			@Override
			public boolean onCreateOptionsMenu(Menu menu){
				getMenuInflater().inflate(R.menu.main,menu);
				return true;
			}
		3、res/menu文件夹下新建xml文件

			<menu xmlns:android="">
				<item 
					android:id="@+id/action_menu_item1"
					android:orderInCategory="100"
					android:showAsAction="never"
					android:title="菜单一" />
				<item 
					android:id="@+id/action_menu_item2"
					android:orderInCategory="100"
					android:showAsAction="never"
					android:title="菜单二" />
			</menu>

		4、监听菜单列表点击事件，重写onOptionsItemSelected()
			@Override
			public boolean onOptionsItemSelected(MenuItem item){
				switch(item.getItemId()){
					case R.id.action_menu_item1:
						Toast.makeText(MainActivity.this,"点击了菜单一",Toast.LENGTH_SHORT).show();
						break;
					case R.id.action_menu_item2:
						Toast.makeText(MainActivity.this,"点击了菜单二",Toast.LENGTH_SHORT).show();
						Intent itent = new Intent(MainActivity.this,SecondActivity.class);
						item.setIntent(intent);
						break;
					default:
						break;
				}
				return super.onOptionsItemSelected(item);
			}

十三、Dialog对话框

	1、要创建一个AlertDialog，就要用到AlertDialog.Builder中的create()方法
		setTitle:为对话框设置标题
		setIcon:为对话框设置图标
		setMessage:为对话框设置内容
		setView:给对话框设置自定义样式
		setItems:设置对话框要显示的一个list，一般用于显示几个命令时
		setMultiChoiceItems:用来设置对话框显示一系列的复选框
		setSingleChoiceItems:设置单选按钮
		setNeutralButton:普通按钮
		setPositiveButton:给对话框添加“确认”按钮
		setNegativeButton:给对话框添加“取消”按钮

十四、Broadcast广播

	1、普通广播
		Intent intent = new Intent();
		intent.putExtra("msg","这是一条普通广播");
		intent.setAction("com.zhidi.broadcast");
		sendBroadcast(intent);

十五、Android四大组件之Service
	
	定义：
		后台运行，不可见，没有界面
		优先级高于Activity
	用途：
		播放音乐、记录地理信息位置的改变、监听某种动作。。。
	注意：
		运行在主线程，不能用它做耗时的请求或者动作
		可以在服务中开一个线程，在线程中做耗时动作

	类型：
		1、本地服务(Local Service)
			应用程序内部
			startService  stopService  stopSelf  stopSelfResult
			bindService  unbindService

			两种方式：
				1) Start方式：
					服务跟启动源没有任何联系
					无法得到服务对象

				2) Bind方式：
					通过IBinder接口实例，返回ServiceConnection对象给启动源
					通过ServiceConnection对象的相关方法可以得到Service对象

			学习案例：

		2、远程服务(Remote Service)
			Android系统内部的应用程序之间
			定义IBinder接口

十六、多媒体

	1、相机

		步骤：
			1、在布局文件中添加SurfaceView控件

			2、定义变量
				SurfaceView sfv;
				Camera camera;
				SurfaceHolder holder;
				Button bt;
			3、实例化变量
				sfv = (SurfaceView)findViewById(R.id.sfv);
				holder = sfv.getHolder();
				bt = (Button)findViewById(R.id.bt);
			4、编写异步保存类SavePiture继承Asynctask<parameter,progress,result>
				public String doInBackground(byte[]...pars){
					//保存图片
				}
			5、为holder添加回调
				holder.addCallback(new SurfaceHolder.callback()){
					//当预览界面被创建时调用
					surfacecreate(){
						//打开摄像头
						camera = Camera.open()；
                        //设置预览角度
                        camera.setDisplayOritation(90);//角度是90的整数倍
                        //设置预览显示器
                        camera.setPlayViewDisPlay(holder);
                        //开始预览
                        camera.startPreView();
					}
					surfacechanged(){
                      //获取相机参数
                      //设置相机参数
                      //开始预览
                 	}
                 	surfaceDestroy()   
                 	{
                        //释放相机资源
                        camera.release();
                        camera = null ;
                  	}
				});
			6、设置按钮的监听事件，在监听事件中进行拍照
				/**
				    第一个参数：是按下快门时的操作
				    第二个参数：是摄像头获得原始数据时的操作
				    第三个参数：是摄像头将原始数据编译处理后的操作
				*/
				camera.tackPicture(null,null,new PicturCallback(){
                    onPictureTacken(byte[] data, Camera c)
                    {
                        //保存图片
                        new SavePicture().excute(data);
                        //开始预览
                        camera.startPreView(); 
                    }
 
        		});
        	7、添加权限
        		<!-- 调用摄像头功能 -->
        		<uses-feature android:name="android.hardware.camera" />
        		<!-- 调用自动对焦功能 -->
				<uses-feature android:name="android.hardware.camera.autofocus" />
				<!-- 设置允许拍照的权限-->
				<uses-permission android:name="android.permission.CAMERA" />
				<!-- SD卡创建与删除文件权限-->
				<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS" />
				<!-- 配置SD卡权限-->
				<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

十七、反编译

	1、反编译apk得到java源代码
		首先要下载两个工具：dex2jar和jd-gui

		前者是将apk中的classes.dex转换成jar文件，而jd-gui是一个反编译工具，可以查看jar包的源代码。
		下载地址：dex2jar：http://laichao.googlecode.com/files/dex2jar-0.0.7-SNAPSHOT.zip
				  jd-gui：http://laichao.googlecode.com/files/jdgui.zip

		具体步骤：
			首先将apk文件的后缀名改为zip，再解压，得到其中的classes.dex文件，它就是java文件编译再通过dx工具打包而成的；
			解压下载的dex2jar工具，将classes.dex文件复制到d2j-dex2jar.bat所在的目录中；
			在命令行定位到dex2jar.bat所在目录：cd C:\Documents and Settings\Administrator\桌面\反编译工具\dex2jar-2.0
			运行d2j-dex2jar.bat生成classes-dex2jar.jar文件：d2j-dex2jar ./classes.dex
			解压下载的jd-gui工具运行jd-gui.exe，打开前面生成的jar文件，即可看到源码了

十八、应用加密混淆
	
	1、打开project.properties文件，解开proguard.config的注释，定义sdk.dir=和proguard.config=
		sdk.dir为sdk的安装路径：sdk.dir=D:/Android/SDK/android-sdk
		proguard.config=${sdk.dir}/tools/proguard/proguard-android.txt:proguard-project.txt

	2、保留所有具有公有访问权限的类的其公共成员
		-keepclasseswithmembers class *{
    		public *;
		}

	3、删除Log代码
		-assumenosideeffects class android.util.Log {
		    public static *** v(...);
		    public static *** i(...);
		    public static *** w(...);
		    public static *** d(...);
		    public static *** e(...);
		}