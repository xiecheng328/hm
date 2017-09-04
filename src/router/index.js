import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Search from '@/components/Search'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/list/:keyword',
      name: 'List',
      component: List
    }
  ]
})
