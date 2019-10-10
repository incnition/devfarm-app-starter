/* eslint-env jest */
import React from 'react'
import app from '../../server'
import supertest from 'supertest'

describe('Integration: With React Testing Library', () => {
  let server
  beforeAll(async () => {
    server = await app
  })
  afterAll(() => server.close())
  it('Shows "Welcome to Next!"', done => {
    console.warn("Server:", server)
    done()
  })
})
