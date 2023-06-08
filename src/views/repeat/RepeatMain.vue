<script setup>

import SidebarView from "@/views/repeat/SidebarView.vue";
import HeaderView from "@/views/repeat/HeaderView.vue";
</script>

<template>
  <a-layout>
    <a-layout-sider><sidebar-view></sidebar-view></a-layout-sider>
    <a-layout>
      <a-layout-header><header-view></header-view></a-layout-header>
      <a-layout-content><router-view></router-view></a-layout-content>
      <a-layout-footer>4</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {}
</script>

<style scoped>

</style>