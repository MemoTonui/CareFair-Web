import axios from "axios";
import router from "/src/router";
const baseUrl = "https://carefair.herokuapp.com/";

/**GET ALL JoBS */
export const GET_ALL_JOBS_REQUEST = "GET_ALL_JOBS_REQUEST";
export const GET_ALL_JOBS_SUCCESS = "GET_ALL_JOBS_SUCCESS";
export const GET_ALL_JOBS_FAIL = "GET_ALL_JOBS_FAIL";

/**GET JOBS BY ID */
export const GET_JOB_BY_ID_REQUEST = "GET_JOB_BY_ID_REQUEST";
export const GET_JOB_BY_ID_SUCCESS = "GET_JOB_BY_ID_SUCCESS";
export const GET_JOB_BY_ID_FAIL = "GET_JOB_BY_ID_FAIL";

/**APPLY FOR JOB */
export const APPLY_JOB_REQUEST = "APPLY_JOB_REQUEST";
export const APPLY_JOB_SUCCESS = "APPLY_JOB_SUCCESS";
export const APPLY_JOB_FAIL = "APPLY_JOB_FAIL";

/**GET JOB OFFERS */
export const JOB_OFFERS_REQUEST = "JOB_OFFERS_REQUEST";
export const JOB_OFFERS_SUCCESS = "JOB_OFFERS_SUCCESS";
export const JOB_OFFERS_FAIL = "JOB_OFFERS_FAIL";

/**GET JOB OFFERS BY ID */
export const JOB_OFFERS_BY_ID_REQUEST = "JOB_OFFERS_BY_ID_REQUEST";
export const JOB_OFFERS_BY_ID_SUCCESS = "JOB_OFFERS_BY_ID_SUCCESS";
export const JOB_OFFERS_BY_ID_FAIL = "JOB_OFFERS_BY_ID_FAIL";

/**GET JOBS IN PROGRESS */
export const GET_JOB_IN_PROGRESS_REQUEST = "GET_JOB_IN_PROGRESS_REQUEST";
export const GET_JOB_IN_PROGRESS_SUCCESS = "GET_JOB_IN_PROGRESS_SUCCESS";
export const GET_JOB_IN_PROGRESS_FAIL = "GET_JOB_IN_PROGRESS_FAIL";

/**GET COMPLETE JOBS */
export const GET_COMPLETE_JOBS_REQUEST = "GET_COMPLETE_JOBS_REQUEST";
export const GET_COMPLETE_JOBS_SUCCESS = "GET_COMPLETE_JOBS_SUCCESS";
export const GET_COMPLETE_JOBS_FAIL = "GET_COMPLETE_JOBS_FAIL";

/**ACCEPT JOB OFFER */
export const ACCEPT_JOB_OFFER_REQUEST = "ACCEPT_JOB_OFFER_REQUEST";
export const ACCEPT_JOB_OFFER_SUCCESS = "ACCEPT_JOB_OFFER_SUCCESS";
export const ACCEPT_JOB_OFFER_FAIL = "ACCEPT_JOB_OFFER_FAIL";

/**DECLINE JOB OFFER */
export const DECLINE_JOB_OFFER_REQUEST = "DECLINE_JOB_OFFER_REQUEST";
export const DECLINE_JOB_OFFER_SUCCESS = "DECLINE_JOB_OFFER_SUCCESS";
export const DECLINE_JOB_OFFER_FAIL = "DECLINE_JOB_OFFER_FAIL";

/**FILTER JOBS */
export const FILTER_JOBS_REQUEST = "FILTER_JOBS_REQUEST";
export const FILTER_JOBS_SUCCESS = "FILTER_JOBS_SUCCESS";
export const FILTER_JOBS_FAIL = "FILTER_JOBS_FAIL";

