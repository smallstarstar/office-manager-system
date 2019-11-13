const menuInfoStore = {
    state: {
        menuInfo: []
    },
    mutations: {
        SAVE_MENU_INFO(state: any, menuInfo: any) {
            state.menuInfo = menuInfo;
        }
    },
    actions: {
        setMenuInfo({commit}: any, menuInfo: any) {
            commit('SAVE_MENU_INFO', menuInfo);
        }
    }
}

export default menuInfoStore;