<template>
  <div class="chat-container">
    <!-- 聊天好友列表 -->
    <aside class="list-container">
      <div class="search-container">
        <div class="search-input">
          <i class="iconfont icon-search"></i>
          <input type="seatch" placeholder="搜索" />
        </div>
      </div>
      
      <friend-item :list='list' />
    </aside>

    <div class="content-container">
      <keep-alive>
        <router-view :key='activedId'></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import FriendItem from '@/components/FriendItem.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    FriendItem
  },

  data () {
    return {
      activedId: 0
    }
  },

  watch: {
    '$route'(to) {
      this.activedId = Number(to.params.id)
    }
  },

  mounted() {
    this.activedId = Number(this.$route.params.id)
  },

  computed: {
    ...mapGetters({
      list: 'users'
    })
  },
}
</script>

<style lang="scss">
  
</style>
