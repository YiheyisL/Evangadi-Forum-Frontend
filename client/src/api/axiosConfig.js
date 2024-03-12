import axios from "axios";
// const axiosBase = axios.create({ baseURL: "http://localhost:5100/api" });

const axiosBase = axios.create({
  baseURL: "https://app.netlify.com/sites/clinquant-crostata-bab01b/deploys/",
});
export default axiosBase;
