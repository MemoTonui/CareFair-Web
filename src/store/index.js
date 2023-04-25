import { createStore } from 'vuex';
import user from '../store/modules/user.js';
import jobs from '../store/modules/jobs.js'


const store = createStore({
  modules:{
    user,
    jobs,
  }
})

export default store