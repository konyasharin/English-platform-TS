/**
 * Модуль содержит класс Shuffler
 */

/**
 * Класс "перемешиватель" (перемешивание массивов)
 */
class Shuffler{
  /**
   * Метод для получения случайного числа от min до max
   * @param min начальное число диапазона
   * @param max конечное число диапазона
   * @private
   */
  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  /**
   * Метод для перетасовки массива при помощи алгоритма Фишера-Йетса
   * @param array массив, который будет перемешан
   */
  public shuffle<T>(array: T[]){
    let i: number
    let temp: T
    for(i = 0; i < array.length; i++){
      let randomNumber = this.getRandomNumber(0, i + 1)
      temp = array[randomNumber]
      array[randomNumber] = array[i]
      array[i] = temp
    }
    return array
  }
}

export default Shuffler