import {
  setTimeout
} from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexSession = new VuexPersistence({
  storage: window.sessionStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag: true,
    isShow: true,
    username: '',
    vueElementLoading: false,
    newForm: {}, //存储当前用户数据
    defaultImg: '/小周不怕黑/fbe2be74-5d95-4a69-ad52-cb9344a58b92.jpg',
    imgStatus: 0,
    statusFlag: 0, //存储markdown状态
    noSeeMessage: 0, //未看消息数
  },
  mutations: {
    updateFlag(state, flag) {
      if (state.flag) {
        state.flag = flag
        setTimeout(() => {
          state.flag = true
        }, 1000 * 60 * 60 * 24);
      }
    },
    updateShow_yes(state, username) {
      state.isShow = false
      state.username = username
    },
    updateLoading(state, val) {
      state.vueElementLoading = val
    },
    updateShow_no(state) {
      state.isShow = true
      state.username = ''
      state.token = ''
    },
    updateNewForm(state, info) {
      state.newForm = info
    },
    imgChange(state, img) {
      state.imgStatus = 1
      state.defaultImg = img
    },
    statusFlagChange(state, flag) {
      state.statusFlag = flag
    },
    updateNoseeMessage(state, nosee) {
      state.noSeeMessage = nosee
    }
  },
  actions: {
    updateNewForm({
      commit
    }, obj) {
      commit("updateNewForm", obj)
      console.log(obj)
    }
  },
  modules: {},
  plugins: [vuexSession.plugin]
})
