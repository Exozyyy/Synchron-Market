import {emptyRegistrationModel, type RegistrationModel} from "./registerModel.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface RegisterState {
    registrationData: RegistrationModel;
    isLoading: boolean;
    error: string | null;
}

const initialState: RegisterState = {
    registrationData: emptyRegistrationModel,
    isLoading: false,
    error: null,
}
export const registerUser = createAsyncThunk<RegistrationModel, RegistrationModel>(
    "register/registerUser",
    async (registrationData, thunkAPI) => {
        try {
            const response = await fetch(`/api/Auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationData)
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            const data: RegistrationModel = await response.json();
            return data;
        } catch (error: unknown) {
            let message = "Произошла ошибка";
            if (error instanceof Error) {
                message = error.message;
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
)
export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setRegistrationData: (
            state,
            action: PayloadAction<{ field: keyof RegistrationModel; value: string | boolean }>
        ) => {
            state.registrationData[action.payload.field] = action.payload.value as never;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.registrationData = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });

    }
})
export const {setRegistrationData} = registerSlice.actions;
export const registerReducer = registerSlice.reducer;
