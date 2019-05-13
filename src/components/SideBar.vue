<template>
  <aside class="side-bar">
    <!-- mac 关闭、最大化、最小化按钮 -->
    <div class="mac-btns">
      <span class="mac-btn mac-btn_close">
        <i class="iconfont icon-close"></i>
      </span>
      <span class="mac-btn mac-btn_min">
        <i class="iconfont icon-min"></i>
      </span>
      <span class="mac-btn mac-btn_max">
        <i class="iconfont icon-max"></i>
      </span>
    </div>
    
    <!-- 用户头像 -->
    <div class="side-avatar">
      <img src="http://qicloud.jswei.cn/avatar.jpg" alt="">
    </div>

    <!-- 切换菜单 -->
    <div class="side-menus">
      <router-link
        class="side-menu_item"
        :to="{path: `/chat/${notice && notice.uid || 1}`}"
        exact>
        <i
          class="iconfont"
          :class="[$route.path.includes('chat') ? 'icon-chat1 actived' : 'icon-chat']"></i>
      </router-link>

      <router-link
        class="side-menu_item"
        :to="{path: `/friend`}"
        exact>
        <i
          class="iconfont"
          :class="[$route.path.includes('friend') ? 'icon-haoyoudizhi1 actived' : 'icon-haoyoudizhi']"></i>
      </router-link>

      <router-link
        class="side-menu_item"
        :to="{path: `/collection`}"
        exact>
        <i
          class="iconfont"
          :class="[$route.path.includes('collection') ? 'icon-leixing1 actived' : 'icon-leixing']"></i>
      </router-link>
    </div>

    <!-- 最底部菜单 -->
    <i class="iconfont side-menu icon-caidan"></i>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  data () {
    return {}
  },

  computed: {
    ...mapGetters({
      notice: 'notice'
    })
  }
}
</script>

<style lang="scss">
  
</style>
