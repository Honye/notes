### 安装
- 下载解压Maven
- 配置环境变量（M2_HOME, Path）
M2_HOME：安装路径
Path：%M2_HOME%\bin
- 配置 Maven 配置文件（本地仓库路径，镜像）
验证安装完成：
```shell
$ mvn -version
```

### 配置
将安装路径下 `/conf/settings.xml` 文件赋值到用户目录下的 `.m2` 文件夹下然后修改
```xml
<!-- 默认安装路径 -->
<localRepository>${user.home}/.m2/respository</localRepository>
<!-- 镜像 -->
<mirror>
    <id>UK</id>
    <name>UK Central</name>
    <url>http://uk.maven.org/maven2</url>
    <mirrorOf>central</mirrorOf>
</mirror>
```

