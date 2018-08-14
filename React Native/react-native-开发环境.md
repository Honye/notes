
## Python2

## NodeJS

```bash
nvm install latest
nvm install 6.0
nvm list
nvm use 6.0
```

```bash
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

## Yarn、React Native cli

```bash
npm install -g yarn react-native-cli
```

```bash
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

## Android Studio

在SDK Platforms窗口中，选择Show Package Details，然后在Android 6.0 (Marshmallow)中勾选Google APIs、Android SDK Platform 23、Intel x86 Atom System Image、Intel x86 Atom_64 System Image以及Google APIs Intel x86 Atom_64 System Image。

在SDK Tools窗口中，选择Show Package Details，然后在Android SDK Build Tools中勾选Android SDK Build-Tools 23.0.1（必须包含有这个版本。当然如果其他插件需要其他版本，你可以同时安装其他多个版本）。然后还要勾选最底部的Android Support Repository.

## 环境变量

ANDROID_HOME: SDK  路径

## Gradle Daemon

```bash
(if not exist "%USERPROFILE%/.gradle" mkdir "%USERPROFILE%/.gradle") && (echo org.gradle.daemon=true >> "%USERPROFILE%/.gradle/gradle.properties")
```

你可以把Android SDK的tools和platform-tools目录添加到PATH变量中，以便在终端中运行一些Android工具，例如android avd或是adb logcat等。