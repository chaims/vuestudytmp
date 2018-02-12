<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <hr>
    <p>导航：
      <span class="router-item" :key="index" v-for="(route, index) in $router.options.routes">
        <router-link  :to="route.path">{{route.name}}</router-link>
      </span>
    <!-- <router-link to="/vuerouter">VueRouterEx</router-link> -->
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    console.log(this.$router)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-item{
  margin-left: 10px;
}
</style>
