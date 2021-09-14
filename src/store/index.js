import { createStore } from 'vuex'
import product from './product.js'
import option from './option.js'
import magazine from './magazine.js'

export default createStore({
  modules: {
    product,
    option,
    magazine
  }
})