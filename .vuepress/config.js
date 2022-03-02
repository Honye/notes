module.exports = {
  title: 'Notes',
  description: 'Just playing around',
  base: '/notes/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '关于',
        items: [
          { text: 'Blog', link: 'https://www.imarkr.com' },
          { text: 'Wechat', link: '' },
        ],
      },
    ],
    sidebar: [
      {
        title: 'CSS',
        collapsable: false,
        children: [
          '/CSS/notes.md',
          '/CSS/LESS.md',
          '/CSS/Stylus.md',
        ],
      },
      {
        title: 'NodeJS',
        path: '/NodeJS/',
        collapsable: false,
        children: [
          ['/NodeJS/第一个NPM包.md', '第一个NPM包'],
        ],
      },
      {
        title: 'React',
        path: '/React/',
        collapsable: false,
        children: [
          ['/React/开发环境.md', '开发环境'],
          ['/React/开发环境01.md', '开发环境01'],
          ['/React/开发文档.md', '开发文档'],
          ['/React/dva使用.md', 'dva使用'],
          ['/React/Less-实现换肤.md', 'Less实现换肤'],
        ],
      },
      {
        title: 'Flutter',
        path: '/Flutter/',
        collapsable: false,
        children: [],
      },
      {
        title: 'React Native',
        path: '/ReactNative/',
        collapsable: false,
        children: [
          ['/ReactNative/react-native-开发环境.md', 'React Native 开发环境'],
          ['/ReactNative/ReactNative之搭建开发环境.md', 'React Native 之搭建开发环境'],
          ['/ReactNative/ReactNative之在设备上运行.md', 'React Native 之在设备上运行'],
          ['/ReactNative/ReactNavigation集成Redux.md', 'React Navigation 集成 Redux'],
          ['/ReactNative/ReactNative集成极光推送jpush-react-native.md', '集成极光推送'],
          ['/ReactNative/JS实现RN文件上传.md', 'JS 实现 RN 文件上传'],
          ['/ReactNative/Awesome.md', 'Awesome'],
        ],
      },
      {
        title: 'Web',
        path: '/Web/',
        collapsable: false,
        children: [
          ['/Web/UI.md', 'UI'],
          ['/Web/electron.md', 'Electron'],
          ['/Web/flex-兼容.md', 'flex 兼容'],
        ],
      },
      {
        title: '微信',
        path: '/WeChat/',
        collapsable: false,
        children: [
          ['/WeChat/weapp-notes.md', '笔记'],
          ['/WeChat/awesome.md', 'Awesome'],
          ['/WeChat/use-other-font.md', '使用其他字体'],
          ['/WeChat/template-rating.md', '评分组件 template 版'],
          ['/WeChat/component-rating.md', '评分组件 component 版'],
          ['/WeChat/weapp-rpx.md', '小程序使用 rpx 存在像素差（实战篇）'],
        ],
      },
      {
        title: 'Git',
        path: '/Git/'
      },
      {
        title: 'HTTP',
        collapsable: false,
        children: [
          ['/HTTP/notes.md', '小笔记'],
          ['/HTTP/微信公众号开发调试.md', '微信公众号开发调试'],
          ['/HTTP/Postman使用之Scripts.md', 'Postman使用之Scripts'],
          '/HTTP/Fiddler移动抓包HTTPS.md',
        ],
      },
      {
        title: 'DevOps',
        collapsable: false,
        children: [
          ['/DevOps/nginx.md', 'NGINX'],
          ['/DevOps/shell.md', 'Shell'],
          ['/DevOps/vim.md', 'Vim'],
        ],
      },
      {
        title: 'Windows',
        children: [
          ['/Windows/capsLock-switch-language.md', 'Windows 使用 CapsLock 切换中英文模式'],
          ['/Windows/PowerShell.md', 'PowerShell'],
        ],
      },
      {
        title: 'Java',
        collapsable: false,
        children: [
          {
            title: '基础',
            collapsable: true,
            children: [
              ['/Java/基础/dosc命令.md', 'dosc 命令'],
              ['/Java/基础/01-介绍和安装.md', '01-介绍和安装'],
              ['/Java/基础/02-标识符.md', '02-标识符'],
              ['/Java/基础/03-选择和循环结构.md', '03-选择和循环结构'],
              ['/Java/基础/04-数组及排序.md', '04-数组及排序'],
              ['/Java/基础/05-对象&类&方法&变量.md', '05-对象&类&方法&变量'],
              ['/Java/基础/06-关键字&单例&继承.md', '06-关键字&单例&继承'],
              ['/Java/基础/07-多态&抽象&接口&内部类.md', '07-多态&抽象&接口&内部类'],
              ['/Java/基础/08-lang包和util包.md', '08-lang包和util包'],
              ['/Java/基础/09-util包和text包.md', '09-util包和text包'],
              ['/Java/基础/10-异常.md', '10-异常'],
              ['/Java/基础/11-集合.md', '11-集合'],
              ['/Java/基础/12-IO流.md', '12-IO流'],
              ['/Java/基础/13-线程.md', '13-线程'],
              ['/Java/基础/14-网络.md', '14-网络'],
              ['/Java/基础/15-swing.md', '15-swing'],
            ],
          }
        ],
      },
      {
        title: 'MySQL',
        path: '/MySQL/',
        collapsable: false,
        children: [
          ['/MySQL/01-MySQL安装.md', '01-MySQL安装'],
          ['/MySQL/02-MySQL常用命令及语法规范.md', '02-MySQL常用命令及语法规范'],
          ['/MySQL/03-MySQL数据类型.md', '03-MySQL数据类型'],
          ['/MySQL/04-表操作.md', '04-表操作'],
          ['/MySQL/05-表操作2.md', '05-表操作2'],
          ['/MySQL/MySQL基础语法.md', 'MySQL基础语法'],
          ['/MySQL/XAMPP启动Tomcat报错.md', 'XAMPP启动Tomcat报错'],
        ],
      },
      {
        title: 'Android',
        path: '/Android/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/Android/Android style 样式.md',
          '/Android/Android 学习资源.md',
          '/Android/android_1回顾.md',
          '/Android/android_2回顾.md',
        ],
      },
      {
        title: 'PHP',
        path: '/PHP/',
        collapsable: false,
        children: [
          ['/PHP/apache-vhost.md', '虚拟主机'],
        ],
      },
      {
        title: '其他',
        collapsable: true,
        children: [
          ['/Others/APP.md', '常用 APP'],
          ['/Others/AutoHotkey.md', 'AutoHotkey'],
          ['/Others/Chrome.md', 'Chrome'],
          ['/Others/LeetCode-解题笔记.md', 'LeetCode 解题笔记'],
          ['/Others/Markdown.md', 'Markdown'],
          ['/Others/QQ群文件.md', 'QQ群'],
          ['/Others/Shell.md', 'Shell'],
          ['/Others/WinRAR-注册.md', 'WinRAR 注册'],
          ['/Others/Word-文档.md', 'Word 文档'],
        ],
      },
    ],
    repo: 'honye/notes',
    docsBranch: 'vuepress',
    editLinks: true,
  }
}
