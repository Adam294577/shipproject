import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rmeeting.datacom.com.tw/',
  timeout: 720 * 1000
})
export const ApiPostLogin = (body) => api.post(`/Auth/Login`, body)
export const ApiGetCaptcha = () => api.get(`/Auth/GetCaptcha`)
export const ApiGetPing = () => api.get(`/Auth/Ping`)
