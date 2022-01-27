const kelasController = require('../controller/Kelas')
const router = require('express').Router()

router.post('/input', (req, res) => {
  console.log(req.body)
  kelasController.input(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getKelas', (req, res) => {
  kelasController.getKelas()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/updateKelas/:id', (req, res) => {
  kelasController.updateKelas(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/deleteKelas/:id', (req, res) => {
  kelasController.deleteKelas(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router