import axios from "axios";
import router from "/src/router";
const baseUrl = "https://carefair.herokuapp.com/";

/**GET USER'S CALENDAR ITEMS */
export const GET_USERS_CALENDAR_ITEMS_REQUEST = "GET_USERS_CALENDAR_ITEMS_REQUEST";
export const GET_USERS_CALENDAR_ITEMS_SUCCESS = "GET_USERS_CALENDAR_ITEMS_SUCCESS";
export const GET_USERS_CALENDAR_ITEMS_FAIL = "GET_USERS_CALENDAR_ITEMS_FAIL";

/**CREATE USER'S CALENDAR ITEMS */
export const CREATE_USERS_CALENDAR_ITEMS_REQUEST = "CREATE_USERS_CALENDAR_ITEMS_REQUEST";
export const CREATE_USERS_CALENDAR_ITEMS_SUCCESS = "CREATE_USERS_CALENDAR_ITEMS_SUCCESS";
export const CREATE_USERS_CALENDAR_ITEMS_FAIL = "CREATE_USERS_CALENDAR_ITEMS_FAIL";


export default {
  state:()=>({
    loadingCalendarItems:false,
    errorCalendarItems:"",
    successCalendarItems:"",
    calendarItems:[],
    structuredCalendarItems:{},
    items:[]
 
  }),
  getters :{
    loadingCalendarItems: (state) => state.loadingCalendarItems,
    errorCalendarItems: (state) => state.errorCalendarItems,
    successCalendarItems: (state) => state.successCalendarItems,
    calendarItems: (state) => state.calendarItems,
    structuredCalendarItems : (state) => state.structuredCalendarItems,
    items : (state) => state.items

   
  },

  mutations :{
    /**GET USER'S CALENDAR ITEMS */
    [GET_USERS_CALENDAR_ITEMS_REQUEST](state) {
      state.loadingCalendarItems = true;
      state.errorCalendarItems = "";
    },
    [GET_USERS_CALENDAR_ITEMS_SUCCESS](state, payload) {
      state.loadingCalendarItems = false;
      state.calendarItems = payload;
      state.successCalendarItems = payload.status;
    },
    [GET_USERS_CALENDAR_ITEMS_FAIL](state, error) {
      state.loadingCalendarItems = false;
      state.errorCalendarItems = error;
    },

     /**CREATE USER'S CALENDAR ITEMS */
     [CREATE_USERS_CALENDAR_ITEMS_REQUEST](state) {
      state.loadingCalendarItems = true;
      state.errorCalendarItems = "";
    },
    [CREATE_USERS_CALENDAR_ITEMS_SUCCESS](state, payload) {
      state.loadingCalendarItems = false;
      state.successCalendarItems = payload.status;
    },
    [CREATE_USERS_CALENDAR_ITEMS_FAIL](state, error) {
      state.loadingCalendarItems = false;
      state.errorCalendarItems = error;
    },  
  },

  actions:{
        //Get User's Calendar Items
 async getUsersCalendarItems({ commit }, payload) {
  commit(GET_USERS_CALENDAR_ITEMS_REQUEST);
  const userId = localStorage.getItem("id");

  var config = {
    method: "get",
    url: `${baseUrl}calendars/userCalendar/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: payload,
  };
  console.log("Get User's Calendar Items", config);

  axios(config)
    .then(function (response) {
      console.log("Calendar Items", response.data);
      commit(GET_USERS_CALENDAR_ITEMS_SUCCESS, response.data.message);

    })
    .catch(function (error) {
      console.log(error);

      if (
        error.response.status == 401 ||
        error.response.data.message == "Unauthenticated."
      ) {
        router.replace({ name: "LogIn" });
      } else {
        commit(GET_USERS_CALENDAR_ITEMS_FAIL, error.response.data);
      }
    });
},


    //Add Calendar Item
    async addCalendarItem({ commit,dispatch }, payload) {
      commit(CREATE_USERS_CALENDAR_ITEMS_REQUEST);
      var userId = localStorage.getItem("id");
  
      var config = {
        method: "post",
        url: `${baseUrl}calendars`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("add calendar", config);
  
      axios(config)
        .then(function (response) {
          console.log("calendar", response);
          commit(CREATE_USERS_CALENDAR_ITEMS_SUCCESS, response.data.message);
          dispatch("getUsersCalendarItems");

        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) {
           
            router.replace({ name: "LogIn" });
          } else {
            commit(CREATE_USERS_CALENDAR_ITEMS_FAIL, error.response.data);
          }
        });
    },

 
  }
}