import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules:{
    todos
  }
})




// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
