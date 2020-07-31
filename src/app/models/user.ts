export interface User {
    name: string;
    surname: string;
    address: string;
    numPol: string;
    email: string;
    phone: string;
}

export interface AuthorizationUserInfo {
    user: User;
    token: string;
    urlCallback: string;
    state: number;
}
