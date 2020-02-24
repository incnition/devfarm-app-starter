/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect'
import app from '../../server'
import fetch from 'cross-fetch'
import { getByText } from '@testing-library/dom'
import { JSDOM } from 'jsdom'

const fetchBody = url =>
  new Promise((resolve, reject) => {
    fetch(url).then(async response => {
      if (response.status !== 200) {
        reject()
      }
      const body = await response.text()
      const { document } = new JSDOM(body).window
      resolve(document)
    })
  })

let server
beforeAll(async () => {
  server = await app
})

it('Shows "Welcome to Next.js!"', async done => {
  const document = await fetchBody('http://localhost:3001/')
  expect(getByText(document, 'Welcome to Next.js!')).toBeTruthy()
  done()
})

afterAll(done => {
  server.close()
  done()
})
