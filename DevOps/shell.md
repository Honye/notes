# Shell

### SSH 免密登录

首先生成 SSH 密钥对，如果已有密钥对可跳过这步

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

使用 `ssh-copy-id` 将密钥复制到服务器上

```shell
ssh-copy-id -i ~/.ssh/id_ed25519 username@server
```

或手动复制公钥内容添加到服务器的 `~/.ssh/authorized_keys` 文件中

### 复制文件到服务器

```shell
scp <source_file> username@server:<target_path>
```

### 查看软链接真实路径

```shell
readlink /link
```

```shell
ll /link
```

### 创建文件夹

```shell
mkdir dirname
```

### 创建文件

```shell
touch filename
```

### 查看端口使用情况

```bash
lsof -i :{port}
```

### 查看文件夹占用磁盘空间大小

```bash
# 显示当前目录总占的大小，而不单独各列出子项占用的大小
du -hs [file]
```

### 行内拼接字符

```bash
echo "NodeJS version: `node -v`"
```

### SSH 在服务器上执行命令

```shell
ssh username@server 'command'
# 在服务器上创建文件夹
ssh root@example.com 'mkdir ~/new_dir'
```
