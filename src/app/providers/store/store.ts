import {configureStore} from '@reduxjs/toolkit';
import {loginSlice} from '../../../features/AuthForms/LoginForm/model/loginSlice.ts';
import {registerSlice} from "../../../features/AuthForms/RegisterForm/model/registerSlice.ts";
import {userSlice} from "../../../entities/userModel/userSlice.ts";

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        register: registerSlice.reducer,
        user: userSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
