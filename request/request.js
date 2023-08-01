import axios from 'axios'
// 小程序Axios适配器
import mpAdapter from 'axios-miniprogram-adapter'

axios.defaults.adapter = mpAdapter

// 1.创建axios实例
const service = axios.create({
	baseURL: 'http://127.0.0.1:8888',
	timeout: 3 * 1000
})

// 2.请求拦截器
service.interceptors.request.use(config => {
	// 发送请求前的处理 (数据转化、配置请求头、设置token等)
	config.data = JSON.stringify(config.data)
	config.headers = {
		'Content-Type': 'application/json'
	}
	const token = uni.getStorageSync('wx_token')
	if (token) {
		config.headers.token = token
	}
	return config
}, error => {
	Promise.reject(error)
})

// 3.响应拦截器
service.interceptors.response.use(response => {
	return response
}, error => {
	if (error && error.response) {
		// 1.根据响应码具体处理
		switch (error.response.status) {
			case 400:
				error.message = '错误请求'
				break;
			case 401:
				error.message = '未授权，请重新登录'
				break;
			case 403:
				error.message = '拒绝访问'
				break;
			case 404:
				error.message = '请求错误，未找到该资源'
				window.location.href = "/NotFound"
				break;
			case 405:
				error.message = '请求方法未允许'
				break;
			case 408:
				error.message = '请求超时'
				break;
			case 500:
				error.message = '服务器端出错'
				break;
			case 501:
				error.message = '网络未实现'
				break;
			case 502:
				error.message = '网络错误'
				break;
			case 503:
				error.message = '服务不可用'
				break;
			case 504:
				error.message = '网络超时'
				break;
			case 505:
				error.message = 'http版本不支持该请求'
				break;
			default:
				error.message = `连接错误${error.response.status}`
		}
	} else {
		// 超时处理
		if (JSON.stringify(error).includes('timeout')) {
			error.message = '服务器响应超时，请刷新当前页'
		} else{
			error.message = '连接服务器失败'
		}
	}
	uni.showToast({
		title: error.message,
		position: 'center',
		duration: 2000
	})
	return Promise.reject(error)
})
// 4.导出文件
export default service