import axios from "axios";

export const axiosInstance = axios.create({
  timeout: 5 * 1000, // 5 seconds
});
