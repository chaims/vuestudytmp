<template>
  <div class="vue-router-extwo">
   {{msg}} - {{$route.name}}
  </div>
</template>

<script>
export default {
  name: 'VueRouterExTwo',
  data () {
    return {
      msg: 'vue router ex Two'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-router-extwo {
  color: #42b983;
}
</style>
