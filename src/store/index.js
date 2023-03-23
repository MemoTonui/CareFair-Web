import { createStore } from 'vuex';
import createUser from '../store/modules/user.js';

const store = createStore({
  modules:{
    createUser,
  }
})

export default store