const { Router } = require('express')
const Advertisement = require('./model')
const router = new Router()

// POST ads to sell
router.post('/ads', (req, res, next) => {
  Advertisement
    .create(req.body)
    .then(adResponse => res.json(adResponse))
    .catch(next)
})

// Get all ads
router.get('/ads', (req, res, next) => {
  Advertisement
    .findAll()
    .then(adResponse => res.json(adResponse))
    .catch(next)
})

// Get detail of an ad
router.get('/ads/:adId', (req, res, next) => {
  Advertisement
    .findByPk(req.params.adId)
    .then(adResponse => {
      if (!adResponse) {
        res.status(404).end()
      } else {
        res.json(adResponse)
      }
    })
    .catch(next)
})

// PUT to edit ads to a certain user
router.put('/ads/:adId', (req, res, next) => {
  Advertisement
    .findByPk(req.params.adId)
    .then(ad => {
      if (ad) {
        return ad.update(req.body)
          .then(ad => res.json(ad))
      }
      return res.status(404).end()
    })
    .catch(next)
})

// Delete an ad
router.delete('/ad/:adId', (req, res, next) => {
  Advertisement
    .destroy({
      where: {
        id: req.params.adId
      }
    })
    .then(numDeleted => {
      if (numDeleted) {
        return res.status(204).end()
      }
      return res.status(404).end()
    })
    .catch(next)
})

module.exports = router

