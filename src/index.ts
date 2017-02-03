import { Collection } from './Collection'

const m = {
  collection: name => new Collection(name),
  exec: (connection, query) => query.exec(connection),
}

export default m
