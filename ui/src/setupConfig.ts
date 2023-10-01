import axios from "axios";

const setupConfig = () => {
  // Axios config
  axios.defaults.baseURL = "https://api.weatherapi.com/v1/";
  axios.defaults.params = { key: import.meta.env.VITE_API_KEY };
};

export default setupConfig;
