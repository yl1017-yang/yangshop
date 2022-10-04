import { createStore, } from 'vuex'
import ProductData from './product.js'
import EventData from './event.js'

const store = createStore({
  state(){
    return {
      ProductList : ProductData, 
      EventList : EventData,
    }
  },
  modules: {
  },
  getters: { 
    // 검색 결과
    getFilteredProduct:(state) => (keyword) => {
      const filtered = state.products.filter((object) => 
        object.title.toLowerCase().includes(keyword.toLowerCase()) || 
        object.description.toLowerCase().includes(keyword.toLowerCase()
      ));
      if (filtered) return filtered;
    },
  },
  
})

export default store