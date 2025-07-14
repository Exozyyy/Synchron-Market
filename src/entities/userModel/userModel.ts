export interface UserProfile {
    companyName: string;
    inn: string;
    firstName: string;
    name: string;
    patronymic: string;
    email: string;
    confirmEmail: boolean;
    phone: string;
    confirmPhone: boolean;
    imgUrl: string | null;
    personalDataConsent: boolean;
    infoAdConsent: boolean;
    isModerated: boolean;
    createdDate: string;
    updatedDate: string | null;
    roleName: string;
}
