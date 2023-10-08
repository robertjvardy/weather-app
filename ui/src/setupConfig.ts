import axios from "axios";

const setupConfig = () => {
  // Axios config
  axios.defaults.baseURL = `http://${import.meta.env.VITE_BACKEND_SERVER}`;
  axios.defaults.params = { key: import.meta.env.VITE_API_KEY };
};

export default setupConfig;
