const userInfoStore = {
    state: {
        userInfo: {}
    },
    mutations: {
        SAVE_USERINFO_MESSAGE(state: any, userInfo: any) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        setUserInfo({ commit }: any, userInfo: any) {
            commit('SAVE_USERINFO_MESSAGE', userInfo);
        }
    }
}

export default userInfoStore;