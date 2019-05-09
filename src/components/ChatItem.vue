<template>
  <div class="chat-list">
    <router-link
      :to="{path: `/chat/${item.id}`}"
      class="chat-item"
      v-for='(item, ind) in list'
      :key='ind'>
      <div class="chat-avatar">
        <img :src="item.avatar" alt="">
      </div>
      <div class="chat-content">
        <div class="chat-title ellipsis">{{ item.name }}</div>
        <p class="chat-desc ellipsis">{{ item.desc }}</p>
        <time class="chat-time">{{ item.time }}</time>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() { return [] }
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss">
  
</style>
