import axios from 'axios'

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_API_KEY,
    },
})

// FOCUS HERE
instance.interceptors.response.use((resp) => resp, async (err) => {
    const origReqConfig = err.config

    if(err.response.status >= 500) {
        console.log("IN_FIRST")
        return 777
    }

    if(err.response.status === 401 && origReqConfig.headers.hasOwnProperty('Authorization')) {
        console.log("IN_SECOND")
        return 401
    }
    
    return Promise.reject(err)
})

export default instance