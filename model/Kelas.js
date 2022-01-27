const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kelasScema = new Schema({
  namaKelas: {
    type: String
  }
})

module.exports = mongoose.model('kelas', kelasScema)