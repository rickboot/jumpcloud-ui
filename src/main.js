import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Create from './components/Create'
import Details from './components/Details'
import Edit from './components/Edit'
import Users from './components/Users'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/create', component: Create},
    {path: '/details/:id', component: Details},
    {path: '/edit/:id', component: Edit}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
