/**
 * 控制状态
 */

import { Response } from 'express';

// 状态码
class Status {
	/**
	 * 请求成功
	 *
	 * @param   [Response]  res       响应头
	 * @param   [number]    err_code  返回客服端错误状态码
	 * @param   [string]    message   成功信息
	 * @param   [object]    data?      成功数据
	 * @param	[number]		status_code=200 状态码
	 */
	success(
		res: Response,
		err_code: number,
		message: string,
		data?: object,
		status_code: number = 200
	): void {
		res.status(status_code).json({ err_code, message, data });
	}

	/**
	 * 请求失败
	 *
	 * @param   [Response]  res       响应头
	 * @param   [number]    err_code  返回客服端错误状态码
	 * @param   [string]    message   错误信息
	 * @param	[number]		status_code=500 状态码
	 */
	error(
		res: Response,
		err_code: number,
		message: string,
		status_code: number = 500
	): void {
		res.status(status_code).json({ err_code, message });
	}
}

export const status = new Status();
