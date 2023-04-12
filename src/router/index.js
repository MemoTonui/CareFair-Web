import {createRouter, createWebHistory} from 'vue-router';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//Website And Authentication Pages
import MainWebPage from "/src/views/MainWebPage.vue";
import About from '/src/views/About.vue'
import SignUp from "/src/views/Auth/SignUp.vue";
import LogIn from "/src/views/Auth/LogIn.vue";
import ForgotPassword from "/src/views/Auth/ForgotPassword.vue";
import ResetPassword from "/src/views/Auth/ResetPassword.vue";
import PasswordResetSuccess from "/src/views/Auth/PasswordResetSuccess.vue";
import AccountSetup from "/src/views/AccountSetup.vue";
import FAQ from "/src/views/FAQ.vue";
import TermsAndConditions from "/src/views/TermsAndConditions.vue";

//Caregiver Pages
const CaregiverHome = () =>
  import("/src/views/Home/CaregiverHome.vue");

const SwitchAccount = () =>
  import("/src/views/CaregiverPages/SwitchAccount.vue");

  const CaregiverAccountSetupProcess = () =>
  import("/src/views/CaregiverPages/CaregiverAccountSetupProcess.vue");
  const CareType = () =>
  import("/src/views/CaregiverPages/CareType.vue");
  const ChildCareSkillSet = () =>
  import("/src/views/CaregiverPages/ChildCareSkillSet.vue");
  const SeniorCareSkillSet = () =>
  import("/src/views/CaregiverPages/SeniorCareSkillSet.vue");
  const PetCareSkillSet = () =>
  import("/src/views/CaregiverPages/PetCareSkillSet.vue");


const routes= [
//Caregiver Routes
{
  path: "/CaregiverHome",
  name: "CaregiverHome",
  component: CaregiverHome,
  beforeEnter(to, from, next) {
    const token = localStorage.getItem("token");
      if (token) {
        console.log(token)
       next()
      } else {
        next("/Login");
      }
    },
  children:[
    {
      path: "/SwitchAccount",
      name: "SwitchAccount",
      component: SwitchAccount,
    },
    {
      path: "/CareType",
      name: "CareType",
      component: CareType,
    },
    {
      path: "/ChildCareSkillSet",
      name: "ChildCareSkillSet",
      component: ChildCareSkillSet,
    },
     {
      path: "/SeniorCareSkillSet",
      name: "SeniorCareSkillSet",
      component: SeniorCareSkillSet,
    },
    {
      path: "/PetCareSkillSet",
      name: "PetCareSkillSet",
      component: PetCareSkillSet,
    },
     {
      path: "/CaregiverAccountSetupProcess",
      name: "CaregiverAccountSetupProcess",
      component: CaregiverAccountSetupProcess,
    },
  ],
},

  {
    path:'/',
    name:'MainWebPage',
    component:MainWebPage
  },
 
  {
    path:'/AccountSetup',
    name:'AccountSetup',
    component:AccountSetup
  },
 {
path: "/PasswordResetSuccess",
  name: "PasswordResetSuccess",
  component: PasswordResetSuccess,
},

  {
    path:'/FAQs',
    name:'FAQs',
    component:FAQ
  },
  {
    path:'/TermsAndConditions',
    name:'TermsAndConditions',
    component:TermsAndConditions
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
  }, {
    path:'/SignUp',
    name:'SignUp',
    component:SignUp,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem("token");
      if (token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path:'/Login',
    name:'LogIn',
    component:LogIn,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem("token");
      if (token) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/ForgotPassword",
      name: "ForgotPassword",
      component: ForgotPassword,
      beforeEnter(to, from, next) {
        const token = localStorage.getItem("token");
        if (token) {
          next("/");
        } else {
          next();
        }
      },
    },
]
const router = createRouter({
  history :createWebHistory(),
  routes,
})

export default router