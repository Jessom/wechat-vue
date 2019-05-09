<template>
  <div class="chat-list_wrap">
    <!-- 按时间分组 -->
    <div class="chat-list_cell clearfix">
      <time class="chat-time">15:40</time>
      <!-- 回复者 -->
      <div class="chat-apply chat-left fl">
        <img class="chat-list_avatar" src="http://img.tukexw.com/img/2fa7f932c357459c.jpg" alt="">
        <div class="apply_content">TA已同意你的请求</div>
      </div>
      <div class="chat-apply chat-left fl">
        <img class="chat-list_avatar" src="http://img.tukexw.com/img/2fa7f932c357459c.jpg" alt="">
        <div class="apply_content">你好啊，我是凉风青叶</div>
      </div>

      <!-- 当前用户 -->
      <div class="chat-apply chat-right fr">
        <div class="apply_content">你好</div>
        <img class="chat-list_avatar" src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
      </div>
      <div class="chat-apply chat-right fr">
        <div class="apply_content">我是涼風あおば</div>
        <img class="chat-list_avatar" src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
      </div>

      <!-- 回复者 -->
      <div class="chat-apply chat-left fl">
        <img class="chat-list_avatar" src="http://img.tukexw.com/img/2fa7f932c357459c.jpg" alt="">
        <div class="apply_content">哎呀呀，这么巧，我名字的日语就是【涼風あおば】呢！</div>
      </div>

      <!-- 当前用户 -->
      <div class="chat-apply chat-right fr">
        <div class="apply_content">哈哈，我就是因为这个，才加你好友的</div>
        <img class="chat-list_avatar" src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
      </div>

      <!-- 回复者 -->
      <div class="chat-apply chat-left fl">
        <img class="chat-list_avatar" src="http://img.tukexw.com/img/2fa7f932c357459c.jpg" alt="">
        <div class="apply_content">这样啊，怪不得你头像和我一样</div>
      </div>

      <!-- 当前用户 -->
      <div class="chat-apply chat-right fr">
        <div class="apply_content">头像就是我本人哦</div>
        <img class="chat-list_avatar" src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
      </div>
    </div>


    <!-- 按时间分组 -->
    <div class="chat-list_cell clearfix">
      <time class="chat-time">15:53</time>
      <!-- 回复者 -->
      <div class="chat-apply chat-left fl">
        <img class="chat-list_avatar" src="http://img.tukexw.com/img/2fa7f932c357459c.jpg" alt="">
        <div class="apply_content">真的假的？</div>
      </div>
      <div class="chat-apply chat-left fl">
        <img class="chat-list_avatar" src="http://img.tukexw.com/img/2fa7f932c357459c.jpg" alt="">
        <div class="apply_content">我头像也是我本人！！！</div>
      </div>

      <!-- 当前用户 -->
      <div class="chat-apply chat-right fr">
        <div class="apply_content">我不信我不信</div>
        <img class="chat-list_avatar" src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
      </div>
      <div class="chat-apply chat-right fr">
        <div class="apply_content">求爆照</div>
        <img class="chat-list_avatar" src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
      </div>

      <!-- 回复者 -->
      <div class="chat-apply chat-left fl">
        <img class="chat-list_avatar" src="http://img.tukexw.com/img/2fa7f932c357459c.jpg" alt="">
        <div class="apply_content">我爆照后，你也要爆照</div>
      </div>
      <div class="chat-apply chat-left fl">
        <img class="chat-list_avatar" src="http://img.tukexw.com/img/2fa7f932c357459c.jpg" alt="">
        <div class="apply_content">
          <img src="http://b-ssl.duitang.com/uploads/item/201708/31/20170831231017_de4YF.thumb.700_0.jpeg" alt="">
        </div>
      </div>

      <!-- 当前用户 -->
      <div class="chat-apply chat-right fr">
        <div class="apply_content">可以</div>
        <img class="chat-list_avatar" src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
      </div>

      <!-- 当前用户 -->
      <div class="chat-apply chat-right fr">
        <div class="apply_content">我擦，还真是啊</div>
        <img class="chat-list_avatar" src="http://b-ssl.duitang.com/uploads/item/201707/18/20170718234203_a4yJE.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  mounted() {
    this.scrollToBottom()
  },

  updated() {
    this.scrollToBottom()
  },

  methods: {
    scrollToBottom: function () {
      this.$nextTick(() => {
        let container = document.querySelector(".chat-list_wrap")
        container.scrollTop = container.scrollHeight
      })
    }
  }
}
</script>

<style lang="scss">
  
</style>
