(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{283:function(e,t,r){"use strict";r.r(t);var n=r(0),v=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"服务的概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务的概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务的概念")]),e._v(" "),r("p",[e._v("服务是运行在手机后台的程序，它是没有界面")]),e._v(" "),r("h3",{attrs:{id:"服务的作用："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务的作用：","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务的作用：")]),e._v(" "),r("p",[e._v("一：做一些耗时的操作，如下载，音乐播放")]),e._v(" "),r("p",[e._v("二：快速启动")]),e._v(" "),r("h3",{attrs:{id:"服务的两种使用方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务的两种使用方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务的两种使用方式")]),e._v(" "),r("p",[e._v("一，Context.startService()")]),e._v(" "),r("p",[e._v("特点：调用者和服务之间没有必然的关系，调用者没有调用Context.stopService()方法，那么这个服务就一直在后台运行，直到调用了Context.stopService()方法，或者手动在应用管理中停止服务，或者关机重启")]),e._v(" "),r("p",[e._v("如果当前service没有实例：")]),e._v(" "),r("p",[e._v("Context.startService()--\x3eonCreate()--\x3eonStartCommand()--\x3eservice running")]),e._v(" "),r("p",[e._v("如果当前service有实例：")]),e._v(" "),r("p",[e._v("Context.startService()--\x3eonStartCommand()--\x3eservice running")]),e._v(" "),r("p",[e._v("Context.stopService()--\x3eonDestroy()--\x3eservice die")]),e._v(" "),r("p",[e._v("二，bindService()")]),e._v(" "),r("p",[e._v("特点：不同同日生但求同日死")]),e._v(" "),r("p",[e._v("activity 一旦绑定服务，一定要在 activity() 被摧毁之前解绑服务(使用bind方法只能绑定一次)")]),e._v(" "),r("p",[e._v("如果当前service没有实例：")]),e._v(" "),r("p",[e._v("Context.bindService()--\x3eonCreate()--\x3eonBind()--\x3eservice running --\x3eContext.unBind()--\x3eonUnbind()--\x3eonDestroy()")])])},[],!1,null,null,null);t.default=v.exports}}]);