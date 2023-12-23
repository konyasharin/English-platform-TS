// Модуль содержит класс AutoFill (вариант для автозаполнения экземпляров класса InputAutoFill)

import {makeAutoObservable} from "mobx";

class AutoFill{
    // текст в варианте для автозаполнения
    private readonly _text: string
    constructor(text: string) {
        makeAutoObservable(this)
        this._text = text
    }

    public get text(){
        return this._text
    }
}

export default AutoFill