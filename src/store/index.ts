import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters';
import userInfoStore from '@/store/modules/user-info-store';
import playTimeStore from '@/store/modules/play-time-store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfoStore,
    playTimeStore
  },
  getters
})
