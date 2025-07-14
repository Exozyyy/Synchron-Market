import {createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {UserProfile} from './userModel';

interface UserState {
    userProfile: UserProfile | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    userProfile: null,
    isLoading: false,
    error: null,
};

export const fetchUserProfile = createAsyncThunk<
    UserProfile,
    string,
    { rejectValue: string }
>(
    'user/fetchUserProfile',
    async (userId, thunkAPI) => {
        try {
            const response = await fetch(`/api/users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }
            const data: UserProfile = await response.json();
            return data;
        } catch (error: unknown) {
            let message = "Ошибка";
            if (error instanceof Error) {
                message = error.message;
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUserProfile: (state) => {
            state.userProfile = null;
            state.isLoading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
                state.userProfile = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? "Неизвестная ошибка";
            });
    },
});

export const {clearUserProfile} = userSlice.actions;
export default userSlice.reducer;
