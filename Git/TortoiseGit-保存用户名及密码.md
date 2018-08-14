---
title: TortoiseGit 保存用户名及密码
date: 2018-3-9 08:39:43
tags: [git, TortoiseGit]
---



## TortoiseGit 保存用户名及密码

### 方法一：

TortoiseGit 1.8.1.2 及其后版本，右键菜单，`TortoiseGit ` - `Setings` - `Git` - `Credential` - 根据自己的需求做出选择。

![img](../images/tortoisegit_remember_password/792388-20161207105324210-45532612.png)

### 方法二：

右键菜单，`TortoiseGit ` - `Setings` - `Git` - `Edit global .gitconfig`

![img](../images/tortoisegit_remember_password/478847-20160714100612795-1828155289.png)

```
[user]

  name = Honye

  email = hongye.jun@qq.com

[credential]

  helper = store
```

此方法会在 `C:\User\Administrator` 目录下生成 `.git-credentials` 文件，里面记录着用户名和密码


