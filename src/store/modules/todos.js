import axios from 'axios'


const state = {
    todos:[]
    
};

const getters = {
    allTodos:(state)=>state.todos
};

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get('http://localhost:8000/api/posts'
        )
        // state.todos = response.data
        commit('setTodos',response.data)
        console.log(response.data)
    },

addTodo({commit},form){
    //     const response = await axios.post('http://localhost:8000/api/posts',{title,body,
    // completed: false})

    axios.post('http://localhost:8000/api/posts',form)
    .then(response=>{
        commit('newTodo',response.data)
    })
    .catch(err=>{
        console.log(err)
    })

    // commit('newTodo',)
    // commit('newTodo',response.data)
    }
};

const mutations = {
    setTodos: (state,todos)=>{
        state.todos = todos
    },

    newTodo:(state,todo)=>{
        state.todos.unshift(todo)
    }
};

export default {
    state, 
    getters,
    actions,
    mutations
}
