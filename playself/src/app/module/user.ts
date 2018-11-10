export class User{
    id:string;
    password:string;
    userGID: number;
    preference?: any[];
    tags?: string[];
    email:string;
    usedTag?: string[];
    following?: number[];
}