const kriteriaControlller = require('../controller/Kriteria')
const router = require('express').Router()

router.post('/input', (req, res) => {
  console.log(req.body)
  kriteriaControlller.input(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getKriteria', (req, res) => {
  kriteriaControlller.getKriteria()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/updateKriteria/:id', (req, res) => {
  kriteriaControlller.updateKriteria(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/deleteKriteria/:id', (req, res) => {
  kriteriaControlller.deleteKriteria(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router