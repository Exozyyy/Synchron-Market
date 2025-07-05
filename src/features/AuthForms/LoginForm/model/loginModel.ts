//для формы
export interface LoginRequest {
    login: string;
    password: string;
}

//для слайса
export interface LoginResponse {
    "accessToken": "string",
    "refreshToken": "string"
}