import axios from 'axios'

axios.interceptors.request.use(config => {
  return config
}, err => Promise.reject(err))


axios.interceptors.response.use(response => {
  return response.data
}, err => Promise.reject(err))

export default axios
