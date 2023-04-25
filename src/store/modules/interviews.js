import axios from "axios";
import router from "/src/router";
const baseUrl = "https://carefair.herokuapp.com/";

/**GET USER"S PAST INTERVIEWS */
export const GET_PAST_INTERVIEWS_REQUEST = "GET_ALL_JOBS_REQUEST";
export const GET_PAST_INTERVIEWS_SUCCESS = "GET_ALL_JOBS_SUCCESS";
export const GET_PAST_INTERVIEWS_FAIL = "GET_ALL_JOBS_FAIL";

export default {
  state:()=>({
    loadingInterviews:false,
    errorInterviews:"",
    successInterviews:"",
    interviews:[],
    interviewDetails:{},
 
  }),
  getters :{
    loadingInterviews: (state) => state.loadingInterviews,
    errorInterviews: (state) => state.errorInterviews,
    successInterviews: (state) => state.successInterviews,
    interviews: (state) => state.interviews,
    interviewDetails : (state) => state.interviewDetails,
   
  },

  mutations :{
    /**GET PAST INTERVIEWS */
    [GET_PAST_INTERVIEWS_REQUEST](state) {
      state.loadingInterviews = true;
      state.errorInterviews = "";
    },
    [GET_PAST_INTERVIEWS_SUCCESS](state, payload) {
      state.loadingInterviews = false;
      state.interviews = payload;
      state.successInterviews = payload.status;
    },
    [GET_PAST_INTERVIEWS_FAIL](state, error) {
      state.loadingInterviews = false;
      state.errorInterviews = error;
    },
  },

  actions:{
        //Get Past Interviews
 async getPastInterviews({ commit }, payload) {
  commit(GET_PAST_INTERVIEWS_REQUEST);
  const userId = localStorage.getItem("id");

  var config = {
    method: "get",
    url: `${baseUrl}interviews/userInterviews/past/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Get Past Interviews", config);

  axios(config)
    .then(function (response) {
      console.log("Past Interviews", response.data);
      commit(GET_PAST_INTERVIEWS_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);

      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(GET_PAST_INTERVIEWS_FAIL, error.response.data);
      }
    });
},
  }
}