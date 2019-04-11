<div align="center">
    <img src="./_images/git.png"><br>
    <h1>Git</h1>
</div>

## Contents

- [Windows Git 客户端安装](./Windows-Git-客户端安装.md)
- [TortoiseGit 保存用户名及密码](./TortoiseGit-保存用户名及密码.md)
- [Git 词典](#Git-词典)

## Git 常用命令

![Git 常用命令](./_images/git-shell.jpg)

1. 查看项目分支（远程和本地）

   ```bash
   git branch -a
   ```

2. 切换分支

   ```shell
   # 复制远程分支到本地且切换到该分支
   git checkout -b develop origin/develop
   # 切换到本地已有分支
   git checkout develop
   ```

3. 删除分支

   ```bash
   # 删除本地分支
   git branch -d <BranchName>
   # 删除远程分支
   git push origin :<BranchName>
   ```

4. 重命名文件和文件夹

   ```shell
   git mv oldname newname
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
