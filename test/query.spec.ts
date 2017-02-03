import m from '../src'
import { MongoClient, Db } from 'mongodb'

const url = 'mongodb://localhost:37017/test'

let db: Db

beforeAll(async () => {
  db = await MongoClient.connect(url)
})

afterAll(async () => {
  await db.close()
})

describe('collection', () => {
  it('should return items in collection', async () => {
    await db.collection('users').drop()
    await db.collection('users').insert({ name: 'joe' })

    const Users = () => m.collection('users')
    
    const users = await m.exec(db, Users())
    expect(users[0].name).toBe('joe')
  })
})
