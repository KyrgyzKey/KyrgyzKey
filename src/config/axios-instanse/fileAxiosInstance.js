import axios from 'axios'
import { store } from '../../redux'
import { postFiles } from '../../redux/question/question.thunk'

const BASE_URL = 'http://3.75.136.118/'

export const fileAxiosInstanse = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'multipart/form-data',
   },
})

fileAxiosInstanse.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      const { token } = store.getState().auth
      if (token) {
         configUpdate.headers.Authorization = `Bearer ${token}`
      }

      return configUpdate
   },
   (error) => {
      return Promise.reject(error)
   }
)

fileAxiosInstanse.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response?.status === 401) {
         store.dispatch(postFiles())
         throw new Error('401 unauthotized')
      }
      return Promise.reject(error)
   }
)
