import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {type LoginRequest, type LoginResponse} from "./loginModel.ts";

interface LoginState {
    loginData: LoginResponse | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

}

const initialState: LoginState = {
    loginData: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
}

export const loginUser = createAsyncThunk<LoginResponse, LoginRequest>(
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
            return data;
        } catch (error) {
            // @ts-ignore
            return thunkAPI.rejectWithValue(error.message);
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
                state.loginData = action.payload
                state.isAuthenticated = true
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
                state.isAuthenticated = false
                state.loginData = null
            })

    },
});

export const {setLoginData, clearLoginData, clearError} = loginSlice.actions
export default loginSlice.reducer