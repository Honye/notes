---
title: Git
sidebar: true
---


<div align="center">
    <img src="./_images/git.png"><br>
    <h1>Git</h1>
</div>

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

5. 删除本地远程分支的跟踪

  其他小伙伴删除了远程分支，但自己本地还存在远程分支的跟踪，使用删除远程分支的命令会报错，应采用如下命令

  ```shell
  git branch --delete --remotes <Remote>/<BranchName>
  git branch -dr <Remote>/<BranchName>
  ```

6. 重命名文件和文件夹

   ```shell
   git mv <oldname> <newname>
   ```

7. 查看远程仓库 URL

   ```bash
   git remote -v
   ```

8. 重命名本地分支

   ```bash
   git branch -m <newBranchName>
   ```

9. 取消本地关联的远程分支

   ```shell
   git remote remove origin
   ```

10. 重命名 remote

   ```shell
   git remote rename origin destination
   ```

11. 清空提交历史记录，成为新仓库

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

12. 只提交某文件的部分修改

    ```shell
    git add <filename> -p
    ```

    该命令每一处修改都问询问你是否提交

## Git 词典

Git 提交信息技巧。

`git commit -m "<word>: <描述>"`

如：

`git commit -m "Fix: 修复了很牛逼的 Bug"`

参考 [Angular 提交规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

| word | 场景 |
| ---- | ---- |
| Initial | 初始化 |
| Fix | 修复 |
| Feat（Feature） | 新功能 |
| Test | 测试用例 |
| Remove | 移除 |
| Revert | 还原 |
| Perf（Performance） | 优化提升 |
| Style | 格式，不影响代码运行 |
| Docs（Document） | 文档 |
| CI | 自动构建 |
| Upgrade | 升级 |
| Downgrade | 降级 |
| Refactor | 重构，不是修复 BUG，也不是添加功能 |

## 其他

- [Git 的奇技淫巧](https://github.com/521xueweihan/git-tips)
- [Windows Git 客户端安装](./Windows-Git-客户端安装.md)
- [TortoiseGit 保存用户名及密码](./TortoiseGit-保存用户名及密码.md)

## 生成 AUTHORS

```bash
git log --format='%aN <%aE>' | LC_ALL=C.UTF-8 sort -uf > AUTHORS
```
