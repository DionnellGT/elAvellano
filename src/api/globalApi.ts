import axios from 'axios'

const globalApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})


export {globalApi}