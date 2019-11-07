import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters';
import userInfoStore from '@/store/modules/user-info-store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfoStore
  },
  getters
})
