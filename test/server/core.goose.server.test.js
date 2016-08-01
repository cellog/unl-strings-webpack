import { expect, sinon } from './assertions.js'
import goose from '../../src/core/goose'
import mongoose from 'mongoose'

describe("core.goose", () => {
  it("should create a mongoose schema for User", () => {
    goose.User.should.be.instanceOf(mongoose.Schema)
  })

  it("should set the url to 'mongodb://localhost/unl'", () => {
    const spy = sinon.spy()
  })
})
