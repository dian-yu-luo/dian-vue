<script setup>

</script>

<template>
  <br><br><br><br>
  <a-input v-model:value="value" placeholder="Basic usage"/>
  <br><br><br><br><br><br><br><br><br>
  <a-button @click="func1">func1</a-button>
  <a-button @click="func2">func2</a-button>
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
    func1() {
      service.get("/1").then(res => {
        console.log(res.data)
        this.value = "logaaa"
        this.value=res.data
      })
    },
    func2() {
      service.post(
            "deal", {
            data1: this.value
          }
      ).then(res => {
        console.log(res.data)
        this.value = res.data
      })
    },

  }
}
</script>
<style scoped>

</style>