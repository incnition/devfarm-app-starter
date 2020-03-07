import { app, clean } from './utils'

let server
beforeAll(async () => {
  server = await app
})

afterAll(done => {
  server.close()
  done()
})

beforeEach(async () => {
  await clean()
})

