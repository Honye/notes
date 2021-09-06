---
title: 创建一个 Telegram 机器人
tags: [telegram]
---

# Telegram 机器人

## 创建机器人

创建机器人是通过和 [@BotFather](https://t.me/botfather) 机器人聊天的形式创建的

通过搜索框搜索 **BotFather** 与其开始聊天

![@BotFather](assets/9ff2f2f01c4bd1b013.png)

开始聊天后 BotFather 会一步一步带你创建机器人（不详述）

创建完机器人后，BotFather 会发你一串 token，注意保存以便后续使用

## 向个人发送消息

向个人发消息必须先建立聊天会话。个人搜索机器人与其会话

发送消息的 API 地址：

```
https://api.telegram.org/bot<token>/sendMessage
```

将 `<token>` 替换为先前保存的自己的 token
