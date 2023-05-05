import axios from "axios";
import router from "/src/router";
const baseUrl = "https://carefair.herokuapp.com/";

/**GET USER"S CARDS */
export const GET_CARD_REQUEST = "GET_CARD_REQUEST";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";
export const GET_CARD_FAIL = "GET_CARD_FAIL";


/**ADD CARD */
export const ADD_CARD_REQUEST = "ADD_CARD_REQUEST";
export const ADD_CARD_SUCCESS = "ADD_CARD_SUCCESS";
export const ADD_CARD_FAIL = "ADD_CARD_FAIL";


export default {
  state:()=>({
    loadingCard:false,
    errorCard:"",
    successCard:"",
    cards:[],
     
  }),
  getters :{
    loadingCard: (state) => state.loadingCard,
    errorCard: (state) => state.errorCard,
    successCard: (state) => state.successCard,
    cards: (state) => state.cards,
   
  },

  mutations :{
    /**GET USER'S CARDS*/
    [GET_CARD_REQUEST](state) {
      state.loadingCard = true;
      state.errorCard = "";
    },
    [GET_CARD_SUCCESS](state, payload) {
      state.loadingCard = false;
      state.cards = payload;
      state.successCard = payload.status;
    },
    [GET_CARD_FAIL](state, error) {
      state.loadingCard = false;
      state.errorCard = error;
    }, 

     /**CREATE USER'S CALENDAR ITEMS */
     [ADD_CARD_REQUEST](state) {
      state.loadingCard = true;
      state.errorCard = "";
    },
    [ADD_CARD_SUCCESS](state, payload) {
      state.loadingCard = false;
      state.cards = payload;
      state.successCard = payload.status;
    },
    [ADD_CARD_FAIL](state, error) {
      state.loadingCard = false;
      state.errorCard = error;
    },  
  },

  actions:{
      //Get Cards
      async getUsersCards({ commit,dispatch }, payload) {
        commit(GET_CARD_REQUEST);
        var userId = localStorage.getItem("id");
    
        var config = {
          method: "get",
          url: `${baseUrl}card/user/${userId}`,
          headers: {
            "Content-Type": "application/json",
            "x-requested-with": "XMLHttpRequest",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          data: payload,
        };
        console.log("get card", config);
    
        axios(config)
          .then(function (response) {
            console.log("card", response);
            commit(GET_CARD_SUCCESS, response.data.message);
  
          })
          .catch(function (error) {
            console.log(error);
            if (
              error.response.status == 401 ||
              error.response.data.message == "Unauthenticated."
            ) {
             
              router.replace({ name: "LogIn" });
            } else {
              commit(GET_CARD_FAIL, error.response.data);
            }
          });
      },
  
    //Add Card
    async addCard({ commit,dispatch }, payload) {
      commit(ADD_CARD_REQUEST);
      var userId = localStorage.getItem("id");
  
      var config = {
        method: "post",
        url: `${baseUrl}card`,
        headers: {
          "Content-Type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: payload,
      };
      console.log("add card", config);
  
      axios(config)
        .then(function (response) {
          console.log("card", response);
          commit(ADD_CARD_SUCCESS, response.data.message);
          dispatch("getUsersCards");

        })
        .catch(function (error) {
          console.log(error);
          if (
            error.response.status == 401 ||
            error.response.data.message == "Unauthenticated."
          ) {
           
            router.replace({ name: "LogIn" });
          } else {
            commit(ADD_CARD_FAIL, error.response.data);
          }
        });
    },

 
  }
}