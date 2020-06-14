---
title: Node.js
date: 2019-07-10
tags: [Node.js]
---

## Npm

官方文档：https://docs.npmjs.com/

1. 镜像

   ```shell
   # 原 https://registry.npmjs.org/
   npm config set registry https://registry.npm.taobao.org --global
   npm config set disturl https://npm.taobao.org/dist --global
   ```

   ```bash
   # 原 https://registry.yarnpkg.com
   yarn config set registry https://registry.npm.taobao.org
   ```

2. 更新 npm

   ```shell
   # window
   npm install npm -g
   # linux
   sudo npm install npm -g
   ```

3. 安装模块

   ```shell
   # 本地安装
   npm install <Module Name>
   # 全局安装
   npm install <Module Name> -g
   ```

   全局目录：`%USERNAME%\AppData\Roaming\npm\node_modules\`

4. 查看所有全局安装的模块

   ```shell
   npm list -g --depth 0
   # or
   npm ls -g --depth=1 2>/dev/null | grep generator
   ```

5. 查看某个模块的版本号

   ```shell
   npm list <Moudle Name>
   ```

6. 卸载某模块

   ```shell
   npm uninstall <Moudle Name>
   ```

7. 更新模块

   ```shell
   npm update <Moudle Name>
   ```

8. 搜索模块

   ```shell
   npm search <Module Name>
   ```

9. 在 npm 资源库中注册用户

   ```shell
   npm adduser
   ```

10. 发布模块

    ```shell
    npm publish
    ```

11. 清空本地缓存

    ```shell
    npm cache clear
    ```

12. 撤销已发布的某个版本

    ```shell
    npm unpublish <package>@<version>
    ```

13. 列出已过时的包

    ```shell
    npm outdated
    ```

### 错误

1. 

   ```shell
   error Windows_NT 10.0.14393
   error argv "E:\\0Develop\\nodejs\\nodejs\\node.exe"
   ```

   解决：以管理员身份运行“命令提示符”工具

## NVM

1. nvm 修改默认 node 版本

   ```shell
   nvm alias default v12.4
   ```


### MacOS

1. Xcode CLT 重新安装

   升级系统后可能需要重新安装 Xcode Command Line

   ```bash
   # 得到原安装位置
   xcode-select --print-path
   # 删除原安装，上面得到的路径
   sudo rm -r -f /Library/Developer/CommandLineTools
   # 提示安装或执行以下命令手动安装
   xcode-select --install
   ```
