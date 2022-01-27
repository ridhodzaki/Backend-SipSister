const { requestResponse } = require('../config/message')
const kelasModel = require('../model/Kelas')

exports.input = (data) =>
  new Promise((resolve, reject) => {
    kelasModel.findOne({
      namaKelas: data.namaKelas
    }).then((kelas) => {
      if (kelas) {
        reject(requestResponse.gagal('Kelas telah terdaftar'))
      } else {
        kelasModel.create(data)
          .then((data) => resolve(requestResponse.sukses('Berhasil Menambah Kelas')))
          .catch((err) => {
            console.log(err)
            reject(requestResponse.serverError)
          })
      }
    })
  })

exports.getKelas = () =>
  new Promise((resolve, reject) => {
    kelasModel.find({})
      .then((data) => resolve(requestResponse.sukseswithdata('Berhasil Mendapatkan Kelas', data)))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.updateKelas = (data, id) =>
  new Promise((resolve, reject) => {
    kelasModel.updateOne({
      _id: id
    }, data)
      .then((data) => resolve(requestResponse.sukses('Berhasil Mengupdate Kelas')))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.deleteKelas = (id) =>
  new Promise((resolve, reject) => {
    kelasModel.deleteOne({
      _id: id
    }).then((data) => resolve(requestResponse.sukses('Berhasil Menghapus Kelas')))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })