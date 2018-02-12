<template>
  <div class="vue-router-ex">
   {{msg}}
   <!-- <a href="vuerouter/one">one</a>
   <a href="vuerouter/two">two</a> -->
   <transition name="fade">
       <router-view></router-view>
   </transition>
   <p>
       <router-link to="/vuerouter/one">one</router-link>
       <router-link to="/vuerouter/two">two</router-link>
   </p>
   <p>
       <router-link :to="{name:'VueRouterExOne', params:{username: 'testvue'}}">one</router-link>
       <router-link :to="{name:'VueRouterExTwo'}">two</router-link>
   </p>
  </div>
</template>

<script>
export default {
  name: 'VueRouterEx',
  data () {
    return {
      msg: 'vue router'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-router-ex {
  color: #42b983;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
