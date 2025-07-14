import type {RootState} from "../../../../app/providers/store/store.ts";

export const selectRegistrationData = (state: RootState) =>
    state.register.registrationData;

export const selectIsLoading = (state: RootState) =>
    state.register.isLoading;

export const selectError = (state: RootState) =>
    state.register.error;