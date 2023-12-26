/**
 * Модуль содержит класс Queue
 */

interface QueueInterface<T>{
  enqueue(item: T): void,
  dequeue(): T | undefined,
  size(): number
}

/**
 * Класс очереди
 */
class Queue<T> implements QueueInterface<T>{
  // хранилище (текущая очередь)
  private _storage: Array<T>

  public constructor() {
    this._storage = []
  }

  /**
   * Добавление элемента в очередь
   * @param item элемент для добавления в очередь
   */
  enqueue(item: T) {
    this._storage.push(item)
  }

  /**
   * Удаление элемента из очереди и его возврат
   * @return элемент, который мы достали из очереди
   */
  dequeue(): T | undefined {
    return this._storage.shift()
  }

  /**
   * @return Размер очереди
   */
  size(): number {
    return this._storage.length
  }
}

export default Queue