
class Word{
  private _word: string
  private _translates: Array<string>

  public constructor(word: string, translates: Array<string>) {
    this._word = word
    this._translates = translates
  }
}

export default Word