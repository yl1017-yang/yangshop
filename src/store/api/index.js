import axios from 'axios'

//1. HTTP Request & Response와 관련된 기본 설정
// const config = {
//   baseUrl: 'http://localhost:3000/api'
// };

// function ProductListApi() {
//   return axios.get(`${config.baseUrl}routes/products.json`);
// }
// export {
//   ProductListApi,
// }

// const apiClient = axios.create({
//   baseURL: `http://localhost:3000`,
//   withCredentials: false,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

// export default {
//   getProduct() {
//     return apiClient.get("/api");
//   },
// };


const state = { 
  users: []
};

const getters = { 
  usersList: state => state.users
};

const actions = { 
  async fetchUsers({commit}){
    const response = await axios.get("http://localhost:3000/users");
    commit("setUsers", response.data)
  },
  async addUsers({commit}, user){
    const response = await axios.post("http://localhost:3000/users", user);
    commit("addNewUser", response.data)
  },
  async deleteUser({commit}, id){
    await axios.delete(`http://localhost:3000/users/${id}`);
    commit("removeUser", id)
  }
};

const mutations = { 
  setUsers: (state, users) => (
      state.users = users
  ),
  addNewUser: (state, user) => state.users.unshift(user),
  removeUser: (state, id) => (
      state.users.filter(user => user.id !== id),
      state.users.splice(user => user.id, 1)
  )
};

export default {
  state,
  getters,
  actions,
  mutations
}