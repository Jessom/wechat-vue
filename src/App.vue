<template>
  <div id="app">
    <div class="container">
      <side-bar />
      <router-view/>
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

