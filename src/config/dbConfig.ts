import mongoose from 'mongoose';
// 连接数据库
export default function mongodbConnect() {
	mongoose.connect('mongodb://localhost/vue', { useNewUrlParser: true });
}
