import mongoose from 'mongoose';
import mongodbConnect from '../config/dbConfig';
// 连接数据库
mongodbConnect();

// 拿到表结构
const Schema = mongoose.Schema;

const userSchema = new Schema({
	user_name: {
		type: String
	},
	user_gender: {
		type: Number,
		enum: [0, 1]
	},
	user_age: {
		type: Number
	}
});

export const User = mongoose.model('User', userSchema);
