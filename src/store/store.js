import { createStore, } from 'vuex';
import ProductData from './product.js';
import EventData from './event.js';

const store = createStore({
  state(){
    return {
      ProductList : ProductData, 
      EventList : EventData,
    }
  },
  getters: {},
  
})

export default store