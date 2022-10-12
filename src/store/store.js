import { createStore } from 'vuex'
import ProductData from './product.js'
import EventData from './event.js'
import UsersModule from './api/index.js'

const store = createStore({
  state(){  //여러 컴포넌트에서 공유할 공동의 상태 - data 동일
    return {
      ProductList : ProductData,
      EventList : EventData,
    }
  },
  mutations: {
    //state로 데이터를 넘기기 때문에 첫 인자는 무조건 state로 해야한다.
  },
  actions: {  // methods 동일
    // ProductListApi.getProduct()
    //   .then(response => {
    //     this.products = response.data;
    //   })
    //   .catch(error => {
    //     console.log("Error Message:", error.response)
    //   })
  },
  getters: {  //공동의 상태를 계산하여 state의 값을 반환하는 함수, computed 속성과 비슷
    // 검색 결과
    getFilteredProduct:(state) => (keyword) => {
      const filtered = state.products.filter((object) => 
        object.title.toLowerCase().includes(keyword.toLowerCase()) || 
        object.description.toLowerCase().includes(keyword.toLowerCase()
      ));
      if (filtered) return filtered;
    },
  },
  modules: {
    UsersModule 
  }
  
})

export default store