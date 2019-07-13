---
title: Git
sidebar: true
---


<div align="center">
    <img src="./_images/git.png"><br>
    <h1>Git</h1>
</div>

## Contents

- [Windows Git 客户端安装](./Windows-Git-客户端安装.md)
- [TortoiseGit 保存用户名及密码](./TortoiseGit-保存用户名及密码.md)
- [Git 词典](#Git-词典)

## 代理

```bash
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080

git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080

git config --global --unset http.proxy
git config --global --unset https.proxy

npm config delete proxy
```

## Git 常用命令

![Git 常用命令](./_images/git-shell.jpg)

1. 添加远程分支

   ```shell
   git remote add origin <url>
   ```

2. 查看项目分支（远程和本地）

   ```bash
   git branch -a
   ```

3. 切换分支

   ```shell
   # 复制远程分支到本地且切换到该分支
   git checkout -b develop origin/develop
   # 切换到本地已有分支
   git checkout develop
   ```

4. 删除分支

   ```bash
   # 删除本地分支
   git branch -d <BranchName>
   # 删除远程分支
   git push origin :<BranchName>
   ```

5. 重命名文件和文件夹

   ```shell
   git mv <oldname> <newname>
   ```

6. 查看远程仓库 URL

   ```bash
   git remote -v
   ```

7. 重命名本地分支

   ```bash
   git branch -m <newBranchName>
   ```

8. 取消本地关联的远程分支

   ```shell
   git remote remove origin
   ```

9. 清空提交历史记录，成为新仓库

   ```shell
   # 1. 新建分支且无任何 commit 信息
   git checkout --orphan latest_branch
   # 2. 初始 commit
   git add -A
   git commit -am "Initial"
   # 3. 删除原有分支 master
   git branch -d master
   # 4. 重命名当前分支为 master
   git branch -m master
   # 5. 强制推送到远程分支
   git push -f origin master
   ```

   


## Git 词典

Git 提交信息技巧。

`git commit -m "<word>: <描述>"`

如：

`git commit -m "Fix: 修复了很牛逼的 Bug"`

| word | 场景 |
| ---- | ---- |
| Initial | 初始化 |
| Fix | 修复 |
| Update | 更新 |
| Add | 添加 |
| New | 新增 |
| Test | 测试 |
| Remove | 移除 |
| Recover | 恢复 |
| Improve | 优化提升 |
| Optimize | 优化 |
| Document | 文档 |
| Merge | 合并 |
| CI | 自动构建 |
| Upgrade | 升级 |
| Downgrade | 降级 |
| Refactor | 重构 |

## 其他

- [Git 的奇技淫巧](https://github.com/521xueweihan/git-tips)

