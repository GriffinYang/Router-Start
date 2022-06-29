import {createRouter,createWebHistory} from 'vue-router';
import TeamsList from '@/components/teams/TeamsList';
import UsersList from '@/components/users/UsersList';
import TeamMembers from '@/components/teams/TeamMembers';
import TeamFooter from "@/components/teams/TeamFooter";
import UserFooter from "@/components/users/UserFooter";
const router=createRouter({
  history:createWebHistory(),
  routes:[
    { path:'/',redirect:'/teams'},
    { path:'/teams',components:{
        default: TeamsList,footer:TeamFooter
      },
      children:[{name:"team-member", path:"/teams/:teamId",component:TeamMembers,props:true},]
    },
    { path:'/users',name:'team-user',components: { default:UsersList,footer:UserFooter },
      beforeEnter(to,from,next){
        console.log("User beforeEnter");
        console.log(to,from);
        next()
      }
    },
    {path:"/:notFoundPage(.*)",redirect:"/teams"}
  ]
});
router.beforeEach(function(to,from,next){
  console.log("Global beforeEach");
  console.log(to,from);
  // if(to.name==='team-member'){
  //   next()
  // }else{
  //   next({name:"team-member",params:{teamId:"t2"}})
  // }
  next()
}),
  router.afterEach(function(to,from){
    console.log("Global After each");
    console.log(to,from);
  })
export default router;