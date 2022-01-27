const { requestResponse } = require('../config/message')
const siswaModel = require('../model/Siswa')

exports.input = (data) =>
  new Promise((resolve, reject) => {
    siswaModel.create(data)
      .then((data) => resolve(requestResponse.sukses('Berhasil Menambah Siswa')))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.getSiswa = () =>
  new Promise((resolve, reject) => {
    siswaModel.find({})
      .then((data) => resolve(requestResponse.sukseswithdata('Berhasil Mendapatkan Siswa', data)))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.getSiswaByKelas = (kelas) =>
  new Promise((resolve, reject) => {
    siswaModel.find({
      kelas: kelas
    }).then((siswa) => resolve(requestResponse.sukseswithdata('Berhasil Mendapatkan Siswa', siswa)))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.updateSiswa = (data, id) =>
  new Promise((resolve, reject) => {
    siswaModel.updateOne({
      _id: id
    }, data)
      .then((data) => resolve(requestResponse.sukses('Berhasil Mengupdate Siswa')))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })

exports.deleteSiswa = (id) =>
  new Promise((resolve, reject) => {
    siswaModel.deleteOne({
      _id: id
    }).then((data) => resolve(requestResponse.sukses('Berhasil Menghapus Siswa')))
      .catch((err) => {
        console.log(err)
        reject(requestResponse.serverError)
      })
  })