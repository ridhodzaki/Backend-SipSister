const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

// Koneksi dengan Database
const mongoose = require('mongoose') // Memanggil mongoose untuk menyambungkan database dengan backend
const mongoUrl = 'mongodb://localhost:27017/SipSister' // Membuat variabel untuk menyimpan url database
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  // Jika Berhasil Konek Database
  console.log('Connect To Database')
}).catch((err) => {
  // Jika Gagal Akan Ditampilkan error dan muncul bacaan Error
  console.log(err)
  console.log('Error To Connect Database')
})

// Cors
// Berfungsi untuk memperbolehkan menjalankan function pada rest api
app.use(cors())
app.use(express.json({
  extended: true,
  limit: '20mb'
}))
app.use(express.urlencoded({
  extended: true,
  limit: '20mb'
}))

// list routes
// jalur yang berada di routes akan di tampung dalam satu jalur utama
app.use('/user', require('./routes/User'))
app.use('/kriteria', require('./routes/Kriteria'))
app.use('/siswa', require('./routes/Siswa'))
app.use('/kelas', require('./routes/Kelas'))

app.listen(PORT, function () {
  console.log('Server Active in Port ' + PORT)
})