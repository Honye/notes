# macOS 上 Android 环境配置

## 环境变量

```bash
# Android SDK 安装目录
export ANDROID_HOME=~/Library/Android/sdk

export PATH=${PATH}:${ANDROID_HOME}/tools
# adb
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
# avdmanager
export PATH=${PATH}:${ANDROID_HOME}/tools/bin
# emulator
export PATH=${PATH}:${ANDROID_HOME}/emulator
export ANDROID_SDK=${ANDROID_HOME}
export ANDROID_NDK=${ANDROID_HOME}/ndk-bundle
```

## 命令行工具

## adb

安装 APK

```bash
adb install [-t] path_to_apk
```

安装测试 APK 时，必须在 `install` 命令中使用 `-t` 选项

## 模拟器

Android 虚拟设备（AVD）列表

```bash
emulator -list-avds
```

打开模拟器

```bash
emulator -avd avd_name
# 或
emulator @avd_name
```

## 参考文献

- [Android Studio 命令行工具](https://developer.android.com/studio/command-line?hl=zh-cn)

- [从命令行启动模拟器](https://developer.android.com/studio/run/emulator-commandline)
