import {useSelector} from "react-redux";

import {selectError, selectIsLoading, selectRegistrationData} from "../../model/selectors.ts";


export function useRegister() {
    return {
        registrationData: useSelector(selectRegistrationData),
        isLoading: useSelector(selectIsLoading),
        error: useSelector(selectError),
    };
}