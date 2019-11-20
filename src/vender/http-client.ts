import axios from 'axios';
import qs from 'qs';
import router from '../router';
import EventKeys from '../common/event-keys/eventKeys';
import rxEvent from 'pubsub-js';
/**
 * 请求相应拦截
 */

axios.interceptors.response.use((res: any) => {
    return res.data;
}, (error: any) => {
    if (error.response.status === 400) {
        rxEvent.publish(EventKeys.PARMAS_ERROR_MESSAGE, true);
    }
    if (error.response.status === 404) {
        // 未找到
        router.push({
            path: '*'
        })
    }
});

/**
 * 请求参数的拦截
 *
 */
axios.interceptors.request.use((config: any) => {
    const { data, method } = config;
    if (method.toLowerCase() === 'post' && typeof data === 'object') {
        //  在 node.js的服务中是使用的/在java的服务中不需要，此项目本人启用的是spring boot;
        // config.data = qs.stringify(data);
        // console.log(config.data, '========================');
    }
    return config;
})
