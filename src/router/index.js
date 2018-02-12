import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueRouterEx from '@/components/VueRouterEx'
import VueRouterExOne from '@/components/VueRouterExOne'
import VueRouterExTwo from '@/components/VueRouterExTwo'
import PageError from '@/components/PageError'
import VuexStore from '@/components/VuexStore'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: PageError,
      name: '404页面',
      beforeEnter: (to, from, next) => {
        console.log('========')
        console.log(to)
        console.log(from)
        next()
      }
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/vuerouter',
      name: 'VueRouter',
      component: VueRouterEx,
      children: [
        {
          path: 'one',
          name: 'VueRouterExOne',
          component: VueRouterExOne
        },
        {
          path: 'two',
          name: 'VueRouterExTwo',
          component: VueRouterExTwo
        },
        {
          path: 'index',
          redirect: '/vuerouter'
        },
        {
          path: 'index',
          alias: '*'
        }
      ]
    }, {
      path: '/store',
      name: 'VuexStore',
      component: VuexStore
    }
  ]
})
