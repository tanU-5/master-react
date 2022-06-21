import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://6781-2405-201-300b-e80a-cde9-8f5-dcb-3575.ngrok.io/api",
});

httpRequest.interceptors.request.use((config) => { 
  config.headers["Authorization"] = 'Bearer ' + window.localStorage.getItem('access_token')
  return config;
});
// // httpRequest.interceptors.response.use(
// //   (response) => response,
// //     async (error) => {
// //     //extracting response and config objects
// //     const { response, config } = error;
// //     //checking if error is Aunothorized errors
// //     if (response.status === 401) {
// //       window.location.href = "/login";
// //     }
// //     return error;
// //   }
// );
export default httpRequest;
