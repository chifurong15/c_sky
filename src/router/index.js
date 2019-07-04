import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index/index'
import Company from '@/page/company/index'
import Cooperation from '@/page/cooperation/index'
import New from '@/page/new/index'
import Product from '@/page/product/index'
import Automatic from '@/page/product/automatic'
import River from '@/page/product/river'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
      {
          path: '/Company',
          name: 'Company',
          component: Company
      },
      {
          path: '/Cooperation',
          name: 'Cooperation',
          component: Cooperation
      },
      {
          path: '/New',
          name: 'New',
          component: New
      },
      {
          path: '/Product',
          name: 'Product',
          component: Product
      },
      {
          path: '/Automatic',
          name: 'Automatic',
          component: Automatic
      },
      {
          path: '/River',
          name: 'River',
          component: River
      }
  ]
})
