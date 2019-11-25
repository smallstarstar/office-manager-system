import axios from 'axios';
import loginUrl from '@/url/login-url';
import configBase from '../../public/config';


const BaseUrl = configBase.baseUrl;
const userLoginServices = {

    // 用户登录
    async userLoginSystem(userName: any, password: any) {
        const url = BaseUrl + loginUrl.userlogin + '?userName=' + `${userName}` + '&password=' + `${password}`;
        return await axios.get(url);
    }
}

export default userLoginServices;
