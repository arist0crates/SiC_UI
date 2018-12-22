export interface Roles {
    customer: boolean;
    contentManager: boolean;
    orderManager: boolean;
    clericalWorker: boolean
}

export class User {
    email: string;
    roles: Roles;

}