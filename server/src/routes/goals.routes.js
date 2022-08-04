const { Router } = require('express')
const { get } = require('../controllers/goals.controller')

const router = Router()

router.get('/', get)

module.exports = router