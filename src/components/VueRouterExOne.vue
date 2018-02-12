<template>
  <div class="vue-router-exone">
   <p>{{msg}} - {{$route.name}} - {{$route.params.username}}</p>
   <button @click="goback">回退</button>
   <button @click="goHome">去首页</button>
  </div>
</template>

<script>
export default {
  name: 'VueRouterExOne',
  data () {
    return {
      msg: 'vue router ex one'
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-router-exone {
  color: #42b983;
}
</style>
