const express = require('express');
const router = express.Router()

const goals = require('./goals')

router.use('/goals', goals)

module.exports = router