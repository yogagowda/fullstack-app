const express = require('express')

const router = express.Router();

router.use('/routing', require('./router/ratingRote'))




module.exports = router