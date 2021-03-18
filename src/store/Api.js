import axios from "axios";
const getHttpHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
const getConfig = () => ({ headers: getHttpHeaders() });
const baseUrl = `https://facedtrial-default-rtdb.firebaseio.com/`;
class API {
  static getProjects() {
    return axios.get(`${baseUrl}/projects.json`, getConfig());
  }
  static createProject(id) {
    return axios.post(`${baseUrl}/projects/${id}`, getConfig());
  }
}
export default API;
