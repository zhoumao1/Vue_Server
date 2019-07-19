[TOC]

# 简要介绍

本库提供简单的服务端交互(MongoDB)测试

## 安装环境

### 注意

本地需要有 MongoDB 数据库!!!
>暂时不添加 MysqlDB

### 安装

```shell
git clone git@github.com:zhoumao1/Vue_Server.git
npm install
```

### 启动 MongoDB

cd 到有`data`文件夹的目录运行以下代码

```shell
mongod
```

或者

```shell
cd D:
mkdir data/db
mongod
```

### 运行

``` shell
npm run serve
```

服务器启动默认端口为 3000

## 请求说明

以下所有接口请求域名为 `http://127.0.0.1`,为了降低使用门槛

请求地址 = 域名 + 接口地址 + 参数

域名：`http://127.0.0.1`

接口地址：`http://127.0.0.1:3000/api/`

## 接口文档

### 用户

用户接口地址: `http://127.0.0.1:3000/api/user/`

#### 查询所有用户

**请求类型 :** `GET`

**接口地址 :** `/find`

**调用例子 :** `http://127.0.0.1:3000/api/user/find`

**返回数据如下图**

![返回示例(https://i.ibb.co/4wbhNtr/1563417691114.png)](https://i.ibb.co/4wbhNtr/1563417691114.png)

#### 增加用户

**请求类型 :** `POST`

**接口地址 :** `/addUser`

**调用例子 :** `http://127.0.0.1:3000/api/user/addUser`

**必选参数 :** 必须如下

| 字段名      | 必选 | 类型                | 说明   |
| ----------- | ---- | ------------------- | ------ |
| user_name   | 是   | String              | 用户名 |
| user_age    | 是   | Number              | 年龄   |
| user_gender | 是   | Enum[0, 1] (男, 女) | 性别   |

**调用示例 :**

```js
.post('user/addUser', {
   user_name: 'xx',
   user_age: '19',
   user_gender: '0'
})
```

**返回示例 :** 

![返回示例(https://i.ibb.co/N137sfB/image.png)](D:\learnersData\Vue_practice\server\assets\image.png)



#### 修改用户

**请求类型 :** `PUT`

**接口地址 :** `/update`

**调用例子 :** `http://127.0.0.1:3000/api/user/update`

**参数列表 :**

| 参数名 | 必选 | 类型             | 说明                             |
| ------ | ---- | ---------------- | -------------------------------- |
| id     | 是   | String \| Number | 根据id修改数据                   |
| body   | 是   | Object           | 需要修改的内容(需要传入JSON格式) |

**调用示例 :**

```js
.put('user/update', {
   id: '5d31288968e3c328c074287f',
   body: {
      user_name: 'xx',
      user_age: '19',
      user_gender: '0'
   }
})
```

#### 删除用户

**请求类型 :** `DELETE`

**接口地址 :** `/delete/:id`

**调用例子 :** `http://127.0.0.1:3000/api/user/delete/100`

**参数列表 :** 

| 参数名 | 必选 | 类型             | 说明                             |
| ------ | ---- | ---------------- | -------------------------------- |
| id     | 是   | String \| Number | 根据id删除数据                   |

**调用示例 :**

```js
.delete(`user/delete/${id}`)
```

**返回示例 :**

![返回示例(https://i.ibb.co/NYmsN3H/image.png)](https://i.ibb.co/NYmsN3H/image.png)