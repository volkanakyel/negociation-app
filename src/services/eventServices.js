import axios from 'axios'

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '1e8cba1df4964a8fe57ecb6de357abbc'

const apiForecast = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getForecast() {
    return apiForecast.get('', {
      params: {
        q: 'london',
        appid: API_KEY
      }
    })
  }
}
