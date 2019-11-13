import Mock from 'mockjs';
const data = require('./data/menu.json');
const userInfo = require('./data/user-info.json');
import routerForword from '@/url/text';

// 配置后台接口路由 
Mock.mock(routerForword.getMenu, 'get', data.menu);

// 获取用户信息数据
Mock.mock(routerForword.getUserInfo, 'get', userInfo.userInfo);

export default Mock;
