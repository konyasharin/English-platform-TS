import {makeAutoObservable} from "mobx";

class User{
    private readonly _login: string;
    private static _instance: User;

    private constructor() {
        makeAutoObservable(this);
        this._login = "1";
    }

    public static getInstance(){
        if(User._instance == null){
            User._instance = new User();
        }
        return User._instance;
    }

    public get login() {
        return this._login;
    }
}

export default User