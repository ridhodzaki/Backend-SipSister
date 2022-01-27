const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserScema = new Schema({
  NIP: {
    type: Number
  },
  nama: {
    type: String
  },
  kelas: {
    type: String
  },
  password: {
    type: String
  },
  level: {
    type: Number,
    default: 2
  }
})

module.exports = mongoose.model('user', UserScema)