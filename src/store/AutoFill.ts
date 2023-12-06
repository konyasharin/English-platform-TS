import {makeAutoObservable} from "mobx";

class AutoFill{
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