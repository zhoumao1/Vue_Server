# 简要介绍

本库提供简单的服务端交互(MongoDB)测试

## 安装环境

### 注意

本地需要有 MongoDB 数据库!!!
>暂时不添加 MysqlDB

### 安装

```shell
git@github.com:zhoumao1/Vue_Server.git
npm install
```

### 运行

``` shell
npm run serve
```

服务器启动默认端口为 3000

## 接口文档

### 用户

#### 查询所有用户

**请求类型 :** `GET`

**接口地址 :** `/user/find`

**调用例子 :** `http://127.0.0.1:3000/user/find`

**返回数据如下图** 

![1563417691114](D:\learnersData\Vue_practice\server\assets\1563417691114.png)

#### 增加用户

**请求类型 :** `POST`

**接口地址 :** `/user/addUser`

**调用例子 :** `http://127.0.0.1:3000/user/addUser`

**数据字段 :** 必须如下

| 字段名      | 类型                | 解释   |
| ----------- | ------------------- | ------ |
| user_name   | String              | 用户名 |
| user_age    | Number              | 年龄   |
| user_gender | Enum[0, 1] (男, 女) | 年龄   |

