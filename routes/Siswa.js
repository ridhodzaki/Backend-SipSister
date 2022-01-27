const siswaController = require('../controller/Siswa')
const router = require('express').Router()

router.post('/input', (req, res) => {
  console.log(req.body)
  siswaController.input(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getSiswa', (req, res) => {
  siswaController.getSiswa()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getSiswa/:kelas', (req, res) => {
  siswaController.getSiswaByKelas(req.params.kelas)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/updateSiswa/:id', (req, res) => {
  siswaController.updateSiswa(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/deleteSiswa/:id', (req, res) => {
  siswaController.deleteSiswa(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router