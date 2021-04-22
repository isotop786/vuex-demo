import axios from 'axios'


const state = {
    todos:[]
    
};

const getters = {
    allTodos:(state)=>state.todos
};

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get('http://localhost:8000/api/users'
        )
        state.todos = response.data
    }
};

const mutations = {};

export default {
    state, 
    getters,
    actions,
    mutations
}
