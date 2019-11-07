import Mock from 'mockjs';
const data = require('./data/menu.json')


// 配置后台接口路由 
Mock.mock('/api/test', 'get', data.menu)


export default Mock;
