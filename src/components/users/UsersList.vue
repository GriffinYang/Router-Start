<template>
  <ul>
    <button @click='changePage'>Change to Team Page</button>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    changePage(){
      this.$router.push("./teams")
    }
  },
  beforeRouteEnter(to,from,next){
    console.log("Before Cmp Entered");
    console.log(to,from);
    next()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
  text-align: center;
}
button{
  border: none;
  background-color: #af003a;
  margin-top: 20px;
  font-size: 25px;
  border-radius: 10px;
  color: white;
}
</style>