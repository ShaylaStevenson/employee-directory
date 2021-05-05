import axios from "axios";
// set to return users with US nationality
const BASEURL = "https://randomuser.me/api/?nat=us";
// use to return a set amount of users, ex 20
const TWENTY = "&results=20"


export default {
  search: function() {
    return axios.get(BASEURL + TWENTY);
  }
};