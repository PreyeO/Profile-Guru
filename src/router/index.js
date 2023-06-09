import { createRouter, createWebHashHistory } from "vue-router"
import MyProfileView from "../Views/MyProfileView.vue"
import Error404View from "../Views/Error404View.vue"
import RepositoriesView from "../Views/RepositoriesView.vue"
import RepoView from "../Views/RepoView.vue"
import LandingView from '../Views/LandingView.vue'


const router= createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/myprofile",
      name:"myprofile",
      component:MyProfileView
    },
    {
      path: '/:catchAll(.*)',
      name:"Not found",
      component:Error404View
    },
   
    {
      path: "/repositories",
      name:"repositories",
      component:RepositoriesView
    },
    {
      path: "/data/:id",
      name:"repository",
      component:RepoView
    },
    {
      path: "/",
      name:"landing",
      component:LandingView
    }
    
    
  ]
})
export default router