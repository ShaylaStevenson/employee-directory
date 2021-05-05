import axios from "axios";
// set to return users with US nationality
const BASEURL = "https://randomuser.me/api/?nat=us?results=20";
// use to return a set amount of users, ex 20
//const TWENTY = "?results=20";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};

//// original movie query ////
// const BASEURL = ?
// const API = "&apikey=trilogy"
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
