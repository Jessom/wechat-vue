<template>
  <div class="friend-info">
    <!-- 头像部分 -->
    <div class="friend-info_top" v-if='user'>
      <div class="friend-info_t-l">
        <h2 class="title">{{ user.nick }}</h2>
        <p class="desc" v-if='user.type == 0'>微信号：{{ user.wechatId }}</p>
        <p class="desc" v-if='user.type == 1'>{{ user.sign }}</p>
      </div>

      <img :src="user.avatar" alt="" class="friend-info_avatar">
    </div>

    <!-- 介绍 -->
    <div class="friend-info_content" v-if='user'>
      <p v-if='user.type == 0'>{{ user.sign }}</p>
      <p class="us" v-if='user.type == 1 && user.name'>
        <span class="cl">备注名</span>
        <span class="cr">{{ user.name }}</span>
      </p>
      <p class="us" v-if='user.type == 1 && user.area'>
        <span class="cl">地区</span>
        <span class="cr">{{ user.area }}</span>
      </p>
      <p class="us" v-if='user.type == 1 && user.wechatId'>
        <span class="cl">微信号</span>
        <span class="cr">{{ user.wechatId }}</span>
      </p>
      <p class="us" v-if='user.type == 1 && user.source'>
        <span class="cl">来源</span>
        <span class="cr">{{ user.source }}</span>
      </p>
    </div>

    <!-- 按钮 -->
    <button class="btn" v-if='user'>{{ user.type==0 ? "查看历史消息" : "发消息" }}</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },

  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style lang="scss">
  
</style>
