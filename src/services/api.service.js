import axios from 'axios';
// import store from "@/store";
export default () => {
  const Mothership = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return Mothership;
};
