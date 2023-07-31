# V2Ray

[v2fly/fhs-install-v2ray](https://github.com/v2fly/fhs-install-v2ray)

```bash
# 安裝執行檔和 .dat 資料檔
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
```

## 获取 UUID

```bash
cat /proc/sys/kernel/random/uuid
```

## 配置文件

参考：[v2fly/v2ray-examples](https://github.com/v2fly/v2ray-examples)

```bash
vi /usr/local/etc/v2ray/config.json
```

```json
{
    "log": {
        "loglevel": "warning"
    },
    "routing": {
        "domainStrategy": "AsIs",
        "rules": [
            {
                "type": "field",
                "ip": [
                    "geoip:private"
                ],
                "outboundTag": "block"
            }
        ]
    },
    "inbounds": [
        {
            "listen": "0.0.0.0",
            "port": 1234,
            "protocol": "vmess",
            "settings": {
                "clients": [
                    {
                        "id": "",
                        "alertId": 64
                    }
                ]
            },
            "streamSettings": {
                "network": "tcp"
            }
        }
    ],
    "outbounds": [
        {
            "protocol": "freedom",
            "tag": "direct"
        },
        {
            "protocol": "blackhole",
            "tag": "block"
        }
    ]
}
```

## 启动

```bash
# 启动
systemctl start v2ray
# 停止
systemctl stop v2ray
# 重启
systemctl restart v2ray
```

## 防火墙

```bash
# 添加开放端口
firewall-cmd --zone=public --add-port=12345/tcp --permanent
# 重载防火墙
firewall-cmd --reload
# 删除端口
firewall-cmd --zone=public --remove-port=123456/tcp --permanent
# 查看已开放端口
firewall-cmd --zone=public --list-ports
# 查看防火墙状态
systemctl status firewalld
# 开启防火墙
systemctl start firewalld
# 关闭防火墙
systemctl stop firewalld
```