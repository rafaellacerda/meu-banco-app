import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

interface ApiResponse<T = any> {
	data: T;
	status: number;
	statusText: string;
	headers: Record<string, string>;
	config: InternalAxiosRequestConfig;
}

export interface Response<T = any> {
	data: T;
	success: boolean;
}

const api = axios.create({
	baseURL: 'http://localhost:3000/',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

api.interceptors.response.use(
	(response: AxiosResponse<ApiResponse>) => response,
	(error: AxiosError) => {
		if (error.response) {
			if (error.response.status === 401) {
				console.error('Não autorizado! Redirecionando para login...');
				localStorage.removeItem('token');
				window.location.href = '/login';
			} else if (error.response.status === 403) {
				console.error('Acesso proibido!');
			} else if (error.response.status >= 500) {
				console.error('Erro no servidor!');
			}
		} else {
			console.error('Erro de conexão com a API');
		}
		return Promise.reject(error);
	},
);

export default api;
export type { ApiResponse };
