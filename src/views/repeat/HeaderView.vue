<script setup>

</script>

<template>
  <div>
    <!--    <h1>不可被察觉 不可被认知,明月会给出解释</h1>-->
    <a-button>来 观 胜</a-button>
  </div>
</template>
<script>
import service from "@/utils/service";

export default {

  mounted() {
    service.get("/").then(
        res => {
          res
        }
    ).catch(
        err => {
          console.log("is not ok")
          console.log(err.message)
        }
    )
  }
}
</script>
<style>

</style>