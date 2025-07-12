const express = require('express')
const router = express.Router()
const ratingController= require('../controller/ratingController')

router.post('/addrating',(req, res, next) => {
    ratingController.AddRating(req).then((data) => res.send(data))
    .catch((error) => res.json({ message: error.message }));
})
router.get('/getAllRating',(req, res, next) => {
    ratingController.getAllRating(req).then((data) => res.send(data))
    .catch((error) => res.json({ message: error.message }));
})




module.exports = router