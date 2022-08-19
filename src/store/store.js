import { createStore } from 'vuex'
import ProductData from './product.js';

const store = createStore({
  state(){
    return {
      name: 'kim',
      ProductList : ProductData, 
    }
  },
  data() {
    return {      
    }
  },

  modules: {
  },
  
})

export default store