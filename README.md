[TOC]

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

### 启动 MongoDB

cd 到有 `data`文件夹的目录运行以下代码

```shell
mongod
```

### 运行

``` shell
npm run serve
```

服务器启动默认端口为 3000

## 请求说明

以下所有接口请求域名为 `http://127.0.0.1`,为了降低使用门槛，所有请求为`GET`请求,你也可以试用其他请求方式

请求地址 = 域名 + 接口地址 + 参数

域名：`http://127.0.0.1`

接口地址：`http://127.0.0.1/api/`

## 接口文档

### 用户

用户接口地址: `http://127.0.0.1/api/user/`

#### 查询所有用户

**请求类型 :** `GET`

**接口地址 :** `/find`

**调用例子 :** `http://127.0.0.1:3000/api/user/find`

**返回数据如下图**

![返回示例](https://i.ibb.co/4wbhNtr/1563417691114.png)

#### 增加用户

**请求类型 :** `POST`

**接口地址 :** `/addUser`

**调用例子 :** `http://127.0.0.1:3000/api/user/addUser`

**必选参数 :** 必须如下

| 字段名      | 类型                | 解释   |
| ----------- | ------------------- | ------ |
| user_name   | String              | 用户名 |
| user_age    | Number              | 年龄   |
| user_gender | Enum[0, 1] (男, 女) | 年龄   |

#### 修改用户

**请求类型 :** `PUT`

**接口地址 :** `/addUser/:id`

**调用例子 :** `http://127.0.0.1:3000/api/user/update/100`

**必选参数 :** `id`	条件id



#### 删除用户

**请求类型 :** `DELETE`

**接口地址 :** `/delete/:id`

**调用例子 :** `http://127.0.0.1:3000/api/user/delete/100`

**必选参数 :** `id`	条件id

