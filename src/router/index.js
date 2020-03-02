import Vue from 'vue'
import Router from 'vue-router'
import TicketsSearchPage from '@/components/TicketsSearchPage/TicketsSearchPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TicketsSearchPage',
      component: TicketsSearchPage
    }
  ]
})
