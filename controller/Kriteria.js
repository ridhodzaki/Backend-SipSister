const { requestResponse } = require('../config/message')
const kriteriaModel = require('../model/Kriteria')

exports.input = (data) =>
  new Promise((resolve, reject) => {
    kriteriaModel.create(data)
      .then((data) => resolve(requestResponse.sukses('Berhasil Menambah Kriteria')))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.getKriteria = () =>
  new Promise((resolve, reject) => {
    kriteriaModel.find({})
      .then((data) => resolve(requestResponse.sukseswithdata('Berhasil Mendapatkan Kriteria', data)))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.updateKriteria = (data, id) =>
  new Promise((resolve, reject) => {
    kriteriaModel.updateOne({
      _id: id
    }, data)
      .then((data) => resolve(requestResponse.sukses('Berhasil Mengupdate Kriteria')))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.deleteKriteria = (id) =>
  new Promise((resolve, reject) => {
    kriteriaModel.deleteOne({
      _id: id
    }).then((data) => resolve(requestResponse.sukses('Berhasil Menghapus Kriteria')))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })