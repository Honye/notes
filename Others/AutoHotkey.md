---
title: AutoHotkey
date: 2018-05-13 11:35:16
tags: [Util, AutoHotkey]
---

# AutoHotkey

## 代码片段

### 1. 窗口置顶

```cmd
^!t::
  WinSet, AlwaysOnTop, toggle, A
Return
```

### 2. 输出指定格式日期时间

```cmd
^!d:: ;Ctrl+alt+d
FormatTime, now_date, %A_Now%, yyyy-MM-dd hh:mm:ss ;格式化当前时间
Send, % now_date ;发送
Return
```

