import axios from 'axios';
import qs from 'qs';
/**
 * 请求相应拦截
 */

axios.interceptors.response.use((res: any) => {
    return res.data;
});

/**
 * 请求参数的拦截
 *
 */
axios.interceptors.request.use((config: any) => {
    const { data, method } = config;
    if (method.toLowerCase() === 'post' && typeof data === 'object') {
        config.data = qs.stringify(data);
    }
    return config;
})
