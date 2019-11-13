import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import getters from '@/store/getters';
import userInfoStore from '@/store/modules/user-info-store';
import playTimeStore from '@/store/modules/play-time-store';
import menuInfoStore from '@/store/modules/menu-info-store';


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    userInfoStore, 
    playTimeStore,
    menuInfoStore
  },
  getters,
  plugins: debug ? [createLogger()] : []
})
