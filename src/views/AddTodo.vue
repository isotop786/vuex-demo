<template>
  <div>
      <h3>Add todo</h3>
      <div class="add">
            <form  @submit.prevent="createPost">
          <input type="text" v-model="form.title" placeholder="title of the post">
          <br><br>
          <textarea v-model="form.body" cols="20" rows="10" placeholder="body of the post"></textarea>
          <br><br>
          <input type="submit" value="Add Post">
      </form>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {
name:'AddTodo',
components:{

},
data(){
    return{
        form:{
        title:'',
        body:''
        }
        
    }
},
methods:{
    ...mapActions(['addTodo']),
    createPost(){
        this.addTodo(this.form)
        this.$router.push('/')
    }
}
}
</script>

<style scoped>
form{
    display: grid;
    
}
input[type='text']{

    padding:10px;
    border:1px solid #41b883;
    outline: 0;
}
textarea{
    margin-top: 0px;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}
input[type='submit']{
    grid-row: 5;
    padding:10px;
    border: none;
    background: #41b883;
    color:#eee;
}
</style>