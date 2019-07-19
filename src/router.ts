import { Router, Request, NextFunction } from 'express';
import { User } from './model/userSchema';
import { status } from './server/status';
import { Response } from 'express-serve-static-core';

const router = Router();

// 查询接口说明
router.get('/api', (req: Request, res: Response) => {
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
	/* var data: any = {
		user_name: 's',
		user_gender: 1,
		user_age: 2
	};
	new User(data).save(function(err, ret) {
		status.success(res, 0, '添加成功', ret);
	}); */
});

// 查询所有
router.get(
	'/api/user/find',
	(req: Request, res: Response, next: NextFunction) => {
		User.find(async (err, ret) => {
			if (err) next(err);
			status.success(res, 0, '请求成功', ret);
		});
	}
);

// 添加用户
router.post('/api/user/addUser', async (req, res, next) => {
	new User(req.body).save(function(err, ret) {
		if (err) next(err);
		status.success(res, 0, '添加成功', ret);
	});
});

// 删除用户
router.delete(
	'/api/user/delete/:id',
	async (req: Request, res: Response, next: NextFunction) => {
		User.findByIdAndRemove(req.params.id, (err, ret: any) => {
			if (err) return next(err);
			status.success(res, 0, '删除成功', ret);
		});
	}
);

// 修改用户
router.put(
	'/api/user/update',
	async (req: Request, res: Response, next: NextFunction) => {
		let body = req.body;
		User.findByIdAndUpdate(body.id, body.body, (err, ret) => {
			if (err) return next(err);
			status.success(res, 0, '修改成功');
		});
	}
);

export default router;
