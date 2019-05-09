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
    component: () => import('./views/Chat.vue'),
    children: [{
      path: '/chat/:id',
      name: 'chats',
      component: () => import('./views/ChatList.vue')
    }]
  }]
})
