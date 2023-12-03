import {makeAutoObservable} from "mobx";

class User{
    private _login: string;
    private static _instance: User;

    private constructor() {
        makeAutoObservable(this);
        this._login = "";
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

    public set login(login: string){
        this._login = login
    }
}

export default User