const getter = {
    userInfo: (state: any) => state.userInfoStore.userInfo,
    playTime: (state: any) => state.playTimeStore.playTime,
    mennuInfo: (state: any) => state.menuInfoStore.mennuInfo,
    eventInfo: (state: any) => state.eventInfoStore.eventInfo
}

export default getter;