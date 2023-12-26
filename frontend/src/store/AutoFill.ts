/**
 * Модуль содержит класс AutoFill
 */

import {makeAutoObservable} from "mobx";

/**
 * Класс варианта для автозаполнения экземпляров класса InputAutoFill
 */
class AutoFill{
    // текст в данном варианте автозаполнения
    private readonly _text: string

    /**
     * @constructor
     * @param {string} text текст в данном варианте автозаполнения
     */
    constructor(text: string) {
        makeAutoObservable(this)
        this._text = text
    }

    /**
     * @return текст в данном варианте автозаполнения
     */
    public get text(){
        return this._text
    }
}

export default AutoFill