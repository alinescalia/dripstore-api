import express from 'express'
import { ProdutoService } from '../Service/produto,service.js'




export const produtoRoute = (app) => {

    const router = express.Router()

    router.get('/', ProdutoService.getALL)

    app.use('/api/produto', router)

}