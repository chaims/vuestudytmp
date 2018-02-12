<template>
  <div class="vuex-store">
    {{msg}}
    <hr>
    {{$store.state.count}} - {{count}}
    <button @click="add(1)">+</button>
    <button @click="reduce(1)">-</button>
    <button @click="add(5)">+5</button>
    <button @click="reduce(5)">-5</button>
    <button @click="addAction">+10</button>
    <button @click="reduceAction">-10</button>
  </div>
</template>

<script>
import store from '@/store'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'VueRouterExTwo',
  data () {
    return {
      msg: 'vue router ex Two'
    }
  },
  store,
  computed: {
    ...mapState(['count']),
    msgtest () {
      return this.msg
    },
    count () {
      return this.$store.getters.count
    }
  },
  methods: {
    ...mapActions(['addAction', 'reduceAction']),
    add (delt) {
      store.commit('increment', delt)
    },
    reduce (delt) {
      store.commit('reduce', delt)
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
