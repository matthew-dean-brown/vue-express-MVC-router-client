import { createStore } from 'vuex'
import axios from 'axios'

const baseURL ='http://localhost:8081'

export default createStore({
  state: {
    email:'',
    password:''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async register(context,data){
      console.log(data)
      const login = await axios.post(baseURL+'/register', data)
      const token = document.cookie
      console.log(token)
    },
    async getInfo(context){
      const token = document.cookie
      console.log(token);
      const api = await axios.get(baseURL+'/api', token)
      console.log()
    }
  },
  modules: {
  }
})
