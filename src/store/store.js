import { createStore } from 'vuex'
import ProductData from './product.js';

const store = createStore({
  state(){
    return {
      ProductList : ProductData, 
    }
  },
  
  
})

export default store