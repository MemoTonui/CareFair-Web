import { createStore } from 'vuex';
import user from '../store/modules/user.js';
import jobs from '../store/modules/jobs.js';
import interviews from '../store/modules/interviews.js';



const store = createStore({
  modules:{
    user,
    jobs,
    interviews
  }
})

export default store