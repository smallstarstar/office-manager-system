const eventInfoStore = {
    state: {
        eventInfo: {}
    },
    mutations: {
        SAVE_EVENT_INFO(state: any, eventInfo: any) {
            state.eventInfo = eventInfo;
        }
    },
    actions: {
        saveEventInfo({commit}: any, eventInfo: any) {
            commit('SAVE_EVENT_INFO', eventInfo);
        }
    }
}

export default eventInfoStore;