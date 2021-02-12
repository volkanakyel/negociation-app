import axios from "axios";

const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?q=london&appid=1e8cba1df4964a8fe57ecb6de357abbc";

const apiForecast = axios.create({
  baseURL: apiURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getForecast() {
    return apiForecast.get();
  },
};
