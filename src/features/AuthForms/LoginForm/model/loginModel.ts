export interface LoginRequest {
    login: string;
    password: string;
}

export interface LoginResponse {
    "accessToken": "string",
    "refreshToken": "string"
}

export interface JwtPayload {
    "Id": string;
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
    "exp": number;
}