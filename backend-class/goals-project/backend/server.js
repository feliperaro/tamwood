const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 5000;

const { errorHandler } = require('./middleware/error-middleware')

const api = require('./routes')

app.use(express.json())

app.use('/api', api)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})