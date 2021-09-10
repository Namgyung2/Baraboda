import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Introduce from './Introduce/Introduce'
import Menu from './Introduce/Menu'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/introduce', component: Introduce },
    { path: '/introduce/menu', component: Menu }
  ]
})