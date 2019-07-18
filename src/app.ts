import express from 'express';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import bodyParse from 'body-parser';
import cors from 'cors';
import router from './router';

let app = express();

/*****
	配置开始
*****/

// 解决跨域
app.use(cors());
// bodyParse 配置
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

/*****
	配置结束
*****/

// 挂载路由
app.use(router);

// 配置错误信息中间件
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({
		err_code: 500,
		message: err.message
	});
});

// 配置 404
app.use((req: Request, res: Response, next: NextFunction) => {
	res.send('<h2 style="color:#f34f3e">Not Fount 404</h2><hr>');
});

app.listen(3000, () => {
	console.log('http://127.0.0.1:3000');
});
