// Модуль содержит класс User

import {makeAutoObservable} from "mobx";

export interface ModuleInterface{
    name: string,
    words: Array<object>,
    _id: string,
    __v: number
}

class User{
    // логин пользователя
    private _login: string;
    private _modules: Array<ModuleInterface>
    // единственный экземпляр класса User (Singleton)
    private static _instance: User

    // конструктор приватный так как мы используем паттерн Singleton для данного класса
    private constructor() {
        makeAutoObservable(this)
        this._login = ""
        this._modules = []
    }

    // Метод для создания экземпляра данного класса (хранится в _instance) если его еще нет,
    // и возврата единственного экземпляра данного класса (реализация паттерна Singleton)
    public static getInstance(){
        if(User._instance == null){
            User._instance = new User()
        }
        return User._instance
    }

    public get login() {
        return this._login
    }

    public set login(login: string){
        this._login = login
    }

    public set modules(modules: Array<ModuleInterface>){
        this._modules = modules
    }

    public get modules(){
        return this._modules
    }
}

export default User