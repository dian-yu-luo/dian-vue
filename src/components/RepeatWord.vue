<script setup>

</script>

<template>
  <br><br><br><br>
  <a-input v-model:value="value" placeholder="Basic usage"/>
  <br><br><br><br><br><br><br><br><br>
  <a-button @click="logarea">ke</a-button>
  <a-button @click="sendString">获得词组</a-button>
  <a-button>xing</a-button>

  <br><br>

</template>
<script>
import service from "@/utils/service";

export default {
  data() {
    return {
      value: ""
    }
  },
  methods: {
    sendString() {
      service.post(
          "deal", {
            data1: this.value
          }
      ).then(res => {
        console.log(res.data)
        this.value = res.data
      }).catch(
          this.value="button 1 can't be click"
      )
    },
    logarea() {
      service.get("/1").then(res => {
        console.log(res.data)
        this.value = "logaaa"
      })
    }
  }
}
</script>
<style scoped>

</style>