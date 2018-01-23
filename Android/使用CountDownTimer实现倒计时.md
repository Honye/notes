## CountDownTimer 类概述
定时执行在一段时间后停止的倒计时，在倒计时执行过程中会在固定间隔时间得到通知（译者：触发 onTick 方法），下面的例子显示在一个文本框中显示一个 30s 倒计时：

```java
 new CountdownTimer(30000, 1000) {
     public void onTick(long millisUntilFinished) {
         mTextField.setText("seconds remaining: " + millisUntilFinished / 1000);
     }
     public void onFinish() {
         mTextField.setText("done!");
     }
 }.start(); 
```

onTick 的调用是同步的，保证这次调用不会在之前调用完成前发生。这里的同步机制主要是用来：onTick 的实现需要很多时间执行比倒计时间隔更重要的事情。

## 构造函数

```java
/**
 * @param millisInFuture 从开始调用 start() 到倒计时完成并 onFinish() 方法被调用的毫秒数。（译者注：倒计时时间，单位毫秒）
 * @param countDownInterval 接收 onTick(long) 回调的间隔时间。（译者注：单位毫秒）
 */
public CountDownTimer (long millisInFuture, long countDownInterval)
```

## 公共方法

```java
/**
 * 取消倒计时（译者：取消后，再次启动会重新开始倒计时）
 */
public final void cancel ()
```

```java
/**
 * 倒计时完成时被调用
 */
public abstract void onFinish ()
```

```java
/**
 * 固定间隔被调用
 * @param millisUntilFinished 倒计时剩余时间
 */
public abstract void onTick (long millisUntilFinished)
```

```java
/**
 * 启动倒计时
 */
public synchronized final CountDownTimer start ()
```

## 示例代码

Java文件: 

```java
package com.test.countdowntimer;

import android.app.Activity;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TextView;
import com.test.R;

public class CountDownTimeActivity extends Activity implements OnClickListener {

    TextView tv_result;     // 结果显示
    Button btn_start;       // 开始按钮
    Button btn_cancel;      // 取消按钮

    @Override
    protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.countdown);
       
       tv_result = (TextView)findViewById(R.id.tv_result);
       btn_start = (Button)findViewById(R.id.btn_start);
       btn_cancel = (Button)findViewById(R.id.btn_cancel);

       btn_start.setOnClickListener(this);
       btn_cancel.setOnClickListener(this);
    }

    CountDownTimer timer = new CountDownTimer(40000,1000) {

       @Override
       public void onTick(long millisUntilFinished) {
           tv_result.setText("seconds remaining: " + millisUntilFinished / 1000);

           try {
              Thread.sleep(1200);
           } catch (InterruptedException e) {
              e.printStackTrace();
           }

           Log.e("CountDown",millisUntilFinished+"");
       }

       @Override
       public void onFinish() {
           tv_result.setText("done！");
       }
    };

    @Override
    public void onClick(View v) {
       switch(v.getId()){
           case R.id.btn_start:  // 开始按钮
               timer.start();
               break;
           case R.id.btn_cancel:  // 取消按钮
               timer.cancel();
               break;
       }
    }
}
``` 

XML文件: 

```xml
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    <!-- 结果显示 -->
    <TextView 
        android:text="TextView" android:id="@+id/tv_result"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />
    <!-- 开始按钮 -->
    <Button
        android:text="开始"
        android:id="@+id/btn_start"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />
    <!-- 取消按钮 -->
    <Button
        android:text="取消"
        android:id="@+id/btn_cancel"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

</LinearLayout>
```

## 说明: 
CountDownTimer 的间隔为 1s，我们在 onTIck 方法里面休眠了 1.2s，所以 log 出来发现打印间隔变成了 2s，即中间一次 onTick 方法没有被执行（不会在之前一次调用完成前被调用）。