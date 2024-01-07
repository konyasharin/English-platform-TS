/**
 * Модуль содержит класс User
 */

import {makeAutoObservable} from "mobx";

/**
 * Класс пользователя
 */
class User{
    // логин пользователя
    private _login: string;
    // единственный экземпляр класса User (Singleton)
    private static _instance: User
    // показывает загружаются ли сейчас данные о пользователя
    public isLoading: boolean

    // конструктор приватный так как мы используем паттерн Singleton для данного класса
    private constructor() {
        makeAutoObservable(this)
        this._login = ""
        this.isLoading = true // загружаются данные с запуска приложения
    }

    /**
     * Метод для получения единственного экземпляра класса (Singleton)
     */
    public static getInstance(){
        if(User._instance == null){
            User._instance = new User()
        }
        return User._instance
    }

    /**
     * @return логин пользователя
     */
    public get login() {
        return this._login
    }

    /**
     * сеттер для логина
     * @param login логин пользователя
     */
    public set login(login: string){
        this._login = login
    }
}

export default User