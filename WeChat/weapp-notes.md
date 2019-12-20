[小程序示例及源码](https://mp.weixin.qq.com/debug/wxadoc/dev/demo.html)

### 1. \<text> 注意事项

a. 开始标签 \<text> 和结束标签 \</text> 中空格和换行都有实际效果，谨慎使用换行和空格

  ```html
   <text>第一行 
   第二行
     第三行</text>
  ```

最终显示

  ```
  第一行
  第二行
    第三行
  ```

b. 单行显示，溢出文本省略号...

  ```css
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  ```

c. 限行显示，溢出文本省略(此处3行)

  ```css
    display: -webkit-box; 
    word-break: break-all; 
    text-overflow: ellipsis; 
    overflow: hidden; 
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3; 
  ```

d. \<text> 内无法嵌入其它非 \<text> 组件，\<text> 内嵌入的 \<text> 无法响应点击等交互事件。可使用 \<view> 代替

### 2. 引用路径

以 `./` 或者直接文件夹名开头的代表相对路径
​    如: `./source/icon.png` 和 `source/icon.png`

以 `/` 开头的代表绝对路径，相对于主目录
​    如: `/components/icon.wxml`

有些地方是支持**绝对路径**，有的不支持

支持：
- \<image> 的 src
- 路由的路径
- 自定义组件的引用路径

不支持：
- js、wxss 文件导入其它同类型文件
- \<wxs> 的 src

### 3. 路由重复跳转

避免用户快速多次点击重复跳转的问题，由用户主动跳转的都使用组件 `navigator`，官方已经做了重复跳转的处理，非用户主动操作的，如网络访问后自动跳转的情况可以使用 API `wx.navigateTo()`

### 云开发

1. 服务端 `collection.add` 添加多个问题

   ```javascript
   const add = () => {
       for (let i = 0; i < 3; ++i) {
           db.collection('cname').add({
               data: { index: i }
           }).then( res => {
               console.log('*** 添加成功 ***', res)
           }).catch( err => {
               console.error('*** 添加失败 ***', err)
           })
       }
   }
   ```

   上面代码添加不成功，无报错信息。将添加改为同步操作就能成功，逐个添加。调整如下：

   ```javascript
   const add = async () => {
       for (let i = 0; i < 3; ++i) {
           await db.collection('cname').add({
               data: { index: i }
           }).then( res => {
               console.log('*** 添加成功 ***', res)
           }).catch( err => {
               console.error('*** 添加失败 ***', err)
           })
       }
   }
   ```

   小程序不存在以上情况。

2. 注意每次存到数据库的数据类型保持一致，读取的比对的时候也是类型严格比对，经常发生在如下情况

   ```javascript
   onLoad(options) {
       // 通过 url 拼接的参数，获取的时候都是 String 类型的，需转换成自己想要的类型
       const id = Number(options.id)
   }
   ```

   如果数据库全部存 String 会出现如下情况

   ```javascript
   onTap(e) {
       // 通过 data- 自定义属性传递的值会保留原有数据类型
       const id = String(e.currentTarget.dataset)
   }
   ```

### 微信开发者工具命令行

**⚠️ 必须先把开发者工具的服务端口打开。**

微信开发者工具 -> `设置` -> `安全设置` -> 开启服务端口

为命令行添加别名（Mac）

```bash
cd ~  # 进入用户主目录
vim .bash_profile
```

添加如下：

```bash
# WeChat
alias wechat=/Applications/wechatwebdevtools.app/Contents/MacOS/cli
```

使生效

```bash
source .bash_profile
```

使用

```bash
# 打开工具
wechat -o
# 打开路径 /Users/username/demo 下的项目
cli -o /Users/username/demo
```

更多使用：<https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html>

### wx.login 必须在 wx.getUserInfo 前调用

`wx.login` 如果未在 `wx.getUserInfo` 前调用可能会出现服务端解密失败的情况