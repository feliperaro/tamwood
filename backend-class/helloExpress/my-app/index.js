const express = require('express')
const app = express()
const port = 3000

const outputRouter = require('./routes/output')
const contactMeRouter = require('./routes/contact-me')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World from GET request')
})

app.post('/', (req, res) => {
    res.send('Hello World from POST request')
})

app.put('/', (req, res) => {
    res.send('Hello World from PUT request')
})

app.delete('/', (req, res) => {
    res.send('Hello World from DELETE request')
})

app.get('/testget', (req, res) => {
  const a = req.body.a
  const b = req.body.b
  res.render('testget', {a: a, b: b})
})  

app.get('/calc', (req, res) => {
  res.render('calc')
})  

app.post('/answer', (req, res) => {
  res.render('answer', { 
    answer: (Number(req.body.numberTwo) + Number(req.body.numberOne))
  })
})  

app.use('/output', outputRouter)
app.use('/contact-me', contactMeRouter)

app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
