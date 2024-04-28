import axios from 'axios'
// Api總覽
// https://docs.google.com/spreadsheets/d/1X53ux1KMMFgvcbcnhMPAJIBkDcnJm-xJBZHz_cKRGUs/edit?hl=zh-tw#gid=0

const api = axios.create({
  baseURL: 'https://rmeeting.datacom.com.tw',
  timeout: 720 * 1000
})



api.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem('token')
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.clear()
      router.replace('/')
    }

    return Promise.reject(error.response)
  }
)

export const ApiPostLogin = (body) => api.post(`/Auth/Login`, body)
export const ApiGetCaptcha = () => api.get(`/Auth/GetCaptcha`)
export const ApiGetPing = () => api.get(`/Auth/Ping`)


export const ApiGetRescueSheetCount = () => api.get(`/RescueSheet/RescueSheetCount`)
export const ApiGetAppList = () => api.get(`/RescueSheet/AppList`)

export const ApiGetIntoHospitalName = () =>
  api.get(`/RescueHospital/SelectNoList?isTransferOut=false`)
export const ApiGetOutHospitalName = () =>
  api.get(`/RescueHospital/SelectNoList?isTransferOut=true`)
