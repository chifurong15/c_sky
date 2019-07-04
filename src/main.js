// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Header from '@/components/public/header.vue'
import Footer from '@/components/public/footer.vue'
// use组件
Vue.use(Header)
Vue.use(Footer)
// 初始化组件
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App,Header,Footer },
  template: '<App/>'
})