import mongoose from 'mongoose'

class Goose {
  constructor(url) {
    if (!url) {
      this.goose = mongoose.connect('mongodb://localhost/unl')
    } else {
      this.goose = mongoose.connect(url)
    }
  }
  static User = mongoose.Schema({
    userid: {
      type: String,
      required: true,
    },
    lastLogin: Date,
  })
}

export default Goose
