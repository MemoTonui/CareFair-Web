import axios from "axios";
import router from "/src/router";
const baseUrl = "https://carefair.herokuapp.com/";

/**GET USER"S PAST INTERVIEWS */
export const GET_PAST_INTERVIEWS_REQUEST = "GET_PAST_INTERVIEWS_REQUEST";
export const GET_PAST_INTERVIEWS_SUCCESS = "GET_PAST_INTERVIEWS_SUCCESS";
export const GET_PAST_INTERVIEWS_FAIL = "GET_PAST_INTERVIEWS_FAIL";

/**GET USER"S UPCOMING INTERVIEWS */
export const GET_UPCOMING_INTERVIEWS_REQUEST = "GET_UPCOMING_INTERVIEWS_REQUEST";
export const GET_UPCOMING_INTERVIEWS_SUCCESS = "GET_UPCOMING_INTERVIEWS_SUCCESS";
export const GET_UPCOMING_INTERVIEWS_FAIL = "GET_UPCOMING_INTERVIEWS_FAIL";

/**GET INTERVIEW BY ID */
export const GET_INTERVIEW_BY_ID_REQUEST = "GET_INTERVIEW_BY_ID_REQUEST";
export const GET_INTERVIEW_BY_ID_SUCCESS = "GET_INTERVIEW_BY_ID_SUCCESS";
export const GET_INTERVIEW_BY_ID_FAIL = "GET_INTERVIEW_BY_ID_FAIL";


export default {
  state:()=>({
    loadingInterviews:false,
    errorInterviews:"",
    successInterviews:"",
    interviews:[],
    upcomingInterviews:[],
    interviewDetails:{},
 
  }),
  getters :{
    loadingInterviews: (state) => state.loadingInterviews,
    errorInterviews: (state) => state.errorInterviews,
    successInterviews: (state) => state.successInterviews,
    interviews: (state) => state.interviews,
    upcomingInterviews: (state) => state.upcomingInterviews,
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

      /**GET UPCOMING INTERVIEWS */
      [GET_UPCOMING_INTERVIEWS_REQUEST](state) {
        state.loadingInterviews = true;
        state.errorInterviews = "";
      },
      [GET_UPCOMING_INTERVIEWS_SUCCESS](state, payload) {
        state.loadingInterviews = false;
        state.upcomingInterviews = payload;
        state.successInterviews = payload.status;
      },
      [GET_UPCOMING_INTERVIEWS_FAIL](state, error) {
        state.loadingInterviews = false;
        state.errorInterviews = error;
      },
        /**GET INTERVIEW BY ID*/
        [GET_INTERVIEW_BY_ID_REQUEST](state) {
          state.loadingInterviews = true;
          state.errorInterviews = "";
        },
        [GET_INTERVIEW_BY_ID_SUCCESS](state, payload) {
          state.loadingInterviews = false;
          state.interviewDetails = payload;
          state.successInterviews = payload.status;
        },
        [GET_INTERVIEW_BY_ID_FAIL](state, error) {
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

        //Get Upcoming Interviews
        async getUpcomingInterviews({ commit }, payload) {
          commit(GET_UPCOMING_INTERVIEWS_REQUEST);
          const userId = localStorage.getItem("id");
        
          var config = {
            method: "get",
            url: `${baseUrl}interviews/userInterviews/upcoming/${userId}`,
            headers: {
              "Content-Type": "application/json",
              "x-requested-with": "XMLHttpRequest",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: payload,
          };
          console.log("Get Upcoming Interviews", config);
        
          axios(config)
            .then(function (response) {
              console.log("Upcoming Interviews", response.data);
              commit(GET_UPCOMING_INTERVIEWS_SUCCESS, response.data.message);
            })
            .catch(function (error) {
              console.log(error);
        
              if (
                error.response.status == 401 ||
                error.response.data.message == "Unauthenticated."
              ) {
                router.replace({ name: "LogIn" });
              } else {
                commit(GET_UPCOMING_INTERVIEWS_FAIL, error.response.data);
              }
            });
        },

          //Get Interview By Id
   async getInterviewById({ commit }, payload) {
    commit(GET_INTERVIEW_BY_ID_REQUEST);
    //const jobId = localStorage.getItem("jobId")
    var config = {
      method: "get",
      url: `${baseUrl}interviews/${payload.interviewId}`,
      headers: {
        "Content-Type": "application/json",
        "x-requested-with": "XMLHttpRequest",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: payload,
    };
    console.log("Get Interview By Id", config);
  
    axios(config)
      .then(function (response) {
        console.log("Interview By Id", response.data);
        commit(GET_INTERVIEW_BY_ID_SUCCESS, response.data.message);
      })
      .catch(function (error) {
        console.log(error);
  
        if (
          error.response.status == 401 ||
          error.response.data.message == "Unauthenticated."
        ) {
          router.replace({ name: "LogIn" });
        } else {
          commit(GET_INTERVIEW_BY_ID_FAIL, error.response.data);
        }
      });
  },
  }
}