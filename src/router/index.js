import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/Search'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
    routes: [
        /*{
         path: '/',
         name: 'Hello',
         component: Hello
         },*/
        /*{
         path: '/',
         name: 'Search',
         component: Search
         },*/
        {
            path: '/list/:keyword',
            name: 'List',
            component: List
        },
        {
            path: '/',
            name: 'List2',
            component: List
        },
        {
            path: '/detail/:productId',
            name: 'Detail',
            component: Detail
        }
    ]
})
