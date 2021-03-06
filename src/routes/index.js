import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Introduce from './Introduce/Introduce'
import Menu from './Introduce/Menu'
import Shopping from './Shopping'
import Magazine from './Magazine'
import Questions from './Questions'
import Review from './Review'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/introduce', component: Introduce },
    { path: '/introduce/menu', component: Menu },

    { path: '/shopping/specialTea', component: Shopping},
    { path: '/shopping/coffeePack', component: Shopping},
    { path: '/shopping/paraphernalia', component: Shopping},
    { path: '/shopping/goods', component: Shopping},

    { path: '/magazine', component: Magazine},
    { path: '/questions', component: Questions},
    { path: '/review', component: Review},
  ]
})