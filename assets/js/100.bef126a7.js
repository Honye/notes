(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{338:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("在创建表前需要打开数据库")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" USE db_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"创建表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建表","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建表")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CREATE TABLE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" IF NOT EXISTS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" table_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    column_name data_type,\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("如：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CREATE TABLE user "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    name VARCHAR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",\n    age TINYINT UNSIGNED,\n    salary FLOAT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("8,2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" UNSIGNED\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"查看数据表列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看数据表列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看数据表列表")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" SHOW TABLES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" FROM db_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" LIKE "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pattern'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" WHERE "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("expr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"查看数据表结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看数据表结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看数据表结构")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" SHOW COLUMNS FROM tb_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"插入记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入记录","aria-hidden":"true"}},[a._v("#")]),a._v(" 插入记录")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" INSERT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" INTO "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" tb_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" col_name,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" VALUES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("val,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("如果不写列名，VALUES 必须包含所有字段，如果写了列名，则 VALUES 值与列名一一对应。")]),a._v(" "),s("h3",{attrs:{id:"查找记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找记录","aria-hidden":"true"}},[a._v("#")]),a._v(" 查找记录")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" SELECT expression,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". FROM tb_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约束","aria-hidden":"true"}},[a._v("#")]),a._v(" 约束")]),a._v(" "),s("ol",[s("li",[a._v("约束保证数据的完整性和一致性。")]),a._v(" "),s("li",[a._v("约束分为表级约束和列级约束。")]),a._v(" "),s("li",[a._v("约束类型包括：")])]),a._v(" "),s("ul",[s("li",[a._v("NOT NULL（非空约束）")]),a._v(" "),s("li",[a._v("PRIMARY KEY（主键约束）")]),a._v(" "),s("li",[a._v("UNIQUE KEY（唯一约束）")]),a._v(" "),s("li",[a._v("DEFAULT（默认约束）")]),a._v(" "),s("li",[a._v("FOREIGN KEY（外键约束）")])]),a._v(" "),s("h3",{attrs:{id:"空与非空"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空与非空","aria-hidden":"true"}},[a._v("#")]),a._v(" 空与非空")]),a._v(" "),s("p",[a._v("NULL 和 NOT NULL，表示允许为空和不允许为空，默认为 NULL")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CREATE TABLE user "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    username CARCHAR NOT NULL,\n    age TINYINT NULL\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"自动编号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动编号","aria-hidden":"true"}},[a._v("#")]),a._v(" 自动编号")]),a._v(" "),s("p",[a._v("AUTO_INCREMENT\n自动编号必须与主键组合使用，默认情况下起始值为1，每次的增量为1")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CREATE TABLE user "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"主键约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主键约束","aria-hidden":"true"}},[a._v("#")]),a._v(" 主键约束")]),a._v(" "),s("p",[a._v("PRIMARY KEY")]),a._v(" "),s("ul",[s("li",[a._v("主键约束")]),a._v(" "),s("li",[a._v("每张数据表只能存在一个主键")]),a._v(" "),s("li",[a._v("主键保证记录的唯一性")]),a._v(" "),s("li",[a._v("主键自动为 NOT NULL")])]),a._v(" "),s("h3",{attrs:{id:"唯一约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唯一约束","aria-hidden":"true"}},[a._v("#")]),a._v(" 唯一约束")]),a._v(" "),s("p",[a._v("UNIQUE KEY")]),a._v(" "),s("ul",[s("li",[a._v("唯一约束")]),a._v(" "),s("li",[a._v("唯一约束可以保证记录的唯一性")]),a._v(" "),s("li",[a._v("唯一约束的字段可以为空值")]),a._v(" "),s("li",[a._v("每张数据表可以存在多个唯一约束")])]),a._v(" "),s("h3",{attrs:{id:"默认约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认约束","aria-hidden":"true"}},[a._v("#")]),a._v(" 默认约束")]),a._v(" "),s("p",[a._v("DEFAULT\n当插入记录时，如果没有明确为字段赋值，则自动赋予默认值")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CREATE TABLE tb "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    column ENUM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'a'")]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'b'")]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" DEFAULT "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'a'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"外键约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外键约束","aria-hidden":"true"}},[a._v("#")]),a._v(" 外键约束")]),a._v(" "),s("p",[a._v("FOREIGN KEY\n保持数据一致性，完整性。\n实现一对一或一对多关系。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CREATE TABLE users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\n    -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" pid BIGINT,\n    -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" POREIGN KEY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("pid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" REFERENCES provinces "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h4",{attrs:{id:"要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#要求","aria-hidden":"true"}},[a._v("#")]),a._v(" 要求")]),a._v(" "),s("ol",[s("li",[a._v("父表和子表必须使用相同的存储引擎，而且禁止使用临时表。")]),a._v(" "),s("li",[a._v("数据表的存储引擎只能为 InnoDB。")]),a._v(" "),s("li",[a._v("外键列和参照列必须具有相似的数据类型。其中数字的长度或是否有符号位必须相同；而字符的长度可以不同。")]),a._v(" "),s("li",[a._v("外键列和参照列必须创建索引。如果外键列不存在索引的话，MySQL 将自动创建索引。")])]),a._v(" "),s("p",[s("strong",[a._v("编辑数据表的默认存储引擎")]),a._v("\n编辑 MySQL 配置文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("default-storage-engine=INNODB\n")])])]),s("p",[s("strong",[a._v("查看表的索引")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" SHOW INDEXES FROM provinces\\G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[s("code",[a._v("\\G")]),a._v(" 表示以表格的形式显示。")]),a._v(" "),s("h4",{attrs:{id:"外键约束的参照操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外键约束的参照操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 外键约束的参照操作")]),a._v(" "),s("ol",[s("li",[a._v("CASCADE：从父表删除或更新时自动删除或更新子表中匹配的行。")]),a._v(" "),s("li",[a._v("SET NULL：从父表删除或更新行时设置子表中的外键列为 NULL。如果使用该选项，必须保证子表列没有指定 NOT NULL。")]),a._v(" "),s("li",[a._v("RESTRICT：拒绝对父表的删除或更新操作。")]),a._v(" "),s("li",[a._v("NO ACTION：标准 SQL 的关键字，在 MySQL 中与 RESTRICT 相同。")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CREATE TABLE users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\n    -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" pid BIGINT,\n    -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" POREIGN KEY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("pid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" REFERENCES provinces "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ON DELETE CASCADE\n    -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("在平时项目中很少使用外键约束，因为外键约束只能使用 InnoDB 存储引擎，我们采用“逻辑外键”，即设计数据库时按照外键约束的结构设计，但不使用 FOREIGN KEY 关键字。")]),a._v(" "),s("h3",{attrs:{id:"表级约束与列级约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表级约束与列级约束","aria-hidden":"true"}},[a._v("#")]),a._v(" 表级约束与列级约束")]),a._v(" "),s("p",[a._v("对一个数据列建立的约束，称为列级约束。\n对多个数据列建立的约束，称为表级约束。\n列级约束既可以在列定义时声明，也可以在列定义后声明。\n表级约束只能在列定义后声明。")])])},[],!1,null,null,null);t.default=e.exports}}]);