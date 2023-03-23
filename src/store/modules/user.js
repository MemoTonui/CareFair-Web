import axios from "axios";
import router from "/src/router";
const baseUrl = "https://carefair.herokuapp.com/";

export const CREATE_USER_REQUEST ="CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS ="CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL ="CREATE_USER_FAIL";

export default{
  state:()=>({
    loading: false,
  success: "",
  error: "",
  userInfo: [],
  isLoggedIn:false

  }),
  getters:{
    userInfo: (state) => state.userInfo,
  success: (state) => state.success,
  loading: (state) => state.loading,
  error: (state) => state.error,
  isLoggedIn:(state) => state.isLoggedIn
  },
  mutations:{
    /**CREATE USER */
    [CREATE_USER_REQUEST](state) {
      state.loading = true;
      state.error = "";
    },
    [CREATE_USER_SUCCESS](state, payload) {
      state.loading = false;
      state.userInfo = payload;
      state.success = payload.message;
    },
    [CREATE_USER_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },
  },
  actions :{
    async createUser({ commit }, payload) {
      commit(CREATE_USER_REQUEST);
  
      var config = {
        method: "post",
        url: `${baseUrl}users`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
        },
        data: payload,
      };
      console.log("Create New User", config);
  
      axios(config)
        .then(function (response) {
          console.log("Create A new USER", response.data);
          commit(CREATE_USER_SUCCESS, response.data);
          //router.replace({ name: "OTP", params: { email: payload.email } });
        })
        .catch(function (error) {
          console.log(error);
          commit(CREATE_USER_FAIL, error.response.data);
        });
    },
  },
}