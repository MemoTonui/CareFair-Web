import {createRouter, createWebHistory} from 'vue-router';
import MainWebPage from "/src/views/MainWebPage.vue";
import About from '/src/views/About.vue'

const routes= [
  {
    path:'/',
    name:'MainWebPage',
    component:MainWebPage
  },
  {
    path:'/about',
    name:'About',
    component:About
  }
]
const router = createRouter({
  history :createWebHistory(),
  routes,
})

export default router