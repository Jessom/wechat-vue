import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: '',
    redirect: '/chat'
  }, {
    path: '/chat',
    name: 'chat',
    // redirect: '/chat/1',
    component: () => import('./views/Chat.vue'),
    children: [{
      path: '/chat/:id',
      name: 'chats',
      component: () => import('./views/ChatList.vue')
    }]
  }, {
    path: '/friend',
    name: 'friend',
    redirect: '/friend/1',
    component: () => import('./views/Friends.vue'),
    children: [{
      path: '/friend/:id',
      name: 'friendinfo',
      component: () => import('./views/FriendInfo.vue')
    }]
  }]
})
