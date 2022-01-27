const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SiswaScema = new Schema({
  namaSiswa: {
    type: String
  },
  kelas: {
    type: String
  },
  nilai: {
    type: Number
  }
})

module.exports = mongoose.model('siswa', SiswaScema)