
interface QueueInterface<T>{
  enqueue(item: T): void,
  dequeue(): T | undefined,
  size(): number
}
class Queue<T> implements QueueInterface<T>{
  private _storage: Array<T>

  public constructor() {
    this._storage = []
  }

  // Добавление элемента в очередь
  enqueue(item: T) {
    this._storage.push(item)
  }

  // Удаление элемента из очереди и его возврат
  dequeue(): T | undefined {
    return this._storage.shift()
  }

  size(): number {
    return this._storage.length
  }
}

export default Queue