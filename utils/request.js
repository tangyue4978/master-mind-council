const BASE_URL = 'http://114.116.211.121:10020' // 登录

axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 10000
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        const res = response.data,
        { code, msg, data } = res

        if (code === 200) { // get 200 post 201 delete 204
            return res
        } else {
            return Promise.reject(new Error(msg || 'Error'))
        }
    },
    error => {
        let status = error.response.status

        return Promise.reject(error)
    }
)
