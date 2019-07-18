import { Router, Request, NextFunction } from 'express';
import { User } from './model/userSchema';
import { status } from './server/status';
import { Response } from 'express-serve-static-core';

const router = Router();

// 查询接口说明
router.get('/', (req: Request, res: Response) => {
	let readme = {
		get: [
			{
				find: '查询所有(返回数组)'
			}
		],
		post: [
			{
				addUser: '添加用户信息',
				detail: [
					{ user_name: String },
					{ user_age: Number },
					{ user_gender: '0 | 1' }
				]
			}
		]
	};
	status.success(res, 0, '请求成功', readme);
});

// 查询所有
router.get('/user/find', (req: Request, res: Response, next: NextFunction) => {
	User.find(async (err, ret) => {
		if (err) next(err);
		status.success(res, 0, '请求成功', ret);
	});
});

// 添加用户
router.post('/user/addUser', async (req, res, next) => {
	new User(req.body).save(function(err, ret) {
		if (err) next(err);
		status.success(res, 0, '添加成功', ret);
	});
});

export default router;
