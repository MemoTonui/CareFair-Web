import axios from "axios";
import router from "/src/router";
const baseUrl = "https://carefair.herokuapp.com/";

export const CREATE_USER_REQUEST ="CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS ="CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL ="CREATE_USER_FAIL";

export const CREATE_TOKEN_REQUEST ="CREATE_TOKEN_REQUEST";
export const CREATE_TOKEN_SUCCESS ="CREATE_TOKEN_SUCCESS";
export const CREATE_TOKEN_FAIL ="CREATE_TOKEN_FAIL";

export const UPDATE_USER_PROFILE ="UPDATE_USER_PROFILE";
export const UPDATE_USER_PROFILE_SUCCESS ="UPDATE_USER_PROFILE_SUCCESS";
export const UPDATE_USER_PROFILE_FAIL ="UPDATE_USER_PROFILE_FAIL";

export const GET_USER_BY_FIREBASE ="GET_USER_BY_FIREBASE";
export const GET_USER_BY_FIREBASE_SUCCESS ="GET_USER_BY_FIREBASE_SUCCESS";
export const GET_USER_BY_FIREBASE_FAIL ="GET_USER_BY_FIREBASE_FAIL";



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

    /**CREATE TOKEN */
    [CREATE_TOKEN_REQUEST](state) {
      state.loading = true;
      state.error = "";
    },
    [CREATE_TOKEN_SUCCESS](state, payload) {
      state.loading = false;
      state.userInfo = payload;
      state.success = payload.message;
    },
    [CREATE_TOKEN_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },

    /**UPDATE USER'S PROFILE */
    [UPDATE_USER_PROFILE](state) {
      state.loading = true;
      state.error = "";
    },
    [UPDATE_USER_PROFILE_SUCCESS](state, payload) {
      state.loading = false;
      state.userInfo = payload;
      state.success = payload.message;
    },
    [UPDATE_USER_PROFILE_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },

    /**GET USER BY FIREBASE ID */
    [GET_USER_BY_FIREBASE](state) {
      state.loading = true;
      state.error = "";
    },
    [GET_USER_BY_FIREBASE_SUCCESS](state, payload) {
      state.loading = false;
      state.userInfo = payload;
      state.success = payload.message;
    },
    [GET_USER_BY_FIREBASE_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },
  },
  actions :{

    //Create User Token
    async createToken({ commit }, payload) {
      commit(CREATE_TOKEN_REQUEST);
      var config = {
        method: "post",
        url: `${baseUrl}auth/login`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
        },
        data: payload,
      };
      console.log("Create New Token", config);
  
      axios(config)
        .then(function (response) {
          console.log("Create A new Token", response.data);
          localStorage.setItem("token",response.data)
          commit(CREATE_TOKEN_SUCCESS, response.data);

        })
        .catch(function (error) {
          console.log(error);
          commit(CREATE_TOKEN_FAIL, error.response.data);
        });
    },

//Create User
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
          router.replace({ name: "LogIn" });
        })
        .catch(function (error) {
          console.log(error);
          commit(CREATE_USER_FAIL, error.response.data);
        });
    },


 //Update User Profile
 async getUserByFirebase({ commit }, payload) {
  commit(GET_USER_BY_FIREBASE);
  var userId = localStorage.getItem("firebase");

  var config = {
    method: "get",
    url: `${baseUrl}users/firebaseId/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Get user By Firebase", config);

  axios(config)
    .then(function (response) {
      console.log("Get user By Firebase", response.data.message._id);
      commit(GET_USER_BY_FIREBASE_SUCCESS, response.data.message);
      localStorage.setItem("id",response.data.message._id);
    })
    .catch(function (error) {
      console.log(error);
      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(GET_USER_BY_FIREBASE_FAIL, error.response.data);
      }
    });
},



    //Update User Profile
    async editUserProfile({ commit }, payload) {
      commit(UPDATE_USER_PROFILE);
      var userId = localStorage.getItem("id");
  
      var config = {
        method: "put",
        url: `${baseUrl}users/${userId}`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("edit current user config", config);
  
      axios(config)
        .then(function (response) {
          console.log("edit current user profile", response);
          commit(UPDATE_USER_PROFILE_SUCCESS, response.data.message);
        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) {
           
            router.replace({ name: "LogIn" });
          } else {
            commit(EDIT_CURRENT_USER_FAIL, error.response.data);
          }
        });
    },

    
  },
}