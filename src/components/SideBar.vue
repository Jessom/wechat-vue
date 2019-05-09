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
      <img src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
    </div>

    <!-- 切换菜单 -->
    <div class="side-menus">
      <div class="side-menu_item">
        <i class="iconfont icon-chat actived"></i>
      </div>
      <div class="side-menu_item">
        <i class="iconfont icon-yonghuliebiao"></i>
      </div>
      <div class="side-menu_item">
        <i class="iconfont icon-leixing"></i>
      </div>
    </div>

    <!-- 最底部菜单 -->
    <i class="iconfont side-menu icon-caidan"></i>
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  
</style>
