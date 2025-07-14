export interface RegistrationModel {
    companyName: string;
    inn: string;
    firstName: string;
    name: string;
    patronymic: string;
    email: string;
    phone: string;
    password: string;
    personalDataConsent: boolean;
    infoAdConsent: boolean;
}

export const emptyRegistrationModel: RegistrationModel = {
    companyName: "",
    inn: "",
    firstName: "",
    name: "",
    patronymic: "",
    email: "",
    phone: "",
    password: "",
    personalDataConsent: false,
    infoAdConsent: false,
};