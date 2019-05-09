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
      <router-view :key='activedId'></router-view>
      <chart-content />
    </div>
  </div>
</template>

<script>
import ChatItem from '@/components/ChatItem.vue'
import ChatTopbar from '@/components/ChatTopbar.vue'
import ChartContent from '@/components/ChartContent.vue'
export default {
  components: {
    ChatItem,
    ChatTopbar,
    ChartContent
  },

  created() {
    
  },

  watch: {
    '$route'(to, form) {
      this.activedId = Number(to.params.id)
    }
  },

  mounted() {
    this.activedId = Number(this.$route.params.id)
    setTimeout(() => {
      this.list = [
        { id: 1, name: '凉风青叶', time: '15:32', desc: '今天天气真好，一块出去玩啊[期待][期待]', avatar: 'http://img.tukexw.com/img/2fa7f932c357459c.jpg' },
        { id: 2, name: '樱宁宁', time: '12:36', desc: '嗯嗯', avatar: 'http://b-ssl.duitang.com/uploads/item/201707/13/20170713162007_vhGP8.jpeg' },
        { id: 3, name: '饭岛结音', time: '19/05/08', desc: '好吧，我知道了', avatar: 'http://b-ssl.duitang.com/uploads/item/201608/03/20160803184011_QBS4E.thumb.224_0.jpeg' },
        { id: 4, name: '泷本日富美', time: '19/05/08', desc: 'good！👌', avatar: 'http://b-ssl.duitang.com/uploads/item/201607/12/20160712142247_CwnaU.jpeg' },
        { id: 5, name: '筱田初', time: '19/05/08', desc: '了解！', avatar: 'http://b-ssl.duitang.com/uploads/item/201607/07/20160707163621_aznPN.thumb.700_0.png' },
        { id: 6, name: '远山伦', time: '19/05/08', desc: '真是的', avatar: 'http://img5.duitang.com/uploads/item/201607/30/20160730222856_dHP3n.thumb.700_0.jpeg' },
        { id: 7, name: '八神光', time: '19/05/08', desc: '啊哈哈', avatar: 'http://b-ssl.duitang.com/uploads/item/201709/20/20170920215623_E4dez.png' },
        { id: 8, name: '阿波根海子', time: '19/05/08', desc: '我最喜欢玩生存游戏！', avatar: 'http://b-ssl.duitang.com/uploads/item/201608/25/20160825110804_EenrU.jpeg' },
        { id: 9, name: '叶月雫', time: '19/05/08', desc: '去女仆餐厅啊', avatar: 'http://b-ssl.duitang.com/uploads/item/201607/07/20160707171253_4nCNk.thumb.224_0.png' },
        { id: 10, name: '望月红叶', time: '19/05/08', desc: '小鸣和宁宁最近都很怪怪的，是不是发生什么事了？', avatar: 'https://i2.hdslb.com/bfs/face/2930cd263041069fadafa60f3f1fa2f9436e8291.jpg' },
        { id: 11, name: '鸣海燕', time: '19/05/08', desc: '宁宁鸡是靠关系进来的！', avatar: 'http://imgsrc.baidu.com/forum/w=580;/sign=3f6eef60be119313c743ffb855030dd7/e61190ef76c6a7efa2368984f1faaf51f3de667b.jpg' },
      ]
    }, 0)
  },

  data () {
    return {
      activedId: 0,
      list: []
    }
  }
}
</script>

<style lang="scss">
  
</style>
