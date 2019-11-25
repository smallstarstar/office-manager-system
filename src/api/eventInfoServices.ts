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
    },

    // 添加事件的详细的处置信息
    async addDetailInfo(detailInfo: any) {
        const url = BaseUrl + EventInfoUrl.addDetailInfo;
        return await axios.post(url, detailInfo);
    },

    // 根据事件的id获取处置者详细的信息集合
    async getListDetailInfo(eventId: string) {
        const url = BaseUrl + EventInfoUrl.getListDetailInfo + '?eventId=' + eventId;
        return await axios.get(url);
    },

    // 根据事件的id获取事件的时间轴信息
    async getTimeSheetInfoByEventId(eventId: any) {
        const url = BaseUrl + EventInfoUrl.getTimeSheetInfoByEventId + '?eventId=' + eventId;
        return await axios.get(url);
    }
}

export default eventInfoServices;