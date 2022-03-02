---
tags: [vim]
---

# Vim

## 查找

normal 模式下按下 <kbd>/</kbd> 可进入搜索模式，输入要查找的字符后回车。按下 <kbd>n</kbd> 查找下一个，按下大写 <kbd>N</kbd> 查找上一个

需要查找特殊字符时需要转义，例如 `/vim\$` 匹配 `"vim$"`

### 正则查找

查找模式中支持直接输入正则字符

```bash
# 搜索以「regular」结尾的字符
/regular$
```

### 大小写敏感

查找模式中加入 `\c` 表示大小写不敏感，`\C` 表示大小写敏感

```bash
/word\c
```

## 跳转

### 跳到文件首行

按下 <kbd>g</kbd> 跳到文件首行

### 跳到文件末行

按下 <kbd>G</kbd> 跳到文件末行

### 跳到行首

按下数字 <kbd>0</kbd> 跳到行首

### 跳到当前行文字的第一个文字

按下 <kbd>^</kbd> 跳到当前行文字的第一个文字

### 跳到行尾

按下 <kbd>$</kbd> 跳到行尾