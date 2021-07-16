const productsRouter = require('express').Router()
let PRODUCTS = require('../mocks/products')

productsRouter.get('/api/products', (req,res) => {
    return res.send(PRODUCTS)
})

module.exports = productsRouter