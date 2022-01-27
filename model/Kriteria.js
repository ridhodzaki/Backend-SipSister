const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KriteriaScema = new Schema({
  namaKriteria: {
    type: String
  },
  bobotKriteria: {
    type: Number
  },
  tipeKriteria: {
    type: String
  }
})

module.exports = mongoose.model('kriteria', KriteriaScema)