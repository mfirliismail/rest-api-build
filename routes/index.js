const express = require('express')
const router = express.Router()
const profile = require('./profile')
const product = require('./product')
const user = require('./user')
const auth = require('./auth')

router.use('/profile', profile)
router.use('/product', product)
router.use('/user', user)
router.use('/auth', auth)

module.exports = router