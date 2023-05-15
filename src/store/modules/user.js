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

export const GET_USER_BY_ID_REQUEST ="GET_USER_BY_ID_REQUEST";
export const GET_USER_BY_ID_SUCCESS ="GET_USER_BY_ID_SUCCESS";
export const GET_USER_BY_ID_FAIL ="GET_USER_BY_ID_FAIL";

export const GET_USER_BY_FIREBASE ="GET_USER_BY_FIREBASE";
export const GET_USER_BY_FIREBASE_SUCCESS ="GET_USER_BY_FIREBASE_SUCCESS";
export const GET_USER_BY_FIREBASE_FAIL ="GET_USER_BY_FIREBASE_FAIL";

export const ADD_WORK_EXPERIENCE_REQUEST ="ADD_WORK_EXPERIENCE_REQUEST";
export const ADD_WORK_EXPERIENCE_SUCCESS ="ADD_WORK_EXPERIENCE_SUCCESS";
export const ADD_WORK_EXPERIENCE_FAIL ="ADD_WORK_EXPERIENCE_FAIL";

export const REMOVE_WORK_EXPERIENCE_REQUEST ="REMOVE_WORK_EXPERIENCE_REQUEST";
export const REMOVE_WORK_EXPERIENCE_SUCCESS ="REMOVE_WORK_EXPERIENCE_SUCCESS";
export const REMOVE_WORK_EXPERIENCE_FAIL ="REMOVE_WORK_EXPERIENCE_FAIL";

export const ADD_EDUCATION_REQUEST ="ADD_EDUCATION_REQUEST";
export const ADD_EDUCATION_SUCCESS ="ADD_EDUCATION_SUCCESS";
export const ADD_EDUCATION_FAIL ="ADD_EDUCATION_FAIL";

export const REMOVE_EDUCATION_REQUEST ="REMOVE_EDUCATION_REQUEST";
export const REMOVE_EDUCATION_SUCCESS ="REMOVE_EDUCATION_SUCCESS";
export const REMOVE_EDUCATION_FAIL ="REMOVE_EDUCATION_FAIL";

export const GET_CAREGIVERS_REQUEST ="GET_CAREGIVERS_REQUEST";
export const GET_CAREGIVERS_SUCCESS ="GET_CAREGIVERS_SUCCESS";
export const GET_CAREGIVERS_FAIL ="GET_CAREGIVERS_FAIL";

export const FILTER_CAREGIVERS_REQUEST ="FILTER_CAREGIVERS_REQUEST";
export const FILTER_CAREGIVERS_SUCCESS ="FILTER_CAREGIVERS_SUCCESS";
export const FILTER_CAREGIVERS_FAIL ="FILTER_CAREGIVERS_FAIL";



