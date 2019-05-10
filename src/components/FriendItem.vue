<template>
  <div class="friend-list">
    <div
      class="friend-item"
      v-for='item in list' :key='item.id'>
      <div class="friend-head" @click="headClick(item)">
        <i
          class="iconfont"
          :class="[item.show ? 'icon-jiantou2' : 'icon-jiantou']"></i>{{ item.name }}
      </div>
      <!-- 根据字母分组 -->
      <div
        class="friend-letter"
        v-show='item.show'
        v-for='it in item.children' :key='it.id'>
        <div class="friend-let_head">{{ it.name }}</div>
        <!-- 当前字母下的好友 -->
        <div class="friend-let_list">
          <div
            class="friend-let_item"
            :class="{'router-link-active': activedId == i.id}"
            v-for='i in it.children'
            :key='i.id'
            @click='routerClick(i)'>
            <img class="friend-avatar" :src="i.avatar" alt="">
            <span class="name">{{ i.nick }}</span>
          </div>
        </div>
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
    headClick(item) {
      // 这里没有触发render函数进行自动更新，需手动调用
      this.$set(item, 'show', !item.show)
      this.$forceUpdate()
    },

    routerClick(item) {
      this.activedId = item.id

      this.$store.dispatch('user', item)
    }
  }
}
</script>

<style lang="scss">
  
</style>
