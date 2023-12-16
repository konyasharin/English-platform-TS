import Training from "./Training";
import {makeObservable, override} from "mobx";
import TrainingsStore from "./TrainingsStore";
import ModulesStore from "./ModulesStore";
import Queue from "./Queue";
import Word from "./Word";

class LearnTraining extends Training{
  public constructor(name: string) {
    super(name);
    makeObservable<this, "_countOfWord" | "_maxCountOfWord">(this, {
      _countOfWord: override,
      _maxCountOfWord: override,
      incrementCountOfWord: override,
      decrementCountOfWord: override,
      maxCountOfWord: override,
      countOfWord: override
    })
  }

  public createTrainingQueue(){
    const queue = new Queue<Word>()
    ModulesStore.getInstance().getModule(ModulesStore.getInstance().currentModule)!.words.forEach(word => {
      queue.enqueue(word)
    })
  }
}

export default LearnTraining