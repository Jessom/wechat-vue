<template>
  <div class="chat-container">
    <!-- 聊天好友列表 -->
    <aside class="list-container">
      <div class="search-container">
        <div class="search-input">
          <i class="iconfont icon-search"></i>
          <input type="seatch" placeholder="搜索" />
        </div>
        <i class="iconfont icon-plus search_btn"></i>
      </div>
      
      <chat-item :list='list' />
    </aside>


    <div class="content-container">
      <chat-topbar />
      <keep-alive>
        <router-view :key='activedId'></router-view>
      </keep-alive>
      <chart-content />
    </div>
  </div>
</template>

<script>
import ChatItem from '@/components/ChatItem.vue'
import ChatTopbar from '@/components/ChatTopbar.vue'
import ChartContent from '@/components/ChartContent.vue'
import { mapState } from 'vuex'
export default {
  components: {
    ChatItem,
    ChatTopbar,
    ChartContent
  },

  computed: {
    ...mapState({
      list: 'notices'
    })
  },

  watch: {
    '$route'(to) {
      this.activedId = Number(to.params.id)
    }
  },

  mounted() {
    this.activedId = Number(this.$route.params.id)
  },

  data () {
    return {
      activedId: 0
    }
  }
}
</script>

<style lang="scss">
  
</style>