export default{
  state:()=>({
    loadingJobs:false,
    errorJobs:"",
    successJobs:"",
    jobs:[],
    jobDetails:{},
    jobOffers :[],
    jobOfferDetails:{},
    jobInProgress:[],
    jobsComplete:[]
  }),
  getters :{
    loadingJobs: (state) => state.loadingJobs,
    errorJobs: (state) => state.errorJobs,
    successJobs: (state) => state.successJobs,
    jobs: (state) => state.jobs,
    jobOffers: (state) => state.jobOffers,
    jobDetails : (state) => state.jobDetails,
    jobOfferDetails : (state) => state.jobOfferDetails,
    jobInProgress:(state) => state.jobInProgress,
    jobsComplete:(state) => state.jobsComplete

  },
  mutations:{
    /**GET ALL JOBS */
     [GET_ALL_JOBS_REQUEST](state) {
      state.loadingJobs = true;
      state.errorJobs = "";
    },
    [GET_ALL_JOBS_SUCCESS](state, payload) {
      state.loadingJobs = false;
      state.jobs = payload;
      state.successJobs = payload.status;
    },
    [GET_ALL_JOBS_FAIL](state, error) {
      state.loadingJobs = false;
      state.errorJobs = error;
    },

     /**GET JOBS BY ID */
     [GET_JOB_BY_ID_REQUEST](state) {
      state.loadingJobs = true;
      state.errorJobs = "";
    },
    [GET_JOB_BY_ID_SUCCESS](state, payload) {
      state.loadingJobs = false;
      state.jobDetails = payload;
      state.successJobs = payload.status;
    },
    [GET_JOB_BY_ID_FAIL](state, error) {
      state.loadingJobs = false;
      state.errorJobs = error;
    },

    
     /**APPLY JOB */
     [APPLY_JOB_REQUEST](state) {
      state.loadingJobs = true;
      state.errorJobs = "";
    },
    [APPLY_JOB_SUCCESS](state, payload) {
      state.loadingJobs = false;
      state.jobDetails = payload;
      state.successJobs = payload.status;
    },
    [APPLY_JOB_FAIL](state, error) {
      state.loadingJobs = false;
      state.errorJobs = error;
    },
        
     /**JOB OFFERS */
     [JOB_OFFERS_REQUEST](state) {
      state.loadingJobs = true;
      state.errorJobs = "";
    },
    [JOB_OFFERS_SUCCESS](state, payload) {
      state.loadingJobs = false;
      state.jobOffers = payload;
      state.successJobs = payload.status;
    },
    [JOB_OFFERS_FAIL](state, error) {
      state.loadingJobs = false;
      state.errorJobs = error;
    },
      /**GET JOB OFFERS BY ID */
      [JOB_OFFERS_BY_ID_REQUEST](state) {
        state.loadingJobs = true;
        state.errorJobs = "";
      },
      [JOB_OFFERS_BY_ID_SUCCESS](state, payload) {
        state.loadingJobs = false;
        state.jobOfferDetails = payload;
        state.successJobs = payload.status;
      },
      [JOB_OFFERS_BY_ID_FAIL](state, error) {
        state.loadingJobs = false;
        state.errorJobs = error;
      },

       /**GET JOBS IN PROGRESS */
       [GET_JOB_IN_PROGRESS_REQUEST](state) {
        state.loadingJobs = true;
        state.errorJobs = "";
      },
      [GET_JOB_IN_PROGRESS_SUCCESS](state, payload) {
        state.loadingJobs = false;
        state.jobInProgress  = payload;
        state.successJobs = payload.status;
      },
      [GET_JOB_IN_PROGRESS_FAIL](state, error) {
        state.loadingJobs = false;
        state.errorJobs = error;
      },

      
       /**GET COMPLETE JOBS */
       [GET_COMPLETE_JOBS_REQUEST](state) {
        state.loadingJobs = true;
        state.errorJobs = "";
      },
      [GET_COMPLETE_JOBS_SUCCESS](state, payload) {
        state.loadingJobs = false;
        state.jobsComplete  = payload;
        state.successJobs = payload.status;
      },
      [GET_COMPLETE_JOBS_FAIL](state, error) {
        state.loadingJobs = false;
        state.errorJobs = error;
      },

       /**ACCEPT_JOB_OFFER */
       [ACCEPT_JOB_OFFER_REQUEST](state) {
        state.loadingJobs = true;
        state.errorJobs = "";
      },
      [ACCEPT_JOB_OFFER_SUCCESS](state, payload) {
        state.loadingJobs = false;
        state.successJobs = payload.status;
      },
      [ACCEPT_JOB_OFFER_FAIL](state, error) {
        state.loadingJobs = false;
        state.errorJobs = error;
      },
       /**DECLINE_JOB_OFFER */
       [DECLINE_JOB_OFFER_REQUEST](state) {
        state.loadingJobs = true;
        state.errorJobs = "";
      },
      [DECLINE_JOB_OFFER_SUCCESS](state, payload) {
        state.loadingJobs = false;
        state.successJobs = payload.status;
      },
      [DECLINE_JOB_OFFER_FAIL](state, error) {
        state.loadingJobs = false;
        state.errorJobs = error;
      },

       /**FILTER JOBS */
       [FILTER_JOBS_REQUEST](state) {
        state.loadingJobs = true;
        state.errorJobs = "";
      },
      [FILTER_JOBS_SUCCESS](state, payload) {
        state.loadingJobs = false;
        state.jobs = payload;
        state.successJobs = payload.status;
      },
      [FILTER_JOBS_FAIL](state, error) {
        state.loadingJobs = false;
        state.errorJobs = error;
      },
  },
  actions:{
    //Get All Jobs
 async getAllJobs({ commit }, payload) {
  commit(GET_ALL_JOBS_REQUEST);

  var config = {
    method: "get",
    url: `${baseUrl}jobs`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Get All Jobs", config);

  axios(config)
    .then(function (response) {
      console.log("Get All Jobs", response.data);
      commit(GET_ALL_JOBS_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);

      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(GET_ALL_JOBS_FAIL, error.response.data);
      }
    });
},
   //Get Job By Id
   async getJobById({ commit }, payload) {
    commit(GET_JOB_BY_ID_REQUEST);
    //const jobId = localStorage.getItem("jobId")
    var config = {
      method: "get",
      url: `${baseUrl}jobs/${payload.jobId}`,
      headers: {
        "Content-Type": "application/json",
        "x-requested-with": "XMLHttpRequest",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: payload,
    };
    console.log("Get Job By Id", config);
  
    axios(config)
      .then(function (response) {
        console.log("Get Job By Id", response.data);
        commit(GET_JOB_BY_ID_SUCCESS, response.data.message);
      })
      .catch(function (error) {
        console.log(error);
  
        if (
          error.response.status == 401 ||
          error.response.data.message == "Unauthenticated."
        ) {
          router.replace({ name: "LogIn" });
        } else {
          commit(GET_JOB_BY_ID_FAIL, error.response.data);
        }
      });
  },

  

     //Apply for Job
     async applyForJob({ commit }, payload) {
      commit(APPLY_JOB_REQUEST);
      var userId = localStorage.getItem("id");
  
      var config = {
        method: "put",
        url: `${baseUrl}jobs/applyToJob/${payload.jobId}`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("apply for job", config);
  
      axios(config)
        .then(function (response) {
          console.log("apply to job", response);
          commit(APPLY_JOB_SUCCESS, response.data.message);
        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) {
           
            router.replace({ name: "LogIn" });
          } else {
            commit(APPLY_JOB_FAIL, error.response.data);
          }
        });
    },

       //Get User's Job Offers
 async getJobOffers({ commit }, payload) {
  commit(JOB_OFFERS_REQUEST);

  const userId = localStorage.getItem("id");

  var config = {
    method: "get",
    url: `${baseUrl}offers/userOffers/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Job Offers", config);

  axios(config)
    .then(function (response) {
      console.log("Job Offers", response.data);
      commit(JOB_OFFERS_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);

      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(JOB_OFFERS_FAIL, error.response.data);
      }
    });
},

    //Get Job By Id
    async getJobOfferById({ commit }, payload) {
      commit(JOB_OFFERS_BY_ID_REQUEST);
      //const jobId = localStorage.getItem("jobId")
      var config = {
        method: "get",
        url: `${baseUrl}offers/${payload.jobId}`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("Get offer By Id", config);
    
      axios(config)
        .then(function (response) {
          console.log("Get offer By Id", response.data);
          commit(JOB_OFFERS_BY_ID_SUCCESS, response.data.message);
        })
        .catch(function (error) {
          console.log(error);
    
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) {
            router.replace({ name: "LogIn" });
          } else {
            commit(JOB_OFFERS_BY_ID_FAIL, error.response.data);
          }
        });
    },
  

          //Get Jobs in Progress
 async getJobsInProgress({ commit }, payload) {
  commit(GET_JOB_IN_PROGRESS_REQUEST);

  const userId = localStorage.getItem("id");

  var config = {
    method: "get",
    url: `${baseUrl}engagements/userEngagement/open/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Job In Progress", config);

  axios(config)
    .then(function (response) {
      console.log("Jobs In  Progress", response.data);
      commit(GET_JOB_IN_PROGRESS_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);

      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(GET_JOB_IN_PROGRESS_FAIL, error.response.data);
      }
    });
},

         //Get Complete Jobs
         async getCompleteJobs({ commit }, payload) {
          commit(GET_COMPLETE_JOBS_REQUEST);
        
          const userId = localStorage.getItem("id");
        
          var config = {
            method: "get",
            url: `${baseUrl}engagements/userEngagement/completed/${userId}`,
            headers: {
              "Content-Type": "application/json",
              "x-requested-with": "XMLHttpRequest",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: payload,
          };
          console.log("Complete Jobs", config);
        
          axios(config)
            .then(function (response) {
              console.log("Complete Jobs", response.data);
              commit(GET_COMPLETE_JOBS_SUCCESS, response.data.message);
            })
            .catch(function (error) {
              console.log(error);
        
              if (
                error.response.status == 401 ||
                error.response.data.message == "Unauthenticated."
              ) {
                router.replace({ name: "LogIn" });
              } else {
                commit(GET_COMPLETE_JOBS_FAIL, error.response.data);
              }
            });
        },

              //Accept Job Offer
              async acceptJobOffer({ commit }, payload) {
                commit(ACCEPT_JOB_OFFER_REQUEST);
              
                const userId = localStorage.getItem("id");
              
                var config = {
                  method: "put",
                  url: `${baseUrl}offers/acceptOffer/${payload.offerId}`,
                  headers: {
                    "Content-Type": "application/json",
                    "x-requested-with": "XMLHttpRequest",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                  data: payload,
                };
                console.log("Accept Offer", config);
              
                axios(config)
                  .then(function (response) {
                    console.log("Accepted Offer", response.data);
                    commit(ACCEPT_JOB_OFFER_SUCCESS, response.data.message);
                  })
                  .catch(function (error) {
                    console.log(error);
              
                    if (
                      error.response.status == 401 ||
                      error.response.data.message == "Unauthenticated."
                    ) {
                      router.replace({ name: "LogIn" });
                    } else {
                      commit(ACCEPT_JOB_OFFER_FAIL, error.response.data);
                    }
                  });
              },

      
//Filter Caregivers
async filterJobs({ commit }, payload) {
  commit(FILTER_JOBS_REQUEST);
  var userId = localStorage.getItem("id");

  var config = {
    method: "get",
    url: `${baseUrl}jobs/filterJobs/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Filter jobs", config);

  axios(config)
    .then(function (response) {
      console.log("Filtered Jobs", response.data.message._id);
      console.log(response.data)
      commit(FILTER_JOBS_SUCCESS, response.data.message);
    })
    .catch(function (error) {
      console.log(error);
      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(FILTER_JOBS_FAIL, error.response.data);
      }
    });
},
              

  },
}
