const userModel = require('../model/User')
const bcrypt = require('bcrypt')
const { requestResponse } = require('../config/message')

exports.register = (data) =>
  new Promise((resolve, reject) => {
    userModel.findOne({
      NIP: data.NIP
    }).then((user) => {
      if (user) {
        reject(requestResponse.gagal('NIP Telah Terdaftar'))
      } else {
        bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash
          userModel.create(data)
            .then(() => resolve(requestResponse.sukses('Berhasil Menambah Pengguna')))
            .catch((err) => {
              console.log(err)
              reject(requestResponse.gagal('Gagal Menambah Pengguna'))
            })
        })
      }
    }).catch((err) => {
      console.log(err)
      reject(requestResponse.serverError)
    })
  })

exports.login = (data) =>
  new Promise((resolve, reject) => {
    userModel.findOne({
      NIP: data.NIP
    }).then((user) => {
      if (user) {
        if (bcrypt.compareSync(data.password, user.password)) {
          resolve(requestResponse.sukseswithdata('Berhasil Login', user))
        }
        else {
          reject(requestResponse.gagal('Password Salah'))
        }
      } else {
        reject(requestResponse.gagal('NIP Tidak Terdaftar'))
      }
    }).catch((err) => {
      console.log(err)
      reject(requestResponse.serverError)
    })
  })

exports.getUser = () =>
  new Promise((resolve, reject) => {
    userModel.find({
      level: 2
    }).then((data) => {
      resolve(requestResponse.sukseswithdata('Berhasil Mendapatkan Data Pengguna', data))
    }).catch((err) => {
      console.log(err)
      reject(requestResponse.serverError)
    })
  })

exports.deleteUser = (id) =>
  new Promise((resolve, reject) => {
    userModel.deleteOne({
      _id: id
    }).then(() => {
      resolve(requestResponse.sukses('Berhasil Menghapus User'))
    }).catch((err) => {
      reject(requestResponse.gagal('Gagal Menghapus User'))
    })
  })