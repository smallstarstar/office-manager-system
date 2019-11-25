export const EventInfoUrl =  {
    // 保存事件信息
    saveEvent: '/api/v1/saveEvent',
    // 分页获取事件信息
    getEventInfoByPage: '/api/v1/getEventByPage/{page}/{size}',
    // 添加事件处置的详细信息
    addDetailInfo: '/api/v1/saveDetail',
    // 获取事件的处置详细信息集合
    getListDetailInfo: '/api/v1/getListInfo/{eventId}',
    // 根据事件的id获取事件的时间轴信息
    getTimeSheetInfoByEventId: '/api/v1/getTimeSheetInfoByEventId/{id}'
}