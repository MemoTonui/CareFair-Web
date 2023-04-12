import { createStore } from 'vuex';
import createUser from '../store/modules/user.js';
import editUserProfile from '../store/modules/user.js'
import getUserByFirebase from '../store/modules/user.js'


const store = createStore({
  modules:{
    createUser,
    editUserProfile,
    getUserByFirebase
  }
})

export default store