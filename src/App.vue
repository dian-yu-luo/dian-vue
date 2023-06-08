<template>
  <a-layout>
    <a-layout-sider style="background-color: rgba(199,23,23,0.57);">
      <sidebar-view></sidebar-view>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background-color: rgba(188,245,179,0.69);">
        <header-view></header-view>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="background-color: azure">Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<style>


</style>
<script setup>
import HeaderView from "@/views/HeaderView.vue";
import SidebarView from "@/views/SidebarView.vue";
</script>