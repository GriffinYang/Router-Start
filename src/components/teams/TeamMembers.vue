<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to='/teams/t2'>To T2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  props:[
    "teamId"
  ],
  watch:{
    teamId(newRoute){
      console.log(this.teamId);
      // console.log(newRoute);
      console.log(this.$route.query);
      this.routeUpdate(newRoute)
    }
  },
  inject:[
    'teams',
    'users'
  ],
  components: {
    UserItem
  },
  data() {
    return {
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
      teamName:"",
      members:[]
    };
  },
  created() {
    this.routeUpdate(this.teamId)
  },
  beforeRouteUpdate(to,from,next){
    console.log("before Route update ran");
    console.log(to,from);
  this.routeUpdate(to.params.teamId);
  next()
},
  methods:{
    routeUpdate(id){
      // const selectedId=route.params.teamId;
      const selectedTeam=this.teams.find(team=>team.id===id);
      const members=selectedTeam.members;
      const selectedMembers=[];
      for(const member of members){
        const selectedUsers=this.users.find(user=>user.id===member)
        selectedMembers.push(selectedUsers)
      }
      this.members=selectedMembers;
      this.teamName=selectedTeam.name
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>