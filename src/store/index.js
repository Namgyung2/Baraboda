import { createStore } from 'vuex'
import product from './product.js'
import option from './option.js'

export default createStore({
  modules: {
    product,
    option
  }
})