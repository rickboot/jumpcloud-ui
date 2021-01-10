import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Create from './components/Create'
import Details from './components/Details'
import Update from './components/Update'
import Users from './components/Users'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/create', component: Create},
    {path: '/details', component: Details},
    {path: '/update', component: Update}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
