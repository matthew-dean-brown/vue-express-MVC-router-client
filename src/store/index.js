import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
const baseURL ='http://localhost:8081'
axios.defaults.withCredentials = true

// VueCookies.use(VueCookies,{expires:'1d'})
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
      console.log(login);
      setTimeout(()=> router.replace('/'),2000)
      
      
    },
    async getInfo(context){
      const api = await axios.get(baseURL+'/api')
      console.log(api)
    }
  },
  modules: {
  }
})
