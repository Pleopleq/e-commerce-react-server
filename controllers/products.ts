import { Router, Request, Response } from 'express'
import PRODUCTS from '../mocks/products'
const productsRouter = Router()

productsRouter.get('/api/products', (req: Request ,res: Response) => {
    return res.status(200).send(PRODUCTS)
})

module.exports = productsRouter