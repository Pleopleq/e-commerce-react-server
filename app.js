const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const productsRouter = require('./controllers/products')

app.use(cors())
app.use(express.json())
app.use(productsRouter)

module.exports = app