import assertions from './assertions.js'
import goose from '../../src/core/goose'
import mongoose from 'mongoose'
const sinon = assertions.sinon
const expect = assertions.expect

describe("core.goose", () => {
  it("should create a mongoose schema for User", () => {
    goose.User.should.be.instanceOf(mongoose.Schema)
  })

  it("should set the url to 'mongodb://localhost/unl'", () => {
    const spy = { connect: sinon.spy() }
    const t = new goose('foo://bar', spy)

    expect(t).instanceof(goose)
    expect(spy.connect).calledWith('foo://bar')
  })
})
