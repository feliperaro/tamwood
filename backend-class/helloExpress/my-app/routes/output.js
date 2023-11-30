const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body);
    res.render('testget', {a: req.body.a, b: req.body.b})
})

router.get('/', (req, res) => {
    res.send("hi output")
})

module.exports = router
  