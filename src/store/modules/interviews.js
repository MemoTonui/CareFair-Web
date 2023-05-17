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

/**CREATE INTERVIEW */
export const CREATE_INTERVIEW_REQUEST = "CREATE_INTERVIEW_REQUEST";
export const CREATE_INTERVIEW_SUCCESS = "CREATE_INTERVIEW_SUCCESS";
export const CREATE_INTERVIEW_FAIL = "CREATE_INTERVIEW_FAIL";

/**GET INTERVIEWS */
export const GET_INTERVIEWS_REQUEST = "GET_INTERVIEWS_REQUEST";
export const GET_INTERVIEWS_SUCCESS = "GET_INTERVIEWS_SUCCESS";
export const GET_INTERVIEWS_FAIL = "GET_INTERVIEWS_FAIL";

/**UPDATE INTERVIEWS */
export const UPDATE_INTERVIEW_REQUEST = "UPDATE_INTERVIEW_REQUEST";
export const UPDATE_INTERVIEW_SUCCESS = "UPDATE_INTERVIEW_SUCCESS";
export const UPDATE_INTERVIEW_FAIL = "UPDATE_INTERVIEW_FAIL";


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

         /**CREATE INTERVIEW*/
         [CREATE_INTERVIEW_REQUEST](state) {
          state.loadingInterviews = true;
          state.errorInterviews = "";
        },
        [CREATE_INTERVIEW_SUCCESS](state, payload) {
          state.loadingInterviews = false;
          
          state.successInterviews = payload.status;
        },
        [CREATE_INTERVIEW_FAIL](state, error) {
          state.loadingInterviews = false;
          state.errorInterviews = error;
        },

         /**UPDATE INTERVIEW*/
         [UPDATE_INTERVIEW_REQUEST](state) {
          state.loadingInterviews = true;
          state.errorInterviews = "";
        },
        [UPDATE_INTERVIEW_SUCCESS](state, payload) {
          state.loadingInterviews = false;
          state.interviewDetails = payload;
          state.successInterviews = payload.status;
        },
        [UPDATE_INTERVIEW_FAIL](state, error) {
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
    url: `${baseUrl}interviews/userInterviews/${userId}`,
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
    const jobId = localStorage.getItem("jobId")
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

           //Create Interview
           async createInterview({ commit }, payload) {
            commit(CREATE_INTERVIEW_REQUEST);
            //const jobId = localStorage.getItem("jobId")
            var config = {
              method: "post",
              url: `${baseUrl}interviews`,
              headers: {
                "Content-Type": "application/json",
                "x-requested-with": "XMLHttpRequest",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: payload,
            };
            console.log("Create Interview", config);
          
            axios(config)
              .then(function (response) {
                console.log("Interview", response.data);
                commit(CREATE_INTERVIEW_SUCCESS, response.data.message);
              })
              .catch(function (error) {
                console.log(error);
          
                if (
                  error.response.status == 401 ||
                  error.response.data.message == "Unauthenticated."
                ) {
                  router.replace({ name: "LogIn" });
                } else {
                  commit(CREATE_INTERVIEW_FAIL, error.response.data);
                }
              });
          },

 //Update Interview
 async updateInterview({ commit }, payload) {
  commit(UPDATE_INTERVIEW_REQUEST);
  //const jobId = localStorage.getItem("jobId")
  var config = {
    method: "put",
    url: `${baseUrl}interviews/${payload.interviewId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Update Interview", config);

  axios(config)
    .then(function (response) {
      console.log("Interview", response.data);
      commit(UPDATE_INTERVIEW_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);

      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(UPDATE_INTERVIEW_FAIL, error.response.data);
      }
    });
},

  }
}