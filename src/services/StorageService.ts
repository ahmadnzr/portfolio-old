export class StorageService {

  setItem<T>(key: string, item: T): void {
    localStorage.setItem(key, JSON.stringify(item))
  }

  getItem<T>(key: string): T | null {
    const data: any = localStorage.getItem(key)
    if (!data) return null

    let obj: T | null

    try {
      obj = <T>JSON.parse(data)
    } catch (error) {
      obj = null
    }

    return obj
  }
}

export const useStorageService = new StorageService