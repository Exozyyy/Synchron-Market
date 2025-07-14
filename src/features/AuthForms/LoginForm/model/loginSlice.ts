import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {type JwtPayload, type LoginRequest, type LoginResponse} from "./loginModel.ts";
import {jwtDecode} from "jwt-decode";
import {fetchUserProfile} from "../../../../entities/userModel/userSlice.ts";

interface LoginState {
    loginData: LoginResponse | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    userId?: string | null;

}

const initialState: LoginState = {
    loginData: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    userId: null,
}


export const loginUser = createAsyncThunk<{ data: LoginResponse; userId: string }, LoginRequest>(
    "login/loginUser",
    async (credentials, thunkAPI) => {
        try {
            const response = await fetch(`/api/Auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data: LoginResponse = await response.json();
            const decoded: JwtPayload = jwtDecode(data.accessToken);
            const userId = decoded.Id;
            thunkAPI.dispatch(fetchUserProfile(userId));
            return {data, userId};
        } catch (error: unknown) {
            let message = "Произошла ошибка";
            if (error instanceof Error) {
                message = error.message;
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
)


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginData: (state, action: PayloadAction<LoginResponse>) => {
            state.loginData = action.payload
            state.isAuthenticated = true
            state.error = null
        },
        clearLoginData: (state) => {
            state.loginData = null
            state.isAuthenticated = false
            state.error = null
            state.userId = null
        },
        clearError: (state) => {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.loginData = action.payload.data
                state.isAuthenticated = true
                state.userId = action.payload.userId
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
                state.isAuthenticated = false
                state.loginData = null
                state.userId = null
            })

    },
});

export const {setLoginData, clearLoginData, clearError} = loginSlice.actions
export default loginSlice.reducer