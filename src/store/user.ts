// Модуль содержит класс User

import {makeAutoObservable} from "mobx";

class User{
    // логин пользователя
    private _login: string;
    // единственный экземпляр класса User (Singleton)
    private static _instance: User;

    // конструктор приватный так как мы используем паттерн Singleton для данного класса
    private constructor() {
        makeAutoObservable(this);
        this._login = "";
    }

    // Метод для создания экземпляра данного класса (хранится в _instance) если его еще нет,
    // и возврата единственного экземпляра данного класса (реализация паттерна Singleton)
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