import Training from "./Training";

export enum TrainingNames{
  LEARN = "LEARN"
}

class TrainingsStore{
  private readonly _trainings: Array<Training>
  private static _instance: TrainingsStore

  private constructor() {
    this._trainings = []
  }

  public static getInstance(){
    if(this._instance == null){
      this._instance = new TrainingsStore()
    }
    return this._instance
  }

  public addTraining(training: Training){
    this._trainings.push(training)
    return this._trainings[this._trainings.length - 1]
  }

  public get trainings(){
    return this._trainings
  }

  public getTraining(trainingName: string){
    let i: number
    for(i = 0; i < this._trainings.length; i++){
      if(this._trainings[i].trainingName === trainingName){
        return this._trainings[i]
      }
    }
  }
}

export default TrainingsStore