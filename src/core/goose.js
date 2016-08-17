import mongoose from 'mongoose'
import validator from 'validator'

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
      required: true
    },
    lastLogin: {
      type: Date,
    },
    lastUpdate: {
      type: Date,
      default: Date.now
    },
    instrument: {
      type: String,
      validate: {
        validator: (v) => ['violin', 'viola', 'cello', 'bass', 'harp', 'guitar'].indexOf(v) !== -1,
        message: '{VALUE} must be a stringed instrument'
      },
      required: true
    },
    userType: {
      type: String,
      validate: {
        validator: (v) => ['faculty', 'student', 'gta'].indexOf(v) !== -1,
        message: '{VALUE} must be faculty, student or gta'
      },
      required: true
    },
    firstName: String,
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email address'
      }
    }
  })
}

export default Goose
