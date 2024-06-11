import express from 'express'
import { ProdutoService } from '../Service/produto.service.js'

const routerProduto = express.Router()

routerProduto
    .get('/', ProdutoService.getALL)
    .get('/:id', ProdutoService.getbyID)
    .post('/', ProdutoService.create)
    .patch('/:id', ProdutoService.update);

export default routerProduto; 