export default{
  state:()=>({
  loading: false,
  success: "",
  error: "",
  userInfo: [],
  userIdInfo: [],
  caregivers:[],
  isLoggedIn:false

  }),
  getters:{
    userInfo: (state) => state.userInfo,
    userIdInfo: (state) => state.userIdInfo,
    caregivers: (state) => state.caregivers,
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
      state.success = payload.status;
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
      state.success = payload.status;
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
      state.success = payload.status;
    },
    [UPDATE_USER_PROFILE_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },

    /**GET USER BY ID */
    [GET_USER_BY_ID_REQUEST](state) {
      state.loading = true;
      state.error = "";
    },
    [GET_USER_BY_ID_SUCCESS](state, payload) {
      state.loading = false;
      state.userIdInfo = payload;
      state.success = payload.status;
    },
    [GET_USER_BY_ID_FAIL](state, error) {
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
      state.success = payload.status;
    },
    [GET_USER_BY_FIREBASE_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },

    /** ADD WORK EXPERIENCE*/
    [ADD_WORK_EXPERIENCE_REQUEST](state) {
      state.loading = true;
      state.error = "";
    },
    [ADD_WORK_EXPERIENCE_SUCCESS](state, payload) {
      state.loading = false;
      state.userInfo = payload;
      state.success = payload.status;
    },
    [ADD_WORK_EXPERIENCE_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },

    /** REMOVE WORK EXPERIENCE*/
    [REMOVE_WORK_EXPERIENCE_REQUEST](state) {
      state.loading = true;
      state.error = "";
    },
    [REMOVE_WORK_EXPERIENCE_SUCCESS](state, payload) {
      state.loading = false;
      state.userInfo = payload;
      state.success = payload.status;
    },
    [REMOVE_WORK_EXPERIENCE_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },

      /** ADD EDUCATION*/
      [ADD_EDUCATION_REQUEST](state) {
        state.loading = true;
        state.error = "";
      },
      [ADD_EDUCATION_SUCCESS](state, payload) {
        state.loading = false;
        state.userInfo = payload;
        state.success = payload.status;
      },
      [ADD_EDUCATION_FAIL](state, error) {
        state.loading = false;
        state.error = error;
      },
      

     /** REMOVE EDUCATION*/
     [REMOVE_EDUCATION_REQUEST](state) {
      state.loading = true;
      state.error = "";
    },
    [REMOVE_EDUCATION_SUCCESS](state, payload) {
      state.loading = false;
      state.userInfo = payload;
      state.success = payload.status;
    },
    [REMOVE_EDUCATION_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },

    
     /** GET CAREGIVERS*/
     [GET_CAREGIVERS_REQUEST](state) {
      state.loading = true;
      state.error = "";
    },
    [GET_CAREGIVERS_SUCCESS](state, payload) {
      state.loading = false;
      state.caregivers = payload;
      state.success = payload.status;
    },
    [GET_CAREGIVERS_FAIL](state, error) {
      state.loading = false;
      state.error = error;
    },

       /** FILTER CAREGIVERS*/
     [FILTER_CAREGIVERS_REQUEST](state) {
      state.loading = true;
      state.error = "";
    },
    [FILTER_CAREGIVERS_SUCCESS](state, payload) {
      state.loading = false;
      state.caregivers = payload;
      state.success = payload.status;
    },
    [FILTER_CAREGIVERS_FAIL](state, error) {
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
//Get User User Profile
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
      console.log(response.data)
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


//Get UserBy ID
async getUserById({ commit }, payload) {
  commit(GET_USER_BY_ID_REQUEST);
  //var userId = localStorage.getItem("firebase");

  var config = {
    method: "get",
    url: `${baseUrl}users/id/${payload.id}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Get user By ID", config);

  axios(config)
    .then(function (response) {
      console.log("Get user By ID", response.data.message._id);
      console.log(response.data)
      commit(GET_USER_BY_ID_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);
      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(GET_USER_BY_ID_FAIL, error.response.data);
      }
    });
},




    //Update User Profile
    async editUserProfile({ commit,dispatch }, payload) {
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
          dispatch("getUserByFirebase");

        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) {
           
            router.replace({ name: "LogIn" });
          } else {
            commit(UPDATE_USER_PROFILE_FAIL, error.response.data);
          }
        });
    },


     //Add User Work Experience
     async addWorkExperience({ commit,dispatch }, payload) {
      commit(ADD_WORK_EXPERIENCE_REQUEST);
      var userId = localStorage.getItem("id");
  
      var config = {
        method: "put",
        url: `${baseUrl}users/addWork/${userId}`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("add work experience", config);
  
      axios(config)
        .then(function (response) {
          console.log("work experience", response);
          commit(ADD_WORK_EXPERIENCE_SUCCESS, response.data.message);
          dispatch("getUserByFirebase");

        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) {
           
            router.replace({ name: "LogIn" });
          } else {
            commit(ADD_WORK_EXPERIENCE_FAIL, error.response.data);
          }
        });
    },

    //Remove User Work Experience
    async removeWorkExperience({ commit,dispatch }, payload) {
      commit(REMOVE_WORK_EXPERIENCE_REQUEST);
      var userId = localStorage.getItem("id");
  
      var config = {
        method: "put",
        url: `${baseUrl}users/removeWork/${userId}`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("remove work experience", config);
  
      axios(config)
        .then(function (response) {
          console.log("work experience", response);
          commit(REMOVE_WORK_EXPERIENCE_SUCCESS, response.data.message);
          dispatch("getUserByFirebase");

        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) { 
           
            router.replace({ name: "LogIn" });
          } else {
            commit(REMOVE_WORK_EXPERIENCE_FAIL, error.response.data);
          }
        });
    },


    //Add User Education
    async addEducation({ commit,dispatch }, payload) {
      commit(ADD_EDUCATION_REQUEST);
      var userId = localStorage.getItem("id");
  
      var config = {
        method: "put",
        url: `${baseUrl}users/addEducation/${userId}`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("add education", config);
  
      axios(config)
        .then(function (response) {
          console.log("education", response);
          commit(ADD_EDUCATION_SUCCESS, response.data.message);
          dispatch("getUserByFirebase");

        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) {
           
            router.replace({ name: "LogIn" });
          } else {
            commit(ADD_EDUCATION_FAIL, error.response.data);
          }
        });
    },

    //Remove User Work Experience
    async removeEducation({ commit,dispatch }, payload) {
      commit(REMOVE_EDUCATION_REQUEST);
      var userId = localStorage.getItem("id");
  
      var config = {
        method: "put",
        url: `${baseUrl}users/removeEducation/${userId}`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("remove education", config);
  
      axios(config)
        .then(function (response) {
          console.log("education", response);
          commit(REMOVE_EDUCATION_SUCCESS, response.data.message);
          dispatch("getUserByFirebase");

        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) { 
           
            router.replace({ name: "LogIn" });
          } else {
            commit(REMOVE_EDUCATION_FAIL, error.response.data);
          }
        });
    },


    
//Get Caregivers
async getCaregivers({ commit }, payload) {
  commit(GET_CAREGIVERS_REQUEST);
  var userId = localStorage.getItem("id");

  var config = {
    method: "get",
    url: `${baseUrl}users/careGivers/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Get caregivers", config);

  axios(config)
    .then(function (response) {
      console.log("Caregivers", response.data.message._id);
      console.log(response.data)
      commit(GET_CAREGIVERS_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);
      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(GET_CAREGIVERS_FAIL, error.response.data);
      }
    });
},
       
//Filter Caregivers
async filterCaregivers({ commit }, payload) {
  commit(FILTER_CAREGIVERS_REQUEST);
  var userId = localStorage.getItem("id");

  var config = {
    method: "get",
    url: `${baseUrl}users/filterCareGivers/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Filter caregivers", config);

  axios(config)
    .then(function (response) {
      console.log("Filtered Caregivers", response.data.message._id);
      console.log(response.data)
      commit(FILTER_CAREGIVERS_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);
      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(FILTER_CAREGIVERS_FAIL, error.response.data);
      }
    });
},
  },
}
