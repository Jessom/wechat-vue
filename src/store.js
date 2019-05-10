import Vue from 'vue'
import Vuex from 'vuex'

import users from '@/data/user.js'
import official from '@/data/official.js'
import notice from '@/data/notice.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: users,
    official: official,
    user: null,   // 某个好友
    notices: notice,   // 聊天记录
    notice: null,   // 和某人的聊天记录
  },
  mutations: {
    user(state, payload) {
      state.user = payload
    },

    notice(state, payload) {
      state.notice = payload
    }
  },
  actions: {
    user({ commit, state }, payload) {
      let user = null
      if(payload.type == 1) {
        const group = state.users.find(c => c.id === payload.pid)
        user = group.children.find(c => c.id === payload.id)
      } else {
        const group = state.official.find(c => c.id === payload.pid)
        user = group.children.find(c => c.id === payload.id)
      }
      commit('user', user)
    },

    notice({ commit, state }, id) {
      let notice = state.notices.find(c => c.uid === id)
      commit('notice', notice)
    }
  },
  getters: {
    // 好友列表渲染数据
    users: state => {
      return [
        { id: 1, name: '公众号', children: state.official, show: false },
        { id: 2, name: '联系人', children: state.users, show: false },
      ]
    },

    // 获取某个好友
    user: state => {
      return state.user
    },

    notice: state => {
      return state.notice
    }
  }
})
