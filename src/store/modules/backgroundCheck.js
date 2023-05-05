import axios from "axios";
import router from "/src/router";
const baseUrl = "https://carefair.herokuapp.com/";

/**CREATE BACKGROUND CHECK */
export const CREATE_BACKGROUND_CHECK_REQUEST = "CREATE_BACKGROUND_CHECK_REQUEST";
export const CREATE_BACKGROUND_CHECK_SUCCESS = "CREATE_BACKGROUND_CHECK_SUCCESS";
export const CREATE_BACKGROUND_CHECK_FAIL = "CREATE_BACKGROUND_CHECK_FAIL";

export default {
  state:()=>({
    loadingCheck:false,
    errorCheck:"",
    successCheck:"",
    backgroundCheck:{},
     
  }),
  getters :{
    loadingCheck: (state) => state.loadingCheck,
    errorCheck: (state) => state.errorCheck,
    successCheck: (state) => state.successCheck,
    backgroundCheck: (state) => state.backgroundCheck,
   
  },
 
  mutations :{
    /**CREATE_BACKGROUND_CHECK*/
    [CREATE_BACKGROUND_CHECK_REQUEST](state) {
      state.loadingCheck = true;
      state.errorCheck = "";
    },
    [CREATE_BACKGROUND_CHECK_SUCCESS](state, payload) {
      state.loadingCheck = false;
      state.backgroundCheck = payload;
      state.successCheck = payload.status;
    },
    [CREATE_BACKGROUND_CHECK_FAIL](state, error) {
      state.loadingCheck = false;
      state.errorCheck = error;
    }, 

   
  },

  actions:{
      //Create Background Check
      async createBackgroundCheck({ commit,dispatch }, payload) {
        commit(CREATE_BACKGROUND_CHECK_REQUEST);
        var userId = localStorage.getItem("id");
    
        var config = {
          method: "get",
          url: `${baseUrl}stripe/checkout`,
          headers: {
            "Content-Type": "application/json",
            "x-requested-with": "XMLHttpRequest",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          data: payload,
        };
        console.log("Request Background Check", config);
    
        axios(config)
          .then(function (response) {
            console.log("Background Check", response);
            commit(CREATE_BACKGROUND_CHECK_SUCCESS, response.data.message);
            window.location.href = response.data.message.url
          })
          .catch(function (error) {
            console.log(error);
            if (
              error.response.status == 401 ||
              error.response.data.message == "Unauthenticated."
            ) {
             
              router.replace({ name: "LogIn" });
            } else {
              commit(CREATE_BACKGROUND_CHECK_FAIL, error.response.data);
            }
          });
      },
  
   
  }
}