import axios from 'axios';
import { EventInfoUrl } from '@/url/event-url';
import { EventInfo } from '@/models/event-info';
import configBase from '../../public/config';


const BaseUrl = configBase.baseUrl;

const eventInfoServices = {

    // 保存事务信息
    async saveEventInfo(event: EventInfo) {
        const url = BaseUrl + EventInfoUrl.saveEvent;
        return await axios.post(url, event);
    },

    // 分页获取事务信息
    async getEventInfoByPage(page: number, size: number) {
        const url = BaseUrl + EventInfoUrl.getEventInfoByPage + '?page=' + page + '&size=' + size;
        return await axios.get(url);
    }
}

export default eventInfoServices;