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
  const CaregiverProfile = () =>
  import("/src/views/CaregiverPages/CaregiverProfile.vue");
  const Jobs = () =>
  import("/src/views/CaregiverPages/Jobs.vue");
  const Interviews = () =>
  import("/src/views/CaregiverPages/Interviews.vue");
  const Settings = () =>
  import("/src/views/CaregiverPages/Settings.vue");
  const Payments = () =>
  import("/src/views/CaregiverPages/Payments.vue");
  const Calendar = () =>
  import("/src/views/CaregiverPages/Calendar.vue");


  //Care receiver Page
  const CareReceiverHome = () =>
  import("/src/views/Home/CareReceiverHome.vue");
  const SearchPage = () =>
  import("/src/views/CareReceiverPages/SearchPage.vue");


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
    {
      path: "/CaregiverProfile",
      name: "CaregiverProfile",
      component: CaregiverProfile,
    },
    {
      path: "/Jobs",
      name: "Jobs",
      component: Jobs,
    },
    {
      path: "/Interviews",
      name: "Interviews",
      component: Interviews,
    },
    {
      path: "/Payments",
      name: "Payments",
      component: Payments,
    },
    {
      path: "/Settings",
      name: "Settings",
      component: Settings,
    },
    {
      path: "/Calendar",
      name: "Calendar",
      component: Calendar,
    },
  ],
},


//Caregiver Routes
{
  path: "/CareReceiverHome",
  name: "CareReceiverHome",
  component: CareReceiverHome,
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
      path:'/Search',
      name:'SearchPage',
      component:SearchPage
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