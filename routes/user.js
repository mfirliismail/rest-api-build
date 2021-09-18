const express = require('express')
const router = express.Router()
const user = require('../controllers/user')


router.post('/', user.post)
router.get('/', user.get)


module.exports = router