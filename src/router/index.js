import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Condition from '@/components/Condition'
import Loop from '@/components/Loop'
import HandleUserInput from '@/components/HandleUserInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/condition',
      name: 'Condition',
      component: Condition
    },
    {
      path: '/loop',
      name: 'Loop',
      component: Loop
    },
    {
      path: '/HandleUserInput',
      name: 'Handle OnClick',
      component: HandleUserInput
    }
  ]
})
