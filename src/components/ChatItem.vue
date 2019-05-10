<template>
  <div class="chat-list">
    <div
      class="chat-item"
      :class="{'router-link-active': activedId == item.uid}"
      v-for='(item, ind) in list'
      :key='ind'
      @click='routerClice(item)'>
      <div class="chat-avatar">
        <img :src="item.avatar" alt="">
      </div>
      <div class="chat-content">
        <div class="chat-title ellipsis">{{ item.nick }}</div>
        <p class="chat-desc ellipsis">{{ item.desc }}</p>
        <time class="chat-time">{{ item.time }}</time>
      </div>
    </div>
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
    return {
      activedId: 0
    }
  },

  methods: {
    routerClice(item) {
      this.activedId = item.uid
      this.$store.dispatch('notice', item.uid)
      this.$router.push({ path: `/chat/${item.uid}` })
    }
  }
}
</script>

<style lang="scss">
  
</style>
