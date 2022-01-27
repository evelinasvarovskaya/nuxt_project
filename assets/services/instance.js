import axios from 'axios'

export const instance = axios.create({
    baseURL: 'demo-api.vsdev.space/api'
})
