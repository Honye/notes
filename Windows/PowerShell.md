# PowerShell

## 创建证书

1. 利用如下命令来创建证书并获取到其指纹 

   ```powershell
   New-SelfSignedCertificate -Certstorelocation Cert:\CurrentUser\My -dnsname localhost
   ```

   颁发给 localhost (或者改为目标机器的域名)，并将其保存到本地计算机中的【个人】证书下，记住产生的 Thumbprint 字段。 此时可在 certmgr 中的“中间证书颁发机构”中查看产生的证书，并手动导出，(2) (3) 导出的证书再安装将导致密码错误的问题。

2. 需要导出证书时，需要用一个变量来保存密码 

   ```powershell
   $pwd = ConvertTo-SecureString -String "Pa$$w0rd" -Force -AsPlainText
   ```

   其中的密码字段可自定义

3. 导出 pfx，指定第一步获取到的指纹和第二步保存的密码

   ```powershell
   Export-PfxCertificate -cert Cert:\CurrentUser\My\CE0976529B02DE058C9CB2C0E64AD79DAFB18CF4 -FilePath d:cert.pfx -Password $pwd 
   ```

[官文](https://technet.microsoft.com/library/hh848633)

[示例脚本](https://www.cnblogs.com/freistli/p/4067085.html) 

## 控制中心（控制台）

<kbd>Win</kbd> + <kbd>R</kbd>，输入 `mmc.exe` 后运行进入