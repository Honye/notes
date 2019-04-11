查看环境变量

```shell
env
```

查看可用代码签名

```shell
security find-identity -p codesigning -v
```

查看签名信息

```shell
codesign --display --verbose=4 "文件路径"
```

参考

[Electron 打包 Mac 安装包代码签名问题解决方案](https://segmentfault.com/a/1190000012902525)

[用 Electron 打造 Mac/Win 应用](https://segmentfault.com/a/1190000011908324)

