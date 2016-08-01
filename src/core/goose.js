import mongoose from 'mongoose'

class Goose {
  constructor(url, mong = mongoose) {
    if (!url) {
      this.goose = mong.connect('mongodb://localhost/unl')
    } else {
      this.goose = mong.connect(url)
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
