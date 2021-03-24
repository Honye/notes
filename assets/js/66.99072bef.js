(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{364:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端样式小笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端样式小笔记","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端样式小笔记")]),t._v(" "),a("p",[t._v("包含 CSS、CSS3、LESS、PostCSS")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("编译后样式 "),a("code",[t._v("-webkit-box-orient")]),t._v(" 不显示")]),t._v(" "),a("p",[t._v("原因：autoprefixer 自动移除老式过时代码")]),t._v(" "),a("p",[t._v("解决：添加注释关闭 autoprefixer，但如果有清除注释的插件，请关闭该插件，否则不生效")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* autoprefixer: off */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-orient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vertical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* autoprefixer: on */")]),t._v("\n")])])]),a("p",[t._v("参考：https://github.com/postcss/autoprefixer/issues/776")])])]),t._v(" "),a("h2",{attrs:{id:"transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition","aria-hidden":"true"}},[t._v("#")]),t._v(" transition")]),t._v(" "),a("p",[t._v("MDN 地址："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2012/10/more-display-show-hide-tranisition/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhangxinxu.com/wordpress/2012/10/more-display-show-hide-tranisition/"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[a("p",[t._v("动画属性前后不同值必须含数值，例如 "),a("code",[t._v("height:0")]),t._v(" → "),a("code",[t._v("height: auto")]),t._v(" 是没有动画效果的")])]),t._v(" "),a("li",[a("p",[t._v("不同属性值的应用前后必须有时间差，例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0px'")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100px'")]),t._v("\n")])])]),a("p",[t._v("虽然这里元素高度设置了 "),a("code",[t._v("0")]),t._v(", 也设置了 "),a("code",[t._v("100")]),t._v(" 像素。但是，由于浏览器的性能机制，只会直接渲染后面100像素高度，因此，是不会出现动画效果的！")])])]),t._v(" "),a("h2",{attrs:{id:"active"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#active","aria-hidden":"true"}},[t._v("#")]),t._v(" :active")]),t._v(" "),a("p",[t._v("MDN 地址："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("iOS "),a("code",[t._v(":active")]),t._v(" 不生效")]),t._v(" "),a("blockquote",[a("p",[t._v("By default, Safari Mobile does not use the :active state unless there is a touchstart event handler on the relevant element or on the <body>.")])]),t._v(" "),a("p",[t._v("在 iOS 系统的移动设备中，需要在相关元素或 <body> 上绑定一个 touchstart 事件才能激活 :active 状态")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ontouchstart")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- or --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空函数即可")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"calc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calc","aria-hidden":"true"}},[t._v("#")]),t._v(" calc()")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".classname")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0 + 34px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 此句不生效，0 必须加单位 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0px + 34px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ✓ */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"iphonex-下巴适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iphonex-下巴适配","aria-hidden":"true"}},[t._v("#")]),t._v(" iPhoneX 下巴适配")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fix-iphonex")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 34px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 兼容 iOS < 11.2 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 兼容 iOS >= 11.2 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://aotu.io/notes/2017/11/27/iphonex/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("网页适配 iPhoneX，就是这么简单"),a("OutboundLink")],1)])])},[],!1,null,null,null);s.default=e.exports}}]);