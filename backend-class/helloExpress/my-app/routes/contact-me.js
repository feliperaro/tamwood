const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('contact-me')
})

router.post('/', (req, res) => {
    res.render('thank-you', { 
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
    })
})


module.exports = router
