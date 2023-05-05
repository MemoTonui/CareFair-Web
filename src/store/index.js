import { createStore } from 'vuex';
import user from '../store/modules/user.js';
import jobs from '../store/modules/jobs.js';
import interviews from '../store/modules/interviews.js';
import calendar from '../store/modules/calendar.js';
import card from '../store/modules/card.js';
import backgroundCheck from '../store/modules/backgroundCheck.js';


const store = createStore({
  modules:{
    user,
    jobs,
    interviews,
    calendar,
    card,
    backgroundCheck
  }
})

export default store