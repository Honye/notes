(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{336:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("修改 MySQL 提示符")])]),t._v(" "),s("ol",[s("li",[t._v("连接客户端时通过参数指定")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ mysql -uroot -proot --prompt 提示符\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("连接上客户端后，通过 prompt 命令修改")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" prompt 提示符\n")])])]),s("p",[t._v("如：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" prompt \\u "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\\d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n用户名 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("数据库名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("\\D")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("完整的日期")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("\\d")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当前数据库")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("\\h")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("服务器名称")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("\\u")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当前用户")])])])]),t._v(" "),s("p",[s("strong",[t._v("显示当前服务器版本")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SELECT VERSION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("显示当前日期时间")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SELECT NOW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("显示当前用户")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SELECT USER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n")])])]),s("h3",{attrs:{id:"语法规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法规范")]),t._v(" "),s("ul",[s("li",[t._v("关键字与函数名称全部大写")]),t._v(" "),s("li",[t._v("数据库名称、表名称、字段名称全部小写")]),t._v(" "),s("li",[t._v("SQL 语句必须以分号结尾")])]),t._v(" "),s("h3",{attrs:{id:"数据库操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库操作")]),t._v(" "),s("ol",[s("li",[t._v("创建数据库")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CREATE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DATABASE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SCHEMA "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" IF NOT EXISTS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" db_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" DEFAULT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CHARACTER SET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" charset_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("查看当前服务器下的数据库列表")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SHOW "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DATABASES "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SCHEMAS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" LIKE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pattern'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" WHERE "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("查看警告")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SHOW WARNINGS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("查看创表语句")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SHOW CREATE DATABASE "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("修改数据库")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ALTER "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DATABASE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SCHEMA "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" db_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" DEFAULT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CHARACTER SET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" charset_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("删除数据库")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" DROP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DATABASE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SCHEMA "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" IF EXISTS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" db_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);