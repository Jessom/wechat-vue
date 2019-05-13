<template>
  <div class="chat-list_wrap">
    <!-- 按时间分组 -->
    <div
      class="chat-list_cell clearfix"
      v-for='(item, ind) in notice && notice.contents'
      :key='ind'>
      <time class="chat-time">{{ item.time }}</time>
      <!-- 回复者 -->
      <div
        class="chat-apply"
        v-for='(it, inde) in item.contents'
        :key='inde'
        :class="[it.type == 0 ? 'chat-left fl' : 'chat-right fr']">
        <img class="chat-list_avatar" :src="it.avatar" alt="" v-show='it.type == 0'>
        <div class="apply_content">{{ it.content }}</div>
        <img class="chat-list_avatar" :src="it.avatar" alt="" v-show='it.type == 1'>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },

  mounted() {
    this.scrollToBottom()
  },

  computed: {
    ...mapGetters({
      notice: 'notice'
    })
  },

  created() {
    const id = Number(this.$route.params.id)
    this.$store.dispatch('notice', id)
  },

  updated() {
    this.scrollToBottom()
  },

  methods: {
    scrollToBottom: function () {
      this.$nextTick(() => {
        let container = document.querySelector(".chat-list_wrap")
        if(container) container.scrollTop = container.scrollHeight
      })
    }
  }
}
</script>

<style lang="scss">
  
</style>
