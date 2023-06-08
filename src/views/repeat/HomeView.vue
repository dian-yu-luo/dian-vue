<template>
  <div class="home">
<hello-world></hello-world>

<circular-progress></circular-progress>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CircularProgress from "@/components/CircularProgress.vue";

export default {
  name: 'HomeView',
  components: {
    CircularProgress,
    HelloWorld
  }
}
</script>
