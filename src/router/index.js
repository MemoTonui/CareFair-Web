import {createRouter, createWebHistory} from 'vue-router';
import MainWebPage from "/src/views/MainWebPage.vue";
import About from '/src/views/About.vue'
import SignUp from "/src/views/Auth/SignUp.vue";
import LogIn from "/src/views/Auth/LogIn.vue";
import ForgotPassword from "/src/views/Auth/ForgotPassword.vue";
import ResetPassword from "/src/views/Auth/ResetPassword.vue";
import OTP from "/src/views/Auth/OTP.vue";




const routes= [
  {
    path:'/',
    name:'MainWebPage',
    component:MainWebPage
  },
  {
    path:'/SignUp',
    name:'SignUp',
    component:SignUp
  },
  {
    path:'/Login',
    name:'LogIn',
    component:LogIn
  },
  {
    path:'/ForgotPassword',
    name:'ForgotPassword',
    component:ForgotPassword
  },
  {
    path:'/OTP',
    name:'OTP',
    component:OTP
  },
  {
    path:'/ResetPassword',
    name:'ResetPassword',
    component:ResetPassword
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