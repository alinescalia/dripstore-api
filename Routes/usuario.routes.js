import express from 'express'
import { UsuarioService } from '../Service/usuario.service.js'

const routerUsuario = express.Router()


routerUsuario
    .get('/', UsuarioService.getALL)
    .get('/:id', UsuarioService.getbyid)
    .post('/', UsuarioService.criaruser)
    .patch('/:id', UsuarioService.updateuser)
    .delete('/:id', UsuarioService.delete)

export default routerUsuario