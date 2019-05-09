<template>
  <div id="app">
    <div class="container">
      <side-bar />
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
  components: {
    SideBar
  }
}
</script>

