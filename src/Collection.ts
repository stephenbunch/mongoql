export class Collection {
  name: string

  constructor(name: string) {
    this.name = name
  }

  exec(db) {
    return db.collection(this.name).find().toArray()
  }
}
