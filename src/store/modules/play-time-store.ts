const playTimeStore = {
    state: {
        playTime: []
    },
    mutations: {
        SAVE_PLAY_TIME(state: any, playTime: any) {
            state.playTime = playTime;
        }
    },
    actions: {
        setPlayTime({ commit, state }: any, playTime: any) {
            if (state.playTime.length > 1) {
                return;
            } else {
                const result = state.playTime;
                result.push(playTime);
                commit('SAVE_PLAY_TIME', result)
            }
        }
    }
}

export default playTimeStore;